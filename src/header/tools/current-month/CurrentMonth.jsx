import React from "react";
import "./current-month.css";
import moment from "moment";

const showMonths = (monday) => {
  const sunday = new Date(
    monday.getFullYear(),
    monday.getMonth(),
    monday.getDate() + 6
  );

  if (monday.getMonth() === sunday.getMonth())
    return `${moment(monday).format("MMM YYYY")}`;

  if (monday.getFullYear() !== sunday.getFullYear())
    return `${moment(monday).format("MMM YYYY")} - ${moment(sunday).format(
      "MMM YYYY"
    )}`;

  if (monday.getMonth() !== sunday.getMonth())
    return `${moment(monday).format("MMM")} - ${moment(sunday).format(
      "MMM YYYY"
    )}`;
};

const CurrentMonth = ({ monday }) => {
  return <span className="current-month">{showMonths(monday)}</span>;
};

export default CurrentMonth;
