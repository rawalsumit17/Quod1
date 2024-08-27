import React from "react";
import "./HeroLower.css";
import Rectangle8 from "../Assets/main-page/Rectangle-8.png";
import ViewMore from "../Button/ViewMore";

const HeroLower = () => {
  return (
    <div className="heroLower">
      <img src={Rectangle8} alt="" />
      <div className="ptags-perent">
        <div className="position-pTags">
          <p>LIMITED TIME OFFER: </p>
          <p>RENT THE RUNWAY: </p>
          <p>EFFORTLESS STYLE FOR ALL OCCAION</p>
        </div>
        {/* <ViewMore /> */}
        <div className="viewButton">
            View More
        </div>
      </div>
    </div>
  );
};

export default HeroLower;
