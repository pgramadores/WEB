angularRoutingApp.controller('ContactoController', function($scope, $http,$rootScope) {
	
    $rootScope.Titulo = "Contactanos";

    $scope.EnviarContacto = function($event) {
        $http.post('./system/AngularModels/ContactoEnviaMensaje.php', { 
        	Nombres: $scope.txtNombres,
        	Correo: $scope.txtCorreo,
        	Asunto: $scope.txtAsunto,
        	Mensaje: $scope.txtMensaje
        })
        .success(function(data) {
        		angular.element($event.target).val(data);
            })
        .error(function(data) {
                console.log('Error: ' + data);
        });
    } 
});