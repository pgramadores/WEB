// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'textAngular', 'ngImgCrop', 'metatags', 'angularjs-datetime-picker']);

// Configuración de las constantes
angularRoutingApp.constant("env",{
    "APIREST": "http://pro-gramadores.io:3000"
});

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider, $locationProvider, MetaTagsProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'mainController'
        })
        .when('/trabajos', {
            templateUrl: 'views/trabajos.html',
            controller: 'TrabajoController'
        })
        .when('/detalleoferta/:IdOferta?/:Oferta?/', {
            templateUrl: 'views/detalletrabajo.html',
            controller: 'DetalleTrabajoController'
        })
        .when('/creaoferta', {
            templateUrl: 'views/creaoferta.html',
            controller: 'CreaTrabajoController'
        })
        .when('/contacto', {
            templateUrl: 'views/contacto.html',
            controller: 'ContactoController'
        })
        .when('/foros', {
            templateUrl: 'views/foros.html',
            controller: 'ForosController'
        })
        .when('/forosdet', {
          templateUrl: 'views/forosdet.html',
          controller: 'ForosdetController'
        })
        //Rutas de los foros
        .when('/detallesforos/:TipoForo',{
            templateUrl :'views/detallesforos.html',
            controller: 'DetallesForosController'
        })
        //Fin Rutas foros
        .when('/error', {
            templateUrl: 'views/404.html',
            controller: 'error'
        })
        .otherwise({
            redirectTo: 'error'
        });

    $locationProvider.html5Mode(true);

    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

});
