'use strict';

var unshackledApp = angular.module('unshackledApp', ['ngMaterial', 'ngRoute', 'ngMessages']);

unshackledApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/redirect', {
            templateUrl: 'components/redirect/redirect-one/redirect-oneTemplate.html',
            controller: 'RedirectOneController'
        }).
        otherwise({
            redirectTo: '/redirect'
        });
    }]);

unshackledApp.controller('MainController', ['$scope', '$rootScope',
  function ($scope, $rootScope) {

    
}]);
