<?php 
include 'db_connect.php'; //ประกาศว่าต้องการดึงdb ตัวไหน

$sql = "SELECT * FROM patient";
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