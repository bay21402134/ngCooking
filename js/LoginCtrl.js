
app.controller('LoginCtrl', function($scope, $cookies, $window, $rootScope, $http, $location) {

    $scope.login = function() {

        $scope.userr = $scope.communaute.filter(function(communaute) {

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
            console.log('Login failed..');
        };
    };
});