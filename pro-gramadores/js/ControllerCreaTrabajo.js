angularRoutingApp.controller('CreaTrabajoController', function($scope, $http, $rootScope) {
	
    $rootScope.Titulo = "Crea Oferta Laboral";

    $scope.CreaOferta = function($event) {
        $http.post('./system/AngularModels/CreaOfertaTrabajo.php', { 
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