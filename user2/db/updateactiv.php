<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'dbConfig.php';


$sql = "UPDATE activities SET activTitle = '$data->activTitle', activDetail = '$data->activDetail', activDate = '$data->activDate', activSubmit = '$data->activSubmit' WHERE id = $data->id";
$qry = $conn->query($sql);
$conn->close();
 ?>