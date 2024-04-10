// // 26/ march/ 2024

// import React, { useState, useEffect } from 'react';
// import "./EventList.css";
// import axios from 'axios'; // You'll need to install axios: npm install axios

// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   return `${day}-${month}-${year}`;
// };

// const EventList = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Fetch events from the Node.js server
//     axios.get('http://localhost:5000/api/events')
//       .then(response => {
//         setEvents(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching events:', error);
//       });
//   }, []);

//   return (
//     <div className='event-list'>
//       <h1>Tech Conference Schedule</h1>
//       <h2>Upcoming Events</h2>
//       <ul>
//         {events.map((event) => (
//           <li key={event.id}>
//             <h3>{event.name}</h3>
//             <p>Date: {formatDate(event.start_date)}</p>
//             <p>Description: {event.description}</p>
//             <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
//               Register
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EventList;













import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${day}-${month}-${year}`;
};

// Styled components
const EventListContainer = styled.div`
  // max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const EventTitle = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: 1000;
  color: #ef233c;
  margin: 0px;
`;

const EventHeading = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;
const EventLists = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 0;
`;

const EventItem = styled.li`
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
`;

const EventName = styled.h3`
  font-family: "Rakkas", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #555;
  margin: 0;
`;

const EventDate = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
`;

const EventDescription = styled.p`
  font-size: 16px;
  color: #444;
  margin-bottom: 10px;
`;

const RegisterLink = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

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
    <EventListContainer>
      <EventTitle>Events</EventTitle>
      <EventHeading>Checkout upcomming events and register using respective link</EventHeading>
      <EventLists>
        {events.map((event) => (
          <EventItem key={event.id}>
            <EventName>{event.name}</EventName>
            <EventDate>Date: {formatDate(event.start_date)}</EventDate>
            <EventDescription>{event.description}</EventDescription>
            <hr />
            <RegisterLink href={event.registrationLink} target="_blank" rel="noopener noreferrer">
              Register
            </RegisterLink>
          </EventItem> 
        ))}
      </EventLists>
    </EventListContainer>
  );
};

export default EventList;