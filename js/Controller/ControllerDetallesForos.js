angularRoutingApp.controller('DetallesForosController', function($scope,$rootScope,$routeParams) {

	/*variable para recibir un parametro
			$routeParams.TipoForo
	*/


	$rootScope.Titulo = "Prueba de Foro controller deralles foros";
	$scope.gerardo = "Prueba";





		switch($routeParams.TipoForo) {
	    case 'php':
		$scope.cargatopicos = [
				{topico:"PHPWEB",cantidad:26,publicaciones:5},
				{topico:"PHPFRAMEWORK",cantidad:30,publicaciones:100},
				{topico:"PHPZEND",cantidad:27,publicaciones:25}
			];
	        break;
	    case 'java':
		$scope.cargatopicos = [
				{topico:"JAVA WEB",cantidad:26,publicaciones:5},
				{topico:"JAVAEE",cantidad:30,publicaciones:100},
				{topico:"JAVADESKTOK",cantidad:27,publicaciones:25}
			];
	        break;
		case 'net':
		$scope.cargatopicos = [
				{topico:"C#",cantidad:26,publicaciones:5},
				{topico:"Visual Basic",cantidad:30,publicaciones:100},
				{topico:"C# Web",cantidad:27,publicaciones:25}
			];
			break;
	}

});
