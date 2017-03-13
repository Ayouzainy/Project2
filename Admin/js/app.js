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
		$scope.deleteNews = function(id){
			var id = id;
			$http.post('db/deletenews.php', {'id':id}).then(function(response){
				$route.reload();
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
	$scope.addNews = function(info){
		console.log(info);
		$http.post('db/insertnews.php', info).then(function(response){
			window.location.href = 'http://localhost/user2/user2/#/newsMenu/news';
		});
		
	}
	});
	myapp.controller('newsView', function($route,$scope,$http,$routeParams){
		$scope.showNews = function(){
		var id = $routeParams.id;
		$http.post('db/selectnewsone1.php', {'id':id}).then(function(response){
			var n = response.data;
			$scope.id = id;
			$scope.news = n[0];
		});
		
	}
	});
	myapp.controller('newsEdit', function($route,$scope,$http,$routeParams){
		$scope.showNews = function(){
		var id = $routeParams.id;
		$http.post('db/selectnewsone1.php', {'id':id}).then(function(response){
			var n = response.data;
			$scope.id = id;
			$scope.news = n[0];
		});
	}
		$scope.editNews = function(info){
		$http.post('db/updatenews.php', info).then(function(response){
			window.location.href = 'http://localhost/user2/user2/#/newsMenu/news';
		});
		
	}
	});


	myapp.config(function($routeProvider){
		$routeProvider
		.when('/', {
					templateUrl:'home.html'
				}
			)
		.when('/newsMenu', {
					templateUrl:'admin/newsMenu_admin.html'
				}
			)
		.when('/newsMenu/news', {
					templateUrl:'admin/news.html',
					controller:'newsList'
				}
			)
		.when('/newsMenu/news/:id/show', {
					templateUrl:'admin/newsView.html', 
					controller:'newsView'
				}
			)
		.when('/newsMenu/news/insert', {
					templateUrl:'admin/newsInsert.html',
					controller:'newsInsert'
				}
			)
		.when('/newsMenu/news/:id/update', {
					templateUrl:'newsEdit.html',
					controller:'newsEdit'
				}
			)

		.when('/newsMenu/activ', {
					templateUrl:'admin/activ.html',
					controller:'activList'
				}
			)
		.when('/activ/insert', {
					templateUrl:'admin/activInsert.html',
					controller:'activInsert'
				}
			)

		// .when('/newsMenu/newsCamp',{
		// 			templateUrl: 'newsCamp.html'
					
		// 		}
		// 	)
		.when('/survey', {
					templateUrl:'admin/survey_admin.html'
				}
			)
		.when('/survey/patient', {
					templateUrl:'admin/survey_admin_patient.html',
					controller:'patientList'
				}
			)
		.when('/survey/patient/:id/show', {
					templateUrl:'admin/survey_admin_patientView.html',
					controller:'patientView'
				}
			)
		.when('/survey/chart', {
					templateUrl:'admin/survey_admin_chart.html'
				}
			)
		.when('/volunteer', {
					templateUrl:'admin/volunteerMenu_admin.html'
				}
			)
		.when('/register', {
					templateUrl:'admin/register_admin.html'
				}
			)
		.when('/namelist', {
					templateUrl:'admin/namelist_admin.html'
				}
			)
		.when('/volunteer/register_volunteer',{
			templateUrl: 'admin/registerVolunteer_admin.html'
			}
		)
		.when('/volunteer/namelist_volunteer',{
			templateUrl: 'admin/namelistVolunteer_admin.html'
			}
		)
		.otherwise({
			redirectTo: '/'
		});
	});