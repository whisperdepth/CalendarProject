import React from "react";
import "./tools.scss";
import CreateBtn from "./create-btn/CreateBtn";
import TodayBtn from "./today-btn/TodayBtn";
import PrevWeekBtn from "./prev-week-btn/PrevWeekBtn";
import NextWeekBtn from "./next-week-btn/NextWeekBtn";
import CurrentMonth from "./current-month/CurrentMonth";
import EventSettings from "./event-settings/EventSettings";

const Tools = () => {
  return (
    <div className="tools">
      <CreateBtn />
      <EventSettings />
      <TodayBtn />
      <PrevWeekBtn />
      <NextWeekBtn />
      <CurrentMonth />
    </div>
  );
};

export default Tools;
