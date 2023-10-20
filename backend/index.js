const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());

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


  

  app.listen(4000, () => {
	console.log('Listening on port 4000');
  });