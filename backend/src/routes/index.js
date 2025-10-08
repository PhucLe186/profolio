const Feedback = require('./feedback');


function route(app) {
  app.use('/feedback', Feedback);

}

module.exports = route;
