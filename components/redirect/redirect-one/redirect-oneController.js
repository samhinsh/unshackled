'use strict';

unshackledApp.controller('RedirectOneController', ['$scope', '$rootScope', '$timeout', '$mdBottomSheet', '$mdToast',
  function ($scope, $rootScope, $timeout, $mdBottomSheet, $mdToast) {

  	$scope.showPopup = function() {
    	$scope.alert = '';
    	var wait = $timeout(function() {
            $mdBottomSheet.show({
	      		templateUrl: 'components/redirect/redirect-one-popup/redirect-one-popupTemplate.html',
	      		controller: 'RedirectOnePopupController'
    		}).then(function(clickedItem) {
      			$scope.alert = clickedItem + ' clicked!';
    		});
        }, 1000);

  	}();
  }]);
