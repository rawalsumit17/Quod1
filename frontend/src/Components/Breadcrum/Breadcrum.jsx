import React from "react";
import "./Breadcurm.css";

import arrow from "../Assets/product-page/arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" />{" "}
      {product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
