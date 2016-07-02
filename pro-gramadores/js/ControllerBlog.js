angularRoutingApp.controller('mainController', function($scope) {
	$scope.message = 'Hola, Mundo!';
    $scope.initTickerMe = function () {
        $(function () {
        // wait till load event fires so all resources are available
            $scope.$tickerme = $('#ticker').tickerme();
        });
    };
          
    $scope.initTickerMe();
});