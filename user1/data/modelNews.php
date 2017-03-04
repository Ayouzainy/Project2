<?php
include("../db/db_connect.php");
$mysqli = connect(); // สร้าง ตัวแปร mysql instance สำหรับเรียกใช้งานฐานข้อมูล

// ส่วนแรก คือสำหรับแสดงผลข้อมูล
if (isset($_GET['viewNews'])) { // ส่งตัวแปร GET ชื่อ viewFriend มากำหนดให้ทำงานในส่วนนี้
	header("Content-type:application/json; charset=UTF-8");
	header("Cache-Control: no-store, no-cache, must-revalidate");
	header("Cache-Control: post-check=0,pre-check=0, false");
	$more_sql="";
	if (isset($_GET['id']) && $_GET['id'] !="") {// รับค่า กรณี แสดงรายการเดียวที่เลือก ตาม Id
		$more_sql="AND id='".$_GET['id']."' ";
		# code...
	}
// เนื้อหาส่วนล่างถัดจากนี้ เป็นการเรียกใช้งาน คำสั่ง php ดึงข้อมูล
// มาเก็บในตัวแปร array แล้วนำไปสร้างเป็นรูปแบบ json object 
// เนื้อหาก่อนหน้ามีรายละเอียด ในที่นี้ไม่ขออธิบายเพิ่ม
	$sql="SELECT * FROM news WHERE 1 $more_sql ";
$result = $mysqli->query($sql);
while($rs=$result->fetch_object()){
    $json_data[]=array(
        "nId"=>$rs->newsNo,
        "nName"=>$rs->newsTiltle,
        "nDetail"=>$rs->newsDetail,
        "nDate"=>$rs->newsDate,
        "nImg"=>$rs->newsImage,
        "nSubmit"=>$rs->newsSubmit

    );  
}    

$json= json_encode($json_data);
if(isset($_GET['callback']) && $_GET['callback']!=""){
echo $_GET['callback']."(".$json.");";    
}else{
echo $json;
}    
    exit;
} // if (first)
?>