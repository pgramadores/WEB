angularRoutingApp.controller('TrabajoController', function($scope,$http,$uibModal) {
	
	$http.get('./models/TrabajosListar.php')
    .success(function(data) {

        $scope.contents = data;

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
	  
    });

});