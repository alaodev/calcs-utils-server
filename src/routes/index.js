const fees = require('./financeRoute');
const dates = require('./datesRoutes');
const email = require('./emailRoutes');

module.exports = app => {
  app.use(fees);
  app.use(dates);
  app.use(email);
}