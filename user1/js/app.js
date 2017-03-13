var myapp = angular.module('app',['ngRoute']);
	myapp.controller('newsList', function($route,$scope,$http,$routeParams){

		$scope.getNews = function(){
		$http.get('db/selectnews.php').then(function(response){
			$scope.news = response.data;
		});
	}
	});
	myapp.controller('newsView', function($route,$scope,$http,$routeParams){
		$scope.showNews = function(){
		var id = $routeParams.id;
		$http.post('db/selectnewsone1.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.news = emp[0];
		});
		
	}
	});

	myapp.controller('activList', function($route,$scope,$http,$routeParams){

		$scope.getActiv = function(){
		$http.get('db/selectactiv.php').then(function(response){
			$scope.activities = response.data;
		});
	}
	});
	myapp.controller('activView', function($route,$scope,$http,$routeParams){
		$scope.showActiv = function(){
		var id = $routeParams.id;
		$http.post('db/selectactiv1.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.activ = emp[0];
		});
		
	}
	});

// การ config ค่า provider service ในที่นี้เป็นการตั้งต่าการ
// ลิ้งค์ไปมาระหว่างไฟล์ ด้วย $routeProvider 
	myapp.config(function($routeProvider){
		$routeProvider
		.when('/', {
					templateUrl:'home.html'
				}
			)
		.when('/inforDrugs', {
					templateUrl:'inforDrugs.html'
				}
			)
		.when('/pathToStop', {
					templateUrl:'pathToStop.html'
				}
			)
		.when('/drugIs', {
					templateUrl:'drugIs.html'
				}
			)
		.when('/drugType', {
					templateUrl:'drugType.html'
				}
			)
		.when('/treat', {
					templateUrl:'treat.html'
				}
			)
		.when('/newsActiv', {
					templateUrl:'newsAndactiv.html'
				}
			)
		.when('/newsList', { 
					templateUrl:'newsList.html', 
					controller:'newsList'
				}
			)
		.when('/news/:id/show', {
					templateUrl:'newsView.html', 
					controller:'newsView'
				}
			)
		.when('/activList', {
					templateUrl:'activList.html', 
					controller:'activList'
				}
			)
		.when('/activ/:id/show', {
					templateUrl:'activView.html', 
					controller:'activView'
				}
			)
		.when('/evaluForm_normal', {
					templateUrl:'evaluateForm_normal.html'
				}
			)

		.otherwise({
			redirectTo: '/'
		});
	});


