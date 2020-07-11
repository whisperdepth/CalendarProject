import React from "react";
import "./day.scss";
import Event from "./event/Event";
import Arrow from "./arrow/Arrow";

class Day extends React.Component {
  render() {
    const { id, events, handleEventDelete } = this.props;
    const idArr = new Array(24).fill(0).map((el, index) => index);

    return (
      <div className="week-day">
        {new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        ).getTime() === id ? (
          <Arrow />
        ) : null}

        {events.map((event) => {
          return event.dayTime === id ? (
            <Event
              handleEventDelete={handleEventDelete}
              key={event.id}
              {...event}
            />
          ) : null;
        })}

        {idArr.map((id) => (
          <div className="hour" key={id} />
        ))}
      </div>
    );
  }
}

export default Day;
