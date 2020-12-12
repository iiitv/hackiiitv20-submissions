# import json
# from google_meet import GoogleMeet

# with open('credentials.json', 'r') as f:
# 	credentials = json.load(f)

# meet_bot = GoogleMeet(credentials['email'], credentials['password'], credentials['driver_path'])
# meet_bot.attendMeeting()

import os
import sys
import time
from selenium.common.exceptions import NoSuchElementException
from selenium import webdriver

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains

import datetime
import schedule





# def __init__(self, email, password, driver_path):

# 	self.email = email
# 	self.password = password
# 	self.driver_path = driver_path
# 	self.mail_url = "https://mail.google.com/"
# 	#self.meet_url = "https://meet.google.com/bqn-kvmz-fkp"
	
# 	self.opt = Options()
# 	self.opt.add_argument("--disable-infobars")
# 	self.opt.add_argument("start-maximized")
# 	self.opt.add_argument("--disable-extentions")
# 	self.opt.add_experimental_option("prefs", {
# 		"profile.default_content_setting_values.media_stream_mic": 1,		# Allows site to use mic
# 		"profile.default_content_setting_values.media_stream_camera": 1,	# Allows site to use camera
# 		"profile.default_content_setting_values.geolocation": 2,			# Turn off location
# 		"profile.default_content_setting_values.notifications": 2,			# Turn off notifications
# 		})

# 	self.driver = webdriver.Chrome(executable_path= self.driver_path, options= self.opt)
# 	self.COMMAND_OR_CONTROL = Keys.COMMAND if sys.platform == 'darwin' else Keys.CONTROL




def loginToGmail(self):
	print("logingmail called")
	
	self.driver.get("https://mail.google.com/")
	print("Mail khula hai")
	
	try:
		print("login try called")
		email_field = self.driver.find_element_by_id("identifierId")
		email_field.clear()
		time.sleep(5)
		for i in self.email:
			email_field.send_keys(i)
			time.sleep(0.01)
		email_field.send_keys(Keys.RETURN)
		time.sleep(2)
		password_field = self.driver.find_element_by_name("password")
		password_field.clear()
		for i in self.password:
			password_field.send_keys(i)
			time.sleep(0.01)
		password_field.send_keys(Keys.RETURN)
		time.sleep(5)
	except NoSuchElementException as e:
		print("Some exception occured in login to gmail: ", e)
		self.driver.quit()

def openGoogleMeet(self, link):
	try:
		print("opengooglemeet called")
		self.driver.get(link)
		time.sleep(3)
		turn_off_mic = ActionChains(self.driver)
		turn_off_mic.key_down(self.COMMAND_OR_CONTROL).send_keys('d').key_up(self.COMMAND_OR_CONTROL).perform()
		time.sleep(0.8)
		turn_off_camera = ActionChains(self.driver)
		turn_off_camera.key_down(self.COMMAND_OR_CONTROL).send_keys('e').key_up(self.COMMAND_OR_CONTROL).perform()
	except NoSuchElementException as e:
		print("Some exception occured in opening google meet: ", e)
		self.driver.quit()

def joinMeeting(self):
	try:
		self.driver.find_element_by_class_name("Fxmcue").click()
	except NoSuchElementException as e:
		self.driver.find_element_by_link_name("Ask to join").click()



def monday(self):

	firstClass = "02:20"
	secondClass = "02:22"
	thirdClass = "02:29"
	fourthClass = "02:35"

	schedule.every().monday.at(firstClass).do(joinhs)
	schedule.every().monday.at(secondClass).do(joinmaths)
	schedule.every().monday.at(thirdClass).do(joinoops)
	schedule.every().monday.at(fourthClass).do(joinsc)
	
	
def tuesday(self):

	firstClass = "02:20"
	secondClass = "02:22"
	thirdClass = "02:29"
	fourthClass = "02:35"

	schedule.every().tuesday.at(firstClass).do(joinhs)
	schedule.every().tuesday.at(secondClass).do(joinmaths)
	schedule.every().tuesday.at(thirdClass).do(joinoops)
	schedule.every().tuesday.at(fourthClass).do(joinsc)
	

def wednesday(self):

	firstClass = "02:20"
	secondClass = "02:22"
	thirdClass = "02:29"
	fourthClass = "02:35"

	schedule.every().wednesday.at(firstClass).do(joinhs)
	schedule.every().monday.at(secondClass).do(joinmaths)
	schedule.every().monday.at(thirdClass).do(joinoops)
	schedule.every().monday.at(fourthClass).do(joinsc)

