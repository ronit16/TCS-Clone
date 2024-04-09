import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const EventListContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

const EventTitle = styled.h1`
  text-align: center;
  font-style: "Rakkas", serif;
  font-size: 50px;
  font-weight: 1000;
  color: #f77f00;
  margin: 0;
`;

const EventHeading = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  font-style: "Rakkas", serif;
`;

const EventLists = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0;
`;

const EventItem = styled.li`
  background-color: #f8f8f8;
//   padding: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;

  &:hover {
    background-color: #eaeaea;
  }
`;

const EventName = styled.h3`
  font-family: "Rakkas", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #03071e;
  background-color: #ffb627;
  margin: 0;
  padding: 0;
  height: 70px;
  border-radius: 10px;
  padding-top: 25px;
`;

const EventDescription = styled.p`
  font-size: 26px;
  font-weight: bold;
  color: #9d0208;
  margin-bottom: 10px;
`;

const Acadlist = () => {
  const [events, setEvents] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [cgpa, setCGPA] = useState(null);


  useEffect(() => {
    // Fetch events from the Node.js server
    axios.get('http://localhost:5000/api/academics')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const calculateCGPA = () => {
    if (selectedSemester) {
      const filteredEvents = events.filter(event => event.semester <= selectedSemester);
      const totalSGPA = filteredEvents.reduce((acc, curr) => acc + curr.sgpa, 0);
      const calculatedCGPA = totalSGPA / filteredEvents.length;
      setCGPA(calculatedCGPA.toFixed(2)); // Round CGPA to 2 decimal places
    } else {
      setCGPA(null);
    }
  };    
  

  useEffect(() => {
    calculateCGPA();
  }, [selectedSemester, events]);

  const handleClick = (semester) => {
    setSelectedSemester(semester === selectedSemester ? null : semester);
  };

  return (
    <EventListContainer>
      <EventTitle>Academics</EventTitle>
      <EventHeading>View your semester-wise by clicking on respective semester block</EventHeading>
      <EventLists>
        {events.map((event) => (
          <EventItem key={event.semester} onClick={() => handleClick(event.semester)}>
            <EventName>Semester - {event.semester}</EventName>
          </EventItem>
        ))}
      </EventLists>
      <hr />
      {selectedSemester && (
        <div>
          <h3>Grades for Semester {selectedSemester}</h3>
          {events
            .filter(event => event.semester === selectedSemester)
            .map(filteredEvent => (
              <div key={filteredEvent.rollno}>
                <EventDescription>SGPA: {filteredEvent.sgpa}</EventDescription>
                <EventDescription>CGPA: {cgpa}</EventDescription>
              </div>
            ))}
        </div>
      )}
    </EventListContainer>
  );
};

export default Acadlist;
