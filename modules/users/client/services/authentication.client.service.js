'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [

	function() {

		// console.log('fomr auth', JSON.stringify(window.user));

		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
