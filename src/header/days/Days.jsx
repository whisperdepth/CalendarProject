import React from "react";
import "./days.scss";
import GMT from "./GMT/GMT";
import Day from "./day/Day";
import moment from "moment";

class Days extends React.Component {
  render() {
    const { monday, week } = this.props;

    return (
      <div className="days">
        <GMT monday={monday} />
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
