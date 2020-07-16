import React from "react";
import "./arrow.scss";
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
      top: `${top}px`,
    };

    return (
      <div style={style} className="arrow">
        <div className="arrow__ball"></div>
      </div>
    );
  }
}
export default Arrow;
