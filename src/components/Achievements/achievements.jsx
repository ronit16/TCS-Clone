import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AchiListContainer = styled.div`
  margin: 20px;
  // font-family: 'Rakkas', serif;
`;

const AchiTitle = styled.h2`
  font-size: 48px;
  color: #0077b6;
  text-align: center;
  margin-bottom: 25px;
  font-family: 'Rakkas', serif;
`;

const AchiLists = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px; /* Adjust the gap between grid items */
`;

const AchiItem = styled.li`
  background-color: #caf0f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
  padding-left: 30px;
  font-family: 'Montserrat', sans-serif; /* Nice font style */
  text-align: left; /* Align text to the left */

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #f0f0f0;
  }
`;

const Achistud = styled.span`
  font-weight: bold;
  color: #001845;
  font-size: 26px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 2px solid #007bff;
  transition: border-color 0.3s;
`;

const AchiName = styled.p`
  color: #333;
  font-size: 24px;
  margin: 10px 0;
  font-family: 'Roboto', sans-serif; /* Different font style */
`;

const AchiDescription = styled.p`
  color: #03045e;
  line-height: 1.5;
  font-size: 20px;
  font-family: 'Roboto', sans-serif; /* Different font style */
`;

const Achiloc = styled.p`
  color: #00171f;
  font-size: 20px;
  margin: 0;
  font-family: 'Roboto', sans-serif; /* Different font style */
`;

const formatDate = (dateString) => {
  // Implement your date formatting logic here
  return dateString;
};

const AchiList = () => {
  const [achievement, setAchievement] = useState([]);

  useEffect(() => {
    // Fetch events from the Node.js server
    axios.get('http://localhost:5000/api/achievements')
      .then(response => {
        setAchievement(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <AchiListContainer> 
      <AchiTitle>Achievements</AchiTitle>
      <AchiLists>
        {achievement.map((achievement) => (
          <AchiItem key={achievement.id}>
            <Achistud>{achievement.studentname}</Achistud>
            <AchiName>{achievement.achtitle}</AchiName>
            <AchiDescription>{achievement.descrip}</AchiDescription>
            <Achiloc>{achievement.location}</Achiloc>
          </AchiItem>
        ))}
      </AchiLists>
    </AchiListContainer>
  );
};

export default AchiList;