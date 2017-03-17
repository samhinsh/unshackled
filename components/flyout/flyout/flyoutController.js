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
      var x = document.getElementById("flyout-large-popup")

      // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        // setTimeout(function(){ 
        //   x.className = x.className.replace("show", ""); 
        //   $scope.showTellYourFriendsToast();

        // }, 3000); 
    };


    $scope.showFlyoutGivePanel = function() {
      var x = document.getElementById("flyout-panel-give")

      // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        // setTimeout(function(){ 
        //   x.className = x.className.replace("show", ""); 
        //   $scope.showTellYourFriendsToast();

        // }, 3000); 
    };


    $scope.showFlyoutPanel = function() {

      var x = document.getElementById("flyout-panel1")

      // Add the "show" class to DIV
        x.className = "show";
        console.log("Hey from outside!");

        // After 3 seconds, remove the show class from DIV

        // setTimeout(function(){ 
        //   x.className = x.className.replace("show", ""); 
        //   // $scope.showDonatePleaseToast();

        // }, 3000);

    }();

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



