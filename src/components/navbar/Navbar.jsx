import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* SideBar */}
      <div className="wrapper">
        <span>Sharm Fernando</span>
        <div className="social">
          <a href="#">
            <img src="/instagram.png" alt="Instagram"></img>
          </a>
          <a href="#">
            <img src="/facebook.png" alt="Facebook"></img>
          </a>
          <a href="#">
            <img src="/facebook.png" alt="Facebook"></img>
          </a>
          <a href="#">
            <img src="/facebook.png" alt="Facebook"></img>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
