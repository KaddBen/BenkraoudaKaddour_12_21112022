import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiCall from "../../ApiCall/ApiCall";
import {
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

const renderLegend = () => {
  return (
    <div className="legend_container">
      <span className="title">Activité quotidienne</span>
      <ul style={{ display: "flex", gap: "1.5rem" }}>
        <li style={{ color: "red" }}>
          <span style={{ color: "#74798C" }}>Poids(kg)</span>
        </li>
        <li style={{ color: "#282D30" }}>
          <span style={{ color: "#74798C" }}>Calories brûlées(kCal)</span>
        </li>
      </ul>
    </div>
  );
};

// Display the chart bar

const ChartBar = () => {

  //Tooltip used to display the infos concerning calories and weight on mouse hover

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].value}Kg</p>
          <p className="label">{payload[1].value}Kcal</p>
        </div>
      );
    }
  };

  /* Call the activityData function in the class dedicated to the api 
   and retrieves the data to be used */

  const api = new ApiCall();
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    api.activityData(userId).then((data) => setUserData(data));
  }, []);

  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart
        data={userData}
        className="border_softblue"
        margin={{
          top: 150,
          right: 10,
          left: 40,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="index" />

   

        <YAxis
          /* For the domain attribute,I just substracted or added to the max or min value to have a 
    better grasp of the displayed data */
          dataKey="kilogram"
          yAxisId="kg"
          orientation="right"
          allowDecimals={false}
          tick={{ fontSize: 14, fill: "#74798c" }}
          tickCount={3}
          type="number"
          domain={["dataMin - 5", "dataMax + 2"]}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey="calories"
          yAxisId="cal"
          type="number"
          domain={[0, 400]} //a check
          hide={true}
        />
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{ outline: "none", top: -60, left: 20 }}
        />
        <Legend
          iconType="circle"
          iconSize={9}
          wrapperStyle={{ top: -20 }}
          content={renderLegend}
        />
        <Bar
          dataKey="kilogram"
          yAxisId="kg"
          barSize={7}
          fill="black"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          yAxisId="cal"
          barSize={7}
          fill="red"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default ChartBar;
