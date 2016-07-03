angularRoutingApp.controller('TrabajoController', function($scope,$http) {
	$scope.message = 'Esta es la p�gina "Acerca de"';
	$http.get('./system/AngularModels/TrabajosListar.php')
    .success(function(data) {
        $scope.contents = data;

        /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
        /* :::::::::::::::::::::::::::::::Sistema de paginacion:::::::::::::::::::::::::::::::::::::::: */
        /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

        $scope.makeTodos = function() {
	    	$scope.todos = [];
	    	for (i=1;i<=1000;i++)
	    	$scope.todos= data;
	  	};
	  	$scope.filteredTodos = [],$scope.currentPage = 1,$scope.numPerPage = 5,$scope.maxSize = 5;
  	
	  	$scope.makeTodos(); 
	  
		$scope.numPages = function () {
			return Math.ceil($scope.todos.length / $scope.numPerPage);
		};
	  
	  	$scope.$watch('currentPage + numPerPage', function() {
	    	var begin = (($scope.currentPage - 1) * $scope.numPerPage), end = begin + $scope.numPerPage;
	    	$scope.filteredTodos = $scope.todos.slice(begin, end);
	  	});
	  	
	  	/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
	  	/* :::::::::::::::::::::::::::::Fin sistema de paginacion:::::::::::::::::::::::::::::::::::::::*/
	  	/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    });
    $scope.Postular = function($idTrabajo,$event) {
        $http.post('./system/AngularModels/TrabajosPostular.php', { idTrabajo: $idTrabajo } )
        .success(function(data) {
        		angular.element($event.target).html('<i class="fa fa-check"></i> ' + data);
            })
        .error(function(data) {
                console.log('Error: ' + data);
        });
    } 
});