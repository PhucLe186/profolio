const Feedback = require('./feedback');
const Data=require('./Data')


function route(app) {
  app.use('/feedback', Feedback);
  app.use('/data', Data);

}

module.exports = route;
