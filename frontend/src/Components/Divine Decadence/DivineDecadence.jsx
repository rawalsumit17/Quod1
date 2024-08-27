import React from "react";
import "./DivineDecadence.css";
import ViewMore from "../Button/ViewMore";

const DivineDecadence = () => {
  return (
    <div className="divine-decadence">
      <h1>DIVINE DECADENCE:</h1>
      <h1 className="high-fashion">high fashion's opulent allure</h1>
      <p>
        Fearless fashion fuses bold creativity with unapologetic
        self-expression.
      </p>
      {/* <div className="custom-view-more">
        View More
      </div> */}
      <ViewMore />
    </div>
  );
};

export default DivineDecadence;
