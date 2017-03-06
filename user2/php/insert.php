<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'dbConfig.php';

$sql = "INSERT INTO employee (name, dept, area, status, contact, salary) VALUES ('$data->name', '$data->dept', '$data->area', '$data->status', '$data->contact', '$data->salary')";
$qry = $conn->query($sql);
$conn->close();
 ?>