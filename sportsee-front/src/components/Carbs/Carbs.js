import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiCall from "../../ApiCall/ApiCall";

// Display the burned carbs of the user

const Carbs = ({ icon, color, colorIcon, measure, unit, number }) => {
  
  /* Call the getCarbs function in the class dedicated to the api and 
  retrieves the data to be used */

  const api = new ApiCall();

  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    api.getCarbs(userId, number).then((data) => setUserData(data));
  }, []);

  return (
    <div>
      <div className="global_container" style={{ backgroundColor: color }}>
        <div className="unit_container">
          <div
            className="icon_container"
            style={{ backgroundColor: colorIcon }}
          >
            <img src={icon} alt="icon"></img>
          </div>
          <div className="data_container">
            <div className="data">
              {userData}
              {measure}
            </div>
            <div className="unit">{unit}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carbs;
