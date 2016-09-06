var SearchField = Backbone.Model.extend({
  value: null,
  entry: function (e) {
    this.value = e.target.value;
    this.trigger('findit');
  },
  showall: function() {
    this.trigger('showall');
  }
});