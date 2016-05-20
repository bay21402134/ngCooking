

app.controller('DetaillRecetteController', ['$scope', '$routeParams', function ($scope, $routeParams) {


    var id = $scope.recetteId = $routeParams.recetteId;
    $scope.comm = false;


    $scope.recettes_details = $scope.recettes.filter(function (recettes) {


        if (recettes.id === id) {


            return true;


        }

    })[0];




}]);
