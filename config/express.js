var express = require('express');
var home = require('../app/routes/home');

module.exports = function() {
  var app = express();

  // environment variables
  app.set('port', 3000);

  // middlewares
  app.use(express.static('./public'));

  home(app);

  //template engine
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  return app;
}
