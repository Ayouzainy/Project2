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
// news table
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
	myapp.controller('newsInsert', function($route,$scope,$http,$routeParams){
		$scope.insertNews = function(){
		var id = $routeParams.id;
		$http.post('db/insertnews.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.news = emp[0];
		});
		
	}
	});
	myapp.controller('newsUpdate', function($route,$scope,$http,$routeParams){
		$scope.updateNews = function(){
		var id = $routeParams.id;
		$http.post('db/updatenews.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.news = emp[0];
		});
		
	}
	});
	myapp.controller('newsDelete', function($route,$scope,$http,$routeParams){
		$scope.deleteNews = function(){
		var id = $routeParams.id;
		$http.post('db/deletenews.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.news = emp[0];
		});
		
	}
	});
	// myapp.controller('confirmDelete', function($route,$scope,$http,$routeParams){
	// 	$scope.confrmDeletenews = function(){
	// 	var id = $routeParams.id;
	// 	if(confirm('Do you want to delete this News')==true){
	// 		alert('Going to newsList');
	// 		window.location = '/news';
	// 	}else{
	// 		alert('You selected to cancel.');
	// 		}
	// 	});
		
	// }
	// });

// activ table
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
	myapp.controller('newsInsert', function($route,$scope,$http,$routeParams){
		$scope.insertNews = function(){
		var id = $routeParams.id;
		$http.post('db/insertnews.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.news = emp[0];
		});
		
	}
	});
	myapp.controller('newsUpdate', function($route,$scope,$http,$routeParams){
		$scope.updateNews = function(){
		var id = $routeParams.id;
		$http.post('db/updatenews.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.news = emp[0];
		});
		
	}
	});
	myapp.controller('newsDelete', function($route,$scope,$http,$routeParams){
		$scope.deleteNews = function(){
		var id = $routeParams.id;
		$http.post('db/deletenews.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.news = emp[0];
		});
		
	}
	});



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
		.when('/evaluateForm', {
					templateUrl:'evaluateForm.html'
				}
			)
		.when('/quizForm', {
					templateUrl:'quizForm.html'
				}
			)
		.when('/newsActiv', {
					templateUrl:'newsAndactiv.html'
				}
			)
		.when('/news', {
					templateUrl:'news.html',
					controller:'newsList'
				}
			)
		.when('/news/:id/show', {
					templateUrl:'newsView.html', 
					controller:'newsView'
				}
			)
		.when('/news/insert', {
					templateUrl:'newsInsert.html',
					controller:'newsInsert'
				}
			)
		.when('/news/:id/update', {
					templateUrl:'newsEdit.html',
					controller:'newsUpdate'
				}
			)
		.when('/news/:id/delete', {
					templateUrl:'newsDelete.html',
					controller:'newsDelete'
				}
			)
		.when('/activ', {
					templateUrl:'activ.html',
					controller:'activList'
				}
			)
		.when('/activ/:id/show', {
					templateUrl:'activView.html', 
					controller:'activView'
				}
			)
		.when('/activ/insert', {
					templateUrl:'activInsert.html',
					controller:'activInsert'
				}
			)
		.when('/activ/:id/update', {
					templateUrl:'activEdit.html',
					controller:'activUpdate'
				}
			)
		.when('/activ/:id/delete', {
					templateUrl:'activDelete.html',
					controller:'activDelete'
				}
			)
		.when('/profile', {
					templateUrl:'volunteerProfile.html'
				}
			)
		.otherwise({
			redirectTo: '/'
		});
	});
