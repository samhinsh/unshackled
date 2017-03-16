'use strict';

var unshackledApp = angular.module('unshackledApp', ['ngRoute', 'ngMaterial']);

unshackledApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/redirect', {
            templateUrl: 'components/redirect/redirect-one/redirect-oneTemplate.html',
            controller: 'RedirectOneController'
        }).
        when('/redirect-two', {
            templateUrl: 'components/redirect/redirect-two/redirect-twoTemplate.html',
            controller: 'RedirectTwoController'
        }).
        when('/redirect-three', {
            templateUrl: 'components/redirect/redirect-three/redirect-threeTemplate.html',
            controller: 'RedirectThreeController'
        }).
        when('/large', {
            templateUrl: 'components/large/large-bg/largeTemplate.html',
            controller: 'LargeController'
        }).
        when('/top-banner', {
            templateUrl: 'components/top-banner/top-banner-bg/topBannerTemplate.html',
            controller: 'TopBannerController'
        }).
        when('/flyout', {
            templateUrl: 'components/flyout/flyout/flyoutTemplate.html',
            controller: 'FlyoutController'
        }).
        when('/flyout-popup', {
            templateUrl: 'components/flyout/flyout-popup/flyoutPopupTemplate.html',
            controller: 'FlyoutPopupController'
        }).
        otherwise({
            redirectTo: '/redirect'
        });
    }]);

unshackledApp.controller('MainController', ['$scope', '$rootScope',
  function ($scope, $rootScope) {


}]);
