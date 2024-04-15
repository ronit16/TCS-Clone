const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS middleware

const app = express();
const port = 3001; // Change the port if needed

// Create connection to MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "tcs",
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL database");
});

// Middleware to parse JSON body
app.use(bodyParser.json());
// Add CORS middleware to allow requests from any origin
app.use(cors());

app.post("/api/events", (req, res) => {
  const eventDetails = req.body;
  const { id, startDate, endDate, name, description, registrationLink } =
    eventDetails;

  // Insert event details into the database
  const sql =
    "INSERT INTO tcs.events (id, start_date, end_date, name, description, registrationLink) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [id, startDate, endDate, name, description, registrationLink],
    (err, result) => {
      if (err) {
        console.error("Error inserting event details:", err);
        res.status(500).send("Error inserting event details");
      } else {
        console.log("Event details inserted successfully");
        res.status(200).send("Event details inserted successfully");
      }
    }
  );
});

// POST endpoint to handle achievements details submission
app.post("/api/achievements", (req, res) => {
  const achievementDetails = req.body;
  const {
    id,
    studentName,
    achievementTitle,
    achievementDate,
    description,
    location,
    link,
  } = achievementDetails;

  // Insert achievement details into the database
  const sql =
    "INSERT INTO tcs.achievements (id, studentname, achtitle, achdate, descrip, location, link) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [
      id,
      studentName,
      achievementTitle,
      achievementDate,
      description,
      location,
      link,
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting achievement details:", err);
        res.status(500).send("Error inserting achievement details");
      } else {
        console.log("Achievement details inserted successfully");
        res.status(200).send("Achievement details inserted successfully");
      }
    }
  );
});

// POST endpoint to handle notice details submission
app.post("/api/notices", (req, res) => {
  const noticeDetails = req.body;
  const { id, publishDate, name, message } = noticeDetails;

  // Insert notice details into the database
  const sql =
    "INSERT INTO notice (id, publishdt, name, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [id, publishDate, name, message], (err, result) => {
    if (err) {
      console.error("Error inserting notice details:", err);
      res.status(500).send("Error inserting notice details");
    } else {
      console.log("Notice details inserted successfully");
      res.status(200).send("Notice details inserted successfully");
    }
  });
});

// Handle preflight requests (OPTIONS requests)
app.options("*", cors());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
