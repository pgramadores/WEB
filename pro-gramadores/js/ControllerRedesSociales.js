angularRoutingApp.controller('RedesSocialesController', function($scope,$http) {
	
	$http.get('https://api.facebook.com/method/fql.query?format=json&query=SELECT total_count FROM link_stat WHERE url="https://facebook.com/pgramadores"')
    .success(function(data) {
        $scope.Facebook = data[0].total_count;
    });

    $http.jsonp('http://api.twittercounter.com/?apikey=031ad25ad5ec74a4c771524f600ef3c4&output=jsonp&callback=JSON_CALLBACK&username=pgramadores')
    .success(function(data) {
        $scope.Twitter = data.followers_current;
    });

    $http.get('https://www.googleapis.com/plus/v1/people/103240560477155357090?key=AIzaSyD8eNGpyCFJ5nN7I5dvVBNqt_vbT0zXlqE')
    .success(function(data) {
        $scope.GPlus = data.circledByCount;
    });

    $http.get('https://www.googleapis.com/youtube/v3/channels?part=statistics+&forUsername=pgramadores&key=AIzaSyD8eNGpyCFJ5nN7I5dvVBNqt_vbT0zXlqE')
    .success(function(data) {
        $scope.Youtube = data.items[0].statistics.subscriberCount;
    });

});