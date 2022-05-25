const services = require('../services');

const calculateDiffBetweenDatesController = async (req, res) => {
  try {
    const result = await services.dates.calculateDiffBetweenDates(
      req.query.initialDate, 
      req.query.finalDate, 
    );
    res.status(200).send(result);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

module.exports = {
  calculateDiffBetweenDatesController,
}