import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/data";

class ApiCall {
  constructor() {
    /**
     * function to fetch data according to an input url
     * @param {String} url
     * @returns {Object}
     */

    //Switch the variable below to true in order to use local data instead of fetching api's data

    this.mockVersion = false;

    this.fetchData = (url) => {
      let fetchRequest = fetch(url).then((resp) => resp.json()).then((data) => data);
      return fetchRequest;
    };

    if (this.mockVersion === true) {
      this.fetchData = (id, data) => {
        const dataUser = data.find((object) => object.userId === id || object.id === id );
        return dataUser;
      };
    }
  }

  /**
   * Fetch data of the daily activity of users
   * @param {String} userId
   * @returns {Object[]}
   */
  async activityData(userId) {
    let url = `http://localhost:3000/user/${userId}/activity`;
    let fetch;
    let fetchData;
    (this.mockVersion === false) ? (fetch = await this.fetchData(url)) : (fetch = this.fetchData(parseInt(userId), USER_ACTIVITY));
    (this.mockVersion === false) ? (fetchData = fetch.data.sessions) : (fetchData = fetch.sessions);
    return fetchData;
  }

  /**
   * Fetch data concerning sessions times of the user
   * @param {String} userId
   * @returns {Object[]}
   */
  async averageSession(userId) {
    let url = `http://localhost:3000/user/${userId}/average-sessions`;
    let fetch;
    let fetchData;
    (this.mockVersion === false) ? (fetch = await this.fetchData(url)) : (fetch = this.fetchData(parseInt(userId), USER_AVERAGE_SESSIONS));
    (this.mockVersion === false) ? (fetchData = fetch.data.sessions) : (fetchData = fetch.sessions);
    return fetchData;
  }

  /**
   * @returns {Object[]}
   */

  async userScore(userId) {
    let url = `http://localhost:3000/user/${userId}`;
    let score = [];
    let data = {};
    let fetchData;
    Object.create(data);
    this.mockVersion === false 
      ? (fetchData = await fetch(url).then((resp) => resp.json()).then((data) => data))
      : (fetchData = this.fetchData(parseInt(userId), USER_MAIN_DATA));
    this.mockVersion === false
      ? (data.todayScore = (await fetchData.data.todayScore) * 100) 
      : (data.todayScore = (await fetchData.todayScore) * 100);
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
    let fetch;
    let performanceValue = [];
    let fetchDataLength;
    (this.mockVersion === false) ? (fetch = await this.fetchData(url)) : (fetch = this.fetchData(parseInt(userId), USER_PERFORMANCE));
    (this.mockVersion === false) ? (fetchDataLength = fetch.data.data.length) : (fetchDataLength = fetch.data.length);
    for (let i = 0; i < fetchDataLength; i++) {
      let kind = {};
      Object.create(kind);
    (this.mockVersion === false) ? (kind.value = fetch.data.data[i].value): (kind.value = fetch.data[i].value);
      kind.kind = (fetch.data.kind || fetch.kind)[i + 1];
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
    let fetch;
    let userName;
    (this.mockVersion) === false ? (fetch = await this.fetchData(url)) : (fetch = this.fetchData(parseInt(userId), USER_MAIN_DATA));
    if (fetch === "can not get user") document.location.href = "http://localhost:3001/error";
    (this.mockVersion) === false ? (userName = await fetch.data.userInfos.firstName) : (userName = await fetch.userInfos.firstName);
    return userName;
  }

  /**
   *
   * @param {String} userId
   * @param {String} number number from 0 to 3 used arbitrarily to display the right data
   * @returns {Object[]}
   */
  async getCarbs(userId, number) {
    let url = `http://localhost:3000/user/${userId}`;
    let fetch;
    let Carbs;
    var fetchCarbData;
    (this.mockVersion === false) ? (fetch = await this.fetchData(url)) : (fetch = this.fetchData(parseInt(userId), USER_MAIN_DATA));
    (this.mockVersion === false) ? (fetchCarbData = fetch.data.keyData) : (fetchCarbData = fetch.keyData);
 
    // Fetch the right data (proteins,lipids,etc...) according to a input number

    switch (number) {
      case "1":
        Carbs = await fetchCarbData.calorieCount;
        break;
      case "2":
        Carbs = await fetchCarbData.proteinCount;
        break;
      case "3":
        Carbs = await fetchCarbData.carbohydrateCount;
        break;
      case "4":
        Carbs = await fetchCarbData.lipidCount;
        break;
      default:
    } 
    return Carbs;
  }
}

export default ApiCall;
