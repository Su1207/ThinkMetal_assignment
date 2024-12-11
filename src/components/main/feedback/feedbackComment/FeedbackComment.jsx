import React from "react";
import "./feedbackComment.css";

const FeedbackComment = ({ logo, title, content }) => {
  return (
    <div className="feedback_comment">
      <img src={logo} alt="" className="feed_logo" />
      <h3 className="feed_title">{title}</h3>
      <p className="feed_content">{content}</p>
    </div>
  );
};

export default FeedbackComment;
