angularRoutingApp.controller('DetalleTrabajoController', function($scope, $routeParams) {
	$scope.message = 'Esta es la página "Acerca de"';
	$scope.IdDetalle = $routeParams.IdOferta;
	$scope.Detalle = $routeParams.Oferta;
	$http.get('./system/AngularModels/TrabajosListar.php?IdTrabajo'+$routeParams.IdOferta)
    .success(function(data) {
        $scope.contents = data;
    });
});