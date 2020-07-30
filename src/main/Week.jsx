import React from "react";
import "./week.scss";
import HoursGradation from "./hours-gradation/HoursGradation";
import Day from "./day/Day";

const Week = ({ week, events, handleEventDelete }) => {
  return (
    <main className="week">
      <HoursGradation />
      {week.map((day) => (
        <Day
          handleEventDelete={handleEventDelete}
          key={day.getTime()}
          events={events}
          id={day.getTime()}
        />
      ))}
    </main>
  );
};

export default Week;
