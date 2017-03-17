'use strict'

unshackledApp.controller('LargePopupController', function($scope, $mdDialog, $window) {

   $scope.largeDonateButtonClick = function() {
      $mdDialog.hide('clickedItem');
      $window.location.href = '/#/flyout-give';
   };

   $scope.largeLeaveButtonClick = function() {
      $mdDialog.hide('clickedItem');
      $window.location.href = 'http://wincofoods.com/';
   };

})
