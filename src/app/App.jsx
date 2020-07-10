import React from "react";
import Header from "../header/Header.jsx";
import Week from "../main/Week";
import GetMonday from "./GetMonday.js";
import GenerateWeek from "./GenerateWeek.js";

class App extends React.Component {
  state = {
    monday: GetMonday(),
    events: [
      {
        id: 1,
        name: "Meet friends",
        startTime: "00:45",
        endTime: "01:45",
        dayTime: 1593982800000,
      },
      {
        id: 2,
        name: "Go to sleep",
        startTime: "03:45",
        endTime: "06:00",
        dayTime: 1593982800000,
      },

      {
        id: 3,
        name: "Go to work",
        startTime: "10:45",
        endTime: "14:00",
        dayTime: 1593982800000,
      },
    ],
  };

  handleEventAdd = (obj) => {
    this.setState({
      events: this.state.events.concat(obj),
    });
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
      monday: GetMonday(),
    });
  };

  render() {
    const { monday, events } = this.state;
    const week = GenerateWeek(monday);
    return (
      <>
        <Header
          handleEventAdd={this.handleEventAdd}
          showPrevWeek={this.showPrevWeek}
          showNextWeek={this.showNextWeek}
          goCurrentWeek={this.goCurrentWeek}
          monday={monday}
          week={week}
        />
        <Week week={week} events={events} />
      </>
    );
  }
}

export default App;
