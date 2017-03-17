'use strict';

unshackledApp.controller('FlyoutController', ['$scope', '$rootScope', '$location', '$timeout', '$mdBottomSheet', '$mdToast',
  function ($scope, $rootScope, $location, $timeout, $mdBottomSheet, $mdToast) {


    $scope.showFlyoutLargePanel = function() {
      var flyoutLarge = document.getElementById("flyout-large-popup")
      flyoutLarge.className = "show";

    };


    $scope.showFlyoutGivePanel = function() {
      var flyoutGive = document.getElementById("flyout-panel-give")
      flyoutGive.className = "show";
    };

    $scope.hideFlyoutGivePanel = function() {

      var flyoutGive = document.getElementById("flyout-panel-give")

      setTimeout(function(){ 
        flyoutGive.className = flyoutGive.className.replace("show", "");
      }, 500);

    };


    $scope.showFlyoutPanel = function() {

      var flyout = document.getElementById("flyout-panel1")

        flyout.className = "show";

    }();

    $scope.hideFlyoutPanel = function() {

      var flyout = document.getElementById("flyout-panel1")

      flyout.className = flyout.className.replace("show", ""); 

    };

    $scope.showTellYourFriendsToast = function() {
      var x = document.getElementById("tell-your-friends-toast")

        x.className = "show";

        setTimeout(function(){ 
          x.className = x.className.replace("show", ""); 

        }, 3000);
    }

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


  }]);



