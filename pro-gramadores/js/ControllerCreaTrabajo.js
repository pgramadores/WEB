angularRoutingApp.controller('CreaTrabajoController', function($scope, $http, $rootScope) {

    $rootScope.Titulo = "Crea Oferta Laboral";

	var date = new Date();

	$http.get('http://ipinfo.io/json')
	.success(function(datos) {
		$scope.Pais = datos.country;
	});

    $scope.CreaOferta = function() {
        $http.post('http://localhost:3000/ofertas/', {
            cargo:              $scope.txtTituloOferta,
            publicador:         $scope.txtPublicador,
            categoria:          $scope.txtCategoria,
            sueldo:             $scope.txtRenta,
            tipocontrato:       $scope.txtTipoContrato,
            descripciongeneral: $scope.txtDescripcionGeneral,
            beneficiosventajas: $scope.txtBeneficiosVentajas,
            requisitos:         $scope.txtRequisitos,
            imagen:             $scope.myCroppedImage,
            fechatermino:       $scope.txtFechaCaduca,
            correoPublicador:   $scope.txtCorreoPublicador,
			pais:				$scope.Pais,
			fechacreacion:		date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2),
			estado: true

        })
        .success(function(data) {
        		console.log(data);
            })
        .error(function(data) {
                console.log('Error: ' + data);
        });

    };

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
});
