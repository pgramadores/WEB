angularRoutingApp.controller('ContactoController', function($scope, $routeParams) {
	$scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
    $scope.Usuario = $routeParams.Usuario;
    $scope.Nombre = $routeParams.Nombre;
});