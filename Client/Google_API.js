var CLIENT_ID = '537919715943-0esd8scuapa7ass03d1v3r23hd1g7epe.apps.googleusercontent.com';
var SCOPES = ["https://www.googleapis.com/auth/contacts.readonly"];

function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    authorizeDiv.style.display = 'none';
    loadPeopleApi();
  } else {
    authorizeDiv.style.display = 'inline';
  }
}
function handleAuthClick(event) {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult);
  return false;
}

function loadPeopleApi() {
  gapi.client.load('https://people.googleapis.com/$discovery/rest', 'v1', listConnectionNames);
}
function listConnectionNames() {
  var request = gapi.client.people.people.connections.list({
     'resourceName': 'people/me',
     'pageSize': '500',
     'requestMask.includeField': 'person.names,person.email_addresses,person.phone_numbers',
   });
   request.execute(function(resp) {
      window.connections = resp.connections
      if(resp.connections.length>0){
        window.starter();
      }
   }); 
}
