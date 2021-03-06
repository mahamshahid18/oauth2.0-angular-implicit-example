/**
  * DropboxLib
  *
  * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('DropboxLib')
    .factory('AccountController', ['$q',
        'Configuration',
        'Servers',
        'HttpClient',
        'APIHelper',
        'BaseController',
        'OAuthManager',
        AccountController
    ]);

    function AccountController($q, Configuration, Servers, HttpClient, APIHelper, BaseController, OAuthManager) {
        return {
            /**
             * @todo Add general description for this endpoint
             *
             *
             * @return {promise<Account>}
             */
            getAccountInfo: function () {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.getBaseUri();
                var _queryBuilder = _baseUri + '/users/get_current_account';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json'
                };

                var oauthTokenPromise = OAuthManager.isTokenRetrievedAndSet();
                oauthTokenPromise.then(function(resolve) {
                    _headers.Authorization = 'Bearer ' + Configuration.oAuthToken.accessToken;
                }, function(reject) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                oauthTokenPromise.then(function(success) {
                    var _response = new HttpClient(_config);
                    
                    //process response
                    _response.then(function success(_result) {
                        var parsed = _result.body;
                        parsed = BaseController.getObjectMapper().mapObject(parsed, 'Account');
                        _result.body = parsed;
                        _deffered.resolve(_result);
                    }, function error(_result){
                        // Error handling for custom HTTP status codes
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'HTTP Response Not OK',
                            errorCode: _result.code,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    });
                }, function(err) {
                    var errorModel = OAuthManager.getInvalidClientError();
                    _deffered.reject(errorModel);
                });
                
                return _deffered.promise;
            }
        };
    }

}(angular));
