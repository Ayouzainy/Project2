<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'dbConfig.php';

$sql = "INSERT INTO activities (activTitle, activDetail, activDate, activSubmit) VALUES ('$data->activTitle', '$data->activDetail', '$data->activDate', '$data->activSubmit')";
$qry = $conn->query($sql);
$conn->close();
 ?>