<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'dbConfig.php';


$sql = "UPDATE news SET newsTitle = '$data->newsTitle', newsDetail = '$data->newsDetail', newsDate = '$data->newsDate', newsSubmit = '$data->newsSubmit' WHERE id = $data->id";
$qry = $conn->query($sql);
$conn->close();
 ?>