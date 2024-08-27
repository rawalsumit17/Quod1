import React from "react";
import "./FollowQUOD.css";
import data3Cards from "../Assets/main-page/data3Cards";

const FollowQUOD = () => {
  return (
    <div className="quod">
      <p>Follow QUOD on instagram </p>
      <div className="quod-cards">
        {data3Cards.map((item, index) => {
          return (
            <div className="quod-card" key={index}>
              <img src={item.image} alt="" />
              <div className="quod-description">
                <p>{item.details}</p>
                <p2>
                  {item.month}
                  {item.year}
                  <a href="">Viewpost</a>
                </p2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FollowQUOD;
