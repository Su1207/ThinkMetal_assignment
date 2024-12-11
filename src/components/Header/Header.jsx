import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo_header">
        <img src="/logo.png" alt="" className="logo" />
        <div className="header_mid">
          <div className="product_but">
            Product <IoIosArrowDown />
          </div>
          <div>Home</div>
          <div>Shop</div>
          <div>Pages</div>
          <div>Integrations</div>
          <div>Developers</div>
        </div>
      </div>
      <div className="login_section">
        <div>Login</div>
        <div className="start_button">Start for free</div>
      </div>
    </div>
  );
};

export default Header;
