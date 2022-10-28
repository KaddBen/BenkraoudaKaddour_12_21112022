import React from "react";
import ApiCall from '../../ApiCall/ApiCall'
import {
  ResponsiveContainer,
   CartesianGrid,
   BarChart,Tooltip,
   Legend, XAxis,
   YAxis,Bar,
  } from "recharts"
  import data from '../../data/data' 
  const dataValue = []
  const sessions = []
  data.USER_ACTIVITY.forEach((item) => {
    sessions.push(item.sessions);
   })
 
  sessions[0].forEach((obj, val) => {
    let data= {}
  Object.create(data)
  data.index = val + 1
  data.kilogram = obj.kilogram
  data.calories = obj.calories
  dataValue.push(data)
  }
    )
  const renderLegend = () => {
    return (
      <div className="legend_container">
      <span className="title">Activité quotidienne</span>
      <ul style={{display: "flex", gap: "1.5rem"}}>
      <li style={{color: "red"}}><span style={{color: "#74798C"}}>Poids(kg)</span></li>
      <li style={{color: "#282D30"}}><span style={{color: "#74798C"}}>Calories brûlées(kCal)</span></li>     
      </ul>
      </div> 
    );
  }
const ChartBar = () => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].value}Kg</p>
          <p className="label">{payload[1].value}Kcal</p>
        </div>
      );
    }
  }
    return(
<ResponsiveContainer width="100%" height="65%" >
  <BarChart  data={dataValue} className="border_softblue"  margin={{
                    top : 50,
                    right: 10,
                    left: 40,
                    bottom: 5,
                    }} > 
  <CartesianGrid strokeDasharray="3 3" vertical={false} />
  <XAxis dataKey="index"/>
  <YAxis   dataKey="kilogram" yAxisId="kg" orientation="right"  allowDecimals={false}
                        
                        tick={{ fontSize: 14, fill: '#74798c'}}
                        tickCount={3}      type="number" domain={[71, 81]} axisLine={false} tickLine={false} />
  <YAxis dataKey="calories" yAxisId="cal" type="number" domain={[0, 400]}  hide={true} />
  <Tooltip content={<CustomTooltip/>} wrapperStyle={{ outline: "none", top: -60, left: 20 }} />
  <Legend iconType="circle" iconSize={9} wrapperStyle={{top:-20}} content={renderLegend}/>
  <Bar  dataKey="kilogram"  yAxisId="kg" barSize={7} fill="black" radius={[10, 10, 0, 0]} />
  <Bar dataKey="calories" yAxisId="cal" barSize={7} fill="red"  radius={[10, 10, 0, 0]}/>
</BarChart>
</ResponsiveContainer>
    )
}
export default ChartBar;