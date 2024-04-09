// import React, { useState, useEffect } from 'react';
// import './test1.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import EventsPage from './EventsPage'; // Import the EventsPage component

// function Testt() {
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     // Fetch user info from the backend API
//     fetchUserInfo();
//   }, []);

//   const fetchUserInfo = async () => {
//     try {
//       // Replace 'your_backend_api_url_here' with your actual backend API URL
//       const response = await fetch('your_backend_api_url_here');
//       if (!response.ok) {
//         throw new Error('Failed to fetch user info');
//       }
//       const data = await response.json();
//       setUserInfo(data);
//     } catch (error) {
//       console.error('Error fetching user info:', error);
//     }
//   };

//   return (
//     <Router>
//       <div className="App">
//         <header className="header">
//           <div className="user-info">
//             {userInfo ? (
//               <>
//                 <span className="user-name">{userInfo.name}</span>
//                 <span className="user-id">ID: {userInfo.id}</span>
//               </>
//             ) : (
//               <span>Loading...</span>
//             )}
//           </div>
//           <Link to="/" className="home-button"> {/* Use Link to navigate to home */}
//             <FontAwesomeIcon icon={faHome} size="2x"/>
//           </Link>
//         </header>
//         <main className="main-content">
//           {/* Placeholder for calendar component */}
//           {/* <div className="calendar">Calendar Placeholder</div> */}
//           <div className="sections">
//             <SquareComponent title="Events" link="/events" imageSrc="https://img.freepik.com/free-vector/events-concept-illustration_114360-931.jpg" bgColor="#ef233c" />
//             {/* Add other SquareComponent for other sections */}
//           </div>
//         </main>

//         <Switch>
//           <Route path="/events">
//             <EventsPage /> {/* Render EventsPage component when /events route is matched */}
//           </Route>
//           {/* Add more routes for other pages */}
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function SquareComponent({ title, link, imageSrc, bgColor }) {
//   return (
//     <Link to={link} className="square-link"> {/* Use Link to navigate to the corresponding page */}
//       <div className="square-component" style={{ backgroundColor: bgColor }}>
//         <div className="image-container">
//           <img src={imageSrc} alt={title} className="square-image" />
//         </div>
//         <span className="square-title">{title}</span>
//       </div>
//     </Link>
//   );
// }

// export default Testt;





/*
27 March 2024
*/

import React, { useState, useEffect } from 'react';
import './test1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import CalendarComponent from '../Calendar/calendarcomp';

function Testt() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Fetch user info from the backend API
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      // Replace 'your_backend_api_url_here' with your actual backend API URL
      const response = await fetch('http://localhost:5000/api/name');
      if (!response.ok) {
        throw new Error('Failed to fetch user info');
      }
      const data = await response.json();
      console.log(typeof(data))
      if (data && data.fname) {
        // Assuming the response contains an array of objects with a 'fname' property
        setUserInfo(data.fname);
        console.log(data.fname)
      } else {
        throw new Error('No user data found');
      } 
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="user-info">
        <span className='colbtn'>🔴🟡🟢</span>
          {userInfo ? (
            <>
              <span className="user-name">{userInfo.fname}</span>
              {/* <span className="user-id">ID: {userInfo.id}</span> */}
            </>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <button className="home-button">
            <FontAwesomeIcon icon={faHome} size="x"/>
        </button>
      </header>
      <main className="main-content">
        {/* Placeholder for calendar component */}
        {/* <div className="calendar">Calendar Placeholder</div> */}
        
        <div className="sections">
          <SquareComponent title="Events" link="/events" imageSrc="https://img.freepik.com/free-vector/events-concept-illustration_114360-931.jpg" bgColor="#ef233c" />
          <SquareComponent title="Achievements" link="/achievements" imageSrc="https://img.freepik.com/premium-vector/education-achievement-learning-reference-online-student-flat-vector-illustration_128772-961.jpg" bgColor="#0077b6" />
          <SquareComponent title="General Notice" link="/notice" imageSrc="https://img.freepik.com/premium-vector/hand-with-megaphone-business-announce-marketing-communication-speaker-message-advertisement_159757-864.jpg" bgColor="#058c42" />
          <SquareComponent title="Academics" link="/academics" imageSrc="https://img.freepik.com/free-vector/flat-background-class-2023-graduation_23-2150291538.jpg" bgColor="#f77f00" />
          
        </div>
        
        
      </main>

      <br></br>
      <br></br><br></br><br></br>
      <div className="content-right">
        <CalendarComponent />
      </div>


    </div>
  );
}

function SquareComponent({ title, link, imageSrc, bgColor }) {
  return (
    <div className="square-component" style={{ backgroundColor: bgColor }}>
      <div className="image-container">
        <img src={imageSrc} alt={title} className="square-image" />
      </div>
      <a href={link} className="square-title">{title}</a>
    </div>
  );
}

export default Testt;