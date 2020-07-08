import React from "react";
import "./days.scss";
import GMT from "./GMT/GMT";
import Day from "./day/Day";
import moment from "moment";
import GetMonday from "./GetMonday.js";
import GenerateWeek from "./GenerateWeek.js";

const monday = GetMonday(new Date());

class Days extends React.Component {
  state = {
    monday: GetMonday(new Date()),
  };

  nextWeek = () => {};

  render() {
    const { monday } = this.state;
    const week = GenerateWeek(monday);

    return (
      <div className="days">
        <GMT />
        <ul className="days-list">
          {week.map((day) => (
            <Day
              key={day.getTime()}
              name={moment(day).format("ddd")}
              date={moment(day).format("DD")}
              id={day.getTime()}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Days;
