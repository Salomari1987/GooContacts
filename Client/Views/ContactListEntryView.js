//Contact List Entry View
var ContactListEntryView = Backbone.View.extend({
  tagName: 'li',
  className: 'contactEntry success',
  template: function() {
    if (this.names) {
      if (this.phoneNumbers) {
        return _.template('<p style:"font-weight:bold"><img src=http://image.spreadshirtmedia.com/image-server/v1/compositions/1002711894/views/1,width=280,height=280,appearanceId=16,version=1440417743.png/unisex-t-shirt-eric-dolphy-profile_design.png class="profile"> <%= names[0].displayName %></p>', this);
      }
      return _.template('<p style:"font-weight:bold"><%= names[0].displayName %></p>', this);
    } else if (this.phoneNumbers) {
      return _.template('<p style:"font-weight:bold"> No names to display</p>', this);
    }
    return _.template('<p style:"font-weight:bold"> No names to display</p>');
  },
  events: {
    'click': function() {
      this.model.select();      
    }  
  },
  render: function() {
    return this.$el.append(this.template.call(this.model.attributes, this.model.attributes));    
  }

});
