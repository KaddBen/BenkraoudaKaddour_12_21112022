import React from "react";
import "./VerticalLayout.css";
import bike from "../../assets/bike.png";
import swim from "../../assets/swim.png";
import weight from "../../assets/weight.png";
import yoga from "../../assets/yoga.png";

const VerticalLayout = () => {
  return (
    <div className="VerticalLayout">
      <img src={yoga} alt="yoga"></img>
      <img src={swim} alt="swim"></img>
      <img src={bike} alt="bike"></img>
      <img src={weight} alt="weight"></img>

      <div className="copyright">Copyright,Sportsee 2020</div>
    </div>
  );
};
export default VerticalLayout;
