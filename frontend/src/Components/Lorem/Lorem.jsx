import React from "react";
import "./Lorem.css";

const Lorem = ({ image, lorem, details }) => {
  return (
    <div className="lorem">
      <div className="lorem-children">
        <div className="lorem-data">
          <img src={image} alt="" />
          <div className="details-lorem">
            <p className="details">{details}</p>
            <p className="lorem-ipsum">{lorem}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lorem;
