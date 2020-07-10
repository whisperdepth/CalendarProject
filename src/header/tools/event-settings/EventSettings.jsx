import React from "react";
import "./event-settings.scss";
import CloseBtn from "./close-btn/CloseBtn";
import SaveBtn from "./save-btn/SaveBtn";

class EventSettings extends React.Component {
  state = {
    name: "",
    startTime: "",
    endTime: "",
    dateValue: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  handleDateChange = (e) => {
    this.setState({
      dateValue: e.target.value,
    });
  };

  handleStartChange = (e) => {
    this.setState({
      startTime: e.target.value,
    });
  };

  handleEndChange = (e) => {
    this.setState({
      endTime: e.target.value,
    });
  };

  render() {
    const { display, handleClose } = this.props;
    const { name, dateValue, startTime, endTime } = this.state;

    const style = {
      position: "absolute",
      display: `${display}`,
      flexDirection: "column",
      width: "450px",
      height: "350px",
      backgroundColor: "#fff",
      boxShadow: "0px 6px 20px -6px rgba(0, 0, 0, 0.75)",
      zIndex: "3",
      top: "200px",
      left: "400px",
    };

    return (
      <form style={style} onSubmit={this.handleSubmit}>
        <CloseBtn handleClose={handleClose} />
        <input onChange={this.handleNameChange} value={name} className="event-settings__name" type="text" />
        <div className="event-settings__time">
          <input
            onChange={this.handleDateChange}
            value={dateValue}
            type="date"
          />
          <input
            onChange={this.handleStartChange}
            value={startTime}
            type="time"
          />
          <input onChange={this.handleEndChange} value={endTime} type="time" />
        </div>
        <SaveBtn />
      </form>
    );
  }
}

export default EventSettings;
