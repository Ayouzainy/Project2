<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'dbConfig.php';

$sql = "INSERT INTO survey (volunteerNo, patientNo) VALUES ('$data->staffId', '$data->patientId')";
if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    echo json_encode($last_id);
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}$conn->close();
 ?>