var starter = function() {
  var contacts = new Contacts(connections);
  var searchfield = new SearchField();
  var app = new AppModel({contacts: contacts,
                          searchfield: searchfield
                        });
  var appView = new AppView({model: app});
  $('body').append(appView.render());
};