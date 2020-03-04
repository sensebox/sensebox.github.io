---
layout: project_page
name: "Implementing energy saving functions"
date: 2020-03-04
author: Jan
abstract: "There are some ways to modify your Arduino sketches and save some engery"
image: /ttn-decoding/animation.gif
lang: en
tags: ["Arduino", "Electronics", "Energy Saving"]
difficult: "medium"
---
# Introduction
If you want to save engergy for your self-powered applications you can cut power supply to the different 
hardware interfaces on the MCU. By default all the interfaces are activated indicated by the green LEDs on the board.

BILD

You can use some funtions from __senseBoxIO.h__ to deactivate UART, I2C, XBEE1 and XBEE2 
interfaces on the board. You can go down to a minimum of around 6.5 mA after that.

When starting up the board, use __senseBoxIO.powerNone()__ to deactivate all interfaces. 
After that you can iteratively activate the ports you need.

```
#include <senseBoxIO.h>

void setup() {
	senseBoxIO.powerNone();
 	delay(250);
   	powerI2C(true);
	powerUART(true);
    	powerXB1(true);
    	powerXB2(true);
	delay(250);
	...	
}
```
If you want to power up all interfaces at once you can use __senseBoxIO.powerAll()__ for that. 
It is also possible to activate the ports only when needed during the loop. 
Just give the board a small delay time to power up.

If you deactivate all of the hardware ports you might have the problem, 
that you can not see if the board is still powered up because all indicator 
lights are off as well. You can use the inbuild green and the red LEDs next t
o the micro USB connector on the MCU as status LEDs. Use the functions __senseBoxIO.statusGreen()__ 
or __senseBoxIO.statusRed()__ and __senseBoxIO.statusNone()__ for that.

