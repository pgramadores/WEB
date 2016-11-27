angularRoutingApp.controller('CreaPerfilController', function($scope,$rootScope) {
    $http.jsonp('https://restcountries.eu/rest/v1/all').success(function(datos){
        $scope.Paises = data;
        $scope.Redessociales = [
            {
                icono  : "fa-facebook-official",
                nombre : "Facebook",
            },
            {
                icono  : "fa-twitter",
                nombre : "Twitter"
            },
            {
                icono  : "fa-linkedin-square",
                nombre : "Linkedin"
            },
            {
                icono  : "fa-github",
                nombre : "Github"
            },
            {
                icono  : "fa-gitlab",
                nombre : "GitLab"
            },
            {
                icono  : "fa-google-plus",
                nombre : "Google +"     
            },
            {
                icono  : "fa-comments-o",
                nombre : "Otro"
            }
        ];
        
    });
});