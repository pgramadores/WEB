angularRoutingApp.controller('DetalleTrabajoController', function($scope, $routeParams,$http) {
	$scope.message = 'Esta es la página "Acerca de"';
	$scope.IdDetalle = $routeParams.IdOferta;
	$scope.Detalle = $routeParams.Oferta;
	$http.get('./models/TrabajosDetalle.php?IdTrabajo='+$routeParams.IdOferta)
    .success(function(data) {
        $scope.Contenido = data[0];
    });
});