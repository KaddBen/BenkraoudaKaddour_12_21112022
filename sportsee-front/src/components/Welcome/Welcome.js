import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiCall from "../../ApiCall/ApiCall";
//import mockApiCall from "../../ApiCall/mockApiCall";
  /*  Uncomment the line above this comment and turn into comment the ApiCall
  import to switch into mocked version */


const Welcome = () => {
 const api = new ApiCall();
 // const api = new mockApiCall();
    /*  Uncomment the line above this comment and turn into comment the api
    variable to switch into mocked version */
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  /* Call the getUser function in the class dedicated to the api and 
  retrieves the right user to be displayed */

  useEffect(() => {
    api.getUser(userId).then((data) => setUserData(data));
   // let userData = api.getUser(userId)
   // setUserData(userData)
      /*  Uncomment the two lines above this comment and turn into comment the first line
   of the useEffect() to switch into mocked version */
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
