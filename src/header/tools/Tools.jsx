import React from "react";
import "./tools.scss";
import CreateBtn from "./create-btn/CreateBtn";
import TodayBtn from "./today-btn/TodayBtn";
import PrevWeekBtn from "./prev-week-btn/PrevWeekBtn";
import NextWeekBtn from "./next-week-btn/NextWeekBtn";
import CurrentMonth from "./current-month/CurrentMonth";
import EventSettings from "./event-settings/EventSettings";

class Tools extends React.Component {
  state = {
    display: "none",
  };

  handleDisplay = () => {
    this.setState({ display: "flex" });
  };

  handleClose = () => {
    this.setState({ display: "none" });
  };

  render() {
    const {
      showNextWeek,
      showPrevWeek,
      goCurrentWeek,
      monday,
      handleEventAdd,
    } = this.props;

    const { display } = this.state;

    return (
      <div className="tools">
        <CreateBtn handleDisplay={this.handleDisplay} />
        <EventSettings
          handleEventAdd={handleEventAdd}
          handleClose={this.handleClose}
          display={display}
        />
        <TodayBtn goCurrentWeek={goCurrentWeek} />
        <PrevWeekBtn showPrevWeek={showPrevWeek} />
        <NextWeekBtn showNextWeek={showNextWeek} />
        <CurrentMonth monday={monday} />
      </div>
    );
  }
}

export default Tools;
