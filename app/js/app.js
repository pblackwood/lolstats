'use strict';

/* App Module */

var lolstatsApp = angular.module('lolstatsApp', [
  'ngRoute',
  'lolstatsControllers',
  'lolstatsFilters',
  'lolstatsServices'
]);

lolstatsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/summoners', {
        templateUrl: 'partials/summoner-list.html',
        controller: 'SummonerListCtrl'
      }).
      when('/summoners/:loginName', {
        templateUrl: 'partials/summoner-detail.html',
        controller: 'SummonerDetailCtrl'
      }).
      otherwise({
        redirectTo: '/summoners'
      });
  }]);
