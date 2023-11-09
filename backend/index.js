const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());

class Database {
  constructor() {
    this.db = mysql.createConnection({
      host: 'localhost',
      user: 'dbroot',
      password: '12345678',
      database: 'ultra_beauty',
    });

    this.db.connect((err) => {
      if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
      }
      console.log('Connected to the database as ID ' + this.db.threadId);
    });
  }

  query(sql, params, callback) {
    this.db.query(sql, params, (err, data) => {
      if (err) {
        console.error('Error executing SQL query: ' + err.stack);
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }

  close() {
    this.db.end();
  }
}

const db = new Database();



app.get('/', (req, res) => {
	return res.json('From Backend side');
  });

app.get('/customers', (req, res)=>{
  const sql = 'SELECT * FROM customer_info';
  db.query(sql,[],(err, data)=>{
    if (err){
      return res.status(500).json({ error: 'Server error'});
    }
    return res.json(data)
  });
});


app.post('/customers', (req, res) => {
  const { country, phone_number, delivery_location } = req.body;
  const sql = 'INSERT INTO customer_info (county_name, phone_number, delivery_location, full_names) VALUES (?, ?, ?)';
  const values = [country, phone_number, delivery_location];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Server error' });
    }
    if (data.affectedRows === 0){
      return res.status(404).json({ error: 'Customers not found'})
    }
    return res.json({ message: 'Customer data inserted successfully' });
  });
});

app.post("/api/payment", (req, res) => {
  const paymentData = req.body;

  // Define an SQL query to insert data into the customer_info table
  const sql = "INSERT INTO customer_info (county_name, phone_number, delivery_location, full_names) VALUES (?, ?, ?, ?)";
  const params = [paymentData.county, paymentData.phoneNumber, paymentData.deliveryLocation, paymentData.fullName];

  // Execute the SQL query using your Database class
  db.query(sql, params, (err, result) => {
      if (err) {
          // Handle any errors that occur during the database interaction
          console.error("Error saving payment data:", err);
          res.status(500).json({ message: "An error occurred while saving payment data" });
      } else {
          // Send a success response back to the client
          res.json({ message: "Payment data received and saved successfully" });
      }
  });
});

  

  app.listen(4000, () => {
	console.log('Listening on port 4000');
  });