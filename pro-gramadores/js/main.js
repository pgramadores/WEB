// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute','ui.bootstrap']);

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
        .when('/error/',{
            templateUrl : 'views/404.html',
            controller  : 'error' 
        })
		.otherwise({
			redirectTo: 'error'
		});
});