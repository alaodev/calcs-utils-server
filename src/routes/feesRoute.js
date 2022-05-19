const { Router } = require('express');
const {
  calculateSimpleFeesController,
  calculateCompoundFeesController,
} = require('../controllers/feesController');

const router = Router();

router
  .get('/fees/simple', calculateSimpleFeesController)
  .get('/fees/compound', calculateCompoundFeesController);

module.exports = router;