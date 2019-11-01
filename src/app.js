"use strict";

var app = angular.module("app", []);

app.controller("postListController", function($scope, PostService, $http) {
  console.log("in postListController");
  $scope.posts = PostService.readAllPosts();
  console.log("posts-content: ", $scope.posts);
  $http({
    method: "GET",
    url: "http://localhost:8080/postsafe",
    headers: "Content-type: application/json"
  }).then(function(value) {
    $scope.ghesme = value.data;
    console.log("ghesme-content: ", $scope.ghesme);
  }, function(reason) {
    $scope.ghesme = reason.data;
  });
});

app.factory("PostService", function($http) {
  var array = [];
  return {
    readAllPosts: function() {
      console.log("in readAllPosts");
      return $http({
        method: "GET",
        url: "http://localhost:8080/postsafe",
        headers: "Content-type: application/json"
      }).then(function succesful(response) {
        array.push(response.data);
        console.log("array: ", array);
        return array;
      }, function error(response) {
        return response.data;
      });
    }
  };
});
