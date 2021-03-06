var express = require('express');
var load = require('express-load');

module.exports = function() {
  var app = express();

  // environment variables
  app.set('port', 3000);

  // middlewares
  app.use(express.static('./public'));

  load('models', {cwd: 'app'})
      .then('controllers')
      .then('routes')
      .into(app);

  //template engine
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  return app;
}
