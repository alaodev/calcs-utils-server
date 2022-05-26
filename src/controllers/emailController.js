const services = require('../services');

const sendEmailController = async (req, res) => {
  try {
    const result = await services.email.sendEmail(req.body);
    res.status(200).send(result);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

module.exports = {
  sendEmailController,
}