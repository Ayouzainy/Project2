var app = angular.module('app', ['chart.js','ngRoute', 'ngSanitize'])
// Routing has been added to keep flexibility in mind. This will be used in future.

var storageQ = {
  survayId:"",
  qId:"",
  opId:"",
  score:"",
  qtype:""
};

var survay = {
  patientId:""
  ,staffId:"1"
};

app.controller('pieChart', function($scope){
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
      $scope.data = [300, 500, 100];
  });
app.controller('BarCtrl', function ($scope) {
      $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        $scope.series = ['Series A', 'Series B'];

        $scope.data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
        ];
    });
app.controller('survay', function($route,$scope,$http,$routeParams){

  $scope.addPatient = function(info){
    console.log(info);
    $http.post('db/insertPatient.php', info).then(function(response){
      $scope.id = response.data;
      console.log($scope.id);
      survay.patientId = $scope.id;
      localStorage.setItem("storageSurvay",JSON.stringify(survay));
      var storageSurvay1 = localStorage.getItem("storageSurvay");
      console.log(storageSurvay1);
      $scope.addSurvay(storageSurvay1);

    });
    
    
  }
  
  $scope.addSurvay = function(info){
    console.log(info);
    $http.post('db/insertSuyvey.php', info).then(function(response){
       $scope.sid = response.data;
        storageQ.survayId = $scope.sid;
        localStorage.setItem("survayNo",$scope.sid);
        localStorage.setItem("storageQuiz",JSON.stringify(storageQ));
        var survayNo2 = localStorage.getItem("survayNo");
        window.location.href = 'http://localhost:81/project2/user2/index.html#/evaluate/quizform';
    });
    
  }

});

app.controller('summary', function($route,$scope,$http,$routeParams){

  $scope.getScore = function(){
    var survayNo = localStorage.getItem("survayNo");
    $http.post('db/selectDrugScore.php', survayNo).then(function(response){
      $scope.score = response.data;
      console.log(($scope.score).length);
    });
    
  }

  $scope.drugScore = function(score){
    if(score <= 3){
      return score = "ไม่ต้องให้การบำบัด";
    }else if(score >= 4 && score <= 26){
      return score = "ให้การบำบัดอย่างย่อ";
    }else if(score >= 27){
      return score = "ให้การรักษาแบบเข้มข้น";
    }
  }

  $scope.patientgroup = function(){
    var survayNo = localStorage.getItem("survayNo");
    $http.post('db/selectPatientGroup.php', survayNo).then(function(response){
      var pgroup = response.data;
      $scope.patientg = pgroup[0];
      console.log($scope.patientg.totalScore);
      $scope.group = "";
      $scope.help = "";
      $scope.whoHelp = "";
      $scope.following = "";
      if($scope.patientg.totalScore <=1){
        $scope.group = "ไม่จัดอยู่ในกลุ่มผู้ติดสารเสพติด";
        $scope.help = "-";
        $scope.whoHelp = "จนท.สธ/รพ.ทุกระดับ";
        $scope.following = "-";
      }else if($scope.patientg.totalScore >=2 && $scope.patientg.totalScore <=3){
        $scope.group = "กลุ่มใช้เป็นครั้งคราว";
        $scope.help = "การให้คำแนะำและความรู้ จำนวน 1-2 ครั้ง, การให้การช่วยเหลือของครอบครัว โรงเรียน และชุมชน";
        $scope.whoHelp = "จนท.สธ/รพ.ทุกระดับ, วิทยากรที่ค่าย, วัด, มัสยิดม, ทีมสหวิชาชีพ รพช. รพท. รพศ.";
         $scope.following = "ติดตาม 2-4 ครั้ง ใน 6 เดือน โดยผู้ให้การบำบัด อสบ. และทีมติดตามในชุมชนร่วมกับ จนท.สธ.";
      }else if($scope.patientg.totalScore >=4 && $scope.patientg.totalScore <=26){
        $scope.group = "กลุ่มเสพ";
        $scope.help = "ขั้นที่ 1 การให้ความช่วยเหลือ (Brief Interveiw 15-30 นาที/ครั้ง) จำนวน 4 ๕รั้งใน 1 เดือน หรือค่ายบำบัด 9 วัน/วัดเป็นศูนย์สงเคราะห์/มัสยิด เมื่อครบ 1 เดือน ประเมินไม่ผ่านให้ส่งต่อขั้นที่ 2, ขั้นที่ 2 MI/CBT/Mod, Matrix + Medication ห้วงเวลา 1-2 เดือน";
        $scope.whoHelp = "จนท.สธ/รพ.ทุกระดับ, วิทยากรที่ค่าย, วัด, มัสยิดม, ทีมสหวิชาชีพ รพช. รพท. รพศ.";
         $scope.following = "ติดตาม 2-4 ครั้ง ใน 6 เดือน โดยผู้ให้การบำบัด อสบ. และทีมติดตามในชุมชนร่วมกับ จนท.สธ.";
      }else if($scope.patientg.totalScore >= 27){
        $scope.group = "กลุ่มติด";
        $scope.help = "OPD, IPD + medication + Long Term Treatment";
        $scope.whoHelp = "ทีมสหวิชาชีพที่ รพ.สร.รพ. เฉพาะทางสังกัดกรมการแพทย์,กรมสุขภาพจิต,จนท./ที่รร.";
        $scope.following = "ติดตาม 4-7 ครั้ง ใน 1 ปี โดยผู้ให้การบำบัด อสบ. และทีมติดตามในชุมชนร่วมกับ จนท.สธ.";
      }

    });
    
  }

  
  $scope.deleteSurvey = function(id){
    $http.post('db/deleteSurvey.php', id).then(function(response){
    });
  }

  $scope.cancelSurvey = function(){
    var id = localStorage.getItem("survayNo");
    $http.post('db/checkSurveyForDelete.php', id).then(function(response){
        var check = response.data;
        $scope.checkid  = (check).length;
        console.log($scope.checkid);
        if($scope.checkid == 1){
        $scope.deleteSurvey(id);
        }
    });
    window.location.href = 'http://localhost:81/project2/user2/index.html#/';
  }

});

