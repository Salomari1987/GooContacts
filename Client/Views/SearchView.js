//Navigation View
var SearchView = Backbone.View.extend({
  className: "input-group",
  template: _.template('<input class=form-control id=searchbox style="float:left" type=text placeholder=insert ><span class=input-group-btn><button class=btn btn-default type=button id=reset>Reset</button></span></input>'),

  events: {
    "change": function(e) {
      this.model.entry(e);
      $('#searchbox').empty()
      this.render();
    },
    "click #reset": function(){
      this.model.showall()
    }

  },

  initialize: function() {
    this.render();

  },

  render: function(){
    this.$el.append(this.$el.html(this.template))
  }
})