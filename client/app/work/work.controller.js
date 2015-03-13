'use strict';

angular.module('clementchoiportfolioApp')
  .controller('WorkCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    // $scope.message = 'Hello';
    $scope.test = function() {
      console.log($stateParams);
    };

    $scope.projects = [
      {
        name: "HikeHK",
        collaborators: "Clement Choi, Cassie Mak",
        description: '',
        image: '',
        url: 'http://hikehk.herokuapp.com'
      },
      {
        name: "RecipeDB.me",
        collaborators: "Clement Choi, Denis Cheung",
        description: '',
        image: '',
        url: 'http://recipedb-me.herokuapp.com'
      },
      {
        name: "The Game Exchange",
        collaborators: "Clement Choi",
        description: '',
        image: '',
        url: 'http://cchchoi1986-thegameexchange.herokuapp.com'
      }
    ]

  }]);
