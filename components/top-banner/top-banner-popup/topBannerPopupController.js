'use strict'

unshackledApp.controller('TopBannerPopupController', function($scope, $mdDialog) {

   $scope.buttonClick = function() {
      // var clickedItem = $scope.items[$index];
      $mdDialog.hide('clickedItem');
  };

})
