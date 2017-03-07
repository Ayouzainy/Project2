var app = angular.module('app', ['chart.js','ngRoute', 'ngSanitize'])
// Routing has been added to keep flexibility in mind. This will be used in future.
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
app
.config(['$routeProvider',
  function ($routeProvider) {

      var routes = [
          {
              url: '/survay',
              template: 'quiz.html',
              controller: 'quizCtrl'
          }
      ];

      routes.forEach(function (r, index) {
          $routeProvider.when(r.url, { templateUrl: r.template, controller: r.controller });
      });

      $routeProvider
      .when('/', {  
          templateUrl: 'home.html'
        }
      )
      .when('/inforDrugs', {  
          templateUrl: 'inforDrugs1.html'
        }
      )
      .when('/inforDrugs/pathToStop', {  
          templateUrl: 'pathToStop.html'
        }
      )
      .when('/inforDrugs/drugIs', {  
          templateUrl: 'drugIs.html'
        }
      )
      .when('/inforDrugs/drugType', {  
          templateUrl: 'drugType.html'
        }
      )
      .when('/inforDrugs/treat', {  
          templateUrl: 'treat.html'
        }
      )
      .otherwise({
          redirectTo: '/'
        }
      );
  }]);
