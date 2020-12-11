
let updateProfile = () => {
    
    let u_name = document.getElementById('u_name').value;
	let pass = document.getElementById('pass').value;
	let newPass = document.getElementById('newPas').value;
	let newAga = document.getElementById('newAga').value;
	let check_data = new Check();
	let error = document.getElementById('up-error');
	        
	if(u_name == "" || pass == "" || newPass == "" || newAga == ""){
	    alert("Please enter all data");
	    error.innerHTML = "Please enter all data";
	    return false;
	}
	    
	if(check_data.check(u_name) || check_data.check(pass) || check_data.check(newPass) || check_data.check(newAga)){
	    return false;
	}
	  
	if(newPass != newAga){
	    alert("Confirm password didn't match");
	    error.innerHTML = "Confirm password didn't match";
	    return false;
	} 
	 
	let str = "u_name="+u_name+"&cur_pass="+pass+"&newPass="+newPass+"&newAga="+newAga;
    let xhttp = new XMLHttpRequest();
    let loader = document.getElementById('up-loader');
    xhttp.onreadystatechange = function() {
        loader.style.display = "block";
        if(this.readyState == 4 && this.status == 200){
        	error.innerHTML = this.responseText;
        	loader.style.display = "none";
        	if(this.responseText == ""){
        	    alert("Password successfully updated");
        	    location.reload(); 
        	}
        }
    }
    xhttp.open("POST", "updateProfile.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(str);
	    
	
    
}

let makeCommunity = () => {
	
	let checkd = new Check();
	
	let name = document.getElementById("name").value;
	let disc = document.getElementById("disc").value;
	let image = document.getElementById("fileToUpload").value;
	let tags = document.getElementById("tags").value;
	
	let error = document.getElementById("makeError");
	let loader = document.getElementById("makeLoader");
	
	
	if(name == ""){
		alert("Fill details");
		error.innerHTML = "Fill details";
		return false;
	}
	
	if(disc == ""){
		alert("Fill details");
		error.innerHTML = "Fill details";
		return false;
	}
	
	if(image == ""){
		alert("Select image");
		error.innerHTML = "Select image";
		return false;
	}
	
	if(tags == ""){
		
		alert("Fill details");
		error.innerHTML = "Fill details";
		return false;
		
	}
	
	if(checkd.check(name)){
		
		error.innerHTML = "Fill proper details";
		return false;
	}
	
	if(checkd.check(disc)){
		
		error.innerHTML = "Fill proper details";
		return false;
	}
	
	if(checkd.check(tags)){
		
		error.innerHTML = "Fill proper details";
		return false;
		
	}
	else{
		
		document.getElementById("mkCommunity").action = "makeCommunity.php";
		document.getElementById("mkCommunity").method = "post";
		document.getElementById("mkCommunity").submit();
		
	}	
	
}