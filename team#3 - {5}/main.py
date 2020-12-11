import json
from google_meet import GoogleMeet

with open('credentials.json', 'r') as f:
	credentials = json.load(f)

meet_bot = GoogleMeet(credentials['email'], credentials['password'], credentials['driver_path'])
meet_bot.attendMeeting()