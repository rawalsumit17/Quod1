import React from "react";
import "./Hero.css";
import Rectangle7 from "../Assets/main-page/Rectangle-7.png";
import Rectangle5 from "../Assets/main-page/Rectangle-5.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <img className="hero-img" src={Rectangle7} alt="" />
        <div className="span-p">
          <span>ART</span> <p>| LOREM IPSUM DLOR SIT AMET</p>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
          labore temporibus exercitationem quae error nesciunt rerum, earum unde
          tempore id reiciendis repellendus vel iure eius nemo! Eos atque
          assumenda fuga.
        </div>
      </div>
      <div className="hero-right">
        <img className="hero-img" src={Rectangle5} alt="" />
        <div className="span-p">
          <span>ART</span> <p>| LOREM IPSUM DLOR SIT AMET</p>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
          labore temporibus exercitationem quae error nesciunt rerum, earum unde
          tempore id reiciendis repellendus vel iure eius nemo! Eos atque
          assumenda fuga.
        </div>
      </div>
    </div>
  );
};

export default Hero;
