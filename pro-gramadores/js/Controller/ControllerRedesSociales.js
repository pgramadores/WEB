angularRoutingApp.controller('RedesSocialesController', function($scope,$http) {
	
	$http.get('https://graph.facebook.com/v2.7/456860731019994?fields=fan_count&access_token=EAAIXiYjjEvkBAHbAD7B4UCCW5u0Mw1RpQJ5ici5TEtBkp0Y8m3jHMmSnJR4jO7vV4QJ5j4SISjRqetMkdKd7cIsJPXJw6hUxK5WYMDwExYKxm4PjuLJl42lxmFhvESJSkyPipsyRhnwf2mvb36bG4mYToAlyM95EQignugZDZD')
    .success(function(data) {
        $scope.Facebook = data.fan_count;
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
