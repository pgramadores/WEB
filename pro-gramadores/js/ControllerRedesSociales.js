angularRoutingApp.controller('RedesSocialesController', function($scope,$http) {
	
	$http.get('https://graph.facebook.com/pgramadores/insights/page_fans?access_token=EAACEdEose0cBAFh3cHYBVtDutpQ4UkbuA9gFzwsUxqM5m0IhpO0GnjDXS8CvSlypW38xZATeQS4rvheXjNRX6lUHv7VBozPted1HUZBr31c9C7ZBndqbSYO3lXxUvZBgcDtJ1Om34TZA1d4sbLlYJzz6S2tHceUZCQ1rNAMvUvhgZDZD&since=1469304448&until=1469563648')
    .success(function(data) {
        $scope.Facebook = data.data[0].values[0].value;
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