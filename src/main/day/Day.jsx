import React from "react";
import "./day.scss";

const Day = () => {
  const idArr = new Array(24).fill(0).map((el, index) => index);

  return (
    <div className="week-day">
      {idArr.map((id) => (
        <div className="hour" key={id}></div>
      ))}
    </div>
  );
};

export default Day;
