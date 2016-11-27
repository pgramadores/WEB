angularRoutingApp.controller('DetallePerfilController', function($scope,$rootScope,$routeParams,$location, env, http) {

    var exito = false;
    $http.get(env.APIREST+'/perfil/'+$routeParams.correo)
    .success(function(data) {
        exito = true;
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
    if(!exito)
        window.location.href = "correoinvalido";
    console.log(exito);
});