"use strict";

var app = angular.module("app", []);

app.controller("postListController", function($scope, PostService, $http) {
  PostService.readAllPosts().then(function(value) {
    $scope.posts = value;
    console.log("posts-content: ", $scope.posts);//funktioniert nur innerhalb von funktion da abhängig von value
  });
  // Delete Methode bereitstellen
  $scope.deletePostById = function(id) {
    PostService.deletePostById(id);
    // for (var i = 0; i < Object.keys($scope.posts).length; i++) {
    //   if ($scope.posts[i].postId === id) {
    //     delete $scope.posts[i];
    //   }
    // }
  };
  // Methode für Einzelansicht bereitstellen
  $scope.readPostById = function(id) {
    PostService.readPostById(id);
  };
});

app.factory("PostService", function($http, $window) {
  return {
    createPost: function(data) {
      return $http({
        method: "POST",
        url: "http://localhost:8080/post",
        headers: "Content-type: application/json",
        data: {}
      }).then(function(value) {
        return value.data;
      });
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
    },
    readPostById: function(id) {
      console.log("readPostById");
    },
    deletePostById: function(id) {
      console.log("postId: ", id);
      $http({
        method: "DELETE",
        url: "http://localhost:8080/post/" + id,
        headers: "Content-type: application/json"
      }).then();
      // Seite neu laden um nur noch bestehende Datensätze anzuzeigen
      $window.location.reload();
    }

  };
});
