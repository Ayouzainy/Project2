<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'db_connect.php';

$sql = "UPDATE stafflist SET staffName = '$data->staffName', staffLastname = '$data->staffLastname', staffGender = '$data->staffGender', staffAge = '$data->staffAge', staffAddress = '$data->staffAddress', staffJob = '$data->staffJob', staffTel = '$data->staffTel', staffEmail = '$data->staffEmail',  staffUser = '$data->staffUser', staffPswd = '$data->staffPswd' WHERE id = $data->id";
$qry = $conn->query($sql);
$conn->close();
 ?>