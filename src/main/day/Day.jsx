import React from "react";
import "./day.scss";
import Event from "./event/Event";

const events = [
  {
    id: 1,
    name: "Meet friends",
    startTime: "00:45",
    endTime: "01:45",
    dayTime: 1594069200000,
  },
  {
    id: 2,
    name: "Go to sleep",
    startTime: "03:45",
    endTime: "06:00",
    dayTime: 1594069200000,
  },

  {
    id: 3,
    name: "Go to work",
    startTime: "10:45",
    endTime: "14:00",
    dayTime: 1594069200000,
  },
];

const Day = ({ id }) => {
  const idArr = new Array(24).fill(0).map((el, index) => index);

  return (
    <div className="week-day">
      {events.map((event) =>
        event.dayTime === id ? <Event key={event.id} {...event} /> : null
      )}
      {idArr.map((id) => (
        <div className="hour" key={id} />
      ))}
    </div>
  );
};

export default Day;
