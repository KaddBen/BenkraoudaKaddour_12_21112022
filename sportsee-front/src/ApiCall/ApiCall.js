import React from "react";
import Header from "../components/Header/Header";
import ChartBar from "../components/Bar/ChartBar.js";
import ChartLine from "../components/ChartLine/ChartLine.js";
import ChartRadar from "../components/RadarChart/RadarChart.js";
import RadialBar from "../components/RadialBar/RadialBar.js";
import { Link, useParams, useRouteLoaderData } from "react-router-dom";

import VerticalLayout from "../components/VerticalLayout/VerticalLayout.js";

class ApiCall {
  constructor() {
    this.fetchData = (url) => {

   let fetchRequest = fetch(url)
    .then((resp) => resp.json())
    .then((data)=> data)
    return fetchRequest
    };

    
  }
  activityData() {
    let url = `http://localhost:3000/user/${this.userId}/activity`;
    let fetch = this.fetchData(url);
    let activityValue = [];
    let data = {};
    fetch.forEach((obj, val) => {
      Object.create(data);
      data.index = val + 1;
      data.kilogram = obj.kilogram;
      data.calories = obj.calories;
      activityValue.push(data);
    });
  }

  async averageSession() {
    let { userId } = useParams()
    let url = `http://localhost:3000/user/${userId}/average-sessions`;
   let fetch = await this.fetchData(url);
    let fetchData = fetch.data.sessions
    console.log(fetchData)
    return fetchData
    
  }
   userScore() {
    let { userId } = useParams()
    let url = `http://localhost:3000/user/${userId}`;
    let fetch = this.fetchData(url);
    let score = [];
    let data = {};
    Object.create(data);
    data.todayScore = fetch.todayScore * 100;
    score.push(data);
  }

  userPerformances() {
    let url = `http://localhost:3000/user/${this.userId}/performance`;
    let fetch = this.fetchData(url);
    let kindValue = [];
    let kindValueObject = [];
    let performanceValue = [];

    kindValue.push(fetch.kind);
    kindValueObject.push(Object.values(kindValue[0]));
    for (let i = 0; i < fetch.data.length; i++) {
      const val = fetch.data[i];
      let kind = {};
      Object.create(kind);
      kind.value = val.value;
      kind.kind = kindValueObject[0][i];
      performanceValue.push(kind);
    }
    performanceValue.reverse();
  }
}

export default ApiCall;
