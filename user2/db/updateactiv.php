<?php 
$postData = file_get_contents("php://update");
$data = json_decode($postData);
include 'db_connect.php'; //ประกาศว่าต้องการดึงdb ตัวไหน

$sql = "UPDATE activities SET `id`=[value-1],`newsTitle`=[value-2],`newsDetail`=[value-3],`newsDate`=[value-4],`newsImage`=[value-5],`newsSubmit`=[value-6] WHERE id = '$data->id'"; 
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

