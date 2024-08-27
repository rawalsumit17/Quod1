import React from "react";
import "./Middle_Part_MainPage.css";
import data3 from "../Assets/main-page/data3";

const Middle_Part_MainPage = () => {
  return (
    <div className="Middle-Part">
      <div className="Middle-Part-left">
        {data3.map((item, index) => {
          if (index < 3) {
            return (
              <div className="middle-left-component" key={index}>
                <img src={item.image} alt="" />
                <div className="middle-left-component-details">
                  <h3>{item.details}</h3>
                  <p className="middle-monthYear">
                    {item.month} {item.year}
                  </p>
                  <p className="middle-details left">{item.lorem}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="Middle-Part-right">
        {data3.map((item, index) => {
          if (index > 2) {
            return (
              <div className="Middle-Part-right-component" key={index}>
                <img src={item.image} alt="" />
                <div className="Middle-Part-component-innerDiv">
                  <h3>{item.details}</h3>
                  <p className="middle-monthYear">
                    {item.month} {item.year}
                  </p>
                  <p className="middle-details right">{item.lorem}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Middle_Part_MainPage;
