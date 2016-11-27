angularRoutingApp.controller('CreaPerfilController', function($scope,$rootScope,$http,env,md5,ngNotify) {


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
        if ($scope.perfil.contrasena == $scope.reContrasena){
            $scope.perfil.contrasena = md5.createHash($scope.perfil.contrasena);
            $http.post(env.APIREST+"/perfil/",$scope.perfil)        
            .success(function(data) {
                ngNotify.addTheme('pro-gramadores', 'pro-gramadores');
                ngNotify.set('<i class="fa fa-check"></i> Registrado exitosamente, a la brevedad recibirás un correo electrónico', {
                    position: 'top',
                    sticky: false,
                    type: 'success',
                    duration: 5000,
                    theme: 'pro-gramadores',
                    html: true,
                    button: true
                });
                console.log(data);
            })
                .error(function(data) {
                console.log('Error: ' + data);
            });
         }
    }
});