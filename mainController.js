'use strict';

var unshackledApp = angular.module('unshackledApp', ['ngRoute', 'ngMaterial']);

unshackledApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/redirect', {
            templateUrl: 'components/redirect/redirect-one/redirect-oneTemplate.html',
            controller: 'RedirectOneController'
        }).
        when('/large', {
            templateUrl: 'components/large/large-sized/largeTemplate.html',
            controller: 'LargeController'
        }).
        otherwise({
            redirectTo: '/redirect'
        });
    }]);

unshackledApp.controller('MainController', ['$scope', '$rootScope',
  function ($scope, $rootScope) {


}]);
