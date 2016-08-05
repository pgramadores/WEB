// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute','ui.bootstrap','ngAnimate','ngSanitize','textAngular','ngImgCrop']);

// // Configuración de las rutas
angularRoutingApp.config(function($routeProvider,$locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'views/index.html',
			controller 	: 'mainController'
		})
		.when('/trabajos', {
			templateUrl : 'views/trabajos.html',
			controller 	: 'TrabajoController'
		})
		.when('/detalleoferta/:IdOferta?/:Oferta?/', {
			templateUrl : 'views/detalletrabajo.html',
			controller 	: 'DetalleTrabajoController'
		})
		.when('/creaoferta', {
			templateUrl : 'views/creaoferta.html',
			controller 	: 'CreaTrabajoController'
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

        // use the HTML5 History API
        $locationProvider.html5Mode(true);

    //check browser support
        if(window.history && window.history.pushState){
            //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

         // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

         // if you don't wish to set base URL then use this
         $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
        }
});
