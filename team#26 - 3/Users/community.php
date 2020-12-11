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
	    <title><? echo $c_name ?>Community | Discussion can happen here</title>
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" async>
		<link href="https://fonts.googleapis.com/css2?family=Literata&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="../CSS/Community.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="../CSS/kel.css">
		<style>

		</style>
	</head>
<body class="w3-theme-l5">

  <!-- Page Container -->
  <div class="w3-container w3-content" style="max-width:1400px;margin-top:80px">
    <!-- The Grid -->
    <div class="w3-row">

      <!-- Middle Column -->
      <div class="w3-col m10">

        <div class="w3-row-padding">
          <div class="w3-col m12">
            <div class="w3-card w3-round w3-white">
              <div class="w3-container w3-padding">
                <h6 class="w3-opacity">Social Media template by w3.css</h6>
                <p contenteditable="true" class="w3-border w3-padding">Status: Feeling Blue</p>
                <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Post</button>
              </div>
            </div>
          </div>
        </div>

        <div class="w3-container w3-card w3-white w3-round w3-margin"><br>
          <img src="/w3images/avatar2.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
          <span class="w3-right w3-opacity">1 min</span>
          <h4>John Doe</h4><br>
          <hr class="w3-clear">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="w3-row-padding" style="margin:0 -16px">
              <div class="w3-half">
                <img src="/w3images/lights.jpg" style="width:100%" alt="Northern Lights" class="w3-margin-bottom">
              </div>
              <div class="w3-half">
                <img src="/w3images/nature.jpg" style="width:100%" alt="Nature" class="w3-margin-bottom">
            </div>
          </div>
          <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button>
          <!-- <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> -->
        </div>

            <!-- End Middle Column -->
            </div>

            <!-- Right Column -->
            <div class="w3-col m2">
              <div class="w3-card w3-round w3-white w3-center">
                <div class="w3-container">
                  <h4><strong>Doctors</strong></h4>
                  <p>Dr. Sharma</p>
                  <p>Dr. Shah</p>
                  <p>Dr. Gupta</p>
                  <p><button class="w3-button w3-block w3-theme-l4">Show All</button></p>
                </div>
              </div>
              <br>

                <div class="w3-card w3-round w3-white w3-center">
                  <div class="w3-container">
                    <h4><strong>Members</strong></h4>
                    <p>Animesh</p>
                    <p>Kushang</p>
                    <p>Mansi</p>
                    <p><button class="w3-button w3-block w3-theme-l4">Show All</button></p>
                  </div>
                </div>
                <br>

            <!-- End Right Column -->
            </div>

          <!-- End Grid -->
          </div>

        <!-- End Page Container -->
        </div>
        <br>

        <script>
        // Accordion
        function myFunction(id) {
          var x = document.getElementById(id);
          if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
            x.previousElementSibling.className += " w3-theme-d1";
          } else {
            x.className = x.className.replace("w3-show", "");
            x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-theme-d1", "");
          }
        }

        // Used to toggle the menu on smaller screens when clicking on the menu button
        function openNav() {
          var x = document.getElementById("navDemo");
          if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
          } else {
            x.className = x.className.replace(" w3-show", "");
          }
        }
        </script>

</body>
<?php

   $conn->close();
}
else{
   header("Location:../logout.php");
} 

?>
