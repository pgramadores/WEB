// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute','ui.bootstrap','ngAnimate']);

// // Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'views/index.html',
			controller 	: 'mainController'
		})
		.when('/trabajos', {
			templateUrl : 'views/trabajos.html',
			controller 	: 'TrabajoController'
		})
		.when('/detalleoferta/:Oferta?/:IdOferta?', {
			templateUrl : 'views/detalletrabajo.html',
			controller 	: 'DetalleTrabajoController'
		})
        .when('/contacto', {
            templateUrl : 'views/contacto.html',
            controller  : 'ContactoController'
        })
        .when('/foros', {
			templateUrl : 'views/foros.html',
			controller 	: 'ForosController'
		})
        .when('/error',{
            templateUrl : 'views/404.html',
            controller  : 'error' 
        }) 
		.otherwise({
			redirectTo: 'error'
		});
});