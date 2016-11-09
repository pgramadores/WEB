angularRoutingApp.controller('DetalleTrabajoController', function($scope, $routeParams,$http,$uibModal,$rootScope,$sce,$location,env) {

	$http.get(env.APIREST+'/ofertas/'+$routeParams.IdOferta)
    .success(function(data) {
        $scope.Contenido = data;
        $scope.DescripcionGeneral =  $sce.trustAsHtml(data.descripciongeneral);
        $scope.BeneficiosVentajas =  $sce.trustAsHtml(data.beneficiosventajas);
        $scope.Requisitos =  $sce.trustAsHtml(data.requisitos);
        $scope.IdDetalle = $routeParams._id;
        $scope.Detalle = $routeParams.oferta;
        $scope.Ubicacion = escape($location.absUrl());
        $rootScope.Titulo = data.cargo;

		switch (data.tipocontrato) {
			case 'Indefinido':
				$scope.Label = 'label-danger';
				break;
			case 'Honorarios':
				$scope.Label = 'label-primary';
				break;
			case 'Proyecto':
				$scope.Label = 'label-success';
				break;
			default:
				$scope.Label = 'label-info';
		}

        $scope.CompartirFacebook = function () {
            console.log($location.absUrl());
            FB.ui({
                method: 'feed',
                name: data.cargo,
                link: $location.absUrl(),
                caption: 'Pro-Gramadores.org :: El poder del código',
                description : data.DescShare,
                picture : 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAlYAAAAJDQ0MWNjZWFiLTQwZTYtNDJiZC1hNWY3LTM3MWE5OGM1Mzc5MQ.png',
            }, function(response){

            });
        };
    });

	$scope.Postular = function($event,$IdTrabajo) {

		//angular.element($event.target).html('<i class="fa fa-check"></i> ' + data);

		$http.put(env.APIREST+'/ofertasp/'+$routeParams.IdOferta, {
			nombre:             $scope.txtNombrePostulante,
			correo:         	$scope.txtCorreoPostulante,
			telefono:          	$scope.txtTelefonoPostulante,
			linkedin:           $scope.txtLinkedinPostulante,
			portafolio:       	$scope.txtPortafolioPostulante,
			experiencia: 		$scope.txtExperienciaPostulante,
			cartapresentacion: 	$scope.txtCartaPresentacionPostulante
		})
		.success(function(data) {
				console.log(data);
			})
		.error(function(data) {
				console.log('Error: ' + data);
		});



    }
});
