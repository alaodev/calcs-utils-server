const fees = require('./feesRoute');

module.exports = app => {
  app.use(fees);
}