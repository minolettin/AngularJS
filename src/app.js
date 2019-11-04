"use strict";

var app = angular.module("app", []);

app.controller("postListController", function($scope, PostService, $http) {
  PostService.readAllPosts().then(function(value) {
    $scope.posts = value;
    console.log("posts-content: ", $scope.posts);//funktioniert nur innerhalb von funktion da abhängig von value
  });
});

app.factory("PostService", function($http) {
  return {
    createPost: function(data) {

    },
    readAllPosts: function() {
      return $http({
        method: "GET",
        url: "http://localhost:8080/postsafe",
        headers: "Content-type: application/json"
      }).then(function(response) {
        return response.data;
      }, function error(response) {
        return response.data;
      });
    }

  };
});
