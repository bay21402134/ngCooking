var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/home', {
            templateUrl: 'templates/home.html',
            controller: ''
        })

        .when('/recettes', {
            templateUrl: 'templates/recettes.html',
            controller: ''
        })

        .when('/ingredients', {
            templateUrl: 'templates/ingredients.html',
            controller: ''
        })

        .when('/communaute', {
            templateUrl: 'templates/communaute.html',
            controller: ''
        })

        .when('/communaute_details/:communauteId', {
            templateUrl: 'templates/communaute_details.html',
            controller: ''

        })


        .when('/recettes_details/:recetteId', {
            templateUrl: 'templates/recettes_details.html',
            controller: '',
            resolve: {
                'MyServiceData': function (recettesJson) {
                    return recettesJson.fetch().then(function (data) {

                    })
                }
            }
        })

        .when('/recettes_new', {
            templateUrl: 'templates/recettes_new.html',
            controller: ''
        })


        .otherwise({
            redirectTo: '/home'
        });
});