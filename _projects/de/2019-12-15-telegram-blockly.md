---
layout: project_page
name: "Telegram Chatbot für die senseBox mit Blockly"
date: 2019-12-15
author: Felix
abstract: "Ein mit Blockly programmierter Chatbot der die Sensorwerte der senseBox zurückgibt!"
image: /telegram-blockly/telegram-blockly.png
image1: /images/projects/telegram_bot/01_botfather.png
image2: /images/projects/telegram_bot/02_botname.png
image4: /images/projects/telegram_bot/03_botcreated.png

material:
    - senseBox MCU
    - WiFi Bee
    - Beliebige(r) Sensor(en)
    - senseBox JST Kabel
ide: blockly
lang: de
tags: ["IoT","Chatbot"]
difficult: einfach
---
# Telegram Chatbot für die senseBox
Ein einfacher Chatbot um die senseBox auszulesen ist ein cooles Feature. Man kann zum Beispiel von überall die aktuellen Werte der senseBox abrufen. In diesem Projekt lernt ihr wie man den Chatbot über Blockly programmiert um angeschlossene Aktoren zu steuern und Sensoren auszulesen.

## Telegram-Bot erstellen
> Falls du den Telegram Messenger noch nicht verwendest, installiere diesen auf deinem Smartphone oder Computer. (https://telegram.org/apps).
Starte Telegram und suche über das Eingabefeld nach *@BotFather* und starte den Chat mit ihm. *@BotFather* ist selbst ein Bot und wird genutzt um eigene Bots zu erstellen oder zu bearbeiten.

{% include image.html image=page.image1 %}

> Erstelle nun mit dem `/newbot` Befehl im Chat einen neuen Bot und gib ihm einen Namen.

{% include image.html image=page.image2 %}

> Als nächstes braucht der Bot noch einen eindeutigen Nutzernamen (username). Hier wird der Name senseBoxMCU_testBot gewählt.

{% include image.html image=page.image4 %}

> Wenn du einen Namen gefunden hast der noch nicht vergeben ist bekommst du eine Bestätigung das alles geklappt hat, wie oben dargestellt. Wichtige Informationen sind einmal der Chatlink zu deinem Bot, sowie den rot gedruckten Access Token. Letzteren musst du kopieren und gleich im Anwendungsbeispiel einfügen.

## Chatbot über Blockly Programmieren
Das Programmieren des Chatbots ist mit Blockly recht einfach. Zuerst muss die senseBox über WLAN mit Telegram kommunizieren können. Wähle dafür den `Verbinde mit WLAN` Block und gebe Deine WLAN-Zugangsdaten ein. Darunter muss der Telegram Bot initialisiert werden. Im Feld `token` wird der Telegram Token eingegeben, welchen Du vom BotFather erhalten hast. Blockly sollte nun in etwa so aussehen:

{% include image.html image='/images/projects/telegram-blockly/1.png' %}

Nun kannst Du einstellen, was der Bot beim Erhalt einer Nachricht machen soll. Das muss im `Telegram mache` Block geschehen. Dieser muss den `bei Nachticht` Block beinhalten. Hier kannst Du die Nachricht angeben, bei welcher etwas passieren soll. Achte darauf, dass die Nachricht mit `/` beginnt. In diesem Fall möchte ich, dass die interne LED der senseBox bei `/ledan` angeschaltet wird. Innerhalb des `Telegram mache` Blocks füge ich noch einen zweiten `bei Nachricht` Block ein, welcher die LED wieder ausschaltet.

{% include image.html image='/images/projects/telegram-blockly/2.png' %}

In Telegram kannst Du nun Deinen neuen Bot ansprechen (den Kontakt hast Du vom BotFather als Link erhalten). Du kannst ihm nun deine Befehle `/ledan` oder `/ledaus` senden und die LED der senseBox sollte an bzw. aus gehen.

{% include image.html image='/images/projects/telegram-blockly/3.png' %}

## Sensorwerte auslesen
Der Bot kann Dir auch Nachrichten schicken. Hier möchte ich beispielsweise Sensorwerte bei der Nachricht `/status` erhalten. Dazu erstelle ich zwei `Sende Nachricht` Blöcke. An jedem Block kann ich einen beliebigen Text angeben. Eine Nachricht enthält die Temperatur, die zweite enthält die rel. Luftfeuchtigkeit.

{% include image.html image='/images/projects/telegram-blockly/4.png' %}

In Telegram erhalte ich nun bei der Nachricht `/status` nach wenigen Sekunden meine aktuellen Messwerte.

{% include image.html image='/images/projects/telegram-blockly/5.png' %}

Viel Spaß mit Deinem persönlichen ChatBot!

### Weitere Tipps
* Achte darauf, dass das WiFi-Bee die richtige Firmware besitzt. Ansonsten kann es sein, dass sich die senseBox nicht mit Telegram verbinden kann. Weitere Informationen findest Du hier: [https://sensebox.github.io/books-v2/home/de/additional-info.html](https://sensebox.github.io/books-v2/home/de/additional-info.html)

* In letzter Zeit häufen sich Probleme mit den Einstellungen des WiFi-Bees. Falls trotz aktueller Firmware keine Daten ankommen bzw. verschickt werden, dann musst Du eventuell ein entsprechendes Zertifikat hinzufügen. Bitte befolge folgende Schritte: [https://forum.sensebox.de/t/sensebox-home-v2-upload-zu-opensensemap-funzt-nicht/757/2](https://forum.sensebox.de/t/sensebox-home-v2-upload-zu-opensensemap-funzt-nicht/757/2) und füge die Domain `api.telegram.org:443` hinzu.
