import React, { useState, useEffect } from "react";
import { PolarGrid, PolarAngleAxis, Radar, RadarChart } from "recharts";
import ApiCall from "../../ApiCall/ApiCall";
//import mockApiCall from "../../ApiCall/mockApiCall";
/*  Uncomment the line above this comment and turn into comment the ApiCall
import to switch into mocked version */
import { useParams } from "react-router-dom";

// Display the radar chart

const ChartRadar = () => {
  const api = new ApiCall();
//const api = new mockApiCall();
/*  Uncomment the line above this comment and turn into comment the api
variable to switch into mocked version */
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    api.userPerformances(userId).then((data) => setUserData(data));
   // let userData= api.userPerformances(userId)
   // setUserData(userData)
   /*  Uncomment the two lines above this comment and turn into comment the first line
   of the useEffect() to switch into mocked version */
  }, []);

  return (
    <RadarChart
      outerRadius={90}
      width={258}
      height={263}
      data={userData}
      className="border_radar"
    >
      <PolarGrid stroke="white" strokeWidth="0.1rem" />
      <PolarAngleAxis
        dataKey="kind"
        tickLine={false}
        fontSize={12}
        fontWeight={500}
        stroke="white"
      />
      <Radar name="Lily" dataKey="value" fill="#FF0101B2" fillOpacity={0.6} />
    </RadarChart>
  );
};
export default ChartRadar;
