---
layout: project_page
name: "Ampelschaltung"
date: 2019-04-29
author: Björn
abstract: "Es soll eine Ampel simuliert werden. Mit einem Button kann man die Ampel umschalten."
image: logo_bunt.png
image1: /images/projects/traffic_light/AmpelSchaltungKlein.png
image2: /images/projects/traffic_light/Blockly_Ampel_Button.png
material:
    - senseBox MCU
    - rote LED
    - gelbe LED
    - grüne LED
    - 3x 470Ω Widerstand
    - Button
    - 10kΩ (10000Ω) Widerstand
    - 2x senseBox JST-Adapterkabel
ide: blockly    
lang: de
tags: ["Informatik", "Physik"]
difficult: leicht
---
# Ampelschaltung
Es soll eine Ampel simuliert werden. Mit einem Button kann man die Ampel umschalten.

## Aufbau

Um alle Komponenten anzuschließen benötigst Du zwei JST-Adapterkabel. Das erste wird an Digital A (also den digitalen Pins 1 und 2) angeschlossen, das zweite an Digital B (also den digitalen Pins 3 und 4) angeschlossen. Am Kabel in Digital A werden die rote und die gelbe LED angeschlossen, am Kabel in Digital B die grüne LED und der Button.

{% include image.html image=page.image1 %}

## Programmierung

{% include image.html image=page.image2 %}