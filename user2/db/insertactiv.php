<?php
$postData = file_get_contents("php://input");
$data = json_decode($postData);
include 'db_connect.php'; //ประกาศว่าต้องการดึงdb ตัวไหน

$sql = "INSERT INTO activities (`id`, `newsTitle`, `newsDetail`, `newsDate`, `newsImage`, `newsSubmit`)
VALUES ( NULL, `newsTitle`, `newsDetail`, `newsDate`, `newsImage`, `newsSubmit`)"; //ยังไม่ได้กำหนดตัวแปล ที่จะเพิ่ทข้อมูล
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

