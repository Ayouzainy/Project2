<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'db_connect.php';

$sql = "UPDATE volunteerlist SET volunName = '$data->volunName', volunLastname = '$data->volunLastname', volunGender = '$data->volunGender', volunAge = '$data->volunAge', volunAddress = '$data->volunAddress', volunJob = '$data->volunJob', volunTel = '$data->volunTel', volunEmail = '$data->volunEmail',  volunUser = '$data->volunUser', volunPswd = '$data->volunPswd' WHERE id = $data->id";
$qry = $conn->query($sql);
$conn->close();
 ?>