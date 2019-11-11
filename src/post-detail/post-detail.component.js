"use strict";

angular.module("postDetail")
    .component("postDetail", {
      templateUrl: "post-detail/post-detail.template.html",
      controller: [
        "$scope", "$routeParams", "PostService", "$http",
        function PostDetailController($scope, $routeParams, PostService, $http) {
          var postId = $routeParams.postId;
          console.log("Post Id: ", postId);
          $scope.readPostById = function() {
            PostService.readPostById(postId).then(function(value) {
              $scope.currentPost = value;
              console.log("Username: ", $scope.currentPost.creator.userName);
            });
          };
          $scope.readPostById();
        }
      ]
    });
