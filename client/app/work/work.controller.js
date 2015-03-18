'use strict';

angular.module('clementchoiportfolioApp')
  .controller('WorkCtrl', ['$scope', '$location', '$state', function ($scope, $location, $state) {
    // $scope.message = 'Hello';
    $scope.placeMark = $state.current.url;
    $scope.projects = [
      {
        name: "HikeHK",
        collaborators: "Clement Choi, Cassie Mak",
        description: "A hiking website and mobile app built for Hong Kong hiking community.  Within, we included weather information, local flora & fauna.",
        image: 'HikeHK.png',
        url: 'http://hikehk.herokuapp.com'
      },
      {
        name: "RecipeDB.me",
        collaborators: "Clement Choi, Denis Cheung",
        description: "Our second project to clone a website, we initially decided on Allrecipes.com.  However on closer inspection, we decided to replace their search system with Airbnb's filter.",
        image: 'RecipeDB.png',
        url: 'http://recipedb-me.herokuapp.com'
      },
      {
        name: "The Game Exchange",
        collaborators: "Clement Choi",
        description: "My first project on Ruby on Rails - I wanted to build a place online where users can search for and exchange their second hand console video games.",
        image: 'GameExchange.png',
        url: 'http://cchchoi1986-thegameexchange.herokuapp.com'
      }
    ];

  }]);
