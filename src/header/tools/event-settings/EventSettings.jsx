import React from "react";
import "./event-settings.scss";
import CloseBtn from "./close-btn/CloseBtn";
import SaveBtn from "./save-btn/SaveBtn";

const EventSettings = () => {
  return (
    <form className="event-settings">
      <CloseBtn />
      <input className="event-settings__name" type="text" />
      <div className="event-settings__time">
        <input type="date" />
        <input type="time" />
        <input type="time" />
      </div>
      <SaveBtn />
    </form>
  );
};

export default EventSettings;
