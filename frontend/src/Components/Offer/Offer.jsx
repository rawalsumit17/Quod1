import React from "react";
import "./Offer.css";
import ViewMore from "../Button/ViewMore";

const Offer = () => {
  return (
    <>
      <div className="offer">
        <h1>SALE Up tp 70% off Styles</h1>
      </div>
      <div className="divine">
        <span>DIVINE DECADENCE: </span>
        <h1>HIGH FASHION'S OPULENT ALLURE</h1>
        <ViewMore />
      </div>
    </>
  );
};

export default Offer;
