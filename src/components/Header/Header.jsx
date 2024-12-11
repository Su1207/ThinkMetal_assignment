import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Icons for menu toggle
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for the hamburger menu
  const [loginClicked, setLoginClicked] = useState(false);

  return (
    <div className="header">
      <div className="logo_header">
        <img src="/logo.png" alt="Logo" className="logo" />
        {/* Hamburger Menu Icon (Visible for <850px only) */}
        <div className="hamburger_menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <IoMdClose size={24} className="icon" />
          ) : (
            <IoMdMenu size={24} className="icon" />
          )}
        </div>
      </div>

      {/* Navigation and Login Section */}
      <div className={`menu_content ${menuOpen ? "menu_open" : "menu_closed"}`}>
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
    </div>
  );
};

export default Header;
