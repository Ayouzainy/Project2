<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'dbConfig.php';

$sql = "SELECT survey.surveyNo,patientlist.Name,patientlist.Lastname,SUM(surveyanswer.score) totalScore FROM surveyanswer INNER JOIN survey ON surveyanswer.suveyNo = survey.surveyNo
INNER JOIN patientlist ON survey.patientNo = patientlist.patientNo
WHERE surveyanswer.suveyNo = '$data' AND surveyanswer.questionType = 0 GROUP BY surveyanswer.suveyNo, surveyanswer.questionType";
$result = $conn->query($sql);
if($result->num_rows > 0){
	// output data of each noe
	$data = array();
	while($row = $result->fetch_assoc()){
		$data[] = $row;
	}

}else{
	echo "0 results";
}
echo json_encode($data);
$conn->close();
 ?>

