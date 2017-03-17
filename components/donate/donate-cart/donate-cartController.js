'use strict';

unshackledApp.controller('DonateCartController', ['$scope', '$rootScope', '$window', '$location', '$timeout', '$mdToast',
	function ($scope, $rootScope, $window, $location, $timeout, $mdToast) {

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

		$scope.donate = function() {
			console.log('yes, still registers');
			$scope.showTellYourFriendsToast();
			var win = $window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3A9URHKC8XYWS', '_blank');
  			win.focus();
  			
		}

		$scope.showDonatePleaseToast = function() {
			var x = document.getElementById("donate-please-toast")

			// Add the "show" class to DIV
    		x.className = "show";

    		// After 3 seconds, remove the show class from DIV
    		setTimeout(function(){ 
    			x.className = x.className.replace("show", ""); 
    			console.log('here');
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


