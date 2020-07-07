import React from "react";
import "./hours-gradation.scss";

const HoursGradation = () => {
  const hoursArray = new Array(24).fill(0).map((el, index) => {
    if (index === 0) return "";
    return index.toString().split("").length > 1
      ? `${index}:00`
      : `0${index}:00`;
  });
  
  return (
    <div className="hours-gradation">
      {hoursArray.map((hour) => (
        <div key={hour} className="hour-value">
          {hour}
        </div>
      ))}
    </div>
  );
};
export default HoursGradation;
