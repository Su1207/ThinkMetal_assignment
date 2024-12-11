import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./header.css";

const Header = () => {
  const [loginClicked, setLoginClicked] = useState(false);
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
        <div
          onClick={() => setLoginClicked(true)}
          className={`${loginClicked ? "start_button" : "btn"}`}
        >
          Login
        </div>
        <div
          onClick={() => setLoginClicked(false)}
          className={`${!loginClicked ? "start_button" : "btn"}`}
        >
          Start for free
        </div>
      </div>
    </div>
  );
};

export default Header;
