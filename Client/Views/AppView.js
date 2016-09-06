// AppView.js - Defines a backbone view class for the whole app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    //Initialize view of selected contact
    this.contactView = new ContactView({model: this.model.get('currContact')});
    //Initialize view of contacts list
    this.contactlistView = new ContactListView({collection: this.model.get('contacts')});
    //Initialize view of search field
    this.searchView = new SearchView({model: this.model.get('searchfield')});
    //Change current contact view as user selects a different contact
    this.model.on('change:currContact', function(model) {
      this.contactView.chooseContact(model.get('currContact'));
    }, this);
  },
  render: function() {
    return this.$el.html([
      this.searchView.$el,
      this.contactlistView.$el,
      this.contactView.$el,
    ]);
  }
});
