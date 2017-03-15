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
			window.location.href = 'http://localhost:81/project2/Admin/#/newsMenu/news';
		});
		
		}
		// แก้ข่าว
		$scope.editNews = function(info){
		$http.post('db/updatenews.php', info).then(function(response){
			window.location.href = 'http://localhost:81/project2/Admin/#/newsMenu/news';
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
		// โชว์กิจกรรมผ่านไอดี
		$scope.showActiv = function(){
		var id = $routeParams.id;
		$http.post('db/selectactiv1.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.atv = emp[0];
		});
		}

		// เพิ่มกิจกรรม
		$scope.addActiv = function(info){
		console.log(info);
		$http.post('db/insertactiv.php', info).then(function(response){
			window.location.href = 'http://localhost:81/project2/Admin/#/newsMenu/activ';
		});
		
		}

		// แก้กิจกรรม
		$scope.editActiv = function(info){
		$http.post('db/updateactiv.php', info).then(function(response){
			window.location.href = 'http://localhost:81/project2/Admin/#/newsMenu/activ';
		});
		
		}

		// ลบกิจกรรม
		$scope.deleteActiv = function(id){
			var id = id;
			$http.post('db/deleteactiv.php', {'id':id}).then(function(response){
				$route.reload();
			});
		}


		});


	//Volunteerlist Table Controller volunteer
	
	myapp.controller('volun', function($route,$scope,$http,$routeParams){
		// โชว์รายชื่อวิทยากรจิตอาสาทั้งหมด
		$scope.getVolun = function(){
			$http.get('db/selectvolunteer.php').then(function(response){
				$scope.vol = response.data;				
			});
		}

		// โชว์กิจกรรมผ่านไอดี
		$scope.showVolun = function(){
		var id = $routeParams.id;
		$http.post('db/selectvolunteerone.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.vol = emp[0];
		});
		}

		// เพิ่มรายชื่อวอทยากรจิตอาสา
		$scope.addVolun = function(info){
		console.log(info);
		$http.post('db/insertvolunteer.php', info).then(function(response){
			window.location.href = 'http://localhost:81/project2/Admin/#/volunteer/namelist_volunteer';
		});
		
		}

		// แก้กิจกรรม
		$scope.editVolun = function(info){
		$http.post('db/updatevolunteer.php', info).then(function(response){
			window.location.href = 'http://localhost:81/project2/Admin/#/volunteer/namelist_volunteer';
		});
		
		}

		// ลบกิจกรรม
		$scope.deleteVolun = function(id){
			var id = id;
			$http.post('db/deletevolunteer.php', {'id':id}).then(function(response){
				$route.reload();
			});
		}
	});

	//Stafflist Table Controller staff
	
	myapp.controller('staff', function($route,$scope,$http,$routeParams){
		// โชว์รายชื่อเจ้าหน้าที่หน่วยงานญาลันนันบารูทั้งหมด
		$scope.getStaff = function(){
			$http.get('db/selectstafflist.php').then(function(response){
				$scope.stafflist = response.data;				
			});
		}

		// โชว์ายชื่อเจ้าหน้าที่หน่วยงานญาลันนันบารูผ่านไอดี
		$scope.showStaff = function(){
		var id = $routeParams.id;
		$http.post('db/selectstafflistone.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.stafflist = emp[0];
		});
		}

		// แก้กิจกรรม
		$scope.editStaff = function(info){
		$http.post('db/updatestafflist.php', info).then(function(response){
			window.location.href = 'http://localhost:81/project2/Admin/#/namelist';
		});
		
		}

		// ลบกิจกรรม
		$scope.deleteStaff = function(id){
			var id = id;
			console.log(id);
			$http.post('db/deletestafflist.php', {'id':id}).then(function(response){
				$route.reload();
			});
		}

		// เพิ่มรายชื่อวอทยากรจิตอาสา
		$scope.addStaff = function(info){
		console.log(info);
		$http.post('db/insertstafflist.php', info).then(function(response){
			window.location.href = 'http://localhost:81/project2/Admin/#/namelist';
		});
		
		}

	});
	
	//ลิงค์หน้า
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

		.when('/activ/:id/show', {
					templateUrl:'page/activView.html', 
					controller:'activ'
				}
			)

		.when('/activ/insert', {
					templateUrl:'page/activInsert.html',
					controller:'activ'
				}
			)

		.when('/activ/:id/update', {
					templateUrl:'page/activeEdit.html',
					controller:'activ'
				}
			)



		
		.when('/survey', {
					templateUrl:'page/survey_admin.html'
				}
			)
		.when('/survey/patient', {
					templateUrl:'page/survey_admin_patient.html',
					controller:'patientList'
				}
			)
		.when('/survey/patient/:id/show', {
					templateUrl:'page/survey_admin_patientView.html',
					controller:'patientView'
				}
			)
		.when('/survey/chart', {
					templateUrl:'page/survey_admin_chart.html'
				}
			)
		.when('/volunteer', {
					templateUrl:'page/volunteerMenu_admin.html'
				}
			)
		.when('/register', {
					templateUrl:'page/register_admin.html'
				}
			)
		
		.when('/volunteer/namelist_volunteer',{
			templateUrl: 'page/namelistVolunteer_admin.html',
			controller: 'volun'
			}
		)
		.when('/volunteer/namelist_volunteer',{
			templateUrl: 'page/namelistVolunteer_admin.html',
			controller: 'volun'
			}
		)
		.when('/volunteer/namelist_volunteer/:id/show', {
					templateUrl:'page/namelistVolunteerView.html', 
					controller:'volun'
				}
		)

		.when('/volunteer/insert', {
					templateUrl:'page/registerVolunteer_admin.html',
					controller:'volun'
				}
			)

		.when('/volunteer/namelist_volunteer/:id/update', {
					templateUrl:'page/volunteerEdit.html',
					controller:'volun'
				}
			)

		.when('/namelist',{
			templateUrl: 'page/namelist_admin.html',
			controller: 'staff'
			}
		)

		.when('/namelist/:id/show', {
					templateUrl:'page/staffView.html', 
					controller:'staff'
				}
		)

		.when('/namelist/:id/update', {
					templateUrl:'page/staffEdit.html',
					controller:'staff'
				}
			)

		.when('/namelist/insert', {
					templateUrl:'page/register_admin.html',
					controller:'staff'
				}
			)
		.otherwise({
			redirectTo: '/'
		});
	});