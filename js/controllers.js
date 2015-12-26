var countryApp = angular.module('countryApp.controllers', []);
countryApp.service('global', function(){
    this.country = null;
    this.getFlag = function(alpha2Code){
        return 'img/' + alpha2Code.toLowerCase() + '.png';
    }
});


/*return {get: function(){
 return country;
 },
 set: function(val){
 country = val;
 }
 }*/


countryApp.controller('countriesController', function($scope, API, $location, global){
    $location.path('countries');
    $scope.allCountries = [];
    $scope.startedApp = true;
    $scope.title = 'Country App';
    $scope.countryFlag = 'img/al.png';
    $scope.btnHome = function(){
        $location.path('countries');
    }
    $scope.getAll = function(){
        API.getAllCountries().success(function(response){
            for(var key in response){
                //var country = response[key].country;
                var country = response[key];
                country.thumbnail = global.getFlag(country.alpha2Code);
                $scope.allCountries.push(country);
            }
            $scope.enableSpinner(false);
        });
    }();

    $scope.selectCountry = function(country){
        global.country = country;
        $location.path('country').replace();
    }
    $scope.enableSpinner = function(flag){
        $scope.startedApp = flag;
    }
});

countryApp.controller('countryController', function($scope, $routeParams, $location, global){
    $scope.country = global.country;
    $scope.flag = global.getFlag($scope.country.alpha2Code);
    $scope.selectCountry = function(){
        $location.path('country');
    }
});
