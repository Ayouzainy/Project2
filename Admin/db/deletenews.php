<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'db_connect.php';

$sql = "DELETE FROM news WHERE id = '$data->id'";
$result = $conn->query($sql);

$conn->close();
 ?>

