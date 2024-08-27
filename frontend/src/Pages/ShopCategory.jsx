import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropDown_icon from "../Components/Assets/product-page/dropDown_icon.png";
import Item from "../Components/Item/Item";
import NavBar from "../Components/NavBar/NavBar";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Sort products based on the selected option
  const sortProducts = (products) => {
    switch (sortOption) {
      case "price-asc":
        return products.sort((a, b) => a.new_price - b.new_price);
      case "price-desc":
        return products.sort((a, b) => b.new_price - a.new_price);
      case "name-asc":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return products.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products;
    }
  };

  // Filter products by category
  const filterProducts = (products) => {
    return products.filter((item) => item.category === props.category);
  };

  // Apply filtering and sorting
  const applyFiltersAndSort = () => {
    const filtered = filterProducts(all_product);
    const sorted = sortProducts(filtered);
    setFilteredProducts(sorted);
  };

  // Trigger filtering and sorting when sortOption or all_product changes
  React.useEffect(() => {
    applyFiltersAndSort();
  }, [sortOption, all_product, props.category]);

  return (
    <>
      <NavBar />
      <div className="shop-category">
        <img className="shopCategory-banner" src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>showing 1-{filteredProducts.length}</span> out of{" "}
            {all_product.length} products
          </p>
          <div>
            <select
              className="shopCategory-sort"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sort & Filter</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A-Z</option>
              <option value="name-desc">Name: Z-A</option>
            </select>
          </div>
        </div>
        <div className="shopcategory-products">
          {filteredProducts.map((item, index) => (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
