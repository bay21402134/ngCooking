describe('Testing controller', function () {
    var $controller;
    var $rootScope;
    var $scope;
    var MainCtrl;
    var data;

    //you need to indicate your module in a test

    beforeEach(module('myApp'));


    beforeEach(inject(function (_$rootScope_, _$controller_, _$httpBackend_) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
    }));

    it('Test variables static', inject(function ($controller) {
        var ctrl = $controller('MainCtrl', {$scope: $rootScope});
        expect($rootScope.Limitingredient).toBe(10);
        expect($rootScope.communauteLimit).toBe(8);
        expect($rootScope.Limicom).toBe(3);
        expect($rootScope.SumCal).toBe(0);


    }));


    describe('Test Controller :MainCtrl', function () {
        beforeEach(inject(function ($controller, $rootScope, recettesJson, ingredientsJson) {
            $scope = $rootScope.$new();

            spyOn(recettesJson, 'fetch').and.callFake(function () {
                return {
                    success: function (callback) {
                        callback({things: 'and stuff'})
                    }
                };
            });

            MainCtrl = $controller('MainCtrl', {$scope: $scope, recettesJson: recettesJson});
        }));

        it('GetRecettesjson with spies should set data to "things and stuff"', function () {
            expect($scope.recettes).toEqual({
                things: 'and stuff'
            });

        });

        it('For All Calorie ********', function () {
            var $scope = {};
            var controller = $controller('MainCtrl', {$scope: $scope});

            var ingredients = [{
                "id": "pomme-de-terre",
                "name": "Pomme de terre",
                "isAvailable": true,
                "picture": "pomme-de-terre.jpg",
                "category": "vegetable",
                "calories": 140
            },
                {
                    "id": "boeuf",
                    "name": "Boeuf",
                    "isAvailable": true,
                    "picture": "boeuf.jpg",
                    "category": "meat",
                    "calories": 200
                }];
            $scope.ingredients = ingredients;
            expect($scope.getSumCalorie()).toBe(340);

        });


        it('Function:1 GetSumCalorie', function () {
            var $scope = {};
            var controller = $controller('MainCtrl', {$scope: $scope});

            var ingredients = [{
                "id": "pomme-de-terre",
                "name": "Pomme de terre",
                "isAvailable": true,
                "picture": "pomme-de-terre.jpg",
                "category": "vegetable",
                "calories": 140
            },
                {
                    "id": "boeuf",
                    "name": "Boeuf",
                    "isAvailable": true,
                    "picture": "boeuf.jpg",
                    "category": "meat",
                    "calories": 200
                }];
            $scope.ingredients = ingredients;
            expect($scope.getSumCalorie()).toBe(340);

        });


        it('Function:2 getNotePerson', function () {
            var $scope = {};
            var controller = $controller('MainCtrl', {$scope: $scope});

            var recettes = [{
                "id": "tarte-citron-meringue",
                "name": "Tarte citron meringué",
                "creatorId": 1,
                "isAvailable": true,
                "picture": "img/recettes/tarte-citron-meringue.jpg",
                "calories": 460,
                "ingredients": [
                    "oeuf",
                    "citron",
                    "sucre",
                    "farine"
                ],
                "preparation": "<p>PÂTE:</p><p>Blanchir les jaunes et le sucre au fouet et détendre le mélange avec un peu d'eau.</p><p>Mélanger au doigt la farine et le beurre coupé en petites parcelles pour obtenir une consistance sableuse et que tout le beurre soit absorbé (!!! Il faut faire vite pour que le mélange ne ramollisse pas trop!).</p><p>Verser au milieu de ce 'sable' le mélange liquide.</p><p>Incoporer au couteau les éléments rapidement sans leur donner de corps.</p><p>Former une boule avec les paumes et fraiser 1 ou 2 fois pour rendre la boule + homogène.</p><p>Foncez un moule de 25 cm de diamètre avec la pâte, garnissez la de papier sulfurisé et de haricots secs.</p><p>Faites cuire à blanc 20 à 25 mn, à 180°C, Th 6-7 . (NB après baisser le four à 120°C/150°C environ pour la meringue).</p><p>CRÈME AU CITRON :</p><p>Laver les citrons et en 'zester' 2.</p><p>Mettre les zestes très fins dans une casserole.</p><p>Presser les citrons et mettre le jus avec les zestes dans la casserole.</p><p>Verser le sucre et la Maïzena.</p><p>Remuer, et commencer à faire chauffer à feux doux.</p><p>Battre les oeufs dans un récipients séparé.</p><p>Une fois les oeufs battus, incorporer tout en remuant le jus de citron, le sucre, la Maïzena et les zestes.</p><p>Mettre à feu fort et continuer à remuer à l'aide d'un fouet.</p><p>Le mélange va commencer à s'épaissir.</p><p>Attention de toujours remuer lorsque les oeufs sont ajoutés, car la crème de citron pourrait brûler.</p><p>Oter du feux et verser l'appareil sur le fond de tarte cuit.</p><p>MERINGUE :</p><p>Monter les blancs en neige avec une pincée de sel.</p><p>Quand ils commencent à être fermes, ajouter le sucre puis la levure.</p><p>Mixer jusqu'à ce que la neige soit ferme.</p><p>Recouvrir avec les blancs en neige et napper. Cuire à four doux (120°C/150°C) juqu'à ce que la meringue dore (10 mn)",
                "comments": [
                    {
                        "userId": 11,
                        "title": "Miam miam miaouuu",
                        "comment": "Franchement cette NgRecette, c’est de la bombe. Le genre de saveurs qui t’éveillent les papilles, t’as vu ! Dis woula, j’ai kiffé",
                        "mark": 4
                    },
                    {
                        "userId": 8,
                        "title": "Ca pique !",
                        "comment": "Quelqu'un a mis du piment dans ma crème, j'ai passé mon dimanche au toilettes. Sinon, tout va bien..",
                        "mark": 2
                    }
                ]
            },
                {
                    "id": "tajine-de-poulet",
                    "name": "Tajine de poulet",
                    "creatorId": 1,
                    "isAvailable": true,
                    "picture": "img/recettes/tajine-de-poulet.jpg",
                    "calories": 180,
                    "ingredients": [
                        "poulet",
                        "citron",
                        "tomate",
                        "carotte",
                        "pomme-de-terre"
                    ],
                    "preparation": "<p>Faire revenir le poulet à feu moyen pour qu'il soit un peu doré.</p><p>Pendant ce temps, peler et couper les légumes : couper les carottes en 2 , puis dans le sens de la longueur. Idem pour les courgettes. Couper les oignons en lamelles et les pommes de terres en 4.</p><p>Mettre les légumes avec le poulet, rajouter les épices à tajine et le cumin. Mettez également un peu d'eau (3/4 verre d'eau).</p><p>Laisser cuire environ 1 heure et voilà, c'est prêt !</p>",
                    "comments": [
                        {
                            "userId": 6,
                            "title": "On y est presque",
                            "comment": "Une petite tranche de jambon au milieu de tout ça serait la bienvenue",
                            "mark": 3
                        }
                    ]
                }];
            var communaute = [{
                "firstname": "Hetta",
                "surname": "Van Deventer",
                "id": 1,
                "email": "hetta@mail.com",
                "password": "c17",
                "level": 3,
                "picture": "img/users/hetta-van-deventer.jpg",
                "city": "Brive la Gaillarde",
                "birth": 1972,
                "niveau": "",
                "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aspernatur fuga quisquam iusto, eum veniam vel cumque autem assumenda nulla illum accusamus, expedita animi quaerat temporibus saepe magnam, dolor minima."
            }, {
                "firstname": "Alfredo",
                "surname": "Linguini",
                "id": 2,
                "email": "alfredo@mail.com",
                "password": "c17",
                "level": 1,
                "picture": "img/users/alfredo-linguini.jpg",
                "city": "Dunkerque",
                "birth": 1993,
                "niveau": "",
                "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aspernatur fuga quisquam iusto, eum veniam vel cumque autem assumenda nulla illum accusamus, expedita animi quaerat temporibus saepe magnam, dolor minima."
            }];
            $scope.communaute = communaute;
            $scope.recettes = recettes;

            //console.log($scope.getNotePerson(3));
            //expect($scope.getNotePerson(3)).toBe(9);


        });


        

        it('Function:4 getIngredient', function () {
            var $scope = {};
            var controller = $controller('MainCtrl', {$scope: $scope});

            var recettes = [{
                "id": "tarte-citron-meringue",
                "name": "Tarte citron meringué",
                "creatorId": 1,
                "isAvailable": true,
                "picture": "img/recettes/tarte-citron-meringue.jpg",
                "calories": 460,
                "ingredients": [
                    "oeuf",
                    "citron",
                    "sucre",
                    "farine"
                ],
                "preparation": "<p>PÂTE:</p><p>Blanchir les jaunes et le sucre au fouet et détendre le mélange avec un peu d'eau.</p><p>Mélanger au doigt la farine et le beurre coupé en petites parcelles pour obtenir une consistance sableuse et que tout le beurre soit absorbé (!!! Il faut faire vite pour que le mélange ne ramollisse pas trop!).</p><p>Verser au milieu de ce 'sable' le mélange liquide.</p><p>Incoporer au couteau les éléments rapidement sans leur donner de corps.</p><p>Former une boule avec les paumes et fraiser 1 ou 2 fois pour rendre la boule + homogène.</p><p>Foncez un moule de 25 cm de diamètre avec la pâte, garnissez la de papier sulfurisé et de haricots secs.</p><p>Faites cuire à blanc 20 à 25 mn, à 180°C, Th 6-7 . (NB après baisser le four à 120°C/150°C environ pour la meringue).</p><p>CRÈME AU CITRON :</p><p>Laver les citrons et en 'zester' 2.</p><p>Mettre les zestes très fins dans une casserole.</p><p>Presser les citrons et mettre le jus avec les zestes dans la casserole.</p><p>Verser le sucre et la Maïzena.</p><p>Remuer, et commencer à faire chauffer à feux doux.</p><p>Battre les oeufs dans un récipients séparé.</p><p>Une fois les oeufs battus, incorporer tout en remuant le jus de citron, le sucre, la Maïzena et les zestes.</p><p>Mettre à feu fort et continuer à remuer à l'aide d'un fouet.</p><p>Le mélange va commencer à s'épaissir.</p><p>Attention de toujours remuer lorsque les oeufs sont ajoutés, car la crème de citron pourrait brûler.</p><p>Oter du feux et verser l'appareil sur le fond de tarte cuit.</p><p>MERINGUE :</p><p>Monter les blancs en neige avec une pincée de sel.</p><p>Quand ils commencent à être fermes, ajouter le sucre puis la levure.</p><p>Mixer jusqu'à ce que la neige soit ferme.</p><p>Recouvrir avec les blancs en neige et napper. Cuire à four doux (120°C/150°C) juqu'à ce que la meringue dore (10 mn)",
                "comments": [
                    {
                        "userId": 11,
                        "title": "Miam miam miaouuu",
                        "comment": "Franchement cette NgRecette, c’est de la bombe. Le genre de saveurs qui t’éveillent les papilles, t’as vu ! Dis woula, j’ai kiffé",
                        "mark": 4
                    },
                    {
                        "userId": 8,
                        "title": "Ca pique !",
                        "comment": "Quelqu'un a mis du piment dans ma crème, j'ai passé mon dimanche au toilettes. Sinon, tout va bien..",
                        "mark": 2
                    }
                ]
            },
                {
                    "id": "tajine-de-poulet",
                    "name": "Tajine de poulet",
                    "creatorId": 1,
                    "isAvailable": true,
                    "picture": "img/recettes/tajine-de-poulet.jpg",
                    "calories": 180,
                    "ingredients": [
                        "poulet",
                        "citron",
                        "tomate",
                        "carotte",
                        "pomme-de-terre"
                    ],
                    "preparation": "<p>Faire revenir le poulet à feu moyen pour qu'il soit un peu doré.</p><p>Pendant ce temps, peler et couper les légumes : couper les carottes en 2 , puis dans le sens de la longueur. Idem pour les courgettes. Couper les oignons en lamelles et les pommes de terres en 4.</p><p>Mettre les légumes avec le poulet, rajouter les épices à tajine et le cumin. Mettez également un peu d'eau (3/4 verre d'eau).</p><p>Laisser cuire environ 1 heure et voilà, c'est prêt !</p>",
                    "comments": [
                        {
                            "userId": 6,
                            "title": "On y est presque",
                            "comment": "Une petite tranche de jambon au milieu de tout ça serait la bienvenue",
                            "mark": 3
                        }
                    ]
                }];
            $scope.recettes = recettes;

            var ing = $scope.recettes.filter(function (recettes) {

                if (recettes.id === "tajine-de-poulet") {
                    return true;
                }
            })[0];


            expect($scope.getIngredient("tajine-de-poulet").length).toBe(5);


        });


        it('Function:5 getCalorie', function () {
            var $scope = {};
            var controller = $controller('MainCtrl', {$scope: $scope});

            var recettes = [{
                "id": "tarte-citron-meringue",
                "name": "Tarte citron meringué",
                "creatorId": 1,
                "isAvailable": true,
                "picture": "img/recettes/tarte-citron-meringue.jpg",
                "calories": 460,
                "ingredients": [
                    "oeuf",
                    "citron",
                    "sucre",
                    "farine"
                ],
                "preparation": "<p>PÂTE:</p><p>Blanchir les jaunes et le sucre au fouet et détendre le mélange avec un peu d'eau.</p><p>Mélanger au doigt la farine et le beurre coupé en petites parcelles pour obtenir une consistance sableuse et que tout le beurre soit absorbé (!!! Il faut faire vite pour que le mélange ne ramollisse pas trop!).</p><p>Verser au milieu de ce 'sable' le mélange liquide.</p><p>Incoporer au couteau les éléments rapidement sans leur donner de corps.</p><p>Former une boule avec les paumes et fraiser 1 ou 2 fois pour rendre la boule + homogène.</p><p>Foncez un moule de 25 cm de diamètre avec la pâte, garnissez la de papier sulfurisé et de haricots secs.</p><p>Faites cuire à blanc 20 à 25 mn, à 180°C, Th 6-7 . (NB après baisser le four à 120°C/150°C environ pour la meringue).</p><p>CRÈME AU CITRON :</p><p>Laver les citrons et en 'zester' 2.</p><p>Mettre les zestes très fins dans une casserole.</p><p>Presser les citrons et mettre le jus avec les zestes dans la casserole.</p><p>Verser le sucre et la Maïzena.</p><p>Remuer, et commencer à faire chauffer à feux doux.</p><p>Battre les oeufs dans un récipients séparé.</p><p>Une fois les oeufs battus, incorporer tout en remuant le jus de citron, le sucre, la Maïzena et les zestes.</p><p>Mettre à feu fort et continuer à remuer à l'aide d'un fouet.</p><p>Le mélange va commencer à s'épaissir.</p><p>Attention de toujours remuer lorsque les oeufs sont ajoutés, car la crème de citron pourrait brûler.</p><p>Oter du feux et verser l'appareil sur le fond de tarte cuit.</p><p>MERINGUE :</p><p>Monter les blancs en neige avec une pincée de sel.</p><p>Quand ils commencent à être fermes, ajouter le sucre puis la levure.</p><p>Mixer jusqu'à ce que la neige soit ferme.</p><p>Recouvrir avec les blancs en neige et napper. Cuire à four doux (120°C/150°C) juqu'à ce que la meringue dore (10 mn)",
                "comments": [
                    {
                        "userId": 11,
                        "title": "Miam miam miaouuu",
                        "comment": "Franchement cette NgRecette, c’est de la bombe. Le genre de saveurs qui t’éveillent les papilles, t’as vu ! Dis woula, j’ai kiffé",
                        "mark": 4
                    },
                    {
                        "userId": 8,
                        "title": "Ca pique !",
                        "comment": "Quelqu'un a mis du piment dans ma crème, j'ai passé mon dimanche au toilettes. Sinon, tout va bien..",
                        "mark": 2
                    }
                ]
            }, {
                "id": "tajine-de-poulet",
                "name": "Tajine de poulet",
                "creatorId": 1,
                "isAvailable": true,
                "picture": "img/recettes/tajine-de-poulet.jpg",
                "calories": 180,
                "ingredients": [
                    "poulet",
                    "citron",
                    "tomate",
                    "carotte",
                    "pomme-de-terre"
                ],
                "preparation": "<p>Faire revenir le poulet à feu moyen pour qu'il soit un peu doré.</p><p>Pendant ce temps, peler et couper les légumes : couper les carottes en 2 , puis dans le sens de la longueur. Idem pour les courgettes. Couper les oignons en lamelles et les pommes de terres en 4.</p><p>Mettre les légumes avec le poulet, rajouter les épices à tajine et le cumin. Mettez également un peu d'eau (3/4 verre d'eau).</p><p>Laisser cuire environ 1 heure et voilà, c'est prêt !</p>",
                "comments": [
                    {
                        "userId": 6,
                        "title": "On y est presque",
                        "comment": "Une petite tranche de jambon au milieu de tout ça serait la bienvenue",
                        "mark": 3
                    }
                ]
            }];
            var ingredients = [{
                "id": "pomme-de-terre",
                "name": "Pomme de terre",
                "isAvailable": true,
                "picture": "pomme-de-terre.jpg",
                "category": "vegetable",
                "calories": 140
            }, {
                "id": "poulet",
                "name": "Poulet",
                "isAvailable": true,
                "picture": "poulet.jpg",
                "category": "meat",
                "calories": 180
            }, {
                "id": "citron",
                "name": "Citron",
                "isAvailable": true,
                "picture": "citron.jpg",
                "category": "fruit",
                "calories": 110
            }, {
                "id": "tomate",
                "name": "Tomate",
                "isAvailable": true,
                "picture": "tomate.jpg",
                "category": "fruit",
                "calories": 80
            }, {
                "id": "carotte",
                "name": "Carotte",
                "isAvailable": true,
                "picture": "carotte.jpg",
                "category": "vegetable",
                "calories": 65
            }];


            $scope.recettes = recettes;
            $scope.ingredients = ingredients;


            var calorie = $scope.recettes.filter(function (recettes) {

                if (recettes.id === "tajine-de-poulet") {
                    return true;
                }
            })[0];


            expect($scope.getCalorie("tajine-de-poulet")).toBe(575);


        });


        it('Function:6 getTotalNote', function () {
            var $scope = {};
            var controller = $controller('MainCtrl', {$scope: $scope});

            var recettes = [{
                "id": "tarte-citron-meringue",
                "name": "Tarte citron meringué",
                "creatorId": 1,
                "isAvailable": true,
                "picture": "img/recettes/tarte-citron-meringue.jpg",
                "calories": 460,
                "ingredients": [
                    "oeuf",
                    "citron",
                    "sucre",
                    "farine"
                ],
                "preparation": "<p>PÂTE:</p><p>Blanchir les jaunes et le sucre au fouet et détendre le mélange avec un peu d'eau.</p><p>Mélanger au doigt la farine et le beurre coupé en petites parcelles pour obtenir une consistance sableuse et que tout le beurre soit absorbé (!!! Il faut faire vite pour que le mélange ne ramollisse pas trop!).</p><p>Verser au milieu de ce 'sable' le mélange liquide.</p><p>Incoporer au couteau les éléments rapidement sans leur donner de corps.</p><p>Former une boule avec les paumes et fraiser 1 ou 2 fois pour rendre la boule + homogène.</p><p>Foncez un moule de 25 cm de diamètre avec la pâte, garnissez la de papier sulfurisé et de haricots secs.</p><p>Faites cuire à blanc 20 à 25 mn, à 180°C, Th 6-7 . (NB après baisser le four à 120°C/150°C environ pour la meringue).</p><p>CRÈME AU CITRON :</p><p>Laver les citrons et en 'zester' 2.</p><p>Mettre les zestes très fins dans une casserole.</p><p>Presser les citrons et mettre le jus avec les zestes dans la casserole.</p><p>Verser le sucre et la Maïzena.</p><p>Remuer, et commencer à faire chauffer à feux doux.</p><p>Battre les oeufs dans un récipients séparé.</p><p>Une fois les oeufs battus, incorporer tout en remuant le jus de citron, le sucre, la Maïzena et les zestes.</p><p>Mettre à feu fort et continuer à remuer à l'aide d'un fouet.</p><p>Le mélange va commencer à s'épaissir.</p><p>Attention de toujours remuer lorsque les oeufs sont ajoutés, car la crème de citron pourrait brûler.</p><p>Oter du feux et verser l'appareil sur le fond de tarte cuit.</p><p>MERINGUE :</p><p>Monter les blancs en neige avec une pincée de sel.</p><p>Quand ils commencent à être fermes, ajouter le sucre puis la levure.</p><p>Mixer jusqu'à ce que la neige soit ferme.</p><p>Recouvrir avec les blancs en neige et napper. Cuire à four doux (120°C/150°C) juqu'à ce que la meringue dore (10 mn)",
                "comments": [
                    {
                        "userId": 11,
                        "title": "Miam miam miaouuu",
                        "comment": "Franchement cette NgRecette, c’est de la bombe. Le genre de saveurs qui t’éveillent les papilles, t’as vu ! Dis woula, j’ai kiffé",
                        "mark": 4
                    },
                    {
                        "userId": 8,
                        "title": "Ca pique !",
                        "comment": "Quelqu'un a mis du piment dans ma crème, j'ai passé mon dimanche au toilettes. Sinon, tout va bien..",
                        "mark": 2
                    }
                ]
            }, {
                "id": "tajine-de-poulet",
                "name": "Tajine de poulet",
                "creatorId": 1,
                "isAvailable": true,
                "picture": "img/recettes/tajine-de-poulet.jpg",
                "calories": 180,
                "ingredients": [
                    "poulet",
                    "citron",
                    "tomate",
                    "carotte",
                    "pomme-de-terre"
                ],
                "preparation": "<p>Faire revenir le poulet à feu moyen pour qu'il soit un peu doré.</p><p>Pendant ce temps, peler et couper les légumes : couper les carottes en 2 , puis dans le sens de la longueur. Idem pour les courgettes. Couper les oignons en lamelles et les pommes de terres en 4.</p><p>Mettre les légumes avec le poulet, rajouter les épices à tajine et le cumin. Mettez également un peu d'eau (3/4 verre d'eau).</p><p>Laisser cuire environ 1 heure et voilà, c'est prêt !</p>",
                "comments": [
                    {
                        "userId": 6,
                        "title": "On y est presque",
                        "comment": "Une petite tranche de jambon au milieu de tout ça serait la bienvenue",
                        "mark": 3
                    }
                ]
            }];


            $scope.recettes = recettes;

            $scope.rec = $scope.recettes.filter(function (recettes) {

                if (recettes.id === "tajine-de-poulet") {
                    return true;
                }
            })[0];

            $scope.getTotalNote("tajine-de-poulet");

            expect($scope.MoyComm).toBe(3);


        });

        it('Function:7 addItem / deleteItem', function () {
            var $scope = {};
            var controller = $controller('MainCtrl', {$scope: $scope});
            var ingredients = [{
                "id": "pomme-de-terre",
                "name": "Pomme de terre",
                "isAvailable": true,
                "picture": "pomme-de-terre.jpg",
                "category": "vegetable",
                "calories": 140
            }, {
                "id": "poulet",
                "name": "Poulet",
                "isAvailable": true,
                "picture": "poulet.jpg",
                "category": "meat",
                "calories": 180
            }, {
                "id": "citron",
                "name": "Citron",
                "isAvailable": true,
                "picture": "citron.jpg",
                "category": "fruit",
                "calories": 110
            }, {
                "id": "tomate",
                "name": "Tomate",
                "isAvailable": true,
                "picture": "tomate.jpg",
                "category": "fruit",
                "calories": 80
            }, {
                "id": "carotte",
                "name": "Carotte",
                "isAvailable": true,
                "picture": "carotte.jpg",
                "category": "vegetable",
                "calories": 65
            }];

            $scope.ingredients = ingredients;


            var ing = $scope.ingredients.filter(function (ingredients) {

                if (ingredients.id === "pomme-de-terre") {
                    return true;
                }
            })[0];


            expect($scope.items.length).toBe(0);
            $scope.addItem("pomme-de-terre");
            $scope.addItem("poulet");

            expect($scope.items.length).toBe(2);

            expect($scope.items.length).toBe(2);


        });

        it('Function:8 Ajouter Recette', function () {
            var $scope = {};
            var controller = $controller('MainCtrl', {$scope: $scope});

            var recettes = [{
                "id": "tarte-citron-meringue",
                "name": "Tarte citron meringué",
                "creatorId": 1,
                "isAvailable": true,
                "picture": "img/recettes/tarte-citron-meringue.jpg",
                "calories": 460,
                "ingredients": [
                    "oeuf",
                    "citron",
                    "sucre",
                    "farine"
                ],
                "preparation": "<p>PÂTE:</p><p>Blanchir les jaunes et le sucre au fouet et détendre le mélange avec un peu d'eau.</p><p>Mélanger au doigt la farine et le beurre coupé en petites parcelles pour obtenir une consistance sableuse et que tout le beurre soit absorbé (!!! Il faut faire vite pour que le mélange ne ramollisse pas trop!).</p><p>Verser au milieu de ce 'sable' le mélange liquide.</p><p>Incoporer au couteau les éléments rapidement sans leur donner de corps.</p><p>Former une boule avec les paumes et fraiser 1 ou 2 fois pour rendre la boule + homogène.</p><p>Foncez un moule de 25 cm de diamètre avec la pâte, garnissez la de papier sulfurisé et de haricots secs.</p><p>Faites cuire à blanc 20 à 25 mn, à 180°C, Th 6-7 . (NB après baisser le four à 120°C/150°C environ pour la meringue).</p><p>CRÈME AU CITRON :</p><p>Laver les citrons et en 'zester' 2.</p><p>Mettre les zestes très fins dans une casserole.</p><p>Presser les citrons et mettre le jus avec les zestes dans la casserole.</p><p>Verser le sucre et la Maïzena.</p><p>Remuer, et commencer à faire chauffer à feux doux.</p><p>Battre les oeufs dans un récipients séparé.</p><p>Une fois les oeufs battus, incorporer tout en remuant le jus de citron, le sucre, la Maïzena et les zestes.</p><p>Mettre à feu fort et continuer à remuer à l'aide d'un fouet.</p><p>Le mélange va commencer à s'épaissir.</p><p>Attention de toujours remuer lorsque les oeufs sont ajoutés, car la crème de citron pourrait brûler.</p><p>Oter du feux et verser l'appareil sur le fond de tarte cuit.</p><p>MERINGUE :</p><p>Monter les blancs en neige avec une pincée de sel.</p><p>Quand ils commencent à être fermes, ajouter le sucre puis la levure.</p><p>Mixer jusqu'à ce que la neige soit ferme.</p><p>Recouvrir avec les blancs en neige et napper. Cuire à four doux (120°C/150°C) juqu'à ce que la meringue dore (10 mn)",
                "comments": [
                    {
                        "userId": 11,
                        "title": "Miam miam miaouuu",
                        "comment": "Franchement cette NgRecette, c’est de la bombe. Le genre de saveurs qui t’éveillent les papilles, t’as vu ! Dis woula, j’ai kiffé",
                        "mark": 4
                    },
                    {
                        "userId": 8,
                        "title": "Ca pique !",
                        "comment": "Quelqu'un a mis du piment dans ma crème, j'ai passé mon dimanche au toilettes. Sinon, tout va bien..",
                        "mark": 2
                    }
                ]
            }, {
                "id": "tajine-de-poulet",
                "name": "Tajine de poulet",
                "creatorId": 1,
                "isAvailable": true,
                "picture": "img/recettes/tajine-de-poulet.jpg",
                "calories": 180,
                "ingredients": [
                    "poulet",
                    "citron",
                    "tomate",
                    "carotte",
                    "pomme-de-terre"
                ],
                "preparation": "<p>Faire revenir le poulet à feu moyen pour qu'il soit un peu doré.</p><p>Pendant ce temps, peler et couper les légumes : couper les carottes en 2 , puis dans le sens de la longueur. Idem pour les courgettes. Couper les oignons en lamelles et les pommes de terres en 4.</p><p>Mettre les légumes avec le poulet, rajouter les épices à tajine et le cumin. Mettez également un peu d'eau (3/4 verre d'eau).</p><p>Laisser cuire environ 1 heure et voilà, c'est prêt !</p>",
                "comments": [
                    {
                        "userId": 6,
                        "title": "On y est presque",
                        "comment": "Une petite tranche de jambon au milieu de tout ça serait la bienvenue",
                        "mark": 3
                    }
                ]
            }];
            $scope.recettes = recettes;
            var NomRecette = "Tarte citron meringué";
            $scope.AjouterRecette(NomRecette);
        });


    });

    describe("Test Controller : LoginCtrl", function () {
        it('Test Function :Login()', function () {
            var $scope = {};
            var controller = $controller('LoginCtrl', {$scope: $scope});
            var communaute = [{
                "firstname": "Hetta",
                "surname": "Van Deventer",
                "id": 1,
                "email": "hetta@mail.com",
                "password": "c17",
                "level": 3,
                "picture": "img/users/hetta-van-deventer.jpg",
                "city": "Brive la Gaillarde",
                "birth": 1972,
                "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aspernatur fuga quisquam iusto, eum veniam vel cumque autem assumenda nulla illum accusamus, expedita animi quaerat temporibus saepe magnam, dolor minima."
            }, {
                "firstname": "Alfredo",
                "surname": "Linguini",
                "id": 2,
                "email": "alfredo@mail.com",
                "password": "c17",
                "level": 1,
                "picture": "img/users/alfredo-linguini.jpg",
                "city": "Dunkerque",
                "birth": 1993,
                "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aspernatur fuga quisquam iusto, eum veniam vel cumque autem assumenda nulla illum accusamus, expedita animi quaerat temporibus saepe magnam, dolor minima."
            }];
            $scope.communaute = communaute;
            $scope.login();

            $scope.userr = $scope.communaute.filter(function (communaute) {

                if (communaute.surname === "Van Deventer" && communaute.password === "c17")

                    return true;
                return false;
            })[0];

            expect($scope.userr).not.toBe(null);

        });

    })


});
