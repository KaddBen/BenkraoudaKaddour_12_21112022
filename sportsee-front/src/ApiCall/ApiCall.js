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

this.mockVersion = false

    this.fetchData = (url) => {     
      let fetchRequest = fetch(url)
        .then((resp) => resp.json())
        .then((data) => data);          
        return fetchRequest; 
    }

  
if (this.mockVersion === true ) {
  this.fetchData = (id, data) => {
    const dataUser = data.find(
      (object) => object.userId === id || object.id === id
    );
    return dataUser;
  }

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
   (this.mockVersion === false) ? (fetch = await this.fetchData(url)) : (fetch = this.fetchData(parseInt(userId), USER_ACTIVITY));
   let fetchData; 
  (this.mockVersion === false) ? (fetchData = fetch.data.sessions) : (fetchData = fetch.sessions);
   console.log(fetchData)
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
    (this.mockVersion === false) ? (fetch = await this.fetchData(url)) : (fetch = this.fetchData(parseInt(userId), USER_AVERAGE_SESSIONS));
    let fetchData;
   (this.mockVersion === false) ? (fetchData = fetch.data.sessions) : (fetchData = fetch.sessions); 
    return fetchData;
  }

  /**
   * Ajouter le parametre id dans la fonction et modifier
   * la page ou le call api est réaliser
   * fetch the score data of the user
   * @returns {Object[]}
   */

  async userScore(userId) {
    let url = `http://localhost:3000/user/${userId}`;
    let score = [];
    let data = {};
    Object.create(data);
    let fetchData;
   (this.mockVersion === false) ? fetchData = await fetch(url)
   .then((resp) => resp.json())
   .then((data) => data) : (fetchData = this.fetchData(parseInt(userId), USER_MAIN_DATA));
   (this.mockVersion === false) ? ( data.todayScore = (await fetchData.data.todayScore) * 100) : ( data.todayScore = (await fetchData.todayScore) * 100);
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
    (this.mockVersion === false) ? (fetch = await this.fetchData(url)) : (fetch= this.fetchData(parseInt(userId), USER_PERFORMANCE));
    let kindValue = [];
    let kindValueObject = [];
    let performanceValue = [];
    kindValue.push((fetch.data.kind || fetch.kind));
    kindValueObject.push(Object.values(kindValue[0]));
    console.log(kindValueObject)
    console.log("object")
    let dataLength;
    (this.mockVersion === false) ? (dataLength = fetch.data.data.length) : (dataLength = fetch.data.length);
    for (let i = 0; i < dataLength; i++) {
      let val;
      (this.mockVersion === false) ? (val = fetch.data.data[i]) : (val = fetch.data[i]);
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
    let fetch;
(this.mockVersion === false) ? (fetch = await this.fetchData(url)) : (fetch= this.fetchData(parseInt(userId), USER_MAIN_DATA));
    if (fetch === "can not get user") {
      document.location.href = "http://localhost:3001/error";
    } else {
      let userName = [];
      let data = {};
      Object.create(data);
      (this.mockVersion === false) ? ( data.firstName = await fetch.data.userInfos.firstName ) : ( data.firstName = await fetch.userInfos.firstName );
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
    let fetch;
    (this.mockVersion === false) ? (fetch = await this.fetchData(url)) : (fetch= this.fetchData(parseInt(userId), USER_MAIN_DATA));
    let Carbs = [];
    let data = {};
    Object.create(data);
 
    var fetchCarbData;
    (this.mockVersion === false) ? (fetchCarbData = fetch.data ) : (fetchCarbData = fetch);
    // Push the right data (proteins,lipids,etc...) in an array

    switch (number) {
 
      case "1":
        data.carbs = await fetchCarbData.keyData.calorieCount;
        Carbs.push(data);
        break;
      case "2":
        data.carbs = await fetchCarbData.keyData.proteinCount;
        Carbs.push(data);
        break;
      case "3":
        data.carbs = await fetchCarbData.keyData.carbohydrateCount;
        Carbs.push(data);
        break;
      case "4":
        data.carbs = await fetchCarbData.keyData.lipidCount;
        Carbs.push(data);
        break;
      default:
    }
    return Carbs[0].carbs;
  }
}

export default ApiCall;
