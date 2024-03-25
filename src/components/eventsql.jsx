import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You'll need to install axios: npm install axios

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
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
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