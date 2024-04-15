import React from "react";
import "./App.css"; 
import FacultyDashboard from "./FacultyDashboard"; // Importing the FacultyDashboard component

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to University Dashboard</h1>
      </header>
      <main>
        <FacultyDashboard />
      </main>
    </div>
  );
}

export default Main;
