import "./App.css";
// import Profile from "./components/Profile/Profile";
import Testt from "./components/mainpage/test1";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ userstate && userstate._id ? (<Testt/>) : (
                <Login setUserState={setUserState} />)} ></Route>
          <Route path="/login" element={<Login setUserState={setUserState} />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/profile" element={<Testt/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// import "./App.css";
// import Testt from "./components/mainpage/test1";
// // import Login from "./components/Login/Login";
// // import Register from "./components/Register/Register";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate from react-router-dom
// import { useState } from "react";

// function App() {
//   const [userstate, setUserState] = useState(null); // Initialize userstate to null

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           {/* Route for Testt component */}
//           <Route
//             path="/"
//             element={userstate ? (
//               <Testt />
//             ) : (
//               <Navigate to="/login" /> // Redirect to Login if userstate is null
//             )}
//           ></Route>
//           {/* Route for Login component */}
//           <Route path="/login" element={<Login setUserState={setUserState} />} />
//           {/* Route for Register component */}
//           <Route path="/signup" element={<Register />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



