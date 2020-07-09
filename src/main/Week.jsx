import React from "react";
import "./week.scss";
import HoursGradation from "./hours-gradation/HoursGradation";
import Day from "./day/Day";

const days = [
  {
    name: "MON",
    date: 29,
    id: 1,
  },
  {
    name: "TUE",
    date: 30,
    id: 2,
  },
  {
    name: "WED",
    date: 1,
    id: 3,
  },
  {
    name: "THU",
    date: 2,
    id: 4,
  },
  {
    name: "FRI",
    date: 3,
    id: 5,
  },
  {
    name: "SAT",
    date: 4,
    id: 6,
  },
  {
    name: "SUN",
    date: 5,
    id: 7,
  },
];



const Week = ({ week }) => {
  return (
    <main className="week">
      <HoursGradation />
      {week.map((day) => (
        <Day key={day.getTime()} id={day.getTime()} />
      ))}
    </main>
  );
};

export default Week;
