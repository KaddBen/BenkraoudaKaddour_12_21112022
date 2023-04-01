import { 
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} 
from "../data/data" 

class mockApiCall {
  constructor() {
this.checkId = (id, data) => {
const userData = data.find((object) => object.userId === id || object.id === id );
console.log(userData)
if(userData) return userData; 
}
 
}

  
  
    /**
     * Fetch the data of the daily activity of users
     * @param {String} userId
     * @returns {Object[]}
     */
   activityData(userId) {
  
      let fetchData = this.checkId(parseInt(userId), USER_ACTIVITY);
      console.log(fetchData)
      
      return fetchData;
    }
  
    /**
     * Fetch the data concerning sessions times of the user
     * @param {String} userId
     * @returns {Object[]}
     */
    averageSession(userId) {
      let fetchData = this.checkId(parseInt(userId),USER_AVERAGE_SESSIONS).sessions;
      console.log(fetchData)
      return fetchData;
    }
  
    /**
     * Ajouter le parametre id dans la fonction et modifier
     * la page ou le call api est réaliser
     * fetch the score data of the user
     * @returns {Object[]}
     */
  
    userScore(userId) {
      // let { userId } = useParams()
      let url = `http://localhost:3000/user/${userId}`;
      let score = [];
  
      let data = {};
      Object.create(data);
      let fetchedData = this.checkId(parseInt(userId),USER_MAIN_DATA);
      console.log(fetchedData)
      data.todayScore = (fetchedData.todayScore) * 100;
      score.push(data);
      return score;
    }
  
    /**
     * fetch data concerning the performances of the user : performances value (number)
     * and his associated kind value (intensity,cardio,etc...)
     * @param {String} userId
     * @returns {Object[]}
     */
  
    userPerformances(userId) {
      let fetch = this.checkId(parseInt(userId),USER_PERFORMANCE)
      let kindValue = [];
      let kindValueObject = [];
      let performanceValue = [];
      kindValue.push(fetch.kind);
      kindValueObject.push(Object.values(kindValue[0]));
      console.log(kindValueObject)
      console.log("object")
      for (let i = 0; i < fetch.data.length; i++) {
        const val = fetch.data[i];
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
    getUser(userId) {
      let fetch = this.checkId(parseInt(userId),USER_MAIN_DATA)
      if (fetch === "can not get user") {
        document.location.href = "http://localhost:3001/error";
      } else {
        let userName = [];
        let data = {};
        Object.create(data);
        data.firstName = fetch.userInfos.firstName;
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
   getCarbs(userId, number) {
      let fetch = this.checkId(parseInt(userId),USER_MAIN_DATA)
      let Carbs = [];
      let data = {};
      Object.create(data);
  
      // Push the right data (proteins,lipids,etc...) in an array
  
      switch (number) {
        case "1":
          data.carbs = fetch.keyData.calorieCount;
          Carbs.push(data);
          break;
        case "2":
          data.carbs = fetch.keyData.proteinCount;
          Carbs.push(data);
          break;
        case "3":
          data.carbs = fetch.keyData.carbohydrateCount;
          Carbs.push(data);
          break;
        case "4":
          data.carbs = fetch.keyData.lipidCount;
          Carbs.push(data);
          break;
        default:
      }
      return Carbs[0].carbs;
    }
  }
  
  export default mockApiCall;
  