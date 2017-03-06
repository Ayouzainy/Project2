app.factory('authService', function($state, $http){
	var checkLogin = false;

	function initToken(){
		var params = '?user=' + getUser() + '&token=' + getToken();
		console.log('initToken params:', params);
		
		$http.get('php/initToken.php' + params).then(function(res){
			var res = res.data;
			if(res.err){
				console.log('initToken err:', res.err);
				logout();
			}
			else{
				console.log('initToken res:', res.data);
				localStorage.setItem('token', res.data);
			}
		});
	}

	function getToken(){
		return localStorage.getItem('token');
	}

	function getUser(){
		return localStorage.getItem('user');
	}

	function isLogin(e, value){
		if(e){
			checkLogin = value;
		}
		else{
			return checkLogin;
		}		
	}

	function logout(){
		localStorage.removeItem('user');
		isLogin('set', false);
		$state.go('home');
	}

	initToken();

	return {
		getToken: getToken,
		getUser: getUser,
		isLogin: isLogin,
		logout: logout,
	};
});