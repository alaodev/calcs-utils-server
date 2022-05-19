const services = require('../services');

const calculateSimpleFeesController = async (req, res) => {
  try {
    const result = await services.fees.calculateSimpleFees();
    res.status(200).send(result);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

const calculateCompoundFeesController = async (req, res) => {
  try {
    const result = await services.fees.calculateCompoundFees();
    res.status(200).send(result);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

module.exports = {
  calculateSimpleFeesController,
  calculateCompoundFeesController,
}