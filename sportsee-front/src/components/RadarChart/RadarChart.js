import React from "react";
import data from '../../data/data' 
import {PolarGrid,PolarAngleAxis,Radar,RadarChart} from "recharts"
import ApiCall from '../../ApiCall/ApiCall'
const kindValue1 = []
let kindValue2 = []
const kindValue = []

 kindValue.push(data.USER_PERFORMANCE[0].kind)

kindValue1.push(Object.values(kindValue[0]))
for (let i = 0; i < data.USER_PERFORMANCE[0].data.length; i ++) {
  const val = data.USER_PERFORMANCE[0].data[i];
  let kind = {}
  Object.create(kind)
  kind.value = val.value;
  kind.kind = kindValue1[0][i];
kindValue2.push(kind)
}
kindValue2.reverse()

const ChartRadar = () => {
    return(
<RadarChart outerRadius={90} width={258} height={263} data={kindValue2} className="border_radar">
  <PolarGrid stroke="white" strokeWidth="0.1rem"/>
  <PolarAngleAxis dataKey= "kind" tickLine={false} fontSize={12} fontWeight={500} stroke="white"/>
  <Radar name="Lily" dataKey="value"  fill="#FF0101B2" fillOpacity={0.6} />
</RadarChart>
    )
}
export default ChartRadar;