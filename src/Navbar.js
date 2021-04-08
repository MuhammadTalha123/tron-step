import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <header>
        <div className="header_logo">
          <img src={logo} alt="logo_img" width="100" />
        </div>
        <div className="ul_links">

          <a href="">
            <i className="fas fa-user-alt"></i>
            <div className="referals">
              <button className="button">Refferals</button>
            </div>
          </a>

          <a href="">
            <i className="fas fa-question"></i>
            <div className="referals">
              <button>F.Q.A</button>
            </div>
          </a>
        </div>
        <div className="telegram_link">
          <i className="fab fa-telegram-plane"></i>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
