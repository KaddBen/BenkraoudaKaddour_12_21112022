import React from "react";
import Header from "../../components/Header/Header";
import ChartBar from "../../components/Bar/ChartBar.js";
import Carbs from "../../components/Carbs/Carbs.js";
import Apple from "../../assets/apple.svg";
import Burger from "../../assets/cheeseburger.svg";
import Chicken from "../../assets/chicken.svg";
import Energy from "../../assets/energy.svg";
import ChartLine from "../../components/ChartLine/ChartLine.js";
import ChartRadar from "../../components/RadarChart/RadarChart.js";
import RadialBar from "../../components/RadialBar/RadialBar.js";
import Welcome from "../../components/Welcome/Welcome.js";

import VerticalLayout from "../../components/VerticalLayout/VerticalLayout.js";
const Main = () => {
  return (
    <div>
      <Header />

      <div className="container">
        <VerticalLayout />

        <div className="test_container">
          <div className="svg_container">
            <Welcome />
            <div className="chartbar_container">
              <ChartBar />
            </div>
            <div className="chart_container">
              <ChartLine />
              <ChartRadar />
              <div
                style={{
                  backgroundColor: "#FBFBFB",
                  borderRadius: "1rem",
                }}
              >
                <RadialBar />
              </div>
            </div>
          </div>
          <div className="test_div">
            <Carbs
              color="#FBFBFB"
              icon={Energy}
              number="1"
              measure="Kcal"
              colorIcon="#FEE2E2"
              unit="Calories"
            />
            <Carbs
              color="#FBFBFB"
              icon={Chicken}
              number="2"
              measure="g"
              colorIcon="#DBEAFE"
              unit="Proteines"
            />
            <Carbs
              color="#FBFBFB"
              icon={Apple}
              number="3"
              measure="g"
              colorIcon="#FEF3C7"
              unit="Glucides"
            />
            <Carbs
              color="#FBFBFB"
              icon={Burger}
              number="4"
              measure="g"
              colorIcon="#FCE7F3"
              unit="Lipides"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
