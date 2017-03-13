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
	// คอลโทลเลอ ข่าว 
	myapp.controller('newsMenu', function($route,$scope,$http,$routeParams){
		// โชว์ข่าวทั้งหมด
		$scope.getNews = function(){
		$http.get('db/selectnews.php').then(function(response){
			$scope.news = response.data;
		});
		}
		// ลบข่าว
		$scope.deleteNews = function(id){
			var id = id;
			$http.post('db/deletenews.php', {'id':id}).then(function(response){
				$route.reload();
			});
		}
		// โชว์ข่าวผ่านไอดี
		$scope.showNews = function(){
		var id = $routeParams.id;
		$http.post('db/selectnewsone1.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.news = emp[0];
		});
		}
		// เพิ่มข่าว
		$scope.addNews = function(info){
		console.log(info);
		$http.post('db/insertnews.php', info).then(function(response){
			window.location.href = 'http://localhost/Admin/Admin/#/newsMenu/news';
		});
		
		}
		// แก้ข่าว
		$scope.editNews = function(info){
		$http.post('db/updatenews.php', info).then(function(response){
			window.location.href = 'http://localhost/Admin/Admin/#/newsMenu/news';
		});
		
		}

	});

//Activity Table
	//Controller Activity
	myapp.controller('activ', function($route,$scope,$http,$routeParams){
		// โชว์กิจกรรมทั้งหมด
		$scope.getActiv = function(){
		$http.get('db/selectactiv.php').then(function(response){
			$scope.atv = response.data;
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
					templateUrl:'page/newsMenu_admin.html'
				}
			)
		.when('/newsMenu/news', {
					templateUrl:'page/news.html',
					controller:'newsMenu'
				}
			)
		.when('/newsMenu/news/:id/show', {
					templateUrl:'page/newsView.html', 
					controller:'newsMenu'
				}
			)
		.when('/newsMenu/news/insert', {
					templateUrl:'page/newsInsert.html',
					controller:'newsMenu'
				}
			)
		.when('/newsMenu/news/:id/update', {
					templateUrl:'page/newsEdit.html',
					controller:'newsMenu'
				}
			)

		.when('/newsMenu/activ', {
					templateUrl:'page/activ.html',
					controller:'activ'
				}
			)
		.when('/activ/insert', {
					templateUrl:'page/activInsert.html',
					controller:'activ'
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