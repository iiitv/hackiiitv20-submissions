//password = A0211665221992158A99A05AA07A93365599

document.getElementById("share").addEventListener("click", (e) => {
    e.preventDefault();
});

var latlon;

function myfunction()
{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
    //console.log("hello");
}

function showPosition(position) {
    console.log(`Latitude: ${position.coords.latitude}`);
    console.log(`Longitude: ${position.coords.longitude}`);
    latlon = "Latitude: "+position.coords.latitude+", Longitude: "+position.coords.longitude;
    sendEmail();
}

function sendEmail(){
    Email.send({
    SecureToken : "4f6d01bd-edb4-48bd-be43-3a87d5960616",
    To : "himanshu446267@gmail.com",
    From : "himanshu446267@gmail.com",
    Subject : "Emergency",
    Body : "latlon"
}).then(
    message => alert("mail sent successfully")
);
}