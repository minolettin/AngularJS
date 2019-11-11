angular.module("app")
    .config([
      "$routeProvider", function config($routeProvider) {
        $routeProvider
            .when("/posts", {
              template: "<post-list></post-list>"
            })
            .when("/post/:postId", {
              template: "<post-detail></post-detail>"
            })
            .otherwise("/posts");
      }
    ]);
