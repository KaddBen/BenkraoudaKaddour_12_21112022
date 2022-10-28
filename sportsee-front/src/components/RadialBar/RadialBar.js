import React from "react";
import {RadialBarChart,RadialBar,Legend,PolarAngleAxis} from "recharts"
import  '../../style/App.css';
import data from '../../data/data' 
import ApiCall from '../../ApiCall/ApiCall'

const BarRadial = () => {
    const test =  [     
        {          
            todayScore: 20         
        }
      ]
      const RadialTitle = () => {
        return (
         <div className="title_radial">
          Durée moyenne des sessions
          </div>
        );
      }
      const RadialInfo = () => {
        return (
         <div className="score">
        
          Score
    
          <div className="info_radial">
            12% <br></br><span>de votre objectif</span>
          </div>
          </div>
        );
      }
    return(
<RadialBarChart 
  width={258} 
  height={263} 
  innerRadius="70%" 
  outerRadius="85%" 
  data={test} 
  startAngle={90} 
  endAngle={450}
>
<Legend  wrapperStyle={{top: 20, left:35}} content={RadialInfo}/>
<PolarAngleAxis 
type="number"
domain={[0,100]}
dataKey="todayScore"
angleAxisId={0}
tick={false}>

</PolarAngleAxis>
<RadialBar minAngle={15}  background clockWise={true} dataKey='todayScore' cornerRadius={50} fill="red" />
</RadialBarChart> 
    )
}
export default BarRadial;

 