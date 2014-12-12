angular.module("app", ["ngPrettyJson"])
.controller('MainCtrl', ["$scope", "$http", "$timeout", function($scope, $http, $timeout){

	var url = "https://api.github.com/users/darul75/repos?callback=JSON_CALLBACK";
	var isRepos = false;

	$http.jsonp(url).success(function(resp){
	  $scope.repos = resp;
	  $timeout(function () { $scope.isRepos = true },500 );
	});
	
}])

;
