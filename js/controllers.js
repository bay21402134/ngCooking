'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngCookies', 'ngSanitize']);
 

app.controller('MainCtrl', function ($scope, $rootScope, $cookies, $window, $routeParams, $location, recettesJson, categoriesJson, communauteJson, ingredientsJson) {


    $scope.Limitingredient = 10;
    $scope.communauteLimit = 8;
    $scope.Limicom = 3;
    $scope.SumCal = 0;



    $scope.userName = $cookies.get('MyUserName') || "";
    $scope.authenticated = $cookies.get('authenticated') || "";
    $scope.perId = $cookies.get('userID');


    $scope.items = [];
    $scope.Valider = false;
    $scope.PasValider = false;

    $scope.select = function (item) {
        $scope.selected = item;
    };
    $scope.isActive = function (item) {
        return $scope.selected === item;
    };

    recettesJson.fetch().success(function (data) {
        $scope.recettes = data;


        $scope.getNotePerson = function (idperson) {

            var note = 0;
            for (var i = 0; i < $scope.recettes.length; i++) {


                if (angular.equals(idperson, $scope.recettes[i]['creatorId']) && !angular.isUndefined($scope.recettes[i]['comments'])) {

                    for (var j = 0; j < $scope.recettes[i]['comments'].length; j++) {

                        note += $scope.recettes[i]['comments'][j]['mark'];

                    }

                }


            }


            switch (true) {
                case (note > 2):
                    $scope.communaute[idperson - 1].niveau = "expert";
                    break;

                case (note === 2):
                    $scope.communaute[idperson - 1].niveau = "Confirme";
                    break;
                case (note < 2):
                    $scope.communaute[idperson - 1].niveau = "Novice";

                    break;
            }

            return note;

        };

        $scope.Grades = function (idPerson) {
            var sumNotePer = [];
            var aux = $scope.getNotePerson(idPerson);

            if (aux > 2) {
                for (var i = 0; i < 3; i++) {
                    sumNotePer.push(i + 1);
                }
            } else if (aux === 2) {

                for (var i = 0; i < 2; i++) {
                    sumNotePer.push(i);
                }

            } else {
                sumNotePer.push(1);
            }

            return sumNotePer;

        }

        $scope.getIngredient = function (idrec) {


            var ingArray = [];

            var ing = $scope.recettes.filter(function (recettes) {

                if (recettes.id === idrec) {
                    return true;
                }
            })[0];

            for (var i = 0; i < ing['ingredients'].length; i++) {

                ingArray.push(ing['ingredients'][i]);
            }

            return ingArray;


        };

        $scope.getSumCalorie = function () {
            var Total = 0;
            for (var i = 0; i < $scope.ingredients.length; i++) {

                Total += $scope.ingredients[i]['calories'];
            }

            return Total;
        };

        $scope.getCalorie = function (idrec) {

            var Total = 0;
            var g;

            if ($scope.recettes) {
                var calorie = $scope.recettes.filter(function (recettes) {

                    if (recettes.id === idrec) {
                        return true;
                    }
                })[0];


                if (calorie) {
                    for (var i = 0; i < calorie['ingredients'].length; i++) {

                        for (var j = 0; j < $scope.ingredients.length; j++) {

                            if (calorie['ingredients'][i] === $scope.ingredients[j]['id']) {

                                Total += $scope.ingredients[j]['calories'];

                            }


                        }


                    }

                    return Total;
                }

                return 0;
            }

        };

        $scope.getTotalNote = function (idrecette) {
            var notes = [];
            $scope.rec = $scope.recettes.filter(function (recettes) {

                if (recettes.id === idrecette) {
                    return true;
                }
            })[0];


            var note = 0;

            if (!angular.isUndefined($scope.rec['comments'])) {

                for (var i = 0; i < $scope.rec['comments'].length; i++) {

                    note += parseInt($scope.rec['comments'][i]['mark']);


                }

                for (var i = 0; i < note / $scope.rec['comments'].length; i++) {
                    notes.push(i + 1);
                }

                $scope.notee = note;

                $scope.MoyComm = note / $scope.rec['comments'].length;

                return notes


            } else {

                return note;
            }
        };

        for (var i = 0; i < $scope.recettes.length; i++) {

            if ($scope.getTotalNote($scope.recettes[i]['id']).length) {
                $scope.recettes[i].averageMark = $scope.getTotalNote($scope.recettes[i]['id']).length;

            } else {

                $scope.recettes[i].averageMark = 0;
            }
        }

        $scope.addItem = function (index) {


            if ($scope.myIngredient !== null && $scope.myCategorie !== null) {

                var ing = $scope.ingredients.filter(function (ingredients) {

                    if (ingredients.id === index) {
                        return true;
                    }
                })[0];

                if ($scope.items.indexOf(ing) === -1 && ing != null) {
                    $scope.items.push(ing);
                    $scope.SumCal += ing.calories;
                }


            }
        }
        $scope.deleteItem = function (index) {

            $scope.items.splice(index, 1);
            $scope.message = "";

            $scope.SumCal = $scope.SumCal - $scope.ingredients[index].calories;
        }

        $scope.AjouterRecette = function (NomRecette) {

            if ($scope.NameRecette !== null && $scope.myCategorie !== null) {

                var test = $scope.recettes.filter(function (recettes) {

                    if (recettes.name === NomRecette) {
                        return true;
                        return false;
                    }
                });

                if (test.length > 0) {

                    alert("Merci de saisire un Nom valide / entre [3..10] ingredients ");
                    $scope.PasValider = true;
                } else if ($scope.items.length < 3) {

                    alert("Merci de saisire un Nom valide / entre [3..10] ingredients ");
                    $scope.PasValider = true;

                } else {
                    alert("Recette ajouter avec succes");
                    $scope.Valider = true;
                    $scope.PasValider = false;
                    $location.url("/")

                }

            }
            else {
                alert("commancer a remplire");
            }

        }


    });


    communauteJson.fetch().success(function (data) {
        $scope.communaute = data;

        $scope.UsercreateRec = function (idCreator) {
            var user = $scope.communaute.filter(function (communaute) {


                if (communaute.id === idCreator) {

                    return true;
                    return false;

                }

            })[0];

            return user;
        }

    })

    categoriesJson.fetch().success(function (data) {
        $scope.categories = data;

    })


    ingredientsJson.fetch().success(function (data) {
        $scope.ingredients = data;

    })


    $scope.logout = function () {

        $cookies.remove('authenticated');
        $cookies.remove('MyUserName');
        $cookies.remove('userID');
        $location.url("/");
        $window.location.reload();

    }

});


