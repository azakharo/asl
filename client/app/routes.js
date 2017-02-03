'use strict';

angular.module('projectsApp').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/asl/test');

    // Application routes
    $stateProvider
      .state('main', {
        abstract: true,
        url: '/asl',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main.test', {
        url: '/test',
        templateUrl: 'app/test/test.html',
        controller: 'TestCtrl'
      })
      .state('main.sysinfo', {
        url: '/sysinfo',
        templateUrl: 'app/sysinfo/sysinfo.html',
        controller: 'SysInfoCtrl'
      });
  }
]);
