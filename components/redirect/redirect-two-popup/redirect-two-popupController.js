'use strict'

unshackledApp.controller('RedirectTwoPopupController', function($scope, $mdBottomSheet) {

   $scope.yesButtonClick = function() {
      $mdBottomSheet.hide('yes');
  };

  $scope.noButtonClick = function() {
      $mdBottomSheet.hide('no');
  };

  $scope.learnMoreButtonClick = function() {
      $mdBottomSheet.hide('learn-more');
  };

});