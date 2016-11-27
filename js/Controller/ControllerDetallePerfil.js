angularRoutingApp.controller('DetallePerfilController', function($scope,$rootScope,$routeParams,$location) {
    $routeParams.correo;
    var data = {
        nombrecompleto    : 'Agustin Gonzalez Murua',
        correo          : 'agustin.gonzalez@pro-gramadores.cl',
        nacionalidad    : 'CL',
        foto            : null,
        redessociales   : [
            {
                "icono"   : "fa-twitter",
                "nombre"  : "Twitter",
                "link"    : "www.twitter.com"
            },
            {
                "icono"   : "fa-facebook",
                "nombre"  : "Facebook",
                "link"    : "www.facebook.com"
            }
        ],
        experiencias    : [
            {
                nombreempresa   : "GL Group",
                cargo           : "Algo especial",
                desde           : new Date(2016,7,26,8,30,0,0),
                hasta           : "Actualidad",
                descripcion     : "Hice muchas cosas"
            }
        ],
        bio             : "Mi biografía",
        aptitudes       : [
            {
                tipo        : "Workshop",
                nombre      : "Event Loop Hackaton",
                habilidades   : [
                    {
                        nombre : "JavaScript"
                    }
                ],
                fechaasistencia : new Date(2016,11,26,9,30,0,0)
            }
        ]
    };

    $rootScope.Titulo = "Perfil de " + data.nombres;
    $scope.Ubicacion = escape($location.absUrl());
    $scope.CompartirFacebook = function () {
        console.log($location.absUrl());
        FB.ui({
            method: 'feed',
            name: data.cargo,
            link: $location.absUrl(),
            caption: 'Pro-Gramadores.org :: El poder del código',
            description : "Perfil de " + data.nombres,
            picture : 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAlYAAAAJDQ0MWNjZWFiLTQwZTYtNDJiZC1hNWY3LTM3MWE5OGM1Mzc5MQ.png',
        }, function(response){

        });
    };
    $scope.Perfil = data; 
    $scope.Redessociales = data.redessociales;
    $scope.Experiencias= data.experiencias;
    $scope.Aptitudes = data.aptitudes;
});