import React from "react";
import "./event-settings.scss";
import CloseBtn from "./close-btn/CloseBtn";
import SaveBtn from "./save-btn/SaveBtn";
import getMins from "../../../common/GetMins";
import getHoursArray from "./getHoursArray";

class EventSettings extends React.Component {
  state = {
    name: "",
    startTime: "09:00",
    endTime: "09:15",
    dateValue: "",
    selectValue: "",
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
      id: Math.random().toString(),
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
      startTime: "09:00",
      endTime: "09:15",
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
      display: `${display}`,
    };

    return (
      <form
        style={style}
        onSubmit={this.handleSubmit}
        className="event-settings"
      >
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
          <select
            name="startTime"
            onChange={this.handleChange}
            value={startTime}
          >
            {getHoursArray().map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select name="endTime" onChange={this.handleChange} value={endTime}>
            {getHoursArray().map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
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
