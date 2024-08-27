import React, { useContext, useState, useRef, useEffect } from "react";
import "./NavBar.css";
import QUOD_LOGO from "../Assets/main-page/QUOD LOGO-B.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { IoIosMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import SideBar from "../Sidebar/SideBar";

const NavBar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navmenu">
        <ul className="navmenu-list">
          <li>CLOTHING</li>
          <li>JEWELLERY</li>
          <li>BLOG</li>
          <li>SALE</li>
          <li>RENT</li>
          <li>SPECIAL PROJECTS</li>
        </ul>
      </div>

      <div className="responsive">
        <div className="menu-search">
          <div className="navmenu-button" onClick={toggleMenu}>
            {isMenuOpen ? "✖" : <IoIosMenu />}
          </div>
          <div className="search">
            <IoSearch />
          </div>
        </div>

        {isMenuOpen && (
          <ul className="navmenu-list-responsive">
            <SideBar />
          </ul>
        )}
      </div>

      <img src={QUOD_LOGO} alt="QUOD LOGO" />
      <div className="heart-bag">
        <div className="wishlist">
          {" "}
          <FaRegHeart />
        </div>
        <div className="handbag">
          <Link className="bag" to="/cart">
            <BsHandbag />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>

      <div className="nav-submenu navmenu">
        <ul className="nav-submenu-list">
          <li>SEARCH</li>
          <li>ABOUT</li>
          <li className="dropdown" ref={dropdownRef}>
            <div className="dropdown-btn" onClick={toggleDropdown}>
              ACCOUNT
            </div>
            {isOpen && (
              <ul className="dropdown-content">
                <li>
                  <Link className="login-register mylogin" to="/">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="login-register" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>SALE</li>
          <li>WISHLIST</li>
          <li>
            <Link className="bag" to="/cart">
              BAG
            </Link>
          </li>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
