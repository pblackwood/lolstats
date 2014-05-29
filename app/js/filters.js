'use strict';

/* Filters */

angular.module('lolstatsFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
