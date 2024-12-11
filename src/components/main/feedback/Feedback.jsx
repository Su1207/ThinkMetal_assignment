import React from "react";
import "./feedback.css";
import FeedbackCard from "./feedbackcard/FeedbackCard";
import FeedbackComment from "./feedbackComment/FeedbackComment";

const Feedback = () => {
  return (
    <div className="feedback_container">
      <p className="feed_head">Best time here</p>
      <h2 className="feed_header">Better feedback at the right time.</h2>

      <FeedbackCard />

      <div className="feed_footer">
        <FeedbackComment
          logo={"/feed1.png"}
          title={"Mentions"}
          content={"Mention anyone on your team to include them in a post."}
        />
        <FeedbackComment
          logo={"/feed1.png"}
          title={"Mentions"}
          content={"Mention anyone on your team to include them in a post."}
        />
        <FeedbackComment
          logo={"/feed1.png"}
          title={"Mentions"}
          content={"Mention anyone on your team to include them in a post."}
        />
      </div>
    </div>
  );
};

export default Feedback;
