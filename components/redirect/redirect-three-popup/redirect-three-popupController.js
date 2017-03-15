'use strict'

unshackledApp.controller('RedirectThreePopupController', function($scope, $mdBottomSheet) {

   $scope.visitButtonClick = function() {
      $mdBottomSheet.hide('visit-winco');
  };

  $scope.donateButtonClick = function() {
      $mdBottomSheet.hide('donate');
  };

});