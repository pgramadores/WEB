// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'textAngular', 'ngImgCrop', 'metatags', 'angularjs-datetime-picker','ngNotify','angular-md5']);

// Configuración de las constantes
angularRoutingApp.constant("env",{
    "APIREST": "http://pro-gramadores.io:3000",
    "DOMINIO": "http://pro-gramadores.io"
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
        .when('/detalleperfil/:correo',{
            templateUrl: 'views/detalleperfil.html',
            controller: 'DetallePerfilController'
        })
        .when('/creaperfil',{
            templateUrl: 'views/creaperfil.html',
            controller: 'CreaPerfilController'
        })
        .when('/correoinvalido',{
            templateUrl: 'views/correoinvalido.html',
            controller: 'ControllerCorreoInvalido'
        })
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

angularRoutingApp.directive('ngConfirm', [
    function(){
        return {
            priority: 1,
            terminal: true,
            link: function (scope, element, attr) {
                var msg = attr.ngConfirm || "¿Está seguro?";
                var clickAction = attr.ngClick;
                element.bind('click',function (event) {
                    if ( window.confirm(msg) ) {
                        scope.$eval(clickAction)
                    }
                });
            }
        };
    }
]);
