---
layout: project_page
name: "How to create a TTN Mapper in less than 10 minutes"
date: 2020-03-06
author: Felix
abstract: "The LoRa-Bee and GPS module is used to build an senseBox based TTN Mapper"
image: ttn-mapper-en.png
image1: /images/projects/lora-osem-tago/station_anlegen_ttn.PNG
image2: /images/projects/lora-osem-tago/station_anlegen_ttn_final.PNG
image3: /images/projects/lora-osem-tago/device_anlegen_ttn.PNG
image4: /images/projects/lora-osem-tago/device_anlegen_ttn_overview.PNG
image5: /images/projects/TTN-Mapper/ttn-mapper-integration.png
image6: /images/projects/TTN-Mapper/blockly-activation.png
image7: /images/projects/lora-osem-tago/device_overview_right_format.PNG
image8: /images/projects/TTN-Mapper/blockly-gps.png
image9: /images/projects/TTN-Mapper/ttn-mapper.png

material:
    - senseBox MCU
    - 1x JST-cable 
    - LoRa-Bee
    - GPS module
ide: blockly  
version: ["edu", "mini"]
addons: ["LoRa-Bee"]  
lang: en
tags: ["Geography", "Computer Science", "LoRa", "TTN", "Blockly"]
difficult: medium
---
# senseBox TTN Mapper

The goal is to develop a senseBox TTN mapper with LoRaWAN module. The data will be sent via the free network [TheThingsNetwork](https://www.thethingsnetwork.org/) to the TTN Mapper Application. The [TTN Mapper](http://ttnmapper.org/) is an application to identify places with LoRaWAN connectivity. With our senseBox we want to contribute to the platform.


## Hardware

<div class="row">
	<div class="post-image">
			<img src="https://sensebox.kaufen/api/public/uploads/1584028489927-TTN-Mapper.png" alt="TTN-Mapper-Shop - Logo" data-zoomable/>
	</div>
</div>

You will need a senseBox MCU, a LoRa-Bee and a GPS module. You can find a set of those in our shop: [https://sensebox.shop/product/sensebox-ttn-mapper-set](https://sensebox.shop/product/sensebox-ttn-mapper-set)

Start by connecting the LoRa-Bee to XBEE1 on your senseBox MCU. Additionally, connect the GPS module via I2C to the senseBox MCU. You are now ready to go.

Additionally, you will need a mobile power supply. The easiest way is a USB powerbank or a battery that is compatible with the senseBox MCU connector.

## Registration at TheThingsNetwork

Visit the website [thethingsnetwork.org](https://www.thethingsnetwork.org/) and create an account. If you are logged in, visit the [TTN Console](https://console.thethingsnetwork.org/). Click on  "Applications" and create a new application on the following page. Enter an "Application ID" there, which is unique. Leave all other options unchanged.

{% include image.html image=page.image1 %}

Then you will get an overview with the selected "Application ID" and the "Application EUIS". 

{% include image.html image=page.image2 %}

Now you have to add a Device in your new application. To do this, go to the "register device" section under "Devices". Give your Device a "Device ID". By clicking on the looped arrows ("generate") at "DeviceEUI" a DeviceEUI is generated automatically.

{% include image.html image=page.image3 %}

Then click on "Register" and you will get the following overview with the "Application ID" and the "Device ID", which you will need when registering on the openSenseMap.
{% include image.html image=page.image4 %}

Since the data is to be sent to the TTN Mapper later, you still need a so-called "integration". You can find it in your menu above. Click on it and then click on the button with the label "Add Integration". There you have the possibility to add various integrations to forward the data from TTN to other services. Select the "TTN Mapper" there. Now enter a "Process ID", which you can choose freely. Then enter your E-Mail address and specify an experiment name. Please use your own experiment name. You can also omit the experiemt name but you won't be able to identify your own measurements on TTN Mapper. Then click on "Add Integration".

{% include image.html image=page.image5 %}


## Blockly 

Open Blockly and start developing code for your senseBox MCU. As we want to use TTN's infrastructure, we need to perform an activation. Select the OTAA activation. Depending on your needs, you can change the transmission interval. Keep in mind that TTN runs on a fair use policy, which means that you should keep your transmission rate as low as possible. 

{% include image.html image=page.image6 %}

Insert your TTN keys now. Here it is important to use the correct format of the keys. The "Device EUI" and the "Application EUI" are stored in ``lsb`` format. The AppKey in ``msb`` format. 

When copying the keys you must therefore make sure that your Device Overview is set up as shown in the following picture. You can change the format of the display by pressing the icons at the beginning (<> and ⇆)

{% include image.html image=page.image7 %}

There are different ways of sending LoRa data. We want to use the Cayenne Low Power Payload (LPP) in this case as it's quite easy to use. However, please keep in mind the following information by TTN Mapper.

> When using the Cayenne LPP data format, the GPS coordinates will be decoded into a different JSON format which is also supported. Cayenne LPP does not contain the GPS accuracy, and therefore this data will be considered as inferior and will carry less weight in calculation of coverage, and will be deleted first during data cleanup. [Source](https://www.thethingsnetwork.org/docs/applications/ttnmapper/)

{% include image.html image=page.image8 %}

Add the `Send as Cayenne Payload` Block and send a `Latitude, Longitute and Altitude` message. Insert the corresponding GPS block here. You don't need to change the channel.

Compile the sketch and upload it to the senseBox MCU. The senseBox should now look for GPS data and transmit them to TTN which forwards them to TTN Mapper.

Connect your external power supply and you are ready to measure LoRa connectivity in your neighborhood.

## TTN Mapper

You can find your personal TTN Mapper under your specific experiment name. Visit

http://ttnmapper.org/experiments/?experiment=EXPERIMENT_NAME

and replace EXPERIMENT_NAME with your experiment name. It can take a while until the senseBox got GPS data. Reload the page to see the latest measurements.

{% include image.html image=page.image9 %}


## Troubleshooting

You can check the incoming LoRa data in your TTN console. In your application, click the `Data` tab and you will see incoming messages. If there are no messages, please check your EUIs and their format. If there is no TTN coverage in your area, you will also not be able to see incoming messages.

Please notice that it can take quite a while until the GPS module receives GPS data. Sometimes, it takes up to multiple hours on the first time. After the module successfully received some information, it usually won't take that long on the next time. It helps to insert a small coin cell to the GPS module.