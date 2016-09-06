//Contact List Entry View
//View for each contact in left contacts panel
var ContactListEntryView = Backbone.View.extend({
  
  tagName: 'li',
  className: 'contactEntry success',
  template: function() {
    //Check if the API returned a name for the contact to handle no name error
    if (this.names) {
      //Check if the API returned a phone number for the contact to handle no phone number error
      if (this.phoneNumbers) {
        return _.template('<p style:"font-weight:bold"><img src=http://image.spreadshirtmedia.com/image-server/v1/compositions/1002711894/views/1,width=280,height=280,appearanceId=16,version=1440417743.png/unisex-t-shirt-eric-dolphy-profile_design.png class="profile"> <%= names[0].displayName %></p>', this);
      }
      return _.template('<p style:"font-weight:bold"><%= names[0].displayName %></p>', this);
    } else if (this.phoneNumbers) {
      //The contact is valid but no name
      return _.template('<p style:"font-weight:bold"> No names to display</p>', this);
    }
    //The contact is invalid
    return _.template('<p style:"font-weight:bold"> No names to display</p>');
  },
  events: {
    'click': function() {
      //On contact click event, call function select on ContactModel
      this.model.select();      
    }  
  },
  render: function() {
    return this.$el.append(this.template.call(this.model.attributes, this.model.attributes));    
  }

});
