angularRoutingApp.controller('DetallePerfilController', function($scope,$rootScope,$routeParams) {
    $routeParams.correo;
    var data = {
    nombres             : 'Agustin Gonzalez Murua',
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
                aptitudes   : [
                    {
                        nombre : "JavaScript"
                    }
                ]
            }
        ]
    };
    $rootScope.Titulo = "Perfil de " + data.nombres;
    $scope.Perfil = data; 
    $scope.Redessociales = data.redessociales;
    $scope.Experiencias= data.experiencias;
    $scope.Aptitudes = data.aptitudes;
});