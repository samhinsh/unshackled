'use strict'

unshackledApp.controller('LargePopupController', function($scope, $mdDialog) {

   $scope.buttonClick = function() {
      $mdDialog.hide('clickedItem');
  };

})
