import React from "react";
import {RadialBarChart,RadialBar} from "recharts"
import  '../../style/App.css';
import data from '../../data/data' 
const BarRadial = () => {
    const test =  [
      
        {          
            todayScore: 20         
        }
      ]
    return(
<RadialBarChart 
  width={258} 
  height={263} 
  innerRadius="70%" 
  outerRadius="50%" 
  data={test} 
  startAngle={90} 
  endAngle={450}
>

<RadialBar minAngle={15}  background clockWise={true} dataKey='todayScore' cornerRadius={50} fill="red" />

</RadialBarChart> 
    )
}
export default BarRadial;

 