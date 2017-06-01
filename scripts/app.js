var app = angular.module('myApp', ['ngRoute']);

app.controller('myController', function ($scope) {
    console.log("Controller Works");
});


app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.when("/", {
        templateUrl: "templates/main.html"
    }).when("/about", {
        templateUrl: "templates/about.html"
    }).when("/contact", {
        templateUrl: "templates/contact.html",
    }).when("/back-end", {
        templateUrl: "templates/back-end.html",
    }).when("/data-analysis", {
        templateUrl: "templates/data-analysis.html",
    }).when("/front-end", {
        templateUrl: "templates/front-end.html",
    }).when("/all-projects", {
        templateUrl: "templates/all-projects.html",
        controller: 'myController'
    });
}]);


app.directive("navBar", function () {
    return {
        restrict: "E",
        templateUrl: "/templates/nav-bar.html"
    }
});
