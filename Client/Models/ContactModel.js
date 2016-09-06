//Contact Model
var ContactModel = Backbone.Model.extend({
  select: function() {
  	//On select trigger event select
    this.trigger('select', this);
  }
});