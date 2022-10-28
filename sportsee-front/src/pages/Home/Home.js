import React from "react";
import Header from "../../components/Header/Header"
import {Link, useParams} from 'react-router-dom';
import ChartBar from "../../components/Bar/ChartBar.js";
import ChartLine from "../../components/ChartLine/ChartLine.js";
import ChartRadar from "../../components/RadarChart/RadarChart.js";
import RadialBar from "../../components/RadialBar/RadialBar.js";

import VerticalLayout from "../../components/VerticalLayout/VerticalLayout.js";
const Home = () => {
  
    return ( 
      <div>
        <Header/>
        <div  className="container">
  <VerticalLayout />
  <div style={{width: "100%",textAlign: 
  "center",fontSize: "40px",
  fontWeight:"600", }}>
  <h1 style={{marginTop:"6rem"}}>
   Demo <span style={{color: "red",}}>Test</span>
  </h1>
  <div style={{display:"flex",gap:"1rem",justifyContent:"center"}}>
    <Link to="/main/12" style={{textDecoration:"underline",color:"black" }}>Karl</Link>
    <Link to="/main/18" style={{textDecoration:"underline",color:"red"}}>Cécilia</Link>
  </div>
  </div>

  </div>
  </div>  
    )
}

export default Home;