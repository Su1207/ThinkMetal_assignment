import React from "react";
import "./partner.css";

const Partners = () => {
  return (
    <div className="partner_section">
      <h1 className="partner_header">Loved By Designers At</h1>
      <div
        className="partner_container"
        data-aos="zoom-out"
        data-aos-duration="6000"
      >
        <div className="partner">
          <img src="/partner1.png" alt="" />
        </div>
        <div className="partner">
          <img src="/partner2.png" alt="" />
        </div>
        <div className="partner">
          <img src="/partner3.png" alt="" />
        </div>
        <div className="partner">
          <img src="/partner4.png" alt="" />
        </div>

        <div className="partner">
          <img src="/partner5.png" alt="" />
        </div>
        <div className="partner">
          <img src="/partner6.png" alt="" />
        </div>
        <div className="partner">
          <img src="/partner7.png" alt="" />
        </div>
        <div className="partner">
          <img src="/partner8.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
