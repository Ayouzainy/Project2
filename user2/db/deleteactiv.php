<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'dbConfig.php';


$sql = "DELETE FROM activities WHERE id = '$data->id'";
$result = $conn->query($sql);

$conn->close();
 ?>

