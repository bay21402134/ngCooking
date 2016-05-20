
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
