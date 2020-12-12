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



class GoogleMeet():

	def __init__(self, email, password, driver_path):

		self.email = email
		self.password = password
		self.driver_path = driver_path
		self.mail_url = "https://mail.google.com/"
		#self.meet_url = "https://meet.google.com/bqn-kvmz-fkp"
		
		self.opt = Options()
		self.opt.add_argument("--disable-infobars")
		self.opt.add_argument("start-maximized")
		self.opt.add_argument("--disable-extentions")
		self.opt.add_experimental_option("prefs", {
			"profile.default_content_setting_values.media_stream_mic": 1,		# Allows site to use mic
			"profile.default_content_setting_values.media_stream_camera": 1,	# Allows site to use camera
			"profile.default_content_setting_values.geolocation": 2,			# Turn off location
			"profile.default_content_setting_values.notifications": 2,			# Turn off notifications
			})

		self.driver = webdriver.Chrome(executable_path= self.driver_path, options= self.opt)
		self.COMMAND_OR_CONTROL = Keys.COMMAND if sys.platform == 'darwin' else Keys.CONTROL




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

		while 1:
			schedule.run_pending()
			time.sleep(1)#seconds


	def saturday(self):
		print("Sat function called")

		firstClass = "03:22"
		secondClass = "03:24"
		thirdClass = "03:26"
		fourthClass = "03:28"

		schedule.every().saturday.at("03:45").do(self.joinhs)
		schedule.every().saturday.at("03:47").do(self.joinmaths)
		schedule.every().saturday.at("03:32").do(self.joinoops)
		schedule.every().saturday.at("03:30").do(self.joinsc)
		while 1:
			schedule.run_pending()
			time.sleep(5)#seconds
	

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
		
		"""
		driver.get(oops)
		time.sleep(6) #seconds
		alert = driver.switch_to_alert()
		alert.accept()
		time.sleep(18)
		driver.quit()"""

	def joinsc(self):
		print("joinsc called")
		self.loginToGmail()
		sc = "https://meet.google.com/jnr-zmjz-uko"
		self.openGoogleMeet(sc)
		time.sleep(5)
		self.joinMeeting()
		time.sleep(30)
		#self.driver.quit()
		# while 1:
		# 	schedule.run_pending()
		# 	time.sleep(1)#seconds

		"""driver.get(sc)
		time.sleep(6) #seconds
		alert = driver.switch_to_alert()
		alert.accept()
		time.sleep(18)
		driver.quit()"""

	def joinmaths(self):
		print("joinmaths called")
		self.loginToGmail()
		maths = "https://meet.google.com/yaf-untz-smm"
		self.openGoogleMeet(maths)
		time.sleep(5)
		self.joinMeeting()
		time.sleep(30)
		#self.driver.quit()
		# while 1:
		# 	schedule.run_pending()
		# 	time.sleep(1)#seconds

		"""driver.get(maths)
		time.sleep(10) #seconds
		alert = driver.switch_to_alert()
		alert.accept()
		time.sleep(1800)
		driver.quit()"""	
		
	

	def attendMeeting(self):

		e = datetime.datetime.now()

		"""while True:
			schedule.run_pending()
			time.sleep(1)#seconds"""
			

		day = (e.strftime("%a"))

		print(day)
		if day=="Mon":
			self.monday()
		elif day=="Tue":
			self.tuesday() 
		elif day=="Wed":
			self.wednesday()
		elif day=="Thu":
			self.thursday()
		elif day=="Fri":
			self.friday()
		elif day=="Sat":
			self.saturday()
		else:
			print("Its weekend bro")
		#self.friday()

		#self.openGoogleMeet()
		#self.joinMeeting()
