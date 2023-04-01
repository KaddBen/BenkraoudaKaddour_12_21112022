import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from "recharts";
import '../../pages/Home/Home.css'
import ApiCall from "../../ApiCall/ApiCall";
//import mockApiCall from "../../ApiCall/mockApiCall";
/* Uncomment the line above this comment and turn into comment the ApiCall
import to switch into mocked version */
const BarRadial = () => {
  /* Call the activityData function in the class dedicated to the api 
   and retrieves the data to be used */

  const api = new ApiCall();
  //const api = new mockApiCall();
    /*  Uncomment the line above this comment and turn into comment theapi variable
    to switch into mocked version */
  const [userData, setUserData] = useState("");
  const [legend, setLegend] = useState();
  const { userId } = useParams();

  useEffect(() => {
   api.userScore(userId).then((data) => setUserData(data));
   api.userScore(userId).then((data) => setLegend(data[0].todayScore));
   //let datas = api.userScore(userId)
   // setUserData(datas)
   // setLegend(datas[0].todayScore)
   /*  Uncomment the three lines above this comment and turn into comment the first two lines
   of the useEffect() to switch into mocked version */
  }, []);

  const RadialInfo = () => {
    return (
      <div className="score">
        Score
        <div className="info_radial">
         <div> {legend}%</div><br></br>
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
      <RadialBar
        dataKey="todayScore"
        cornerRadius={50}
        fill="red"
      />
    </RadialBarChart>
  );
};
export default BarRadial;
