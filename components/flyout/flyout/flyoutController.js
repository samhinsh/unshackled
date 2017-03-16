'use strict';

unshackledApp.controller('FlyoutController', ['$scope', '$rootScope', '$location', '$timeout', '$mdBottomSheet', '$mdToast',
  function ($scope, $rootScope, $location, $timeout, $mdBottomSheet, $mdToast) {

  	$scope.showPopup = function() {
    	$scope.alert = '';
    	var wait = $timeout(function() {
            $mdBottomSheet.show({
	      		templateUrl: 'components/flyout/flyout-popup/flyoutPopupTemplate.html',
	      		controller: 'FlyoutPopupController'
    		}).then(function(clickedItem) {
      			//$location.path('/redirect-two');
    		});
      }, 1000);

  	}();
  }]);



