<?php
	session_start();

	$postData = file_get_contents("php://input");
	$data = json_decode($postData);
	$token = $data->token;
	$username = $data->username;
	$password = $data->password;

	if($data->token == $_SESSION['token']){
		if($username == 'admin' && $password == '1234'){
			$_SESSION['user'] = $username;
			$res['data'] = $username;
		}
		else{
			$res['err'] = "invalid";
		}
	}
	else{
		$res['err'] = "Please don't hack me.";		
	}

	print_r(json_encode($res));
?>