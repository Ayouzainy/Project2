var myapp = angular.module('app',['chart.js','ngRoute']);
	myapp.controller('pieChart', function($scope){
		$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  		$scope.data = [300, 500, 100];
	});
	myapp.controller('BarCtrl', function ($scope) {
 		 	$scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  			$scope.series = ['Series A', 'Series B'];

  			$scope.data = [
    						[65, 59, 80, 81, 56, 55, 40],
    						[28, 48, 40, 19, 86, 27, 90]
  			];
		});
	myapp.config(function($routeProvider){
		$routeProvider
		.when('/', {
					templateUrl:'home.html'
				}
			)
		.when('/news', {
					templateUrl:'news.html'
				}
			)
		.when('/survey', {
					templateUrl:'survey.html'
				}
			)
		.when('/volunteer', {
					templateUrl:'volunteer.html'
				}
			)
		.when('/register', {
					templateUrl:'register.html'
				}
			)
		.when('/namelist', {
					templateUrl:'namelist.html'
				}
			)
		.otherwise({
			redirectTo: '/'
		});
	});