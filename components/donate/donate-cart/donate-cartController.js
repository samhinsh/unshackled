'use strict';

unshackledApp.controller('DonateCartController', ['$scope', '$rootScope', '$location', '$timeout', '$mdToast',
	function ($scope, $rootScope, $location, $timeout, $mdToast) {

		$scope.showWincoIsGoodToast = function() {

			var x = document.getElementById("winco-is-good-toast")

			// Add the "show" class to DIV
    		x.className = "show";

    		// After 3 seconds, remove the show class from DIV
    		setTimeout(function(){ 
    			x.className = x.className.replace("show", ""); 
    			// $scope.showDonatePleaseToast();

    		}, 3000);

		}();

		$scope.showDonatePleaseToast = function() {
			var x = document.getElementById("donate-please-toast")

			// Add the "show" class to DIV
    		x.className = "show";

    		// After 3 seconds, remove the show class from DIV
    		setTimeout(function(){ 
    			x.className = x.className.replace("show", ""); 
    			$scope.showTellYourFriendsToast();

    		}, 3000);	
		};

		$scope.showTellYourFriendsToast = function() {
			var x = document.getElementById("tell-your-friends-toast")

			// Add the "show" class to DIV
    		x.className = "show";

    		// After 3 seconds, remove the show class from DIV
    		setTimeout(function(){ 
    			x.className = x.className.replace("show", ""); 

    		}, 3000);
		}

	}]);


