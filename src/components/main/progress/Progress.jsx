import React from "react";
import "./progress.css";

const Progress = () => {
  return (
    <div className="progress">
      <h1 className="progress_header">Your Archive of progress</h1>
      <div className="progress_section">
        <div
          className="progress_container"
          data-aos="zoom-in-right"
          data-aos-duration="6000"
        >
          <h4 className="progress_container_header">Projects</h4>
          <p className="progress_container_content">
            Organize, follow and archive
          </p>
          <img src="/graph1.png" alt="" className="graph_img" />
        </div>
        <div
          className="progress_container"
          data-aos="zoom-in-left"
          data-aos-duration="6000"
        >
          <h4 className="progress_container_header">Member profiles</h4>
          <p className="progress_container_content">
            Automatic portfolios of your work
          </p>
          <img src="/graph2.png" alt="" className="graph_img" />
        </div>
      </div>
    </div>
  );
};

export default Progress;
