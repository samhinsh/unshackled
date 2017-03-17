'use strict'

unshackledApp.controller('LargePopupController', function($scope, $mdDialog, $window) {

   $scope.largeDonateButtonClick = function() {
      $mdDialog.hide('clickedItem');
      $window.location.href = '/#/flyout-give';
   };

   $scope.largePetitionButtonClick = function() {
      $mdDialog.hide('clickedItem');
      $window.location.href = '/#/flyout-give';
   };

})
