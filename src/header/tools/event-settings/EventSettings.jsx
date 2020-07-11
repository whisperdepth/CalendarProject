import React from "react";
import "./event-settings.scss";
import CloseBtn from "./close-btn/CloseBtn";
import SaveBtn from "./save-btn/SaveBtn";
import { getMins } from "../../../app/GetMins";

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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  readInputsData = () => {
    const { name, dateValue, startTime, endTime } = this.state;
    const { handleEventAdd } = this.props;

    event = {
      id: Math.random(),
      name,
      startTime,
      endTime,
      dayTime: new Date(
        new Date(dateValue).getFullYear(),
        new Date(dateValue).getMonth(),
        new Date(dateValue).getDate()
      ).getTime(),
    };
    handleEventAdd(event);

    this.setState({
      name: "",
      startTime: "",
      endTime: "",
      dateValue: "",
    });
  };

  render() {
    const { display, handleClose } = this.props;
    const { name, dateValue, startTime, endTime } = this.state;
    const isButtonAvailable = !(
      name &&
      dateValue &&
      startTime &&
      endTime &&
      getMins(endTime) >= getMins(startTime)
    );
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
        <input
          onChange={this.handleChange}
          value={name}
          className="event-settings__name"
          type="text"
          name="name"
        />
        <div className="event-settings__time">
          <input
            onChange={this.handleChange}
            value={dateValue}
            type="date"
            name="dateValue"
          />
          <input
            onChange={this.handleChange}
            value={startTime}
            type="time"
            name="startTime"
          />
          <input
            onChange={this.handleChange}
            value={endTime}
            type="time"
            name="endTime"
          />
        </div>
        <SaveBtn
          isButtonAvailable={isButtonAvailable}
          readInputsData={this.readInputsData}
        />
      </form>
    );
  }
}
export default EventSettings;
