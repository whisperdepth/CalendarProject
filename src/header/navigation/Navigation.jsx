import React from "react";
import "./navigation.scss";
import CurrentMonth from "./current-month/CurrentMonth";
import EventSettings from "./event-settings/EventSettings";

class Navigation extends React.Component {
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
      <div className="navigation">
        <button onClick={this.handleDisplay} className="create-btn">
          + Create
        </button>
        <EventSettings
          handleEventAdd={handleEventAdd}
          handleClose={this.handleClose}
          display={display}
        />
        <button onClick={goCurrentWeek} className="today-btn">
          Today
        </button>
        <button onClick={showPrevWeek} className="toggle-btn">
          ←
        </button>
        <button onClick={showNextWeek} className="toggle-btn">
          →
        </button>
        <CurrentMonth monday={monday} />
      </div>
    );
  }
}
export default Navigation;
