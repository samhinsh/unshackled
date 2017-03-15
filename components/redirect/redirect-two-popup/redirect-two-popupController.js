'use strict'

unshackledApp.controller('RedirectTwoPopupController', function($scope, $mdBottomSheet) {

   $scope.yesButtonClick = function() {
      // var clickedItem = $scope.items[$index];
      console.log('here');
      $mdBottomSheet.hide('clickedItem');
  };

});