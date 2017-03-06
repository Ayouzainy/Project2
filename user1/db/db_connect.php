<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "msydb";
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn,"utf8");

if ($conn->connect_error) {
    die("Unable to connect database: " . $db->connect_error);
}