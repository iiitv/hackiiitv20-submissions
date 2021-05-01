from __future__ import with_statement     

import os
from dotenv import load_dotenv
from flask import Flask, render_template, request, abort, redirect
from twilio.jwt.access_token import AccessToken
from twilio.jwt.access_token.grants import VideoGrant, ChatGrant
from twilio.rest import Client
from twilio.base.exceptions import TwilioRestException
from twilio.twiml.messaging_response import MessagingResponse
from PIL import Image
import re 
import base64
import requests
import cv2
import numpy as np
import json


import requests
import sys
import traceback
import urllib


class UrlShortenTinyurl:
    URL = "http://tinyurl.com/api-create.php"

    def shorten(self, url_long):
        try:
            url = self.URL + "?" \
                + urllib.parse.urlencode({"url": url_long})
            res = requests.get(url)
            print("STATUS CODE:", res.status_code)
            # print("   LONG URL:", url_long)
            print("  SHORT URL:", res.text)
        except Exception as e:
            raise







load_dotenv()
twilio_account_sid = os.environ.get('TWILIO_ACCOUNT_SID')
twilio_api_key_sid = os.environ.get('TWILIO_API_KEY_SID')
twilio_api_key_secret = os.environ.get('TWILIO_API_KEY_SECRET')
twilio_client = Client(twilio_api_key_sid, twilio_api_key_secret,
                       twilio_account_sid)

app = Flask(__name__)


def get_chatroom(name):
    for conversation in twilio_client.conversations.conversations.list():
        if conversation.friendly_name == name:
            return conversation

    # a conversation with the given name does not exist ==> create a new one
    return twilio_client.conversations.conversations.create(
        friendly_name=name)

# def get_text(img_name):
#     image_bgr = cv2.imread(img_name)
#     image_rgb = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2RGB)

#     rectangle = (0, 0, 300, 380)
#     # 600, 550, 1150, 2000
#     mask = np.zeros(image_rgb.shape[:2], np.uint8)

#     bgdModel = np.zeros((1, 65), np.float64)
#     fgdModel = np.zeros((1, 65), np.float64)

#     cv2.grabCut(image_rgb, mask, rectangle, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_RECT)

#     mask_2 = np.where((mask == 2) | (mask == 0), 0, 1).astype('uint8')

#     image_rgd_nobg = image_rgb * mask_2[:, :, np.newaxis]

#     cv2.imwrite('51IgH_result.png', image_rgd_nobg)





@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():
    username = request.get_json(force=True).get('username')
    if not username:
        abort(401)

    conversation = get_chatroom('My Room')
    try:
        conversation.participants.create(identity=username)
    except TwilioRestException as exc:
        # do not error if the user is already in the conversation
        if exc.status != 409:
            raise

    token = AccessToken(twilio_account_sid, twilio_api_key_sid,
                        twilio_api_key_secret, identity=username)
    token.add_grant(VideoGrant(room='My Room'))
    token.add_grant(ChatGrant(service_sid=conversation.chat_service_sid))

    return {'token': token.to_jwt().decode(),
            'conversation_sid': conversation.sid}

# Code Changes from here 
@app.route("/process1",methods=['GET','POST'])
def process1():
    # imgData = request.values[('image64')]
    image_b64=request.values[('imageBase64')]
    print()
    print()
    # print(image_b64)
    print("hellooooooooo")
    print()
    print()
    # convertImage(imgData)

    
    imgstr=re.search(r'data:image/png;base64,(.*)',image_b64).group(1)
    # print(imgstr)
    output=open('output.png', 'wb')
    decoded=base64.b64decode(imgstr)
    output.write(decoded)
    output.close()


    # src = cv2.imread(r'C:\Users\Dell\Desktop\twillio\flask-twilio-video\output.png', cv2.IMREAD_UNCHANGED)

    # bgr = src[:,:,:3] # Channels 0..2
    # gray = cv2.cvtColor(bgr, cv2.COLOR_BGR2GRAY)

    # # Some sort of processing...

    # bgr = cv2.cvtColor(gray, cv2.COLOR_GRAY2BGR)
    # alpha = src[:,:,3] # Channel 3
    # result = np.dstack([bgr, alpha]) # Add the alpha channel

    # cv2.imwrite('51IgH_result.png', result)

    URL = "https://slazzer.com/api/v1/remove_image_background"
    PATH = 'output.png'
    API_KEY = ""

    image_file = {'source_image_file': open(PATH, 'rb')}
    headers = {'API-KEY': API_KEY}
    response = requests.post(URL, files=image_file, headers=headers)

    ans = response.json()['output_image_url']


    # remove_background(r'E:\flask-twilio-video\output.png'))

    # img = Image.open(r'C:\Users\Dell\Desktop\twillio\flask-twilio-video\output.png')
    # img = img.convert("RGBA")
    # datas = img.getdata()
    # newData = []
    # for item in datas:
    #     if item[0] == 255 and item[1] == 255 and item[2] == 255:
    #         newData.append((255, 255, 255, 0))
    #     else:
    #         if item[0] > 150:
    #             newData.append((0, 0, 0, 255))
    #         else:
    #             newData.append(item)
    #             print(item)


    # img.putdata(newData)
    # img.save("update.png", "PNG")

    # b = result.tolist()


    # ans=''
    # with open("51IgH_result.png", "rb") as file:
    #     url = "https://api.imgbb.com/1/upload"
    #     payload = {
    #         "key": 'f458d32e54f5653de50e29f07a931015',
    #         "image": base64.b64encode(file.read()),
    #     }
    #     res = requests.post(url, payload)
    #     print(res.json())
    #     ans=res.json()['data']['url']


    return ans


if __name__ == '__main__':
    app.run(host='0.0.0.0')
