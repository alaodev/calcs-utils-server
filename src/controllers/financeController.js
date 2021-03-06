const services = require('../services');

const calculateSimpleFeesController = async (req, res) => {
  try {
    const result = await services.finance.calculateSimpleFees(
      parseFloat(req.query.initialValue), 
      parseFloat(req.query.interestRate), 
      req.query.period, 
      req.query.interestRateGranularity, 
      req.query.periodInGranularity
    );
    res.status(200).send(result);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

const calculateCompoundFeesController = async (req, res) => {
  try {
    const result = await services.finance.calculateCompoundFees(
      parseFloat(req.query.initialValue),
      parseFloat(req.query.monthlyValue),
      parseFloat(req.query.interestRate),
      req.query.period,
      req.query.interestRateGranularity,
      req.query.periodInGranularity
    );
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