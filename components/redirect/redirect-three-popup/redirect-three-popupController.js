'use strict'

unshackledApp.controller('RedirectThreePopupController', function($scope, $mdBottomSheet) {

   $scope.yesButtonClick = function() {
      // var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide('clickedItem');
  };

});