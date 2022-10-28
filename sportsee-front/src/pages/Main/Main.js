import React from "react";
import Header from "../../components/Header/Header";
import ChartBar from "../../components/Bar/ChartBar.js";
import ChartLine from "../../components/ChartLine/ChartLine.js";
import ChartRadar from "../../components/RadarChart/RadarChart.js";
import RadialBar from "../../components/RadialBar/RadialBar.js";
import ApiCall from "../../ApiCall/ApiCall.js";
import { Link, useParams } from "react-router-dom";

import VerticalLayout from "../../components/VerticalLayout/VerticalLayout.js";
const Main = () => {
  const userId = useParams();
  fetch("http://localhost:3000/user/12")
    .then((resp) => resp.json())
    .then((data) => console.log(data.data));
  return (
    <div>
      <Header />

      <div className="container">
        <VerticalLayout />
        <div className="svg_container">
          <div className="chartbar_container">
            <ChartBar />
          </div>
          <div className="chart_container">
            <ChartLine />
            <ChartRadar />
            <RadialBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
