<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'dbConfig.php';

$sql = "INSERT INTO news (newsTitle, newsDetail, newsDate, newsSubmit) VALUES ('$data->newsTitle', '$data->newsDetail', '$data->newsDate', '$data->newsSubmit')";
$qry = $conn->query($sql);
$conn->close();
 ?>