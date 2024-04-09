import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './cal.css';


function CalendarComponent() {
  const today = new Date();
  const [date, setDate] = useState(new Date()); // Initialize date state
  // const [date, setDate] = useState(new Date()); // Initialize date state
   // Get current date

  // Function to determine if a date is the current date
  const isCurrentDate = (dateToCheck) => {
    return (
      dateToCheck.getDate() === today.getDate() &&
      dateToCheck.getMonth() === today.getMonth() &&
      dateToCheck.getFullYear() === today.getFullYear()
    );
  };

  // Function to format date as "YYYY-MM-DD" for comparison
  const formatDate = (dateToFormat) => {
    return `${dateToFormat.getFullYear()}-${
      dateToFormat.getMonth() + 1
    }-${dateToFormat.getDate()}`;
  };

  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          tileClassName={({ date, view }) =>
            isCurrentDate(date) && view === "month" ? "current-date" : null
          }
        />
      </div>
    </div>
  );
}
export default CalendarComponent;
