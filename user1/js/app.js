var myapp = angular.module('app',['ngRoute']);
	myapp.controller('homeController', function($scope){
		$scope.controllerName = 'This is homeController';
	})
	.controller('customerController', function($scope, $http){
		$scope.controllerName = 'This is customerController';
		$http.get('page/customer.json')
			.success(function(response){
				$scope.customers = response;
			});
	})
	.controller('customeDetailController', function($scope, $routeParams){
		$scope.controllerName = 'This is customerDetailController';
		$scope.customerId = $routeParams.customerId;
	})
	.controller('aboutController', function($scope){
		$scope.controllerName = 'This is aboutController';
	})

	myapp.value('urlDataN',"http://localhost:81/project2/user1/data/modelNews.php")
	myapp.value('urlDataA',"http://localhost:81/project2/user1/data/modelActiv.php")
	
	// กำหนด object service ชื่อ myFriend 
	myapp.factory('News', ['$http',"urlDataN", // inject ค่า $http กับ urlData ไปใช้งาน
  function($http,urlDataN){// กำหนดตรงนี้ด้วย
    var factory = {}; // สร้างตัวแปร object

    // สร้างฟังก์ชั่น ใน service myFriend ตัวนี้เป็น
    // ฟังก์ชั่น สำหรับแสดงข้อมูล มีการส่งค่า id ไปด้วย โดยจะเป็นค่าว่างก็ได้

    factory.viewNews = function(Id){
      // ใช้ $http service ไปดึงข้อมูลมาแสด ส่งค่า get viewFriend กับ Id ที่เป็นตัวแปรไปด้วย
      return $http.get(urlDataN+"?viewNews=&nId="+Id);  // คืนค่าข้อมูลกลับ
    };
    return factory; // คืนค่า object ไปให้ myFriend service
}])

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
					controller:'newsCtrl',  // ให้กำหนด หรือสร้าง controller ชื่อ newsCtrl 
					templateUrl:'newsList.html' //โดยดึงจากไฟล์ templage ชื่อ news.html
				}
			)
		.when('/newsView/:nId', {
					controller:'newsViewCtrl',  // ให้กำหนด หรือสร้าง controller ชื่อ newsCtrl 
					templateUrl:'newsView.html' //โดยดึงจากไฟล์ templage ชื่อ news.html
				}
			)
		.when('/camps', {
					templateUrl:'camps.html'
				}
			)
		.when('/list', {
					controller:'LsistCtrl',
					templateUrl:'tpl/list.html'
				}
			)

		.otherwise({
			redirectTo: '/'
		});
	})

// พอเราเปิดมาครั้งแรก $routeProvider จะเท่ากับ / ตาม config ด้านบน
// ทำให้มีการสร้าง ListCtrl controller ขึน เราจะมาใช้งานกันในส่วนหน้าแรกกัน ในส่วนนี้
// มีการ inject หรือใช้งาน $scope , $location (คล้าย window.location) และ myFriend service ที่เราสร้าง
.controller("newsCtrl",["$scope","$location","myNews",
function($scope,$location,myNews){ // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""
     
    $scope.news = {}; // กำหนด ตัวแปร object ที่เราจะไปเรียกใช้ ในหน้า list.html
    // พอแสดงหน้า list.html ให้ เรียกใช้งาน ฟังก์ชั่น ใน myFriend service ที่เราสร้าง
    myNews.viewNews('').success(function(result){ // ดึงข้อมูลสำเร็จ ส่งกลับมา
        $scope.news = result;  // เอาค่าข้อมูลที่ได้ กำหนดให้กับ ตัวแปร object
    });
     
    $scope.predicate = "nId";  // อันนี้กำหนดค่า สำหรับการเรียงข้อมูลเริ่มต้น ในตารางไฟล์ list.html
    // เรียงข้อมูลจาก id
  
    // กำหนดฟังก์ชัน ลบข้อมูล จากที่เรียกใช้ในหน้า template list.html
    $scope.deleteData = function(Id){ // ส่ง Id เข้ามา
        if(confirm("Confirm delete?")){ // ขึ้นแจ้งยืนยันการลบก่อน
            // ถ้ายืนยันการลบข้อมูลแล้ว ให้เรยกใช้งาน myFriend service ที่เราสร้าง เพื่อลบข้อมูล
            myNews.deleteNews(Id).success(function(){ // ถ้า ok ลบข้อมูล
               $location.path("#/news"); // ลบแล้วให้รีเฟรส
            });     
        }
    };    
}])

// เมื่อมาที่หน้า แสดงข้อมูล จะมีการสร้าง ViewCtrl controller จากค่าการ config ด้านบน
// เมื่อมีการคลิก เข้ามาหน้าแสดงข้อมูล จะมีการส่งค่า Id ของข้อมูลเข้ามาด้วย
// inject หรือเรียกใช้ $scope $location $routeParams และก็ myFriend service ที่เราสร้าง
.controller("newsViewCtrl",["$scope","$location","$routeParams","myNews",
function($scope,$location,$routeParams,myNews){ // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""
    // กำหนดตัวแปร object สำหรับไว้ส่งค่าไปแสดงในหน้า view.html
    $scope.news = {};
    // เรียกใช้งาน ฟังก์ชั่น viewFriend โดยส่งค่า Id ของข้อมูลไปด้วย
    // ฟังก์ชั่นนี้ เราไม่ต้องสร้างเพิ่ม ใช้ตัวเดียวกันกับ ตอนลิสรายการ แต่กรณีนี้มีการส่ง Id ไปด้วย
    myNews.viewNews($routeParams.Id).success(function(result){
        $scope.news = result;  // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object
    });
}]);


