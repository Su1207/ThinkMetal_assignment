import React, { useState } from "react";
import "./main.css";
import Company from "./company/Company";
import SubMain from "./subMain/SubMain";
import Feedback from "./feedback/Feedback";
import Progress from "./progress/Progress";
import Comment from "./comment/Comment";
import Partners from "./partners/Partners";

const Main = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className="main">
      <h1 className="main_header">
        Create, inspect, and apply synthetic surveillance broadly.
      </h1>
      <p className="main_sub_header">
        Start with a stunning homepage. Stay motivated without hurting your
        pocket.
      </p>
      <div className="main_button">Start for free</div>

      <Company />

      <SubMain />

      <Feedback />

      <Progress />

      <Comment />

      <Partners />

      <div className="main_overview">
        <h1 className="overview_head">Keep everyone in the loop</h1>
        <p className="overview_content">
          All good things starts with a homepage. Get
          <br /> inspired without breaking your wallet.
        </p>
        <div className="overview_btn">Start for free</div>
        <img src="/overview_img.png" alt="" />
      </div>

      <div className="pre_footer">
        <img src="/footer_logo.png" alt="" />
        <h2 className="pre_footer_head">
          Increase your team’s visibility and alignment
        </h2>
        <p className="pre_footer_content">
          Start for free, flexible for all teams.
        </p>

        <div className="pre_footer_btns">
          <div
            onClick={() => setButtonClicked(true)}
            className={`${buttonClicked ? "main_button" : "btn"}`}
          >
            Request a demo
          </div>
          <div
            onClick={() => setButtonClicked(false)}
            className={`${!buttonClicked ? "main_button" : "btn"}`}
          >
            Start for free
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
