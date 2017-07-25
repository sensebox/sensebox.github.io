### Adding blog posts

Add the blog post as a markdown file in the format `2015-01-01-topic.md` in the `_posts` folder. Follow the same schema as existing files. Please paste your images used in this blog posts in the `images/blog_images` folder.

#### Adding images to a blog post

__Please notice 👆__ Imagery should be:
- preferably vector graphics (SVG)
- compressed
- small (< 3MB)

To add one or more images to a blog post takes two steps:
- define the image path(s) as `variables` in the front matter (`relative` or `absolute`)
- include the `image` template and pass the image variable

Example:
```yaml
---
layout: post
title: "Neues Design"
date: 2017-05-11
author: Felix
abstract: "Unsere Internetseite hat einen neuen Anstrich bekommen! Es gibt einen neuen Style, einen Blog, und viele kleine Änderungen"
thumbnail: /images/blog_images/screenshot_osem.png
image1: /images/blog_images/screenshot_osem.png
image2: http://localhost:4000/images/instructions_edu_bg.jpg
lang: de
---
Neuer Style
============
...

Introducing Blog
============
...

{% include image.html image=page.image1 %}

Produktpräsentation
============
...

Pressekit
============
...

{% include image.html image=page.image2 %}
```

You can also add imagery in the markdown syntax

```md
![alt image name](path-to-your-image.png)
```
