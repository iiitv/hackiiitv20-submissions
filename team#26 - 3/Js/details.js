let join = (email) => {
	
	let  role = document.getElementById('role').value;
	let dob = document.getElementById('dob').value;
	let form = document.getElementById('data');
	
	let check_data = new Check();
	
	if(check_data.dobCheck(dob)){
		
		let str = "email="+email+"&role="+role+"&dob="+dob;
		let xhttp = new XMLHttpRequest();
		let loader = document.getElementById('loader-details');
		let error = document.getElementById('details-error');
		
		xhttp.onreadystatechange = function() {
            		loader.style.display = "block";
            		if(this.readyState == 4 && this.status == 200){
            			error.innerHTML = this.responseText;
            			loader.style.display = "none";
            			if(this.responseText == ""){
            			
					form.action = "logins.php";
            				form.method = "post";
            				form.submit();
              			}
				else{
					error.innerHTML = this.responseText;
				}
            		}
        	}
        	xhttp.open("POST", "Check/addDetails.php", true);
        	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        	xhttp.send(str);
		
	}
	
}

let joinLogin = (email) => {
	
	let  role = document.getElementById('role').value;
	let dob = document.getElementById('dob').value;
	let form = document.getElementById('data');
	
	let check_data = new Check();
	
	if(check_data.dobCheck(dob)){
		
		let str = "email="+email+"&role="+role+"&dob="+dob;
		let xhttp = new XMLHttpRequest();
		let loader = document.getElementById('loader-details');
		let error = document.getElementById('details-error');
		
		xhttp.onreadystatechange = function() {
            		loader.style.display = "block";
            		if(this.readyState == 4 && this.status == 200){
            			error.innerHTML = this.responseText;
            			loader.style.display = "none";
            			if(this.responseText == ""){
            			
					form.action = "login.php";
            				form.method = "post";
            				form.submit();
              			}
				else{
					error.innerHTML = this.responseText;
				}
            		}
        	}
        	xhttp.open("POST", "Check/addDetailsLogin.php", true);
        	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        	xhttp.send(str);
		
	}
	
}