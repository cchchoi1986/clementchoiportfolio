'use strict';

angular.module('clementchoiportfolioApp')
  .controller('MainCtrl', ['$scope', '$location', '$state', '$http', '$window', '$anchorScroll', 'socket', function ($scope, $location, $state, $http, $window, $anchorScroll, socket) {
    // $scope.awesomeThings = [];

    $scope.placeMark = $state.current.url;
    console.log($scope.placeMark);

    angular.element($window).bind("scroll", function() {
      if (this.pageYOffset >= 10) {
        // $location.path("/about")
      }
    });

    // $scope.gotoAnchor = function(x) {
    //   var newHash = 'anchor' + x;
    //   if ($location.hash() !== newHash) {
    //     // set the $location.hash to `newHash` and
    //     // $anchorScroll will automatically scroll to it
    //     $location.hash('anchor' + x);
    //   } else {
    //     // call $anchorScroll() explicitly,
    //     // since $location.hash hasn't changed
    //     $anchorScroll();
    //   }
    // };

  }]);
