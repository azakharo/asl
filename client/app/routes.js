'use strict';

angular.module('projectsApp').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/kasu/test');

    // Application routes
    $stateProvider
      .state('main', {
        abstract: true,
        url: '/kasu',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main.test', {
        url: '/test',
        templateUrl: 'app/test/test.html',
        controller: 'TestCtrl'
      });
  }
]);
