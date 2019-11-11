angular.module("PostService", [])
    .factory("PostService", function($http, $window) {
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
          return $http({
            method: "GET",
            url: "http://localhost:8080/postsafe/" + id
          }).then(function(response) {
            return response.data;
          }, function(reason) {
            // Wenn Error...
          });
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
