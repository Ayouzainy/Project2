var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home',{
            url: '/home',
            template: '<h2>Home page</h2><h3>Welcome to home.....</h3>'
        })
        .state('manage',{
            url: '/manage',
            templateUrl: 'page/manage.html',
            controller: 'manageCtrl'
        })
        .state('login',{
            url: '/login',
            templateUrl: 'page/login.html',
            controller: 'loginCtrl'
        })
        .state('create',{
            url: '/manage/create',
            templateUrl: 'page/create.html',
            controller: 'manageCtrl'
        })
        .state('show',{
            url: '/manage/show/:id',
            templateUrl: 'page/show.html',
            controller: 'manageCtrl'
        })
        .state('edit',{
            url: '/manage/edit/:id',
            templateUrl: 'page/edit.html',
            controller: 'manageCtrl'
        });

    $urlRouterProvider.otherwise('/home');
});

app.run(function($rootScope, authService) {
    $rootScope.authService = authService;
});