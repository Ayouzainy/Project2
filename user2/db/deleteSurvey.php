<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'dbConfig.php';

$sql = "DELETE FROM survey, surveyanswer, patientlist
USING survey INNER JOIN surveyanswer INNER JOIN patientlist
WHERE survey.surveyNo = '$data'
    AND survey.surveyNo = surveyanswer.suveyNo
    AND patientlist.patientNo = survey.patientNo";
$result = $conn->query($sql);

$conn->close();
 ?>

