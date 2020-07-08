import React from "react";
import "./header.scss";
import Tools from "./tools/Tools";
import Days from "./days/Days";
import GetMonday from "./GetMonday.js";

class Header extends React.Component {
  state = {
    monday: GetMonday(new Date()),
  };

  showNextWeek = () => {
    const { monday } = this.state;
    const nextMonday = new Date(
      monday.getFullYear(),
      monday.getMonth(),
      monday.getDate() + 7
    );
    this.setState({
      monday: nextMonday,
    });
  };

  showPrevWeek = () => {
    const { monday } = this.state;
    const nextMonday = new Date(
      monday.getFullYear(),
      monday.getMonth(),
      monday.getDate() - 7
    );
    this.setState({
      monday: nextMonday,
    });
  };

  goCurrentWeek = () => {
    this.setState({
      monday: GetMonday(new Date()),
    });
  };

  render() {
    const { monday } = this.state;
    return (
      <header className="header">
        <Tools
          showPrevWeek={this.showPrevWeek}
          showNextWeek={this.showNextWeek}
          goCurrentWeek={this.goCurrentWeek}
          monday={monday}
        />
        <Days monday={monday} />
      </header>
    );
  }
}

export default Header;
