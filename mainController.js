'use strict';

var unshackledApp = angular.module('unshackledApp', ['ngRoute', 'ngMaterial']);

unshackledApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/redirect', {
            templateUrl: 'components/redirect/redirect/redirectTemplate.html',
            controller: 'RedirectController'
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
        when('/flyout-give', {
            templateUrl: 'components/flyout/flyout-give/flyoutGiveTemplate.html',
            controller: 'FlyoutGiveController'
        }).
        when('/donate-cart', {
            templateUrl: 'components/donate/donate-cart/donate-cartTemplate.html',
            controller: 'DonateCartController'
        }).
        otherwise({
            redirectTo: '/redirect'
        });
    }]);

unshackledApp.controller('MainController', ['$scope', '$rootScope',
  function ($scope, $rootScope) {


}]);
