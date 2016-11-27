angularRoutingApp.controller('DetallesForosController', function($scope,$rootScope,$routeParams) {

	/*variable para recibir un parametro
			$routeParams.TipoForo
	*/


	$rootScope.Titulo = "Prueba de Foro controller deralles foros";
	$scope.gerardo = "Prueba";





		switch($routeParams.TipoForo) {
	    case 'php':
		$scope.cargatopicos = [
				{topico:"php",cantidad:26,publicaciones:5},
				{topico:"php framework",cantidad:30,publicaciones:100},
				{topico:"PHPZEND",cantidad:27,publicaciones:25}
			];
	        break;
	    case 'java':
		$scope.cargatopicos = [
				{topico:"jsp",cantidad:26,publicaciones:5},
				{topico:"java EE",cantidad:30,publicaciones:100},
				{topico:"java desktop",cantidad:27,publicaciones:25}
			];
	        break;
		case 'net':
		$scope.cargatopicos = [
				{topico:"C#",cantidad:26,publicaciones:5},
				{topico:"Visual Basic",cantidad:30,publicaciones:100},
				{topico:"asp",cantidad:27,publicaciones:25}
			];
			break;
	}

});
