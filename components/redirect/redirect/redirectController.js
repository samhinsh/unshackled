'use strict';

unshackledApp.controller('RedirectController', ['$scope', '$rootScope', '$location', '$timeout', '$mdBottomSheet', '$mdToast',
  function ($scope, $rootScope, $location, $timeout, $mdBottomSheet, $mdToast) {

  	$scope.showPopup = function() {
    	$scope.alert = '';
    	var wait = $timeout(function() {
            $mdBottomSheet.show({
	      		templateUrl: 'components/redirect/redirect-one-popup/redirect-one-popupTemplate.html',
	      		controller: 'RedirectOnePopupController'
    		}).then(function() {
            $scope.showSecondPopup();
    		});
        }, 1000);

  	}();

    $scope.showSecondPopup = function() {
      $scope.alert = '';
      var wait = $timeout(function() {
            $mdBottomSheet.show({
            templateUrl: 'components/redirect/redirect-two-popup/redirect-two-popupTemplate.html',
            controller: 'RedirectTwoPopupController'
        }).then(function(action) {
            $scope.alert = action + ' clicked!';
            $scope.showThirdPopup();
        });
        }, 1000);

    };

    $scope.showThirdPopup = function() {
      $scope.alert = '';
      var wait = $timeout(function() {
            $mdBottomSheet.show({
            templateUrl: 'components/redirect/redirect-three-popup/redirect-three-popupTemplate.html',
            controller: 'RedirectThreePopupController'
        }).then(function(action) {
            $scope.alert = action + ' clicked!';
        });
        }, 1000);

    };
  }]);
