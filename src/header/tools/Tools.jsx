import React from "react";
import "./tools.scss";
import CreateBtn from "./create-btn/CreateBtn";
import TodayBtn from "./today-btn/TodayBtn";
import PrevWeekBtn from "./prev-week-btn/PrevWeekBtn";
import NextWeekBtn from "./next-week-btn/NextWeekBtn";
import CurrentMonth from "./current-month/CurrentMonth";
import EventSettings from "./event-settings/EventSettings";

class Tools extends React.Component {
  render() {
    const { showNextWeek, showPrevWeek, goCurrentWeek, monday } = this.props;

    return (
      <div className="tools">
        <CreateBtn />
        <EventSettings />
        <TodayBtn goCurrentWeek={goCurrentWeek} />
        <PrevWeekBtn showPrevWeek={showPrevWeek} />
        <NextWeekBtn showNextWeek={showNextWeek} />
        <CurrentMonth monday={monday} />
      </div>
    );
  }
}

export default Tools;
