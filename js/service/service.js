app.factory('recettesJson', function ($http) {
    return {
        fetch: function () {
            return $http.get('json/recettes.json');
        }
    }
});

app.factory('communauteJson', function ($http) {
    return {
        fetch: function () {
            return $http.get('json/communaute.json');
        }
    }
});


app.factory('categoriesJson', function ($http) {
    return {
        fetch: function () {
            return $http.get('json/categories.json');
        }
    }
});


app.factory('ingredientsJson', function ($http) {
    return {
        fetch: function () {
            return $http.get('json/ingredients.json');
        }
    }
});


 

