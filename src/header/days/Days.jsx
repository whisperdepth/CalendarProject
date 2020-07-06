import React from "react";
import "./days.scss";
import GMT from "./GMT/GMT";
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

class Days extends React.Component {
  render() {
    return (
      <div className="days">
        <GMT />
        <ul className="days-list">
          {days.map((day) => (
            <Day key={day.id} {...day} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Days;
