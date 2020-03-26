---
layout: project_page
name: "Telegram Chatbot for the senseBox with Blockly"
date: 2020-02-19
author: Felix
abstract: "A with Blockly programmed chatbot which returns the sensor values of the senseBox!"
image: /telegram-blockly/telegram-blockly.png
image1: /images/projects/telegram_bot/01_botfather.png
image2: /images/projects/telegram_bot/02_botname.png
image4: /images/projects/telegram_bot/03_botcreated.png

material:
    - senseBox MCU
    - WiFi Bee
    - Any senors
    - senseBox JST cabel
ide: blockly
lang: en
tags: ["IoT","Chatbot"]
difficult: easy
---
# Telegram Chatbot for the senseBox
A simple chatbot to read the senseBox is a cool feature. For example you can get the current values from your senseBox from anywhere. In this project you learn how to program the chatbot via blockly to control connected actuators and read sensors.


## Create Telegram-Bot
> If you do not use Telegram Messenger yet, install it on your smartphone or computer [https://telegram.org/apps](https://telegram.org/apps).
Start Telegram and search for *@BotFather* via the input field and start the chat with him. *@BotFather* is a bot itself and is used to create or edit your own bots.

{% include image.html image=page.image1 %}

> Now create a new bot with the `/newbot` command in the chat and give it a name.

{% include image.html image=page.image2 %}

> Here the name senseBoxMCU_testBot is chosen.

{% include image.html image=page.image4 %}

> If you have found a name that is not yet in use, you will get a confirmation that everything has worked as shown above. Important information are the chat link to your bot and the red printed access token. You have to copy the latter and paste it into the application example.

## Chatbot about Blockly Programming
Programming the chatbot is quite easy with Blockly. First the senseBox must be able to communicate with Telegram via WLAN. To do this, select the `Connect to Wifi` block and enter your Wifi access data. Below that the Telegram Bot must be initialized. In the field `token` enter the Telegram Token you received from the BotFather. Blockly should now look something like this:

{% include image.html image='/images/projects/telegram-blockly/1_En.PNG' %}

Now you can set what the bot should do when it receives a message. This must be done in the `Telegram do` block. This must include the `on message` block. Here you can specify the message where something should happen. Make sure that the message starts with `/`. In this case I want the internal LED of the senseBox to be turned on at `/ledan`. Within the `Telegram do` block I add a second `on message` block which turns the LED off again.

{% include image.html image='/images/projects/telegram-blockly/2_En.PNG' %}

In Telegram you can now address your new bot (you have received the contact from the BotFather as a link). You can now send him your commands `/ledon` or `/ledoff` and the LED of the senseBox should go on or off.
{% include image.html image='/images/projects/telegram-blockly/3.png' %}

## Read out sensor values
The bot can also send you messages. For example, here I would like to get sensor values for the message `/status`. For this I create two `Send Message` blocks. On each block I can specify any text. One message contains the temperature, the second contains the relative humidity.

{% include image.html image='/images/projects/telegram-blockly/4_En.PNG' %}

In Telegram I now receive my current readings after a few seconds when the message `/status` appears.

{% include image.html image='/images/projects/telegram-blockly/5.png' %}

Have fun with your personal ChatBot!

### Further tips
* Make sure that the WiFi-Bee has the correct firmware. Otherwise the senseBox may not be able to connect to Telegram. You can find more information here: [https://sensebox.github.io/books-v2/home/de/additional-info.html](https://sensebox.github.io/books-v2/home/de/additional-info.html)

* There have been some issues with the WiFi-Bee settings lately. If there is no connection despite an up to date firmware you may need to add a certificate. Please try to open the wifi updater panel [https://forum.sensebox.de/t/sensebox-home-v2-upload-zu-opensensemap-funzt-nicht/757/2](https://forum.sensebox.de/t/sensebox-home-v2-upload-zu-opensensemap-funzt-nicht/757/2) and add the domain `api.telegram.org:443`.