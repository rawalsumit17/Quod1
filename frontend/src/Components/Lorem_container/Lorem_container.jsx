import React from "react";
import Lorem from "../Lorem/Lorem";
import data_lorem from "../Assets/main-page/data-lorem";
import "./Lorem_container.css";

const Lorem_container = () => {
  return (
    <>
      <div className="lorem-container">
        <div className="children">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="">VIEW ALL STORIES</a>
        </div>
        <div className="component-Container">
          {data_lorem.map((item, index) => {
           
              return (
                <Lorem
                  key={index}
                  id={item.id}
                  details={item.details}
                  lorem={item.lorem}
                  image={item.image}
                />
              );
          })}
        </div>
      </div>
    </>
  );
};

export default Lorem_container;
