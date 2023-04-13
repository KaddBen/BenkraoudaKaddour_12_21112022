import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from "recharts";
import "../../pages/Home/Home.css";
import ApiCall from "../../ApiCall/ApiCall";
const BarRadial = () => {
  /* Call the activityData function in the class dedicated to the api 
   and retrieves the data to be used */

  const api = new ApiCall();
  const [userData, setUserData] = useState("");
  const [legend, setLegend] = useState();
  const { userId } = useParams();

  useEffect(() => {
    api.userScore(userId).then((data) => setUserData(data));
    api.userScore(userId).then((data) => setLegend(data[0].todayScore));
  }, []);

  const RadialInfo = () => {
    return (
      <div className="score">
        Score
        <div className="info_radial">
          <div> {legend}%</div>
          <br></br>
          <span>de votre<br></br>objectif</span>
        </div>
      </div>
    );
  };
  return (
    <RadialBarChart
      width={258}
      height={263}
      innerRadius="70%"
      outerRadius="83%"
      data={userData}
      startAngle={90}
      endAngle={450}
    >
      <Legend wrapperStyle={{ top: 20, left: 35 }} content={RadialInfo} />
      <PolarAngleAxis
        type="number"
        domain={[0, 100]}
        dataKey="todayScore"
        angleAxisId={0}
        tick={false}
      ></PolarAngleAxis>
      <RadialBar dataKey="todayScore" cornerRadius={50} fill="red" />
    </RadialBarChart>
  );
};
export default BarRadial;
