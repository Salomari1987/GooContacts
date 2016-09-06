//Contact List View
var ContactListView = Backbone.View.extend({
  //Configure responsive bootrap class
  className: 'col-md-4 col-sm-3',
  //Display list of contacts as pills
  template: _.template('<ul id=listof class="nav nav-pills"></ul>'),
  initialize: function() {
    //Render on event change or reset of collection
    this.collection.on('change reset', this.render, this);
    this.render();
  },

  render: function() {
    //Empty previous data
    this.$el.children().detach();
    //Load template
    this.$el.append(this.template());
    //Find element with id = listof
    this.$('#listof').append(
      //Render through component view contact list entry view, and map collection to model
      this.collection.map(function(contact) {
        return new ContactListEntryView({model: contact}).render();
      }));
  }

});
