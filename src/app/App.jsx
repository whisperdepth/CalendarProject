import React from "react";
import Header from "../header/Header.jsx";
import Week from "../main/Week";
import GetMonday from "./GetMonday.js";
import GenerateWeek from "./GenerateWeek.js";
import { fetchEventsList, createEvent, deleteEvent } from "./eventsGateway.js";

class App extends React.Component {
  state = {
    monday: GetMonday(),
    events: [],
  };

  componentDidMount() {
    this.getEventsList();
  }

  getEventsList = () => {
    fetchEventsList().then((eventsList) => {
      this.setState({
        events: eventsList,
      });
    });
  };

  handleEventAdd = (eventObj) => {
    createEvent(eventObj)
      .then(() => this.getEventsList())
      .catch(() => alert("Internal server error. Failed to create event"));
  };

  handleEventDelete = (deleteId) => {
    deleteEvent(deleteId)
      .then(() => this.getEventsList())
      .catch(() => alert("Internal server error. Failed to delete event"));
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
        <Week
          handleEventDelete={this.handleEventDelete}
          week={week}
          events={events}
        />
      </>
    );
  }
}

export default App;