def thursday(self):

	firstClass = "02:20"
	secondClass = "02:22"
	thirdClass = "02:29"
	fourthClass = "02:35"

	schedule.every().thursday.at(firstClass).do(joinhs)
	schedule.every().thursday.at(secondClass).do(joinmaths)
	schedule.every().thursday.at(thirdClass).do(joinoops)
	schedule.every().thursday.at(fourthClass).do(joinsc)

def friday(self):
	
	firstClass = "02:20"
	secondClass = "02:22"
	thirdClass = "02:29"
	fourthClass = "02:35"

	schedule.every().friday.at(firstClass).do(joinhs)
	schedule.every().friday.at(secondClass).do(joinmaths)
	schedule.every().friday.at(thirdClass).do(joinoops)
	schedule.every().friday.at(fourthClass).do(joinsc)

	# while 1:
	# 	schedule.run_pending()
	# 	time.sleep(1)#seconds


def saturday(self):
	print("Sat function called")

	firstClass = "04:07"
	secondClass = "04:09"
	thirdClass = "04:11"
	fourthClass = "04:13"

	schedule.every().saturday.at("09:11").do(self.joinhs)
	schedule.every().saturday.at("04:11").do(self.joinmaths)
	schedule.every().saturday.at("04:32").do(self.joinoops)
	schedule.every().saturday.at("04:30").do(self.joinsc)
	while 1:
		schedule.run_pending()
		time.sleep(1)#seconds


def joinhs(self):
	print("joinhs called")
	self.loginToGmail()
	hs = "https://meet.google.com/duz-vzzh-rso"
	self.openGoogleMeet(hs)
	time.sleep(5)
	self.joinMeeting()
	time.sleep(30)
	self.driver.close()
	# while 1:
	# 	schedule.run_pending()
	# 	time.sleep(1)#seconds


def joinoops(self):
	print("joinoops called")
	self.loginToGmail()
	oops = "http://meet.google.com/rwy-cafc-zus"
	self.openGoogleMeet(oops)
	time.sleep(5)
	self.joinMeeting()
	time.sleep(30)
	self.driver.close()
	# while 1:
	# 	schedule.run_pending()
	# 	time.sleep(1)#seconds
	
	

def joinsc(self):
	print("joinsc called")
	self.loginToGmail()
	sc = "https://meet.google.com/jnr-zmjz-uko"
	self.openGoogleMeet(sc)
	time.sleep(5)
	self.joinMeeting()
	time.sleep(30)
	self.driver.close()
	# while 1:
	# 	schedule.run_pending()
	# 	time.sleep(1)#seconds

	
def joinmaths(self):
	print("joinmaths called")
	self.loginToGmail()
	maths = "https://meet.google.com/yaf-untz-smm"
	self.openGoogleMeet(maths)
	time.sleep(5)
	self.joinMeeting()
	time.sleep(30)
	self.driver.close()
	# while 1:
	# 	schedule.run_pending()
	# 	time.sleep(1)#seconds	
	


email = "201951104@iiitvadodara.ac.in"
password = "NIKK@809"
driver_path = "C:/Users/Y530/Desktop/google_meet_bot-main/chromedriver_win32/chromedriver.exe"
mail_url = "https://mail.google.com/"
opt = Options()
opt.add_argument("--disable-infobars")
opt.add_argument("start-maximized")
opt.add_argument("--disable-extentions")
opt.add_experimental_option("prefs", {
	"profile.default_content_setting_values.media_stream_mic": 1,		# Allows site to use mic
	"profile.default_content_setting_values.media_stream_camera": 1,	# Allows site to use camera
	"profile.default_content_setting_values.geolocation": 2,			# Turn off location
	"profile.default_content_setting_values.notifications": 2,			# Turn off notifications
	})

driver = webdriver.Chrome(executable_path= driver_path, options= opt)
COMMAND_OR_CONTROL = Keys.COMMAND if sys.platform == 'darwin' else Keys.CONTROL


e = datetime.datetime.now()

# while True:
# 	schedule.run_pending()
# 	time.sleep(1)

day = (e.strftime("%a"))

print(day)
if day=="Mon":
	monday()
elif day=="Tue":
	tuesday() 
elif day=="Wed":
	wednesday()
elif day=="Thu":
	thursday()
elif day=="Fri":
	friday()
elif day=="Sat":
	saturday()
else:
	print("Its weekend bro")
