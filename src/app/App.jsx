import React from "react";
import Header from "../header/Header.jsx";
import Week from "../main/Week";
import GetMonday from './GetMonday.js'
import GenerateWeek from './GenerateWeek.js'

class App extends React.Component {

  state = {
    monday: GetMonday(),
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
    const { monday } = this.state;
    const week = GenerateWeek(monday);
    return (
      <>
        <Header 
          showPrevWeek={this.showPrevWeek}
          showNextWeek={this.showNextWeek}
          goCurrentWeek={this.goCurrentWeek}
          monday={monday}
          week={week}
        />
        <Week week={week}/>
      </>
    );
  }
}

export default App;
