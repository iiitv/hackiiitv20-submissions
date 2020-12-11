import os
import sys
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains

class GoogleMeet():
	def __init__(self, email, password, driver_path):
		self.email = email
		self.password = password
		self.driver_path = driver_path
		self.mail_url = "https://mail.google.com/"
		self.meet_url = input('meet.google.com/bqn-kvmz-fkp')

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
		self.driver.get(self.mail_url)
		time.sleep(2)
		try:
			email_field = self.driver.find_element_by_id("identifierId")
			email_field.clear()
			for i in self.email:
				email_field.send_keys(i)
				time.sleep(0.1)
			email_field.send_keys(Keys.RETURN)
			time.sleep(2)
			password_field = self.driver.find_element_by_name("password")
			password_field.clear()
			for i in self.password:
				password_field.send_keys(i)
				time.sleep(0.1)
			password_field.send_keys(Keys.RETURN)
			time.sleep(5)
		except NoSuchElemntException:
			print("Some exception occured: ", e)
			self.driver.quit()

	def openGoogleMeet(self):
		self.driver.get(self.meet_url)
		time.sleep(3)
		turn_off_mic = ActionChains(self.driver)
		turn_off_mic.key_down(self.COMMAND_OR_CONTROL).send_keys('d').key_up(self.COMMAND_OR_CONTROL).perform()
		time.sleep(0.8)
		turn_off_camera = ActionChains(self.driver)
		turn_off_camera.key_down(self.COMMAND_OR_CONTROL).send_keys('e').key_up(self.COMMAND_OR_CONTROL).perform()

	def joinMeeting(self):
		try:
			self.driver.find_element_by_class_name("Fxmcue").click()
		except NoSuchElemntException:
			self.driver.find_element_by_link_name("Ask to join").click()

	def attendMeeting(self):
		self.loginToGmail()
		self.openGoogleMeet()
		self.joinMeeting()
