angularRoutingApp.controller('CreaPerfilController', function($scope,$rootScope,$http,env,md5,ngNotify) {


    $scope.perfil = {};
    $scope.myImage='';
    $scope.myCroppedImage='';
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


    $scope.registrar = function (){
        if ($scope.perfil.contrasena == $scope.reContrasena){
             $scope.perfil.contrasena = md5.createHash($scope.perfil.contrasena);

            if($scope.myCroppedImage != "")
                $scope.perfil.foto = $scope.myCroppedImage;
                $http.post(env.APIREST+"/perfil/", $scope.perfil)        
                .success(function(data){
                    console.log(data);
                    if(data != null){
                        alert("Registrado exitosamente");
                        window.location = env.DOMINIO;
                    }else{
                        alert("El correo ya se encuentra asociado con pro-ramadores");
                    }
            })
                .error(function(data) {
                console.log('Error: ' + data);
            });
          }
    }
});