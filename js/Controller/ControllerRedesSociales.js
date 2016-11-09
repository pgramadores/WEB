angularRoutingApp.controller('RedesSocialesController', function($scope,$http) {

	$http.get('https://graph.facebook.com/v2.7/456860731019994?fields=fan_count&access_token=EAAIXiYjjEvkBAKLpzH4aTyQITg9RpaI8c7vExQDO4wC4wpKHMXrs34efHiZArJXjd2paiiDCiRjyXTkBXoLtOBh4GBBZCosSmg5loa8QI7wKhnBz6BJ6KLTCtTZCqsxdof1qap56yxIsXJ7mipgPufhNHvOI0UpgYVk7djwkQZDZD')
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
