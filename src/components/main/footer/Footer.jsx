import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <img src="/footer_logo.png" alt="" />
        <div className="footer_section">
          <div className="footer_head">Product</div>
          <p className="footer_option">Features</p>
          <p className="footer_option">Pricing</p>
          <p className="footer_option">Changelog</p>
          <p className="footer_option">Support</p>
        </div>

        <div className="footer_section">
          <div className="footer_head">Legal</div>
          <p className="footer_option">Terms of Privacy</p>
          <p className="footer_option">Pricing</p>
          <p className="footer_option">Changelog</p>
          <p className="footer_option">Support</p>
        </div>

        <div className="footer_section">
          <div className="footer_head">Product</div>
          <p className="footer_option">Features</p>
          <p className="footer_option">Pricing</p>
          <p className="footer_option">Changelog</p>
          <p className="footer_option">Support</p>
        </div>

        <div className="footer_section">
          <div className="footer_head">Product</div>
          <p className="footer_option">Features</p>
          <p className="footer_option">Pricing</p>
          <p className="footer_option">Changelog</p>
          <p className="footer_option">Support</p>
        </div>
      </div>

      <div className="footer_option footer_last">
        All rights reserved.&copy; 2024 ThinkMetal
      </div>
    </div>
  );
};

export default Footer;
