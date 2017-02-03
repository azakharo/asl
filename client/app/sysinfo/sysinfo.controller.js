'use strict';

angular.module('projectsApp')
  .controller('SysInfoCtrl', function ($scope) {
    //*******************************************
    // Start up code

    $scope.serial = "X12DND05";
    $scope.firmwareVer = "1.03";
    $scope.soundEncoding = "PCM";
    $scope.timestamp = moment();
    $scope.uptime = "10:12:33";
    $scope.sysLoad = "10%";
    $scope.diskUsage = "77%";
    $scope.macAddress = "78:00:9E:22:E9:CE";
    $scope.gateway = "10.10.12.161";
    $scope.dnsServer = "dns1.mgch.ru";

    // Start up code
    //*******************************************


    ////////////////////////////////////////////////
    // Implementation

  });
