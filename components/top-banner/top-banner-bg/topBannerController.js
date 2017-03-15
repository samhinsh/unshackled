'use strict';

unshackledApp.controller('TopBannerController', ['$scope', '$rootScope', '$timeout', '$mdDialog', '$mdToast',
  function ($scope, $rootScope, $timeout, $mdDialog, $mdToast) {

  	$scope.showPopup = function() {
    	$scope.alert = '';
    	var wait = $timeout(function() {
            $mdDialog.show({
	      		templateUrl: 'components/top-banner/top-banner-popup/topBannerPopupTemplate.html',
	      		controller: 'TopBannerPopupController'
    		}).then(function(clickedItem) {
      			$scope.alert = clickedItem + ' clicked!';
    		});
        }, 1000);

  	}();
  }]);