app.controller('DetaillCommunauteController', function ($scope, $rootScope, $cookies, $window, $routeParams, $location, communauteJson) {


    communauteJson.fetch().success(function (data) {
        $scope.communaute = data;


        if ($routeParams.communauteId) {

            var id = $scope.communauteId = $routeParams.communauteId;


            $scope.communautedetails = $scope.communaute.filter(function (communaute) {


                if (communaute.id === parseInt(id)) {

                    return true;
                    return false;

                }

            })[0];

            $scope.communaute_id = $routeParams.communauteId;

        }


    })


    $scope.CreaateTable = function(n) {
        return new Array(n);
    };

});


app.controller('DetaillRecetteController', ['$scope', '$routeParams', function ($scope, $routeParams) {


    var id = $scope.recetteId = $routeParams.recetteId;
    $scope.comm = false;


    $scope.recettes_details = $scope.recettes.filter(function (recettes) {


        if (recettes.id === id) {


            return true;


        }

    })[0];

    $scope.com = $scope.recettes_details.preparation;
    $scope.deliberatelyTrustDangerousSnippet = function () {
        return $sce.trustAsHtml($scope.com);
    };


}]);

app.controller('HomeController', function ($scope) {
});

app.controller('IngredientsController', function ($scope) {
});

app.controller('CommunauteController', function ($scope) {
});

app.controller('RecettesController', function ($scope) {
});


app.controller('LoginCtrl', function ($scope, $cookies, $window, $rootScope, $http, $location) {

    $scope.login = function () {

        $scope.userr = $scope.communaute.filter(function (communaute) {

            if (communaute.surname === $scope.username && communaute.password === $scope.password)

                return true;
            return false;
        })[0];

        if ($scope.userr != null) {

            $cookies.put('authenticated', true);
            $cookies.put('MyUserName', $scope.userr['surname']);
            $cookies.put('userID', $scope.userr['id']);
            $location.url("/");
            $window.location.reload();

        } else {
            alert("Invalid username/password combination");

        }
        ;
    };
});


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