import React from "react";
import "../prev-week-btn/toggle-btn.scss";

const NextWeekBtn = ({ showNextWeek }) => {
  return (
    <button onClick={showNextWeek} className="toggle-btn">
      →
    </button>
  );
};

export default NextWeekBtn;
