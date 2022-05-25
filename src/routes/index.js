const fees = require('./financeRoute');
const dates = require('./datesRoutes');

module.exports = app => {
  app.use(fees);
  app.use(dates);
}