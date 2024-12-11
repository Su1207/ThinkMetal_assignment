import React from "react";
import "./feedbackcard.css";
import { IoIosArrowForward } from "react-icons/io";

const FeedbackCard = () => {
  return (
    <div className="card_container">
      <div className="card">
        <div className="card-header">
          <div className="brand-logo">
            <div className="feedback_logo">
              <img src="/feedback_logo.png" alt="" />
            </div>
            <div className="brand-info">
              <h3>Cloudhub</h3>
              <p>2m ago in Brand</p>
            </div>
          </div>

          <button className="view-post-button">View post</button>
        </div>

        <div className="line"></div>

        <div className="card-footer">
          <div className="card-footer-left">
            <div className="avatars">
              <img src="/users.png" alt="" />
            </div>
            <p>3 people are looking for feedback this week</p>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
