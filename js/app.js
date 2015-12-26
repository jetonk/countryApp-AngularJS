angular.module('countryApp', [
    'countryApp.controllers',
    'countryApp.API',
    'ngRoute'
]).config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when("/countries", {templateUrl: "partials/countries.html", controller: "countriesController"}).
        when("/country", {templateUrl: "partials/country.html", controller: "countryController"}).
        otherwise({redirectTo: "/"});
}]);