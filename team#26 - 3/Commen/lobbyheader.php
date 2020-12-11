<script>
    function myFunction() {
      var x = document.getElementById("Demo");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else { 
        x.className = x.className.replace(" w3-show", "");
      }
    }
</script>
</head>

<body>

<header class="w3-bar w3-<?php echo "blue" ?> w3-padding">
<div class="w3-bar-item w3-xlarge w3-hide-small" style="margin-right:40px;">Health Care</div>

<button class="w3-bar-item w3-right w3-border kel-hover-2 " title="My Account" style="margin-top:7px;margin-bottom:7px" onclick="document.getElementById('editun').style.display='block'">
    <i class="fa fa-lock"></i> <?php echo $name ?>
</button>

<div class="w3-bar-item">
	<input class="w3-input w3-light-gray" style="width:600px" placeholder="search community...">
</div>

<div class="w3-dropdown-click w3-bar-item w3-right w3-<?php echo "blue" ?> w3-hover-<?php echo "blue" ?>">
<button class="kel-hover-2 w3-button w3-blue w3-hover-blue" onclick="myFunction()" title="Options" >
    <i class="fa fa-caret-down"></i>
</button>

    <div id="Demo" class="w3-dropdown-content w3-bar-block w3-border">
      <a onclick="document.getElementById('editun').style.display='block'" class="w3-bar-item w3-button"><i class="fa fa-pencil"></i> Edit</a>
      <a href="" class="w3-bar-item w3-button"><i class="fa fa-group"></i> Communities</a>
	  <a href="../logout.php" class="w3-bar-item w3-button"><i class="fa fa-sign-out"></i> LogOut</a>
    </div>
</div>

<button class="kel-hover-2 w3-right w3-xlarge w3-button w3-hover-blue" onclick="" title="Options" >
    <i class="fa fa-envelope-o"></i>
</button>

</header>
