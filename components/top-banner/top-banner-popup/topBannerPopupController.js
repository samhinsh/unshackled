'use strict'

unshackledApp.controller('TopBannerPopupController', function($scope, $mdDialog, $window) {

   $scope.topDonateButtonClick = function() {
      $mdDialog.hide('clickedItem');
      $window.location.href = '/#/flyout-give';
  };

})
