angularRoutingApp.controller('CreaTrabajoController', function($scope, $http, $rootScope) {
	
    $rootScope.Titulo = "Crea Oferta Laboral";

    $scope.CreaOferta = function() {
        $http.post('./models/TrabajosCrear.php', {
            Cargo:              $scope.txtTituloOferta,
            Publicador:         $scope.txtPublicador,
            Categoria:          $scope.txtCategoria,
            Renta:              $scope.txtRenta,
            TipoContrato:       $scope.txtTipoContrato,
            EtapasEvaluacion:   $scope.txtEtapasEvaluacion,
            Modalidad:          $scope.txtModalidad,
            DescripcionGeneral: $scope.txtDescripcionGeneral,
            BeneficiosVentajas: $scope.txtBeneficiosVentajas,
            Requisitos:         $scope.txtRequisitos,
            Imagen:             $scope.myCroppedImage,
            FechaCaduca:        $scope.txtFechaCaduca

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
