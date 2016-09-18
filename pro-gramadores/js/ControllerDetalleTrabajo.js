angularRoutingApp.controller('DetalleTrabajoController', function($scope, $routeParams,$http,$uibModal,$rootScope,$sce,$location) {

	$http.get('./models/TrabajosDetalle.php?IdTrabajo='+$routeParams.IdOferta)
    .success(function(data) {
        $scope.Contenido = data;
        $scope.DescripcionGeneral =  $sce.trustAsHtml(data.DescripcionGeneral);
        $scope.BeneficiosVentajas =  $sce.trustAsHtml(data.BeneficiosVentajas);
        $scope.Requisitos =  $sce.trustAsHtml(data.Requisitos);
        $scope.IdDetalle = $routeParams.IdOferta;
        $scope.Detalle = $routeParams.Oferta;
        $scope.Ubicacion = escape($location.absUrl());
        $rootScope.Titulo = data.Cargo;


        $scope.CompartirFacebook = function () {
            console.log($location.absUrl());
            FB.ui({
                method: 'feed',
                name: data.Cargo,
                link: $location.absUrl(),
                caption: 'Pro-Gramadores.org :: El poder del código',
                description : data.DescShare,
                picture : 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAlYAAAAJDQ0MWNjZWFiLTQwZTYtNDJiZC1hNWY3LTM3MWE5OGM1Mzc5MQ.png',
            }, function(response){

            });
        };
    });

    $scope.animationsEnabled = true;

	$scope.open = function (idttabajo) {

		$scope.IdEmpleoAPostular = idttabajo;

		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'myModalContent.html',
			controller: 'TrabajoController',
			scope: $scope
		});

		$rootScope.Modal = modalInstance;
	};

	$scope.ok = function () {
		$rootScope.Modal.close('cancel');
	};

	$scope.cancel = function () {
		$rootScope.Modal.dismiss('cancel');
	};

	$scope.Postular = function($event,$data,$IdTrabajo) {

		var str = JSON.stringify($data);
		var nuevo = str.substring(0,str.length-1) + ',"idTrabajo":"'+$IdTrabajo+'"}';
		
        $http.post('./models/TrabajosPostular.php', nuevo )
        .success(function(data) {
        		angular.element($event.target).html('<i class="fa fa-check"></i> ' + data);
            })
        .error(function(data) {
                console.log('Error: ' + data);
        });
    } 
});
