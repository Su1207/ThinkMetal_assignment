import React from "react";
import "./comment.css";

const Comment = () => {
  return (
    <div className="comment_section">
      <div className="comment_container">
        <img src="/company-logo1.png" alt="" />
        <p className="comment_header">
          Cloudhub has emerged as an essential asset for the team at Patreon
          design. Amidst an accelerated expanding organization in which the
          product undergoes rapid changes, Campsite enables us to maintain
          visibility on what's transpiring across various teams — impeccably
          aligning with our pre-existing procedures.
        </p>
        <div className="comment-footer">
          <img src="/Avatar1.png" alt="" />
          <div className="user_section">
            <div className="user_name">Gabriel Valdivia</div>
            <p className="user_profession">
              Principal Product Designer, Patreon
            </p>
          </div>
        </div>
      </div>

      <div className="comment_container">
        <img src="/company-logo2.png" alt="" />
        <p className="comment_header">
          Cloudhub has demonstrated exceptional worth in preserving open
          communication among designers regarding their current endeavors, a
          challenge that previously impeded our progress. It continually stands
          as a distinctive platform guiding our dialogue towards imagination and
          consistent review, an element I highly value. Moreover, it has
          accelerated our propensity for early-stage feedback beyond my
          expectations.
        </p>
        <div className="comment-footer">
          <img src="/Avatar2.png" alt="" />
          <div className="user_section">
            <div className="user_name">Gabriel Valdivia</div>
            <p className="user_profession">
              Principal Product Designer, Patreon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
