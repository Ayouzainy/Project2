<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'dbConfig.php';

$sql = "UPDATE employee SET name = '$data->name', dept = '$data->dept', area = '$data->area', status = '$data->status', contact = '$data->contact', salary = '$data->salary' WHERE id = $data->id";
$qry = $conn->query($sql);
$conn->close();
 ?>