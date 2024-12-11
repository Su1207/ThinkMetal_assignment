import React from "react";
import "./main.css";
import Company from "./company/Company";
import SubMain from "./subMain/SubMain";
import Feedback from "./feedback/Feedback";
import Progress from "./progress/Progress";
import Comment from "./comment/Comment";
import Partners from "./partners/Partners";

const Main = () => {
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
    </div>
  );
};

export default Main;
