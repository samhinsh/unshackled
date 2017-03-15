'use strict';

unshackledApp.controller('RedirectThreeController', ['$scope', '$rootScope', '$timeout', '$mdBottomSheet', '$mdToast',
  function ($scope, $rootScope, $timeout, $mdBottomSheet, $mdToast) {

  	$scope.showPopup = function() {
    	$scope.alert = '';
    	var wait = $timeout(function() {
            $mdBottomSheet.show({
	      		templateUrl: 'components/redirect/redirect-three-popup/redirect-three-popupTemplate.html',
	      		controller: 'RedirectThreePopupController'
    		}).then(function(clickedItem) {
      			$scope.alert = clickedItem + ' clicked!';
    		});
        }, 1000);

  	}();
  }]);