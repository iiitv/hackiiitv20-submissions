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
	    <title>Profile | Connect us to discuss your problems</title>
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" async>
		<link href="https://fonts.googleapis.com/css2?family=Literata&display=swap" rel="stylesheet"> 
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="../CSS/kel.css">
		<style>
		
		</style>
	</head>
<body>
<div class="w3-modal" id="editun">
    <div class="w3-modal-content w3-animate-zoom w3-card-4" style="max-width:500px">
      <header class="w3-container w3-<?php echo "blue" ?>"> 
        <span onclick="document.getElementById('editun').style.display='none'" 
        class="w3-button w3-display-topright w3-xlarge">&times;</span>
        <h2>My Account</h2>
      </header>
      <form class="w3-container">
<?php

    $query1 = "SELECT real_name FROM users WHERE u_id = $id";
    
    if($data1 = $conn->query($query1)){
        
        $result = $data1->fetch_assoc();
?>
   
        <center>
        	<div class="w3-text-red" id="up-error"></div>
        	<div class="loader" id="up-loader" style="display:none"></div>
        </center>
        <table class="w3-table w3-margin-top">
            <tr>
                <td class="w3-large" style="text-align:right;vertical-align: middle;">Username: </td>
                <td><input class="w3-border w3-input" id="u_name" value="<?php echo $result['real_name'] ?>"></td>
            </tr>
        
             <tr style="margin-top:30px;">
                <td class="w3-large" style="text-align:right;vertical-align: middle;">Current Pass: </td>
                <td><input class="w3-border w3-input" id="pass" type="password" placeholder="Current Password"></td>
            </tr>
            <tr>
                <td class="w3-large" style="text-align:right;vertical-align: middle;">New Pass: </td>
                <td><input class="w3-border w3-input" id="newPas" type="password" placeholder="New Password"></td>
            </tr>
            <tr>
                <td class="w3-large" style="text-align:right;vertical-align: middle;">Again new Pass: </td>
                <td><input class="w3-border w3-input" id="newAga" type="password" placeholder="New Password Again"></td>
            </tr> 
            
        </table>
<?php
    }
    else{
        echo "something went wrong";
    }
?>
        <hr>
        <button type="button" class="w3-button w3-right w3-margin-bottom w3-margin-left w3-border w3-round w3-<?php echo "blue" ?>" onclick="updateProfile()"><i class="fa fa-pencil-square-o"></i> Update</button>
        <button type="button" onclick="document.getElementById('editun').style.display='none'" class="w3-button w3-right w3-margin-bottom w3-border w3-round"><i class="fa fa-times"></i> Cancel</button>
        
      </form>
      
    </div>
</div>

<div class="w3-modal" id="createCommunity">
	<div class="w3-modal-content w3-animate-zoom w3-card-4" style="max-width:500px">
      <header class="w3-container"> 
        <span onclick="document.getElementById('createCommunity').style.display='none'" 
        class="w3-button w3-display-topright w3-xlarge w3-light-gray">&times;</span>
        <h2 class="">Create community</h2>
		<div>
		Make community and maintain it.
		</div>
		<center>
        	<div class="w3-text-red" id="makeError"></div>
        	<div class="loader" id="makeLoader" style="display:none"></div>
        </center>
		<form class="w3-container" id="mkCommunity" action="makeCommunity.php" enctype="multipart/form-data">
		<div class="w3-section w3-padding">
			<input class="w3-input w3-border" id="name" name="Name" placeholder="name of community" required>
		</div>
		<div class="w3-section w3-padding">
			<input type="file" name="fileToUpload" id="fileToUpload" accept="image/x-png,image/gif,image/jpeg" required>
		</div>
		<div class="w3-section w3-padding">
			<textarea class="w3-input w3-border" id="disc" rows="6" name="Disc" placeholder="Describe the community" required></textarea>
		</div>
		<div class="w3-section w3-padding">
		Add tags seperated with comma
			<textarea class="w3-input w3-border" id="tags" name="Tags" placeholder="Tags" required></textarea>
		</div>
		<div class="w3-center w3-section">
			<button class="w3-button w3-blue kel-button" onclick="makeCommunity()">Add</button>
		</div>
		</form>
      </header>
	</div>
</div>

<?php 
include("../Commen/lobbyheader.php")
?>
<center>
<div class="w3-padding-64">

<div class="w3-row w3-content w3-padding">

<div class='w3-padding w3-animate-zoom' style="width:30%">
    <a onclick="document.getElementById('createCommunity').style.display='block'" class="kel-hover-2" style="text-decoration:none">
    <div class='w3-light-gray w3-padding-32 w3-text-blue w3-xlarge'>
    <div><i class="fa fa-plus w3-jumbo"></i></div>
    <div>Create Community</div>
    </div>
    </a>
</div>
</div>

<div class="w3-row w3-center" id="myCommunities">
<div class='w3-padding w3-animate-zoom w3-quarter'>
    <a onclick="document.getElementById('editun').style.display='block'" class="kel-hover-2" style="text-decoration:none">
    <div class='w3-light-gray w3-padding-32 w3-text-blue w3-xlarge'>
    <div><i class="w3-jumbo"></i></div>
    <div>Cancer</div>
    </div>
    </a>
</div>
<div class='w3-padding w3-animate-zoom w3-quarter'>
    <a onclick="document.getElementById('editun').style.display='block'" class="kel-hover-2" style="text-decoration:none">
    <div class='w3-light-gray w3-padding-32 w3-text-blue w3-xlarge'>
    <div><i class="3-jumbo"></i></div>
    <div>Covid</div>
    </div>
    </a>
</div>
<div class='w3-padding w3-animate-zoom w3-quarter'>
    <a onclick="document.getElementById('editun').style.display='block'" class="kel-hover-2" style="text-decoration:none">
    <div class='w3-light-gray w3-padding-32 w3-text-blue w3-xlarge'>
    <div><i class="w3-jumbo"></i></div>
    <div>Cancer</div>
    </div>
    </a>
</div>
</div>

</div>
</center>
<script src="../Js/check.js"></script>
<script src="Js/varified.js"></script>

</body>
</html>

<?php
    
    $conn->close();
}
else{
    header("Location:../logout.php"); 
}

?>