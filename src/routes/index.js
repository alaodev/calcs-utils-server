const fees = require('./financeRoute');

module.exports = app => {
  app.use(fees);
}