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
            if (action === 'yes') {
              $location.path('/donate-cart');
            } else if (action === 'learn-more') {
              $scope.showThirdPopup();
            } else {
              $scope.showDonatePleaseToast();

            }  
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
            if (action === 'visit-winco') {
              $location.path('/donate-cart');
            } else if (action === 'donate') {

            }
        });
        }, 1000);

    };

    $scope.showDonatePleaseToast = function() {
      var x = document.getElementById("donate-please-toast")

      // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ 
          x.className = x.className.replace("show", ""); 
          // $scope.showTellYourFriendsToast();

        }, 5000); 

        
    };

    $scope.removeDonatePleaseToast = function() {

    }

  }]);

