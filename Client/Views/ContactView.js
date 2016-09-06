//ContactView
//View of current selected contact in middle of screen
var ContactView = Backbone.View.extend({
  className: 'col-md-8 contact',
  events: {
    'click': function() {
      //If contact is clicked, clear screen
      this.$el.children().detach();
    }  
  },
  template: function() {
    if (this.names) {
      if (this.phoneNumbers) {
        return _.template('<td><p id=contactview>Full Name: <%= names[0].displayName %><br>Phone Number: <%= phoneNumbers[0].value %></p></td>', this);
      }
      return _.template('<td><p id=contactview>Full Name: <%= names[0].displayName %><br>Phone Number: No phone numbers to display</p></td>', this);
    } else if (this.phoneNumbers) {
      return _.template('<td><p id=contactview> Full Name: No names to display<br>Phone Number: <%= phoneNumbers[0].value %></p></td>', this);
    }
    return _.template('<td><p id=contactview> Full Name: No names to display<br>Phone Number: No phone numbers to display</p></td>');
  },
  initialize: function() {
  },
  chooseContact: function(contact) {
    this.model = contact;
    this.render();
  },
  render: function() {
    this.$el.children().detach();
    this.$el.append('<img id=currentContact src=http://image.spreadshirtmedia.com/image-server/v1/compositions/1002711894/views/1,width=280,height=280,appearanceId=16,version=1440417743.png/unisex-t-shirt-eric-dolphy-profile_design.png>').append(this.template.call(this.model.attributes));
  }
});
