<?php
session_start();

$id = $_POST['userID'];//73832;//$_POST['userID'];

$mysqli = new mysqli("localhost", "root", "", "userinfo");
if($mysqli->connect_error) {
 die("Connection Failed: " . $conn->connect_error);
}

$sql = "UPDATE investments
SET Stocks = ?, Bonds = ?, RealEstate = ?, Royalties = ?, Business = ?, Other=? 
WHERE Id = ?; ";


$stocksNum = $_POST['stock'];
$bondsNum = $_POST['bond'];
$landNum = $_POST['land'];
$bookNum = $_POST['book'];
$storeNum = $_POST['store'];
$otherNum = $_POST['other'];

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("iiiiiii", $stocksNum, $bondsNum,$landNum, $bookNum ,$storeNum,$otherNum, $id);
$stmt->execute();

$mysqli->close();

?>