'use strict';

/* Filters */

angular.module('portfolioApp.filters', [])
    .filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }])

.filter('searchPortfolio', function () {

        // All filters must return a function. The first parameter
        // is the data that is to be filtered, and the second is an
        // argument that may be passed with a colon (searchFor:searchString)

        return function (items, searchString) {
            if (!searchString) {
                return items;
            }

            var result = [];
            searchString = searchString.toLowerCase();
            angular.forEach(items, function(item) {

                if (item.name.toLowerCase().indexOf(searchString) !== -1 || item.description.toLowerCase().indexOf(searchString) !== -1 ) {
                    result.push(item);


                }
            });

            return result;
        };

    })

.filter('searchBlog', function () {

        // All filters must return a function. The first parameter
        // is the data that is to be filtered, and the second is an
        // argument that may be passed with a colon (searchFor:searchString)

        return function (items, searchString) {
            if (!searchString) {
                return items;
            }

            var result = [];
            searchString = searchString.toLowerCase();
            console.log('on search' + searchString);
            angular.forEach(items, function(item) {

                if (item.title.toLowerCase().indexOf(searchString) !== -1 || item.description.toLowerCase().indexOf(searchString) !== -1 ) {
                    console.log('in the if');
                    result.push(item);


                }
            });

            return result;
        };

    });
