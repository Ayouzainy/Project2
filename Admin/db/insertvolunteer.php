<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'db_connect.php';

$sql = "INSERT INTO volunteerlist (volunName, volunLastname, volunGender, volunAge, volunAddress, volunJob, volunTel, volunEmail, volunUser, volunPswd) VALUES ('$data->volunName', '$data->volunLastname', '$data->volunGender', '$data->volunAge', '$data->volunAddress', '$data->volunJob', '$data->volunTel', '$data->volunEmail', '$data->volunUser', '$data->volunPswd')";
$qry = $conn->query($sql);
$conn->close();
 ?>