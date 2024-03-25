const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // For handling CORS

const app = express();
app.use(cors()); // Enable CORS

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'your_host', // Replace with your MySQL host
    user: 'your_username', // Replace with your MySQL username
    password: 'your_password', // Replace with your MySQL password
    database: 'your_database_name', // Replace with your MySQL database name
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});