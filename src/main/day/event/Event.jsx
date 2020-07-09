import React from "react";
import "./event.scss";
import DeleteBtn from "./delete-btn/DaleteBtn";

const getMins = (time) => {
  let hours = 0;

  time.slice(0, 1) === "0"
    ? (hours = +time.slice(1, 2))
    : (hours = +time.slice(0, 2));

  return +time.slice(3, 5) + 60 * hours;
};

const getDuration = (end, start) => {
  return getMins(end) - getMins(start) - 4;
};

class Event extends React.Component {
  state = {
    display: "none",
  };

  handleDisplay = () => {
    this.state.display === "none"
      ? this.setState({ display: "block" })
      : this.setState({ display: "none" });
  };

  render() {
    const { name, startTime, endTime } = this.props;
    const { display } = this.state;

    const style = {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      width: "150px",
      height: `${getDuration(endTime, startTime)}px`,
      top: `${getMins(startTime)}px`,
      left: "71px",
      backgroundColor: "#b0b8ff",
      zIndex: 1,
      borderRadius: "6px",
    };

    return (
      <div onClick={this.handleDisplay} style={style}>
        <span className="event__name">{name}</span>
        <span className="event__time">{`${startTime} - ${endTime}`}</span>
        <DeleteBtn display={display}/>
      </div>
    );
  }
}

export default Event;
