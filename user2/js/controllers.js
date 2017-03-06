app.controller('manageCtrl', function($scope, $state, authService, $http){
	if(!authService.isLogin()){
		$state.go('home');
	}

	$scope.getEmployees = function(){
		$http.get('php/select.php').then(function(response){
			$scope.employees = response.data;
		});
		
	}

	$scope.addEmployees = function(info){
		$http.post('php/insert.php', info).then(function(response){
			window.location.href = 'http://localhost/kwangnoiisystem/index.html#/manage';
		});
		
	}

	$scope.showEmployees = function(){
		var id = $state.params.id;
		$http.post('php/selectone.php', {'id':id}).then(function(response){
			var emp = response.data;
			$scope.id = id;
			$scope.employee = emp[0];
		});
		
	}

	$scope.updateEmployees = function(info){
		$http.post('php/update.php', info).then(function(response){
			window.location.href = 'http://localhost/kwangnoiisystem/index.html#/manage';
		});
		
	}

	$scope.deleteEmployees = function(id){
		var id = id;
		$http.post('php/delete.php', {'id':id}).then(function(response){
			$state.reload();
		});
		
	}
	
});

app.controller('loginCtrl', function($scope, $state, $http, authService){
	$scope.auth = {
		token: authService.getToken()
	};

	$scope.login = function(){
		console.log('login:', $scope.auth);

		$http.post('php/login.php', $scope.auth).then(function(res){
			var res = res.data;
			if(res.err){
				console.log('login err:', res.err);
			}
			else{
				console.log('login res:', res.data);
				localStorage.setItem('user', res.data);
				authService.isLogin('set', true);
				$state.go('home');
			}
		});
	};
});
