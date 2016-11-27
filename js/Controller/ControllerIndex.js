angularRoutingApp.controller('mainController', function($scope,$rootScope) {

	$rootScope.Titulo = "Pagina Principal";

    $scope.initTickerMe = function () {
        $(function () {
        // wait till load event fires so all resources are available
            $scope.$tickerme = $('#ticker').tickerme();
        });
    };

    $scope.initTickerMe();
});
