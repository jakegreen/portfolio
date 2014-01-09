'use strict';

/* Controllers */

angular.module('portfolioApp.controllers', [])
    .controller('HomeController', function ($scope) {
        $scope.image1 = true;

        $scope.toggle = function () {
            $scope.image1 = !$scope.image1;
        };

    })


    .controller('AboutController', function ($scope) {

    })
    .controller('ContactController', function ($scope) {

    })
    .controller('PortfolioController', function ($scope, PortfolioListService) {
        $scope.portfolioList = {};

        PortfolioListService.success(function (data) {
            $scope.portfolioList = data;
        });

    })

    .controller('ProjectController', function ($scope, $routeParams, PortfolioListService) {
        $scope.project = {};
        $scope.id = $routeParams.id;

        PortfolioListService.success(function (data) {

            $scope.project = data[$scope.id];
        });

    })

    .controller('BlogController', function ($scope, BlogService) {
        $scope.blogList = {};

        BlogService.success(function (data) {
            $scope.blogList = data;
        });

    })

    .controller('PostController', function ($scope, $routeParams, BlogService) {
        $scope.post = {};
        $scope.id = $routeParams.id;


        BlogService.success(function (data) {
            $scope.postList = data;

            $scope.post = $scope.postList[$scope.id];
        });

    })

    .controller('BaseController', function ($scope, $location, $anchorScroll, $route, $window) {
        var d = new Date();
        $scope.date = d.getFullYear();


        $scope.scrollToItem = function (data) {
            console.log($route.current);

            $location.hash(data);
            if ($route.current.$$route.originalPath.indexOf('home') == -1) {
                console.log('youre in')
                $location.url = '#/home';
                console.log($window);
                $window.location = "index.html#/home";
            }

            $anchorScroll();
        };
    });
