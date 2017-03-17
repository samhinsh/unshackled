'use strict';

unshackledApp.controller('RedirectController', ['$scope', '$rootScope', '$location', '$timeout', '$mdBottomSheet', '$mdToast',
  function ($scope, $rootScope, $location, $timeout, $mdBottomSheet, $mdToast) {

   $scope.showFlyoutButton = function() {
      var flyoutButton = document.getElementById("flyout-button");
      flyoutButton.className = "show";
    };

    $scope.hideFlyoutButton = function() {
      var flyoutButton = document.getElementById("flyout-button");
      flyoutButton.className = flyoutButton.className.replace("show", "");
    };

    $scope.flyoutMoreInfoPanelPetitionButton = function() {
      console.log("Pressed more info's petition button");
      $scope.hideFlyoutLargePanel();
      $scope.showFlyoutButton();
    };

    $scope.showFlyoutLargePanel = function() {
      var flyoutLarge = document.getElementById("flyout-large-popup");
      flyoutLarge.className = "show";

    };

    $scope.hideFlyoutLargePanel = function() {
      var flyoutLarge = document.getElementById("flyout-large-popup");
      flyoutLarge.className = flyoutLarge.className.replace("show", "");
    };
   
    $scope.flyoutMoreInfoPanelDonateButton = function() {
      console.log("Pressed more info's donate button");
      $scope.hideFlyoutLargePanel();
      $scope.showFlyoutGivePanel();
    };

    $scope.showFlyoutGivePanel = function() {
      var flyoutGive = document.getElementById("flyout-panel-give");
      flyoutGive.className = "show";
    };

    $scope.hideFlyoutGivePanel = function() {
      var flyoutGive = document.getElementById("flyout-panel-give");
      flyoutGive.className = flyoutGive.className.replace("show", "");

    };

    $scope.showTellYourFriendsToast = function() {
      var x = document.getElementById("tell-your-friends-toast")

        x.className = "show";

        setTimeout(function(){ 
        x.className = x.className.replace("show", "");
        $scope.showFlyoutButton();
      }, 3000);
    };

    $scope.showFlyoutPanel = function() {
      var flyout = document.getElementById("flyout-panel1");
      flyout.className = "show";

    };

    $scope.hideFlyoutPanel = function() {
      var flyout = document.getElementById("flyout-panel1");
      flyout.className = flyout.className.replace("show", ""); 
    }

    $scope.donateDonate = function() {
      var toast = document.getElementById("donate-please-toast");
      toast.className = toast.className.replace("show", "");
      $scope.showFlyoutGivePanel();
    }

    $scope.hideFlyoutGivePanel = function() {
      var flyoutGive = document.getElementById("flyout-panel-give");
      flyoutGive.className = flyoutGive.className.replace("show", "");

    };

    $scope.flyoutPanel1DonateButton = function() {
      console.log("Pressed donate button");
      $scope.hideFlyoutPanel();
      $scope.showFlyoutGivePanel();
    };

    $scope.flyoutPanel1InfoButton = function() {
      console.log("Pressed info button");
      $scope.hideFlyoutPanel();
      $scope.showFlyoutLargePanel();
    };

    $scope.flyoutPanelDonateButton2 = function() {
      console.log("Pressed give's donate button");
      $scope.hideFlyoutGivePanel();
      $scope.showTellYourFriendsToast();
    };

    $scope.flyoutMoreInfoPanelDonateButton = function() {
      console.log("Pressed more info's donate button");
      $scope.hideFlyoutLargePanel();
      $scope.showFlyoutGivePanel();
    };

    $scope.flyoutMoreInfoPanelPetitionButton = function() {
      console.log("Pressed more info's petition button");
      $scope.hideFlyoutLargePanel();
      $scope.showFlyoutButton();
    };

    $scope.flyoutButton = function() {
      console.log("Pressed the show-flyout button");
      $scope.showFlyoutPanel();
      $scope.hideFlyoutButton();
    };

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
              $scope.showFlyoutGivePanel();
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

