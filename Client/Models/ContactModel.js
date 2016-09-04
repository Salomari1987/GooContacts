//Contact Model
var ContactModel = Backbone.Model.extend({
	select: function(){
		this.trigger('select', this)
	},
})