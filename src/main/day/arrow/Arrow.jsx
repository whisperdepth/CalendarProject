import React from "react";
import "./arrow.css";
import moment from "moment";
import getMins from "../../../app/GetMins";

class Arrow extends React.Component {
  state = {
    currentTime: moment(new Date()).format("HH:mm"),
  };

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          currentTime: moment(new Date()).format("HH:mm"),
        }),
      60 * 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentTime } = this.state;
    const top = getMins(currentTime);
    const style = {
      height: "2px",
      width: "158px",
      top: `${top}px`,
      position: "absolute",
      backgroundColor: "#f00",
      zIndex: "2",
    };

    return (
      <div style={style}>
        <div className="arrow"></div>
      </div>
    );
  }
}
export default Arrow;
