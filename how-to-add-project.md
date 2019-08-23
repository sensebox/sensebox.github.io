### Adding projects

Add the project as a markdown file in the format `2015-01-01-projectname.md` in the `_project` folder (either DE or EN). Follow the same schema as existing files. Please paste your images used in this project posts in the `images/projects/` folder.

#### Adding images to a blog post

__Please notice 👆__ Imagery should be:
- preferably vector graphics (SVG)
- compressed
- small (< 1MB)

To add one or more images to a project post takes two steps:
- define the image path(s) as `variables` in the front matter (`relative` or `absolute`)
- include the `image` template and pass the image variable

Example:

```yaml
---
layout: project_page
name: "Projekt Vorlage"
date: 2019-03-04
author: Mario
abstract: "Ein tolles Projekt mit der senseBox"
image: logo_bunt.png
image0: /images/projects/parts/mcu_sensoren.png
image1: /images/projects/sensor_display/Helligkeit_Display_Skizze_0.png
image2: /images/projects/sensor_display/Helligkeit_Display_Skizze_1.png
image3: /images/projects/sensor_display/Helligkeit_Display_Skizze_2.png
image4: /images/projects/sensor_display/Helligkeit_Display_Skizze_3.png
image5: /images/projects/sensor_display/Helligkeit_Display_Skizze_4.png
material:
    - senseBox MCU
    - OLED Display
    - Umweltsensor
ide: blockly    
lang: de
tags: ["Informatik"]
difficult: leicht
---
New Project
============
...

A new project with the temperature sensor
============
...

{% include image.html image=page.image1 %}

Circuit
============
...

Programming
============
...

{% include image.html image=page.image2 %}
```

You can also add imagery in the markdown syntax

```md
![alt image name](path-to-your-image.png)
```
