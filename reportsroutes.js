const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const auth = require('../middleware/authMiddleware');

router.get('/student/:id', auth, reportController.getStudentPerformance);
router.get('/course/:id', auth, reportController.getCourseAnalytics);

module.exports = router;
