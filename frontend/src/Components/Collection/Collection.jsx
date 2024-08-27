import React from "react";
import "./Collection.css";

const Collection = ({ name, image, button }) => {
  return (
    <div className="collection">
      <img src={image} alt="" />
      <div className="collection-description">
        <span>FEATURED</span>
        <p>{name}</p>
      </div>
      <div className="see-Collection">{button}</div>
    </div>
  );
};

export default Collection;
