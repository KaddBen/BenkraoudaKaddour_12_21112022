import React, { useState,useEffect } from "react";
import {LineChart,XAxis,YAxis,Line,Legend,Tooltip} from "recharts"
import data from '../../data/data' 
import ApiCall from '../../ApiCall/ApiCall'
import  '../../style/App.css';
const ChartLine = () => {
 const [mouseCoords, setMouseCoords] = useState({x:0, y : 0 });

 const renderLeg = () => {
  return (
   <div className="title_session">
    Durée moyenne des sessions
    </div>
  );
}
  const TooltipSession = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-session">
          <span>{payload[0].value}min</span>
        </div>
      );
    }
  }

  const api = new ApiCall()

 console.log(apiCall)
 const [userData, setUserData] = useState(null)
 let apiCall = api.averageSession().then(data => setUserData(data))
 
//useEffect(apiCall, [])

 return  (
<LineChart width={258} height={263} data={userData}
   className="border_line" onMouseMove={(e) => {
    if (e.isTooltipActive === true) {
      let div = document.querySelector('.border_line')
      let windowWidth = div.clientWidth
      let mouseXpercentage = Math.round(
        (e.activeCoordinate.x/windowWidth)*100
      )
      setMouseCoords({ x: e.chartX, y:e.chartY });
      div.style.background = `linear-gradient(90deg,rgba(255,0,0,1) ${mouseXpercentage}%,
      rgba(175,0,0,1.5)${mouseXpercentage}%,rgba(175,0,0,1.5) 100%)`
    }
   }} >
<Legend  wrapperStyle={{top: 30, left:35}} content={renderLeg}/>
  <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#FFFF" style={{opacity: 0.5}}/>
  <YAxis axisLine={false} tickLine={false} hide={true}  domain={[0, 120]}/>
  <Line type="monotone" dataKey="sessionLength" stroke="#FFFF" dot={false}  activeDot={{
                            stroke: "rgba(255,255,255, 0.6)",
                            strokeWidth: 10,
                            r: 5,
                            }} />
                            <Tooltip content={<TooltipSession />} wrapperStyle={{ outline: "none"}} position={mouseCoords} />
</LineChart>
      
  
    )
    
                                                 
}
export default ChartLine;




