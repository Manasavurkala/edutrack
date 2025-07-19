const db = require('../config/db');

exports.createStudent = (data, callback) => {
  const sql = 'INSERT INTO students (name, email, password, department) VALUES (?, ?, ?, ?)';
  db.query(sql, [data.name, data.email, data.password, data.department], callback);
};

exports.getAllStudents = callback => {
  db.query('SELECT * FROM students', callback);
};
