require("dotenv").config();
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "subjectid043",
  password: process.env.DB_PASSWORD,
  database: "subjectdb043",
  connectionLimit: 5,
});

module.exports = pool;
