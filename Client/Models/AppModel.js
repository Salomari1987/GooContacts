//App Model
var AppModel = Backbone.Model.extend({
  initialize: function(params) {
    this.set('currContact', new ContactModel());
    params.searchfield.on('findit', function (f) {
      //Return all matches of search field entry
      var searchin = new RegExp(this.value.toLowerCase(), 'gi');
      var results = _.filter(params.contacts.models, function(data) {
        //Find all matching fields based on display name or phone number
        return searchin.test(data.get('names') ? data.get('names')[0].displayName : null) || searchin.test(data.get('phoneNumbers') ? data.get('phoneNumbers')[0].value : null);
      });
      params.contacts.reset(results);
    });
    params.contacts.on('select', function(contact) {
      //If contact is selected (select event from model) then set current contact to selected contact
      this.set('currContact', contact);
    }, this);
    params.searchfield.on('showall', function() {
      //Rerender all connections that were captured from the API
      params.contacts.reset(connections);
    });
  }
}); 