'use strict'

unshackledApp.controller('RedirectOnePopupController', function($scope, $mdBottomSheet) {

   $scope.yesButtonClick = function() {
      // var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide('clickedItem');
  };

})