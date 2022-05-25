const { Router } = require('express');
const {
  calculateDiffBetweenDatesController,
} = require('../controllers/datesController');

const router = Router();

router
  .get('/dates/diff-between-dates', calculateDiffBetweenDatesController)

module.exports = router;