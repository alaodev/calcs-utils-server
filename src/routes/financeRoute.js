const { Router } = require('express');
const {
  calculateSimpleFeesController,
  calculateCompoundFeesController,
} = require('../controllers/financeController');

const router = Router();

router
  .get('/finance/simple-fees', calculateSimpleFeesController)
  .get('/finance/compound-fees', calculateCompoundFeesController);

module.exports = router;