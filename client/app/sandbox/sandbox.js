'use strict';

angular.module('clementchoiportfolioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sandbox', {
        url: '/sandbox',
        templateUrl: 'app/sandbox/sandbox.html',
        controller: 'SandboxCtrl'
      });
  });