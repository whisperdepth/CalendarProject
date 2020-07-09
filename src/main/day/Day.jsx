import React from "react";
import "./day.scss";
import Event from "./event/Event";

const event = {
  name: "Meet friends",
  startTime: "00:45",
  endTime: "01:45",
  id: 1594069200000,
};

const Day = ({ id }) => {
  const idArr = new Array(24).fill(0).map((el, index) => index);

  return (
    <div className="week-day">
      {id === event.id ? <Event {...event} /> : null}
      {idArr.map((id) => (
        <div className="hour" key={id} />
      ))}
    </div>
  );
};

export default Day;
