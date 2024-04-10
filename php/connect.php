<?php

  $id = random_int(10000, 99999); //36546;
  $username = $_POST['username']; //'sample1'; //$_POST['username'];
  $pass = $_POST['password']; //'Test1234';//$_POST['password'];
  $email = $_POST['email'];//'e67098@yahoo.com';//$_POST['email'];


  $conn = new mysqli("localhost", "root", "", "userinfo");
  if($conn->connect_error){
    die("Connection Failed: ".$conn->connect_error);
  } else {
    $sqlQuery = $conn->prepare('INSERT INTO `login`(Id, Username, Pass, Email) VALUES ( ?,?,?,?);');
    $sqlQuery->bind_param("isss", $id, $username, $pass, $email);
    $sqlQuery->execute();
  }
  $conn->close();

   $con = new mysqli("localhost", "root", "", "userinfo");
  if($con->connect_error){
    die("Connection Failed: ".$con->connect_error);
  } else {
    $sql = $con->prepare('INSERT INTO `investments`(Id, Stocks, Bonds, RealEstate, Royalties, Business, Other) VALUES ( ?,0,0,0,0,0,0);');
    $sql->bind_param("i", $id);
    $sql->execute();

    $sql2 = $con->prepare('INSERT INTO `goals`(Id, startYear, endYear, goalAmount) VALUES ( ?,0,0,0);');
    $sql2->bind_param("i", $id);
    $sql2->execute();
  }
  $con->close();

  include('../accountHTMLFiles/account.html');
?>
