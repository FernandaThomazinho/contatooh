var contacts = [
  {_id: 1, nome: 'Contato Exemplo 1',
   email: 'cont1@company.com'},
  {_id: 2, nome: 'Contato Exemplo 2',
   email: 'cont2@company.com'},
  {_id: 3, nome: 'Contato Exemplo 3',
   email: 'cont3@company.com'}
];

module.exports = function() {
  var controller = {};

  controller.index = function(req, res) {
    res.json(contacts);
  };

  controller.show = function(req, res) {
    var idContato = req.params.id;
    var contact = contacts.filter(function(contact) {
      return contact._id == idContato;
    })[0];
    if (contact) {
      res.json(contact);
    } else {
      res.status(404).send('Contato não encontrado');
    }
  };

  return controller;
}
