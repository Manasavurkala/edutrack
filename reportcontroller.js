const db = require('../config/db');

exports.getStudentPerformance = (req, res) => {
  const studentId = req.params.id;
  const sql = `
    SELECT c.name AS course, g.marks_obtained, g.grade
    FROM grades g
    JOIN enrollments e ON g.enrollment_id = e.id
    JOIN courses c ON e.course_id = c.id
    WHERE e.student_id = ?
  `;
  db.query(sql, [studentId], (err, results) => {
    if (err) return res.status(500).json({ err });
    res.json(results);
  });
};

exports.getCourseAnalytics = (req, res) => {
  const courseId = req.params.id;
  const sql = `
    SELECT u.name AS student, g.marks_obtained, g.grade
    FROM grades g
    JOIN enrollments e ON g.enrollment_id = e.id
    JOIN users u ON e.student_id = u.id
    WHERE e.course_id = ?
  `;
  db.query(sql, [courseId], (err, results) => {
    if (err) return res.status(500).json({ err });
    res.json(results);
  });
};
