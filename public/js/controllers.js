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

    .controller('BaseController',  function ($scope) {
        var d = new Date();
        $scope.date = d.getFullYear();
    });
