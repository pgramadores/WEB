angularRoutingApp.controller('DetalleTrabajoController', function($scope, $routeParams,$http,$uibModal,$rootScope,$sce,$location,env,ngNotify) {

	$http.jsonp('http://ipinfo.io/json?output=jsonp&callback=JSON_CALLBACK&username=pgramadores')
	.success(function(datos) {
		$scope.PaisActual = datos.city+','+datos.country;
	});

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

			ngNotify.addTheme('pro-gramadores', 'pro-gramadores');
			ngNotify.set('<i class="fa fa-check"></i> Postulación a oferta realizada correctamente, recibiras un mail de copia de la postulación realizada.', {
			    position: 'top',
			    sticky: false,
				type: 'success',
    			duration: 5000,
				theme: 'pro-gramadores',
    			html: true,
				button: true
			});

			$scope.txtNombrePostulante = "";
			$scope.txtCorreoPostulante = "";
			$scope.txtTelefonoPostulante = "";
			$scope.txtLinkedinPostulante = "";
			$scope.txtPortafolioPostulante = "";
			$scope.txtExperienciaPostulante = "";
			$scope.txtCartaPresentacionPostulante = "";
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});



    }
});
