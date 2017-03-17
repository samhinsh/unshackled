'use strict';

unshackledApp.controller('FlyoutGiveController', ['$scope', '$rootScope', '$timeout', '$mdBottomSheet', '$mdToast',
  function ($scope, $rootScope, $timeout, $mdBottomSheet, $mdToast) {

  	$scope.showPopup = function() {
      $scope.alert = '';
      var wait = $timeout(function() {
            $mdBottomSheet.show({
            templateUrl: 'components/flyout/flyout-give-popup/flyoutGivePopupTemplate.html',
            controller: 'FlyoutGivePopupController'
        }).then(function(clickedItem) {
            //$location.path('/redirect-two');
        });
      }, 1000);

    }();
  }]);


