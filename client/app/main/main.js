'use strict';

angular.module('clementchoiportfolioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        onEnter: function() {

        }
      });
  });