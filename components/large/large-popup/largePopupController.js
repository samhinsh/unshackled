'use strict'

unshackledApp.controller('LargePopupController', function($scope, $mdDialog) {

   $scope.yesButtonClick = function() {
      // var clickedItem = $scope.items[$index];
      $mdDialog.hide('clickedItem');
  };

})
