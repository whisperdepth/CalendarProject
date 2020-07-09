import React from "react";
import "./event-settings.scss";
import CloseBtn from "./close-btn/CloseBtn";
import SaveBtn from "./save-btn/SaveBtn";

class EventSettings extends React.Component {
  render() {
    const { display, handleClose } = this.props;

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
      <form style={style}>
        <CloseBtn handleClose={handleClose} />
        <input className="event-settings__name" type="text" />
        <div className="event-settings__time">
          <input type="date" />
          <input type="time" />
          <input type="time" />
        </div>
        <SaveBtn />
      </form>
    );
  }
}

export default EventSettings;
