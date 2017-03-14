'use strict'

unshackledApp.controller('RedirectOnePopupController', function($scope, $mdBottomSheet) {

   $scope.listItemClick = function() {
      // var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide('clickedItem');
  };

})