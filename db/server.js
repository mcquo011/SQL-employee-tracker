const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Pumpkin18$",
  database: "employees_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the employees_db database.");
});

module.exports = db;
