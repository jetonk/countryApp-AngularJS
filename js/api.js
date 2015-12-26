var API = angular.module('countryApp.API', []);


API.factory('API', function($http){
    var API = {};
    API.url = 'https://restcountries.eu/rest/v1/';
    //API.url = 'http://localhost:2403/';

    API.getAllCountries = function(){
        //return $http({
        //   url: this.url + 'countries'
        //});
        return $http({
            url: this.url + 'all'
        });
    }

    API.saveCountries = function(countryObject){
        return $http.post('http://localhost:2403/countries', {country: countryObject});
    }

    return API;
});