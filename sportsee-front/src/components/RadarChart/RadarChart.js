import React, { useState, useEffect } from "react";
import { PolarGrid, PolarAngleAxis, Radar, RadarChart } from "recharts";
import ApiCall from "../../ApiCall/ApiCall";
import { useParams } from "react-router-dom";

// Display the radar chart

const ChartRadar = () => {
  const api = new ApiCall();
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    api.userPerformances(userId).then((data) => setUserData(data));
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
