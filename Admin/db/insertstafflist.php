<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'db_connect.php';

$sql = "INSERT INTO stafflist (staffName, staffLastname, staffGender, staffAge, staffAddress, staffDepart, staffTel, staffEmail, staffUser, staffPswd) VALUES ('$data->staffName', '$data->staffLastname', '$data->staffGender', '$data->staffAge', '$data->staffAddress', '$data->staffDepart', '$data->staffTel', '$data->staffEmail', '$data->staffUser', '$data->staffPswd')";
$qry = $conn->query($sql);
$conn->close();
 ?>