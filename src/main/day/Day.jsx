import React from "react";
import "./day.scss";
import Event from "./event/Event";

const Day = ({ id, events }) => {
  const idArr = new Array(24).fill(0).map((el, index) => index);

  return (
    <div className="week-day">
      {events.map((event) => {
        return event.dayTime === id ? (
          <Event key={event.id} {...event} />
        ) : null;
      })}
      {idArr.map((id) => (
        <div className="hour" key={id} />
      ))}
    </div>
  );
};

export default Day;
