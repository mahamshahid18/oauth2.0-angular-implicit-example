var app = angular.module('OAuthTest', ['DropboxLib']);

app.controller('oauthClientController', function($scope,
    OAuthManager,
    AccountController) {

    var scopes = [];
    var promise = OAuthManager.retrieveAndSetAccessToken(scopes, '', true);
    promise.then(function(success) {
        console.log(success);
        
        // client successfully authorized
        // make API calls as required
        var result = AccountController.getAccountInfo();
        result.then(function(response) {
            console.log(response);
        }, function(err){
            console.log(err);
        });
    });
});