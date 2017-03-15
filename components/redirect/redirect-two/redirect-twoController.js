'use strict';

unshackledApp.controller('RedirectTwoController', ['$scope', '$rootScope', '$location', '$timeout', '$mdBottomSheet', '$mdToast',
  function ($scope, $rootScope, $location, $timeout, $mdBottomSheet, $mdToast) {

  	$scope.showPopup = function() {
    	$scope.alert = '';
    	var wait = $timeout(function() {
            $mdBottomSheet.show({
	      		templateUrl: 'components/redirect/redirect-two-popup/redirect-two-popupTemplate.html',
	      		controller: 'RedirectTwoPopupController'
    		}).then(function(action) {
      			$scope.alert = action + ' clicked!';
            $location.path('/redirect-three');
    		});
        }, 1000);

  	}();
  }]);