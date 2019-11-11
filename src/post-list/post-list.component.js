"use strict";

angular.module("postList")
    .component("postList", {
      templateUrl: "post-list/post-list.template.html",
      controller: [
        "$scope", "PostService", "$http", function PostListController($scope, PostService, $http) {
          $scope.readAllPosts = function() {
            PostService.readAllPosts().then(function(value) {
              $scope.posts = value;
              console.log("posts-content: ", $scope.posts);
            });
          };
          $scope.readAllPosts();
          // Delete Methode bereitstellen
          $scope.deletePostById = function(id) {
            PostService.deletePostById(id);
            // for (var i = 0; i < Object.keys($scope.posts).length; i++) {
            //   if ($scope.posts[i].postId === id) {
            //     delete $scope.posts[i];
            //   }
            // }
          };
        }
      ]
    });
