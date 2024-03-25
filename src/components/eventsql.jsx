import React, { useState, useEffect } from 'react';
import "./EventList.css";
import axios from 'axios'; // You'll need to install axios: npm install axios

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${day}-${month}-${year}`;
};

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the Node.js server
    axios.get('http://localhost:5000/api/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div className='event-list'>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>Date: {formatDate(event.start_date)}</p>
            <p>Description: {event.description}</p>
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;