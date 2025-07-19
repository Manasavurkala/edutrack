const db = require('../config/db');

exports.createCourse = (req, res) => {
  const { name, code, department_id, faculty_id } = req.body;
  const sql = 'INSERT INTO courses (name, code, department_id, faculty_id) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, code, department_id, faculty_id], (err, result) => {
    if (err) return res.status(500).json({ err });
    res.json({ message: 'Course created' });
  });
};

exports.getAllCourses = (req, res) => {
  db.query('SELECT * FROM courses', (err, results) => {
    if (err) return res.status(500).json({ err });
    res.json(results);
  });
};

exports.getCourseById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM courses WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ err });
    res.json(result[0]);
  });
};
