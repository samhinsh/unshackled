'use strict';

unshackledApp.controller('FlyoutController', ['$scope', '$rootScope', '$location', '$timeout', '$mdBottomSheet', '$mdToast',
  function ($scope, $rootScope, $location, $timeout, $mdBottomSheet, $mdToast) {


  	// $scope.showPopup = function() {
   //  	$scope.alert = '';
   //  	var wait = $timeout(function() {
   //          $mdBottomSheet.show({
	  //     		templateUrl: 'components/flyout/flyout-popup/flyoutPopupTemplate.html',
	  //     		controller: 'FlyoutPopupController'
   //  		}).then(function(clickedItem) {
   //    			//$location.path('/redirect-two');
   //  		});
   //    }, 1000);

  	// }();

    $scope.showFlyoutLargePanel = function() {
      var flyoutLarge = document.getElementById("flyout-large-popup")

      // Add the "show" class to DIV
        flyoutLarge.className = "show";

        // After 3 seconds, remove the show class from DIV
        // setTimeout(function(){ 
        //   x.className = x.className.replace("show", ""); 
        //   $scope.showTellYourFriendsToast();

        // }, 3000); 
    };


    $scope.showFlyoutGivePanel = function() {
      var flyoutGive = document.getElementById("flyout-panel-give")

      // Add the "show" class to DIV
        flyoutGive.className = "show";

        // After 3 seconds, remove the show class from DIV
        // setTimeout(function(){ 
        //   x.className = x.className.replace("show", ""); 
        //   $scope.showTellYourFriendsToast();

        // }, 3000); 
    };

    $scope.hideFlyoutGivePanel = function() {

      var flyoutGive = document.getElementById("flyout-panel-give")

      // Add the "show" class to DIV
      flyoutGive.className = flyoutGive.className.replace("show", ""); 

        // After 3 seconds, remove the show class from DIV

        // setTimeout(function(){ 
        //   x.className = x.className.replace("show", ""); 
        //   // $scope.showDonatePleaseToast();

        // }, 3000);

    };


    $scope.showFlyoutPanel = function() {

      var flyout = document.getElementById("flyout-panel1")

      // Add the "show" class to DIV
        flyout.className = "show";

        // After 3 seconds, remove the show class from DIV

        // setTimeout(function(){ 
        //   x.className = x.className.replace("show", ""); 
        //   // $scope.showDonatePleaseToast();

        // }, 3000);

    }();

    $scope.hideFlyoutPanel = function() {

      var flyout = document.getElementById("flyout-panel1")

      // Add the "show" class to DIV
      flyout.className = flyout.className.replace("show", ""); 

        // After 3 seconds, remove the show class from DIV

        // setTimeout(function(){ 
        //   x.className = x.className.replace("show", ""); 
        //   // $scope.showDonatePleaseToast();

        // }, 3000);

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

    // $scope.showTellYourFriendsToast = function() {
    //   var x = document.getElementById("tell-your-friends-toast")

    //   // Add the "show" class to DIV
    //     x.className = "show";

    //     // After 3 seconds, remove the show class from DIV
    //     setTimeout(function(){ 
    //       x.className = x.className.replace("show", ""); 

    //     }, 3000);
    // }


  }]);



