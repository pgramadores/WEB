// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// // Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'views/index-4.html',
			controller 	: 'mainController'
		})
		.when('/trabajos', {
			templateUrl : 'views/trabajos.html',
			controller 	: 'TrabajoController'
		})
        .when('/contacto/', {
            templateUrl : 'views/contacto.html',
            controller  : 'ContactoController'
        })
		.otherwise({
			redirectTo: '/'
		});
});




angularRoutingApp.controller('ContactoController', function($scope, $routeParams) {
	$scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
    $scope.Usuario = $routeParams.Usuario;
    $scope.Nombre = $routeParams.Nombre;
});

function OtroController($scope, $http) {

    $scope.names = [ ];
 
    $http.get('model.php')
    .success(function(data) {
            $scope.names = eval(data);
        })
    .error(function(data) {
            console.log('Error: ' + data);
    });
 
    $scope.addNom = function() {
        $http.post('model.php', { op: 'append', nom: $scope.nom, telefon: $scope.telefon } )
        .success(function(data) {
                $scope.names = eval(data);
            })
        .error(function(data) {
                console.log('Error: ' + data);
        });
 
        $scope.nom="";
        $scope.telefon="";
    }
 
    $scope.delNom = function( nom ) {
        if (confirm("Seguro?")) {
            $http.post('model.php', { op: 'delete', nom: nom } )
            .success(function(data) {
                    $scope.names = eval(data);
                })
            .error(function(data) {
                    console.log('Error: ' + data);
            });
        }
    }
}