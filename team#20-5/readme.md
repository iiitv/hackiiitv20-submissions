<div align="center" ><h1> ONBOARD </h1></div>

## Introduction
Education in rural areas has never seen a leverage in teaching styles.
Lack of Good Teachers and old teaching methods made it even worse in the pandemic.
Skilled teachers have loction barriers and theey do hasitate to reach the rural areas.
Everybody carries a mobile phone, in rural as well as urban areas.However urban students have access to Tablets , 
where they can easily communicate their problems to the teacher  through JamBoards and teachers can also solve their problems.
The major drawback is for rural area students, where it gets difficult for them to understand the content as it is always a one-way communication.
Teacher shows slides and students watches them.
A student can't learn A,B,C,D just by watching, thus it's necessary for them to come on Board and explain where they are facing difficulty without any Tablets and all.
So our system works like this,
While streaming one has a capture button, that will binarise the image.
This will send a binarized image to all users who open same URL using websocket.
We will try to make the background transparent and display camera image under the binarized image.
Now a student can project the outlines on a piece of paper and himself do some changes in the image and send the overlaid image back.
This will work turn by turn and a blackboard chat system is formed.More interactive and more encouraging.

This would be hard to implement completly, but can be given a good try.

## Front End
HTML CSS Javascript

## Back End
Flask

# Setup/Installation

1. [Create a Twilio account](https://www.twilio.com) (if you don't have one yet). It's free!
2. [Generate an API Key](https://www.twilio.com/console/project/api-keys) for your account.

```bash
cd INSTALLATION_PATH # directory path where you want to clone and also the directory where you will write solutions
git clone https://github.com/Abhinav1299/hackiiitv20-submissions/tree/team%2320 # or u can download and extact the zip file
cd team#20-5 # move to the project directory
cp .en.template .env # Copy paste the API Keys from your twillio account
python -m venv venv # Making the virtual environment for installing dependencies(Optional) 
venv\Scripts\activate # (For windows user) [ If you have made virtual environment ]
source venv/Scripts/activate # (For bash user) [ If you have made virtual environment ]
pip install -r requirement.txt # Installing the necessary dependencies 
python app.py 
```

# Making it Public (Public server)
Open another terminal for creating public server

First Go to the base directory 
```bash
venv\Scripts\activate # (For windows user) [ If you have made virtual environment ]
source venv/Scripts/activate # (For bash user) [ If you have made virtual environment ]
ngrok http 5000 # It will run the public server which is running on the localhost 5000 
```


## Snapshots of our working application

<!-- ![output](final.jpeg|width=100) -->


<img src="final.jpeg" width="150" height="300">&emsp;  &emsp; <img src="final1.jpeg" width="150" height="300"> &emsp;  &emsp; <img src="final3.jpeg" width="370" height="300">


## Snapshots of our prototype

<img src="prototype1.jpeg" width="150" height="300">&emsp;  &emsp; <img src="prototype2.jpeg" width="150" height="300"> &emsp;  &emsp; <img src="prototype3.jpeg" width="150" height="300">&emsp;  &emsp; <img src="prototype4.jpeg" width="150" height="300">&emsp;  &emsp; <img src="prototype5.jpeg" width="150" height="300">



## Team Members

* Jainil Shah
* Adit Alware
* Abhinav Gupta
* Harish Suthar
