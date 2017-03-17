'use strict'

unshackledApp.controller('TopBannerPopupController', function($scope, $mdDialog) {

   $scope.yesButtonClick = function() {
      // var clickedItem = $scope.items[$index];
      $mdDialog.hide('clickedItem');
  };

})
