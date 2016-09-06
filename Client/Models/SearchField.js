var SearchField = Backbone.Model.extend({
  value: null,
  entry: function (e) {
    this.value = e.target.value;
    //Trigger event findit
    this.trigger('findit');
  },
  showall: function() {
  	//Trigger event showall
    this.trigger('showall');
  }
});