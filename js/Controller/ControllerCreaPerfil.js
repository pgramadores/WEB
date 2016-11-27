angularRoutingApp.controller('CreaPerfilController', function($scope,$rootScope,$http,env) {
    
    $scope.myImage='';
    $scope.myCroppedImage='';

    var modelExperiencia = [
            {
                nombreempresa   : "",
                cargo           : "",
                desde           : "",
                hasta           : "",
                descripcion     : ""
            }
    ];

    var agregarExperiencia = function(experiencia){
        
    }

    $scope.Experiencias = [];

    var handleFileSelect=function(evt) {
        var file=evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function($scope){
                $scope.myImage=evt.target.result;
            });
        };
        reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

    $http.get('https://restcountries.eu/rest/v1/all').success(function(data){
        $scope.Paises = data;        
    });
    
    $scope.Redessociales = [
            {
                valor  : '&#xf230;',
                icono  : "fa-facebook-official"
            },
            {
                valor  : '&#xf099',
                icono  : "fa-twitter"
            },
            {
                valor  : '&#xf08c',
                icono  : "fa-linkedin-square"
            },
            {
                valor  : '&#xf09b;',
                icono  : "fa-github"
            },
            {
                valor  : '&#xf0d5;',
                icono  : "fa-google-plus"    
            },
            {
                valor  : '&#xf0e6',
                icono  : "fa-comments-o"
            }
        ];
});