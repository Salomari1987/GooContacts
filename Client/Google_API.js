var ClientID = window.CLIENT_ID;
var SCOPES = ['https://www.googleapis.com/auth/contacts.readonly'];

var checkAuth = function () {
  gapi.auth.authorize(
    {
      'client_id': ClientID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult);
};

var handleAuthResult = function (authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    authorizeDiv.style.display = 'none';
    loadPeopleApi();
  } else {
    authorizeDiv.style.display = 'inline';
  }
};

var handleAuthClick = function (event) {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult);
  return false;
};

var loadPeopleApi = function () {
  gapi.client.load('https://people.googleapis.com/$discovery/rest', 'v1', listConnectionNames);
};

var listConnectionNames = function () {
  var request = gapi.client.people.people.connections.list({
    'resourceName': 'people/me',
    'pageSize': '500',
    'requestMask.includeField': 'person.names,person.email_addresses,person.phone_numbers',
  });
  request.execute(function(resp) {
    window.connections = resp.connections;
    if (resp.connections.length > 0) {
      window.starter();
    }
  }); 
};
