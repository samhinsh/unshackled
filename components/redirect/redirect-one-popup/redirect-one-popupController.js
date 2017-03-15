'use strict'

unshackledApp.controller('RedirectOnePopupController', function($scope, $mdBottomSheet) {

   $scope.buttonClick = function() {
      $mdBottomSheet.hide();
  };

})