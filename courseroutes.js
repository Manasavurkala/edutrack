const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, courseController.createCourse);
router.get('/', auth, courseController.getAllCourses);
router.get('/:id', auth, courseController.getCourseById);

module.exports = router;
