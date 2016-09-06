var CLIENT_ID = window.clientId;
var SCOPES = ["https://www.googleapis.com/auth/contacts.readonly"];

//Check authentication on load
var checkAuth = function () {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult);
};
//Handle authentication result
var handleAuthResult = function (authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  //If authentication result is valid
  //Clear the authorization button
  //Otherwise keep it
  if (authResult && !authResult.error) {
    authorizeDiv.style.display = 'none';
    //Load contacts function
    loadPeopleApi();
  } else {
    authorizeDiv.style.display = 'inline';
  }
};

var handleAuthClick = function (event) {
  //If user clicks authorization button
  gapi.auth.authorize(
    {
      client_id: CLIENT_ID, 
      scope: SCOPES, 
      immediate: false
    },
    handleAuthResult);
  return false;
};

var loadPeopleApi = function () {
  //Load contacts with callback function listConnectionNames
  gapi.client.load('https://people.googleapis.com/$discovery/rest', 'v1', listConnectionNames);
};

var listConnectionNames = function () {
  var request = gapi.client.people.people.connections.list({
    'resourceName': 'people/me',
    'pageSize': '500',
    'requestMask.includeField': 'person.names,person.email_addresses,person.phone_numbers',
  });
  request.execute(function(resp) {
    //Assign connections to window
    window.connections = resp.connections;
    //If connections are return, call function function starter from StarterLoad.js
    if (resp.connections.length > 0) {
      window.starter();
    }
  }); 
};
