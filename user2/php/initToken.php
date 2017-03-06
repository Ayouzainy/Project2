<?php
	session_start();

	function generateRandomString($length = 10) {
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for($i=0;$i<$length;$i++){
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}	

	if($_GET['user'] != 'null' && $_GET['token'] != 'null'){
		if(!isset($_SESSION['user']) || ($_GET['user'] != $_SESSION['user'] || $_GET['token'] != $_SESSION['token'])){
			$res['err'] = "Please don't hack me.";	
		}
		else{
			$res['data'] = $_SESSION['token'];
		}
	}
	else{
		$_SESSION['token'] = generateRandomString(20);
		$res['data'] = $_SESSION['token'];
	}

	print_r(json_encode($res));
?>