app.controller('newsMenu', function($route,$scope,$http,$routeParams){
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
      window.location.href = 'http://localhost:81/project2/user2/#/newsMenu/news';
    });
    
    }
    // แก้ข่าว
    $scope.editNews = function(info){
    $http.post('db/updatenews.php', info).then(function(response){
      window.location.href = 'http://localhost:81/project2/user2/#/newsMenu/news';
    });
    
    }

  });

//Activity Table
  //Controller Activity
  app.controller('activ', function($route,$scope,$http,$routeParams){
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
      window.location.href = 'http://localhost:81/project2/user2/#/newsMenu/activ';
    });
    
    }

    // แก้กิจกรรม
    $scope.editActiv = function(info){
    $http.post('db/updateactiv.php', info).then(function(response){
      window.location.href = 'http://localhost:81/project2/user2/#/newsMenu/activ';
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


app
.config(['$routeProvider',
  function ($routeProvider) {

      var routes = [
          {
              url: '/evaluate/quizform',
              template: 'page/quiz.html',
              controller: 'quizCtrl'
          }
      ];

      routes.forEach(function (r, index) {
          $routeProvider.when(r.url, { templateUrl: r.template, controller: r.controller });
      });

      $routeProvider
      .when('/', {  
          templateUrl: 'page/home.html'
        }
      )
      .when('/inforDrugs', {  
          templateUrl: 'page/inforDrugs1.html'
        }
      )
      .when('/inforDrugs/pathToStop', {  
          templateUrl: 'page/pathToStop.html'
        }
      )
      .when('/inforDrugs/drugIs', {  
          templateUrl: 'page/drugIs.html'
        }
      )
      .when('/inforDrugs/drugType', {  
          templateUrl: 'page/drugType.html'
        }
      )
      .when('/inforDrugs/treat', {  
          templateUrl: 'page/treat.html'
        }
      )
      .when('/evaluate', {  
          templateUrl: 'page/evaluateForm2.html',
          controller: 'survay'
        }
      )
      .when('/test', {  
          templateUrl: 'page/testpage.html',
          controller: 'summary'
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
    .when('/activ/:id/update', {
          templateUrl:'page/activeEdit.html',
          controller:'activ'
        }
      )
    .when('/newsMenu/activ/insert', {
          templateUrl:'page/activInsert.html',
          controller:'activ'
        }
      )

      .otherwise({
          redirectTo: '/'
        }
      );
  }]);
