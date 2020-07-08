import React from "react";
import "./day.scss";

const getIdMatch = (id) => {
  const toCompare = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ).getTime();

  return id === toCompare;
};

const Day = ({ name, date, id }) => {
  const nameStyle = `day__name ${getIdMatch(id) ? "today-name" : ""}`;
  const dateStyle = `day__date ${getIdMatch(id) ? "today-date" : ""}`;
  return (
    <li className="day">
      <span className={nameStyle}>{name}</span>
      <span className={dateStyle}>{date}</span>
    </li>
  );
};

export default Day;
