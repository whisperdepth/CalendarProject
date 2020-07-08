import React from "react";
import "./today-btn.scss";

const TodayBtn = ({ goCurrentWeek }) => {
  return (
    <button onClick={goCurrentWeek} className="today-btn">
      Today
    </button>
  );
};

export default TodayBtn;
