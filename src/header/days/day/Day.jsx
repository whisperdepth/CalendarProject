import React from "react";
import "./day.scss";

const Day = ({ name, date }) => {
  const nameStyle = `day__name ${name === "MON" ? "today-name" : ""}`;
  const dateStyle = `day__date ${name === "MON" ? "today-date" : ""}`;
  return (
    <li className="day">
      <span className={nameStyle}>{name}</span>
      <span className={dateStyle}>{date}</span>
    </li>
  );
};

export default Day;
