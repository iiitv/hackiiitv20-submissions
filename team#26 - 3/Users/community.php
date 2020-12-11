<?php
session_start();

if(isset($_SESSION['login_user_connect']) && isset($_REQUEST['name'])){
    
    $dts = explode("&",base64_decode($_SESSION['login_user_connect']));
    $id = $dts[0];
    $email = $dts[1];
    $name = $dts[2];
    
    require_once("../Database/dbconnect_connect.php");
?>
<!DOCTYPE html>
<html>
	<head>
	    <title>Community | Discussion can happen here</title>
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" async>
		<link href="https://fonts.googleapis.com/css2?family=Literata&display=swap" rel="stylesheet"> 
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="../CSS/kel.css">
		<style>
		
		</style>
	</head>
<body>
</body>
<?php
    
    $conn->close();
}
else{
    header("Location:../logout.php"); 
}

?>