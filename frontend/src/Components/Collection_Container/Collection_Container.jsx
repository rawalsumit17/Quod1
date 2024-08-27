import React from "react";
import "./Collection_Container.css";
import Collection from "../Collection/Collection";
// import data from "../Assets/main-page/data";

const Collection_Container = ({ cards }) => {
  return (
    <div className="collecction-container">
      {cards.map((item, index) => {
        return (
          <Collection
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            button={item.button}
          />
        );
      })}
    </div>
  );
};

export default Collection_Container;
