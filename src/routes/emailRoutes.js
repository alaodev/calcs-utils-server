const { Router } = require('express');
const {
  sendEmailController,
} = require('../controllers/emailController');

const router = Router();

router
  .post('/email/send-email', sendEmailController)

module.exports = router;