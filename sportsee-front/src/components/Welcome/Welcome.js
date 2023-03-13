import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiCall from "../../ApiCall/ApiCall";

const Welcome = () => {
  const api = new ApiCall();
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  /* Call the getUser function in the class dedicated to the api and 
  retrieves the right user to be displayed */

  useEffect(() => {
    api.getUser(userId).then((data) => setUserData(data));
  }, []);
  return (
    <div className="userName">
      <h2>
        Bonjour <span>{userData}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier <span role="img" aria-label="clap" className="clap">👏</span></p>
    </div>
  );
};

export default Welcome;
