/**
  * DropboxLib
  *
  * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';
angular.module('DropboxLib')
    .factory('ModelFactory', ['Account', 'OAuthToken',ModelFactory]);

	/**
	 * Factory service to create instances of models and exception classes
	 */
    function ModelFactory(Account, OAuthToken) {

		var classMap = {
            Account: Account,
            OAuthToken: OAuthToken
		};

		return {
		    /**
		     * Creates instance of a model class
		     * @param  modelName  {string}  Name of class to instantiate
		     * @returns  {object} Instance of the model class
		     */
			getInstance: function(modelName) {
        		return new classMap[modelName]();
			}
		};
	}

}(angular));
