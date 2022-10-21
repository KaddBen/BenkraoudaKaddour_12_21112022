import React, { StrictMode } from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home.js'
import Performances from './pages/Performances/Performances.js'
import Session from './pages/Session/Session.js'
import Activity from './pages/Activity/Activity.js'
import BarRadial from "./components/RadialBar/RadialBar.js";
import SharedLayout from './pages/SharedLayout/SharedLayout.js'
import Error from './pages/Error/Error.js'
import  './style/App.css';
import data from './data/data' 

import Header from "./components/Header/Header.js";
import ChartBar from "./components/Bar/ChartBar.js";
import ChartLine from "./components/ChartLine/ChartLine.js";
import ChartRadar from "./components/RadarChart/RadarChart.js";
import RadialBar from "./components/RadialBar/RadialBar.js";

import VerticalLayout from "./components/VerticalLayout/VerticalLayout.js";
function App() {



const hello = [
  { uv: 20, fill: 'white', stroke: 'white' },
  { uv: 10, fill: '#83a6ed' },

];


let arrayRadar = []



const renderLeg1 = () => {
  let arrayEl = []
  test.map(el => {
    arrayEl.push((el.todayScore*100).toString())
    })
  return ( 
  <div>
    {arrayEl[0]}%<br></br>
    de votre objectif
  </div>

  );
}
const renderAverage = () => {
  return (
   <div className="title_average">
    </div>
  );
}
 return(

<div >
  <Header/>
  <div  className="container">
  <VerticalLayout />
  <div className="svg_container"> 
<div className="chartbar_conntainer">
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
}

export default App;
