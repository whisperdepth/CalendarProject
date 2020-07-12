import React from "react";
import "./event.scss";
import DeleteBtn from "./delete-btn/DaleteBtn";
import getMins, { getDuration } from "../../../app/GetMins";

class Event extends React.Component {
  state = {
    display: "none",
  };

  handleDisplay = (e) => {
    e.preventDefault();
    this.state.display === "none"
      ? this.setState({ display: "block" })
      : this.setState({ display: "none" });
  };

  handleClick = () => {
    this.setState({ display: "none" });
  };

  render() {
    const { name, startTime, endTime, handleEventDelete, id } = this.props;
    const { display } = this.state;

    const style = {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      width: "150px",
      height: `${getDuration(endTime, startTime)}px`,
      minHeight: "45px",
      top: `${getMins(startTime)}px`,
      backgroundColor: "#0b64ca91",
      zIndex: 1,
      borderRadius: "6px",
      color: "#fff",
    };

    return (
      <div
        onClick={this.handleClick}
        onContextMenu={this.handleDisplay}
        style={style}
        className="event"
      >
        <span title={name} className="event__name">
          {name}
        </span>
        <span className="event__time">{`${startTime} - ${endTime}`}</span>
        <DeleteBtn
          deleteId={id}
          handleEventDelete={handleEventDelete}
          display={display}
        />
      </div>
    );
  }
}

export default Event;
