
import sys
import time
from selenium.common.exceptions import NoSuchElementException
from selenium import webdriver

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
import json
import datetime
import schedule
from dhooks import Webhook



class GoogleMeet():

    def __init__(self, email, password, driver_path):

        self.email = email
        self.password = password
        self.driver_path = driver_path
        self.mail_url = "https://mail.google.com/"
        self.hook = Webhook("https://discord.com/api/webhooks/787235989965897768/79hHlSXKtlEVYHpTywCbN2RrWzW0xb1a6uXVqE06WDikniQcvNs6znLjO3ygkq-1u02S")
        
        self.opt = Options()
        self.opt.add_argument("--disable-infobars")
        self.opt.add_argument("start-maximized")
        self.opt.add_argument("--disable-extentions")
        self.opt.add_experimental_option("prefs", {
            "profile.default_content_setting_values.media_stream_mic": 1,       # Allows site to use mic
            "profile.default_content_setting_values.media_stream_camera": 1,    # Allows site to use camera
            "profile.default_content_setting_values.geolocation": 2,            # Turn off location
            "profile.default_content_setting_values.notifications": 2,          # Turn off notifications
            })

        self.driver = webdriver.Chrome(executable_path= self.driver_path, options= self.opt)
        self.COMMAND_OR_CONTROL = Keys.COMMAND if sys.platform == 'darwin' else Keys.CONTROL




    def loginToGmail(self):
        print("logingmail called")
        time.sleep(3)
        self.driver.get("https://mail.google.com/")
        print("Mail khula hai")
        
        try:
            print("login try called")
            time.sleep(5)
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
            print("Meet link is opened")
            time.sleep(3)
            print("slept for 3")
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

        schedule.every().monday.at("08:00").do(joinhs)
        schedule.every().monday.at("09:00").do(joinmaths)
        schedule.every().monday.at("10:00").do(joinoops)
        schedule.every().monday.at("11:00").do(joinsc)

        while 1:
            schedule.run_pending()
            time.sleep(1)#seconds
        
        
    def tuesday(self):
        
        schedule.every().tuesday.at("08:00").do(joinhs)
        schedule.every().tuesday.at("09:00").do(joinmaths)
        schedule.every().tuesday.at("10:00").do(joinoops)
        schedule.every().tuesday.at("11:00").do(joinsc)

        while 1:
            schedule.run_pending()
            time.sleep(1)#seconds
        

    def wednesday(self):


        schedule.every().wednesday.at("08:00").do(joinhs)
        schedule.every().wednesday.at("09:00").do(joinmaths)
        schedule.every().wednesday.at("10:00").do(joinoops)
        schedule.every().wednesday.at("11:00").do(joinsc)

        while 1:
            schedule.run_pending()
            time.sleep(1)#seconds

    def thursday(self):

        

        schedule.every().thursday.at("08:00").do(joinhs)
        schedule.every().thursday.at("09:00").do(joinmaths)
        schedule.every().thursday.at("10:00").do(joinoops)
        schedule.every().thursday.at("11:00").do(joinsc)

        while 1:
            schedule.run_pending()
            time.sleep(1)#seconds

    def friday(self):
        
        
        schedule.every().friday.at("08:00").do(joinhs)
        schedule.every().friday.at("09:00").do(joinmaths)
        schedule.every().friday.at("10:00").do(joinoops)
        schedule.every().friday.at("11:00").do(joinsc)

        while 1:
            schedule.run_pending()
            time.sleep(1)#seconds


    def saturday(self):


        schedule.every().saturday.at("14:22").do(self.joinhs)
        schedule.every().saturday.at("14:24").do(self.joinmaths)
        schedule.every().saturday.at("14:26").do(self.joinoops)
        schedule.every().saturday.at("14:28").do(self.joinsc)
        while 1:
            schedule.run_pending()
            time.sleep(5)#seconds
    

    def joinhs(self):
        hook = Webhook("https://discord.com/api/webhooks/787235989965897768/79hHlSXKtlEVYHpTywCbN2RrWzW0xb1a6uXVqE06WDikniQcvNs6znLjO3ygkq-1u02S")
        self.loginToGmail()
        hs = "https://meet.google.com/duz-vzzh-rso"
        self.openGoogleMeet(hs)
        time.sleep(5)
        self.joinMeeting()
        msg1 = "HS class joined"
        hook.send(msg1)
        time.sleep(15)
        self.driver.get("https://www.google.com/")
        msg2 = "HS class left"
        hook.send(msg2)
        time.sleep(3)

    def joinoops(self):
        hook = Webhook("https://discord.com/api/webhooks/787235989965897768/79hHlSXKtlEVYHpTywCbN2RrWzW0xb1a6uXVqE06WDikniQcvNs6znLjO3ygkq-1u02S")
        
        #self.loginToGmail()
        oops = "http://meet.google.com/rwy-cafc-zus"
        self.openGoogleMeet(oops)
        time.sleep(5)
        self.joinMeeting()
        msg1 = "OOPs class joined"
        hook.send(msg1)
        time.sleep(15)
        print("Meeting over, exiting")
        self.driver.get("https://www.google.com/")
        msg2 = "OOPS class left"
        hook.send(msg2)
        time.sleep(3)
        

    def joinsc(self):
        hook = Webhook("https://discord.com/api/webhooks/787235989965897768/79hHlSXKtlEVYHpTywCbN2RrWzW0xb1a6uXVqE06WDikniQcvNs6znLjO3ygkq-1u02S")
        print("joinsc called")
        #self.loginToGmail()
        sc = "https://meet.google.com/jnr-zmjz-uko"
        self.openGoogleMeet(sc)
        time.sleep(5)
        self.joinMeeting()
        msg1 = "SC class joined"
        hook.send(msg1)
        time.sleep(15)
        print("Meeting over, exiting")
        self.driver.get("https://www.google.com/")
        msg2 = "SC class left"
        hook.send(msg2)
        time.sleep(3)
        

    def joinmaths(self):
        hook = Webhook("https://discord.com/api/webhooks/787235989965897768/79hHlSXKtlEVYHpTywCbN2RrWzW0xb1a6uXVqE06WDikniQcvNs6znLjO3ygkq-1u02S")
        print("joinmaths called")
        #self.loginToGmail()
        
        maths = "https://meet.google.com/yaf-untz-smm"
        self.openGoogleMeet(maths)
        time.sleep(5)
        self.joinMeeting()
        msg1 = "MATHS class joined"
        hook.send(msg1)
        time.sleep(15)
        print("Meeting over, exiting")
        self.driver.get("https://www.google.com/")
        msg2 = "MATHS class left"
        hook.send(msg2)
        time.sleep(3)
        

    

    def attendMeeting(self):

        e = datetime.datetime.now()         
        day = (e.strftime("%a"))

        hook = Webhook("https://discord.com/api/webhooks/787235989965897768/79hHlSXKtlEVYHpTywCbN2RrWzW0xb1a6uXVqE06WDikniQcvNs6znLjO3ygkq-1u02S")

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

