// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors'); // For handling CORS

// const app = express();
// app.use(cors()); // Enable CORS
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// // MySQL connection configuration
// const connection = mysql.createConnection({
//   host: 'localhost', // Replace with your MySQL host
//   user: 'root', // Replace with your MySQL username
//   password: '123456', // Replace with your MySQL password
//   database: 'tcs', // Replace with your MySQL database name
// });

// // Endpoint to fetch events from MySQL
// app.get('/api/events', (req, res) => {
//   connection.query('SELECT * FROM events', (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while fetching events' });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.get('/api/notice', (req, res) => {
//   connection.query('SELECT * FROM notice', (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while fetching events' });
//     } else {
//       res.json(results);
//     }
//   });
// });



// console.log(connection)
// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL:", err);
//     return;
//   }
//   console.log("Connected to MySQL database");
// });

// connection.on('error', function(err) {
//   console.error('Database error:', err);
// });

// app.use((req, res, next) => {
//   console.log(`Incoming ${req.method} request to ${req.url}`);
//   next();
// });

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   connection.query(
//     "SELECT * FROM regdetails WHERE email = ? AND password = ?",
//     [email, password],
//     function (err, results) {
//       if (err) {
//         console.error("Error executing query:", err);
//         return res.status(500).send("Internal Server Error");
//       }

//       if (results.length === 1) {
//         res.send("Login successful");
//       } else {
//         res.status(401).send("Invalid email or password");
//       }
//     }
//   );
// });

// // app.post("/vyom", (req, res) => {
// //   const { fname, lname, email, password } = req.body;
// //   connection.query(
// //     "INSERT INTO regdetails (fname, lname, email, password) VALUES (?, ?, ?, ?)",
// //     [fname, lname, email, password],
// //     function (err, results) {
// //       if (err) {
// //         console.error("Error executing query:", err);
// //         return res.status(500).send("Internal Server Error");
// //       }
// //       res.send("Registration successfully done");
// //     }
// //   );
// // });
// app.post('/signup', (req, res) => {
//   const { fname, lname, email, password } = req.body;

//   // Check if email already exists in database
//   const checkQuery = `SELECT * FROM regdetails WHERE email = ?`;
//   connection.query(checkQuery, [email], (err, results) => {
//       if (err) {
//           console.error('Database error:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//       } else if (results.length > 0) {
//           return res.status(400).json({ message: 'Email already exists' });
          
//       } else {
//           // Insert new user into database
//           const insertQuery = `INSERT INTO regdetails (fname, lname, email, password) VALUES (?, ?, ?, ?)`;
//           connection.query(insertQuery, [fname, lname, email, password], (err, results) => {
//               if (err) {
//                   console.error('Database error:', err);
//                   return res.status(500).json({ message: 'Internal server error' });
//               } else {
//                   return res.status(201).json({ message: 'Signup successful' });
//               }
//           });
//       }
//   });
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors'); // For handling CORS

// const app = express();
// app.use(cors()); // Enable CORS
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // MySQL connection configuration
// const connection = mysql.createConnection({
//   host: 'localhost', // Replace with your MySQL host
//   user: 'root', // Replace with your MySQL username
//   password: '123456', // Replace with your MySQL password
//   database: 'tcs', // Replace with your MySQL database name
// });

// // Endpoint to fetch events from MySQL
// app.get('/api/events', (req, res) => {
//   connection.query('SELECT * FROM events', (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while fetching events' });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.get('/api/notice', (req, res) => {
//   connection.query('SELECT * FROM notice', (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while fetching events' });
//     } else {
//       res.json(results);
//     }
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// console.log(connection);
// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL:", err);
//     return;
//   }
//   console.log("Connected to MySQL database");
// });

// connection.on('error', function (err) {
//   console.error('Database error:', err);
// });

// app.use((req, res, next) => {
//   console.log(`Incoming ${req.method} request to ${req.url}`);
//   next();
// });

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   connection.query(
//     "SELECT * FROM regdetails WHERE email = ? AND password = ?",
//     [email, password],
//     function (err, results) {
//       if (err) {
//         console.error("Error executing query:", err);
//         return res.status(500).send("Internal Server Error");
//       }

//       if (results.length === 1) {
//         res.send("Login successful");
//       } else {
//         res.status(401).send("Invalid email or password");
//       }
//     }
//   );
// });

// app.post('/signup', (req, res) => {
//   const { fname, lname, email, password } = req.body;

//   // Check if email already exists in database
//   const checkQuery = `SELECT * FROM regdetails WHERE email = ?`;
//   connection.query(checkQuery, [email], (err, results) => {
//     if (err) {
//       console.error('Database error:', err);
//       return res.status(500).json({ message: 'Internal server error' });
//     } else if (results.length > 0) {
//       return res.status(400).json({ message: 'Email already exists' });

//     } else {
//       // Insert new user into database
//       const insertQuery = `INSERT INTO regdetails (fname, lname, email, password) VALUES (?, ?, ?, ?)`;
//       connection.query(insertQuery, [fname, lname, email, password], (err, results) => {
//         if (err) {
//           console.error('Database error:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//         } else {
//           return res.status(201).json({ message: 'Signup successful' });
//         }
//       });
//     }
//   });
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });






const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // For handling CORS

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'root', // Replace with your MySQL username
  password: '123456', // Replace with your MySQL password
  database: 'tcs', // Replace with your MySQL database name
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Handle MySQL connection errors
connection.on('error', function (err) {
  console.error('Database error:', err);
});

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.url}`);
  next();
});

// Endpoint to handle user login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  connection.query(
    "SELECT * FROM regdetails WHERE email = ? AND password = ?",
    [email, password],
    function (err, results) {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).send("Internal Server Error");
      }

      if (results.length === 1) {
        res.send("Login successful");
      } else {
        res.status(401).send("Invalid email or password");
      }
    }
  );
});

// Endpoint to handle user signup
app.post('/signup', (req, res) => {
  const { fname, lname, email, password } = req.body;

  // Check if email already exists in database
  const checkQuery = `SELECT * FROM regdetails WHERE email = ?`;
  connection.query(checkQuery, [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    } else if (results.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    } else {
      // Insert new user into database
      const insertQuery = `INSERT INTO regdetails (fname, lname, email, password) VALUES (?, ?, ?, ?)`;
      connection.query(insertQuery, [fname, lname, email, password], (err, results) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ message: 'Internal server error' });
        } else {
          return res.status(201).json({ message: 'Signup successful' });
        }
      });
    }
  });
});

// Endpoint to fetch events from MySQL
app.get('/api/events', (req, res) => {
  connection.query('SELECT * FROM events', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching events' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint to fetch notices from MySQL
app.get('/api/notice', (req, res) => {
  connection.query('SELECT * FROM notice', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching notices' });
    } else {
      res.json(results);
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
