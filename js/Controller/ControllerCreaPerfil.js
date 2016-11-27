angularRoutingApp.controller('CreaPerfilController', function($scope,$rootScope,$http,env) {
    
    $scope.perfil = [];
    $scope.myImage='';
    $scope.perfil.foto='';
    var handleFileSelect=function(evt) {
        var file=evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function($scope){
                $scope.perfil.foto = evt.target.result;
            });
        };
        reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

    
    $http.get('https://restcountries.eu/rest/v1/all').success(function(data){
        $scope.Paises = data;        
    });

        

    $scope.registrar = function (){
        console.log($scope.perfil);
    }
});