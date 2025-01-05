import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',     // XAMPP MySQL runs on localhost
  user: 'root',          // Default XAMPP username
  password: '',          // Default XAMPP password is empty
  database: 'sahiltechie', // Your database name
});

export default db;
