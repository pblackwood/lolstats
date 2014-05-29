'use strict';

/* Services */

var lolstatsServices = angular.module('lolstatsServices', ['ngResource']);

lolstatsServices.factory('Summoner', ['$resource',
  function($resource){
    return $resource('https://prod.api.pvp.net/api/lol/na/v1.4/summoner/by-name/:loginName?api_key=:apiKey', {}, {});
  }]);
