<?php 
$postData = file_get_contents("php://input");
$data = json_decode($postData); // ให้ทำการ decode ของ json
include 'dbConfig.php';


$sql = "SELECT * FROM news WHERE id = '$data->id'"; 
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
