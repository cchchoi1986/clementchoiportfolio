'use strict';

angular.module('clementchoiportfolioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sandbox', {
        url: 'y',
        templateUrl: '../y/sandbox/sandbox.html',
        controller: 'SandboxCtrl'
      });
  });