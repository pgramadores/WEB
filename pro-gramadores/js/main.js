// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'textAngular', 'ngImgCrop', 'metatags', 'angularjs-datetime-picker']);

// // Configuración de las rutas
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
        when('/detallesforos'{
            templateUrl :'views/detallesforos.html',
            controller: 'ControllerDetallesForos'
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

    MetaTagsProvider
        .when('/', {
            title: 'Inicio',
            description: 'Cool',
            fb_title: 'My title',
            fb_site_name: 'My site name',
            fb_url: 'www.blablabla.blabla',
            fb_description: 'Cool website',
            fb_type: 'Facebook type',
            fb_image: 'an_image.jpg',
            robots: 'index, follow',
            keywords: 'some cool keywords'
        })
        .when('/detalleoferta/:IdOferta?/:Oferta?/', {
            title: 'detalle de la oferta',
            description: function(IdOferta, Oferta) {
                return 'COOOOOOOL' + IdOferta + " Super " + Oferta;
            },
            robots: 'index, follow',
            keywords: 'some cool keywords'
        })
        .otherwise({
            title: 'otherwise',
            description: 'Another great page'
        });
});

angularRoutingApp.run(function(MetaTags) {
    MetaTags.initialize();
});
