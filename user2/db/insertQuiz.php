<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'dbConfig.php';

$sql = "INSERT INTO surveyanswer (suveyNo, questionNo, choiceNo, score, questionType) VALUES ('$data->survayId', '$data->qId', '$data->opId', '$data->score', '$data->qtype')";
if ($conn->query($sql) === TRUE) {
    echo "complete";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}$conn->close();
 ?>