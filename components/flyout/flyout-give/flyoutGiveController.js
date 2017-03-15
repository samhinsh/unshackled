'use strict';

unshackledApp.controller('flyoutController', ['$scope', '$rootScope', '$timeout', '$mdBottomSheet', '$mdToast',
  function ($scope, $rootScope, $timeout, $mdBottomSheet, $mdToast) {

  	$scope.showFlyoutPopup = function() {
    	$scope.alert = '';
    	var wait = $timeout(function() {
            $mdBottomSheet.show({
	      		templateUrl: 'components/flyout/',
	      		controller: ''
    		}).then(function(clickedItem) {
      			$scope.alert = clickedItem + ' clicked!';
    		});
      }, 1000);

  	}();
  }]);
