var starter = function() {
  //Initialize models
  var contacts = new Contacts(connections);
  var searchfield = new SearchField();
  var app = new AppModel({contacts: contacts,
                          searchfield: searchfield
                        });
  //Initialize views
  var appView = new AppView({model: app});
  $('body').append(appView.render());
};