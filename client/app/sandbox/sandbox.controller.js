'use strict';

angular.module('clementchoiportfolioApp')
  .controller('SandboxCtrl', ['$scope', '$location', '$state', function ($scope, $location, $state) {
    // $scope.message = 'Hello';
    $scope.placeMark = $state.current.url;
  }]);
