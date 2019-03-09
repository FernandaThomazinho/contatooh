module.exports = function(app) {
  var controller = app.controllers.contacts;
  app.get('/contatos', controller.index);
  app.get('/contatos/:id', controller.show);
}
