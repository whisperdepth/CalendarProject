import React from "react";
import "./toggle-btn.scss";

const PrevWeekBtn = ({ showPrevWeek }) => {
  return <button onClick={showPrevWeek} className="toggle-btn">←</button>;
};

export default PrevWeekBtn;
