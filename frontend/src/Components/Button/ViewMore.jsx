import React from "react";
import "./ViewMore.css";
import { Link } from "react-router-dom";

const ViewMore = () => {
  return (
    <>
      <Link to="/womens">
        <button>VIEW MORE</button>
      </Link>
    </>
  );
};

export default ViewMore;
