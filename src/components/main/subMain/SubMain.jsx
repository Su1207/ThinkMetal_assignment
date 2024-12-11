import React from "react";
import "./subMain.css";

const SubMain = () => {
  return (
    <div className="sub_main">
      <div className="sub_main_section">
        <div
          className="sub_content"
          data-aos="zoom-in-right"
          data-aos-duration="6000"
        >
          <div className="share_btn">Share</div>
          <h2 className="sub_main_header">Share anything you’re working on.</h2>
          <p className="sub_main_content">
            Campsite has been instrumental in keeping designers aware of each
            others' work-in-progress in a way that was previously slowing us
            down. It's also one of the only channels where.
          </p>
          <div className="content_feature">
            <div className="feature_list">
              <img src="/tick.png" alt="" />
              <p className="feature_name">Coded</p>
            </div>
            <div className="feature_list">
              <img src="/tick.png" alt="" />
              <p className="feature_name">100% Secure</p>
            </div>
          </div>
          <div className="play_list">
            <img src="/play.png" alt="" />
            <p className="play_content">See how it works</p>
          </div>
        </div>
        <div
          className="img_container"
          data-aos="zoom-in-left"
          data-aos-duration="6000"
        >
          <img src="/code.png" alt="" className="code_img" />
        </div>
      </div>

      <div className="sub_main_section sub_main_2">
        <div
          className="img_container"
          data-aos="zoom-in-right"
          data-aos-duration="6000"
        >
          <img src="/feedback.png" alt="" className="feedback_img" />
        </div>
        <div
          className="sub_content"
          data-aos="zoom-in-left"
          data-aos-duration="6000"
        >
          <div className="share_btn">Feedback</div>
          <h2 className="sub_main_header">
            Better feedback at the right time.
          </h2>
          <p className="sub_main_content">
            Campsite has been instrumental in keeping designers aware of each
            others' work-in-progress in a way that was previously slowing us
            down. It's also one of the only channels where.
          </p>

          <div className="play_list">
            <img src="/play.png" alt="" />
            <p className="play_content">See how it works</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMain;
