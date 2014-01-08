'use strict';

var portfolioApp = angular.module('portfolioApp', [
        'ngRoute',
        'portfolioApp.services',
        'portfolioApp.controllers',
        'portfolioApp.constants',
        'portfolioApp.filters',
        'portfolioApp.directives'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.tpl.html', controller: 'HomeController', title: 'Home'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.tpl.html', controller: 'AboutController', title: 'About'});
        $routeProvider.when('/contact', {templateUrl: 'partials/contact.tpl.html', controller: 'ContactController', title: 'Contact'});
        $routeProvider.when('/portfolio', {templateUrl: 'partials/portfolio.tpl.html', controller: 'PortfolioController', title: 'Portfolio'});
        $routeProvider.when('/blog', {templateUrl: 'partials/blog.tpl.html', controller: 'BlogController', title: 'Blog'});
        $routeProvider.when('/post/:id', {templateUrl: 'partials/post.tpl.html', controller: 'PostController', title: 'Blog Post'});

        $routeProvider.otherwise({redirectTo: '/home'});
    }])
    .run(['$location', '$rootScope', 'baseTitle','$anchorScroll', '$routeParams', function ($location, $rootScope, baseTitle, $anchorScroll, $routeParams) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = baseTitle + current.$$route.title;

            $location.hash($routeParams.scrollTo);
            $anchorScroll();
        });
    }]);