'use strict';

unshackledApp.controller('LargeController', ['$scope', '$rootScope', '$timeout', '$mdDialog', '$mdToast',
  function ($scope, $rootScope, $timeout, $mdDialog, $mdToast) {

  	$scope.showPopup = function() {
    	$scope.alert = '';
    	var wait = $timeout(function() {
            $mdDialog.show({
	      		templateUrl: 'components/large/large-popup/largePopupTemplate.html',
	      		controller: 'LargePopupController'
    		}).then(function(clickedItem) {
      			$scope.alert = clickedItem + ' clicked!';
    		});
        }, 1000);

  	}();
  }]);
