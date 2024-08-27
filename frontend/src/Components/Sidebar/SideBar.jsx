import React, { useState } from "react";
import "./SideBar.css";

const SideBar = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const toggleHome = () => setIsHomeOpen(!isHomeOpen);
  const toggleDashboard = () => setIsDashboardOpen(!isDashboardOpen);
  const toggleOrders = () => setIsOrdersOpen(!isOrdersOpen);
  const toggleAccount = () => setIsAccountOpen(!isAccountOpen);

  return (
    <div>
      <div className="flex-shrink-0 bg-white sideBar-container">
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
        >
          <span className="fs-5 fw-semibold">QUOD</span>
        </a>
        <div className="sidebarmenutTotal-content">
          <div className="sidebar-menu-lists">
            <ul className="list-unstyled ps-0">
              <li className="mb-1">
                <div
                  className="homeButton sidebar-buttons"
                  onClick={toggleHome}
                >
                  CLOTHING
                </div>
                <div className={`collapse ${isHomeOpen ? "show" : ""}`}>
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small oriview-updates-reports">
                    <li>
                      <a
                        href="#"
                        className="links"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Overview
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="links"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Updates
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="links"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Reports
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <div
                  className="dashboardButton sidebar-buttons"
                  onClick={toggleDashboard}
                >
                  JEWELLERY
                </div>
                <div className={`collapse ${isDashboardOpen ? "show" : ""}`}>
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <a
                        href="#"
                        className="link-dark rounded"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Rings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-dark rounded"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Earrings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-dark rounded"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Braclets
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-dark rounded"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Necklace
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <div
                  className="ordersButton sidebar-buttons"
                  onClick={toggleOrders}
                >
                  BLOG
                </div>
              </li>
              <li className="mb-1">
                <div
                  className="ordersButton sidebar-buttons"
                  onClick={toggleOrders}
                >
                  BLOG
                </div>
              </li>
              <li className="mb-1">
                <div
                  className="ordersButton sidebar-buttons"
                  onClick={toggleOrders}
                >
                  ABOUT
                </div>
              </li>
              <li className="mb-1">
                <div
                  className="ordersButton sidebar-buttons"
                  onClick={toggleOrders}
                >
                  SALE
                </div>
              </li>
              <li className="mb-1">
                <div
                  className="ordersButton sidebar-buttons"
                  onClick={toggleOrders}
                >
                  RENT
                </div>
              </li>
              <li className="border-top my-3"></li>
            </ul>
          </div>

          <div className="sidebar-menu-bottom">
            <div className="login-button">LOGIN</div>
            <div className="register-button">REGISTER</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
