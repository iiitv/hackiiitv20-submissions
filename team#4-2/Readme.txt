Our applicattion is named as WithU. which the name suggests "Stays with you" everywhere.
This application is devloped for women safety.
In this application,
the user will register and login with necessary details like name,contact,email id and address.
then they will add contact info of trusted people;friends or family members in "close friends" option.
the people in close friends option will get emergency notification with the users live location in  distress situations.

working:
We have created a server which will continously check if the IP address is reachable or not and update its live location using gps.
Our application works on two cases:
case1: When Network is available in the area 
the user inputs their route information;source,destination,
the app will tell safest and shortest path to reach the destination with the info like traffic,time.
the app's server which will keep track of the user's location,time and network connectivity.
If the user feel unsafe, they can manually share emergency notification to their close friends by clicking on the button.
Also,if the user takes more time than the input duration,automatically an emergency notification will be sent to the "close friends".
the emergency notification will include user's live location.

case2:When there is no network in the area.

if there is absence of network connectivity,our server will wait for some minutes and still if there is no connectivity server will 
Send an alert message to the close friends about the lost connection. Again if there is no connection after sending some alert messages
app will declare this as an emergency and send the last tracked live location to the close friends.

notable features:
list of close friends
check safe and short route
manual leverage of emergency button
automatic emergency notification to close friends
track and share live location
Works in absence of Network