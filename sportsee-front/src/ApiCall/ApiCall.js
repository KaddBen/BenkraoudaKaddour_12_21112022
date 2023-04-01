class ApiCall {
  constructor() {
    /**
     * function to fecth data according to an input url
     * @param {String} url
     * @returns {Object}
     */

    this.fetchData = (url) => {
      let fetchRequest = fetch(url)
        .then((resp) => resp.json())
        .then((data) => data);
      return fetchRequest;
    };
  }

  /**
   * Fetch the data of the daily activity of users
   * @param {String} userId
   * @returns {Object[]}
   */
  async activityData(userId) {
    let url = `http://localhost:3000/user/${userId}/activity`;
    let fetch = await this.fetchData(url);
    let fetchData = fetch.data.sessions;

    let activityValue = [];
    let data = {};
    fetchData.forEach((obj, val) => {
      Object.create(data);
      data.index = val + 1;
      data.kilogram = obj.kilogram;
      data.calories = obj.calories;
      activityValue.push(data);
    });
    return fetchData;
  }

  /**
   * Fetch the data concerning sessions times of the user
   * @param {String} userId
   * @returns {Object[]}
   */
  async averageSession(userId) {
    let url = `http://localhost:3000/user/${userId}/average-sessions`;
    let fetch = await this.fetchData(url);
    let fetchData = fetch.data.sessions;
    return fetchData;
  }

  /**
   * Ajouter le parametre id dans la fonction et modifier
   * la page ou le call api est réaliser
   * fetch the score data of the user
   * @returns {Object[]}
   */

  async userScore(userId) {
    // let { userId } = useParams()
    let url = `http://localhost:3000/user/${userId}`;
    let score = [];

    let data = {};
    Object.create(data);
    let fetchedData = await fetch(url)
      .then((resp) => resp.json())
      .then((data) => data);
    data.todayScore = (await fetchedData.data.todayScore) * 100;
    score.push(data);
    return score;
  }

  /**
   * fetch data concerning the performances of the user : performances value (number)
   * and his associated kind value (intensity,cardio,etc...)
   * @param {String} userId
   * @returns {Object[]}
   */

  async userPerformances(userId) {
    let url = `http://localhost:3000/user/${userId}/performance`;
    let fetch = await this.fetchData(url);
    let kindValue = [];
    let kindValueObject = [];
    let performanceValue = [];
    kindValue.push(fetch.data.kind);
    kindValueObject.push(Object.values(kindValue[0]));
    console.log(kindValueObject)
    console.log("object")
    for (let i = 0; i < fetch.data.data.length; i++) {
      const val = fetch.data.data[i];
      let kind = {};
      Object.create(kind);
      kind.value = val.value;
      kind.kind = kindValueObject[0][i];
      performanceValue.push(kind);
    }
    performanceValue.reverse();

    return performanceValue;
  }

  /**
   * fetch data concerning username
   * @param {String} userId
   * @returns {Object[]}
   */
  async getUser(userId) {
    let url = `http://localhost:3000/user/${userId}`;
    let fetch = await this.fetchData(url);
    if (fetch === "can not get user") {
      document.location.href = "http://localhost:3001/error";
    } else {
      let userName = [];
      let data = {};
      Object.create(data);
      data.firstName = await fetch.data.userInfos.firstName;
      userName.push(data);
      return userName[0].firstName;
    }
  }

  /**
   *
   * @param {String} userId
   * @param {String} number number from 1 to 4 used arbitrarily to display the right data
   * @returns {Object[]}
   */
  async getCarbs(userId, number) {
    let url = `http://localhost:3000/user/${userId}`;
    let fetch = await this.fetchData(url);
    let Carbs = [];
    let data = {};
    Object.create(data);

    // Push the right data (proteins,lipids,etc...) in an array

    switch (number) {
      case "1":
        data.carbs = await fetch.data.keyData.calorieCount;
        Carbs.push(data);
        break;
      case "2":
        data.carbs = await fetch.data.keyData.proteinCount;
        Carbs.push(data);
        break;
      case "3":
        data.carbs = await fetch.data.keyData.carbohydrateCount;
        Carbs.push(data);
        break;
      case "4":
        data.carbs = await fetch.data.keyData.lipidCount;
        Carbs.push(data);
        break;
      default:
    }
    return Carbs[0].carbs;
  }
}

export default ApiCall;
