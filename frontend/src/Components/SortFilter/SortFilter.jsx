import React from "react";
import dropDown_icon from "../Assets/product-page/dropDown_icon.png";

const SortFilter = ({ sortOption, setSortOption }) => {
  return (
    <div className="shopCategory-sort">
      Sort by
      <select
        onChange={(e) => setSortOption(e.target.value)}
        value={sortOption}
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
      </select>
      <img src={dropDown_icon} alt="Dropdown Icon" />
    </div>
  );
};

export default SortFilter;
