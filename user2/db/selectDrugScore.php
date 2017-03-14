<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'dbConfig.php';

$sql = "SELECT surveyanswer.suveyNo, drugquestion.drugId, drugquestion.name, sum(surveyanswer.score) totalScore
FROM surveyanswer
INNER JOIN drugquestion
ON surveyanswer.questionType = drugquestion.drugId 
WHERE surveyanswer.suveyNo = '$data' GROUP BY surveyanswer.questionType, surveyanswer.suveyNo" ;
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

