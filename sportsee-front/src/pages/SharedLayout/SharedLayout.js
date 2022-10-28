import React from "react";
import Header from "../../components/Header/Header"
import ChartBar from "../../components/Bar/ChartBar.js";
import ChartLine from "../../components/ChartLine/ChartLine.js";
import ChartRadar from "../../components/RadarChart/RadarChart.js";
import RadialBar from "../../components/RadialBar/RadialBar.js";

import VerticalLayout from "../../components/VerticalLayout/VerticalLayout.js";
const SharedLayout = () => {
    return (
<div>
<Header/>
<div  className="container">
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
    )
}

export default SharedLayout;