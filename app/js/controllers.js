'use strict';

/* Controllers */

var lolstatsControllers = angular.module('lolstatsControllers', []);

lolstatsControllers.controller('SummonerListCtrl', ['$scope', 'Summoner',
  function($scope, Summoner) {
    $scope.summoners = Summoner.query();
  }]);

lolstatsControllers.controller('SummonerDetailCtrl', ['$scope', '$routeParams', 'Summoner',
  function($scope, $routeParams, Summoner) {
    $scope.summoner = Summoner.get({loginName: $routeParams.loginName, apiKey: '92e3166a-42a5-4d36-8a04-b6760df10702'});
  }]);
