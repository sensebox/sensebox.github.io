# sensebox.github.io

senseBox website

## Editing the website

Most of the articles and press releases are written with [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). HTML can be used if needed, e.g. for linking to external pages or for embedding images.

### Adding blog posts

Add the blog post as a markdown file in the format `2015-01-01-topic.md` in the `_posts` folder. Follow the same schema as existing files. Please paste your images used in this blog posts in the `images/blog_images` folder.

#### Adding images to a blog post

To add one or more images to a blog post takes two steps:
- define the image path(s) as `variables` in the front matter (`relative` or `absolute`)
- include the `image` template and pass the image variable

Example:
```
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

Introducing: Blog
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

### Adding events

Add the event as a markdown file in the `_events` folder. Follow the same schema as existing files.


### Adding press reports

Add the award as a markdown file in the format `2015-01-01-topic.md` in the `_press` folder. Follow the same schema as existing files.

### Adding awards

Add the press report as a markdown file in the `_awards` and `_awards_en` folder. Follow the same schema as existing files.

### Adding team members biographies

Add the biography as a markdown file in the format `name.md` in the `_team` folder. Follow the same schema as existing files.

### File structure
- `_awards_de`: Awards won by senseBox written in german
- `_awards_en`: Awards won by senseBox written in english
- `_data`:
  - `team`: information about the team, in german and english
  - `translations`:
    - `de`: tranlations for each page in german
    - `en`: tranlations for each page in english
    - `de_full.yml`: backup german translation
    - `en_full.yml`: backup english translation
- `_events`: Upcoming envents where senseBox will attend
- `_includes`:
  - `_carousel_content`: header content for each page (one could also implement the bootstrap carousel (https://www.w3schools.com/bootstrap/bootstrap_carousel.asp))
  - `_pages`: content for each page
  - footer, header etc...
- `_layouts`: default page layout
- `_posts`: blog posts
- `_press`: press articles
- `_sass`: sass stylesheets
- `assets`: .js scripts
- `bower_components`: bower components
- `css`: css stylesheets
- `docs`: data like pdf...
- `en`: english pages (includes pages from `_includes/_pages`)
- `images`: used images
- german pages (includes pages from `_includes/_pages`)
- favicon
- readme
- ...

### Adding a new page
1. Create new .html file in root directory as well in `en`
   ```
   ---
   layout: default
   lang: <de or en>
   id: <choose an id of your page>
   ---
   {% include _pages/<html file located in _includes/_pages> %}
   ```
2. Create new .html file in `_includes/_pages`
  - include translations in your file like this:
  ```
  {% assign t = site.data.translations.[page.lang].yourNewPageID %}
  ```
3. Create translation yourNewPageID.yml files in `_data/translations/de` and `_data/translations/en`

4. Modify your .html file in `_includes/_pages` and use translations like this:
  - yourNewPageID.yml:
  ```
    helloWorld: "Hallo Welt"
  ```
  - yourNewPageID.html:
  ```
    bla bla {{ t.helloWorld }} bla bla
  ```

5. Your page should now be rendered and shown in the navbar (you may need to add your page name to `_data/translations/de_full.yml` and the en equivalent into the `header`)


## Running the page locally with Jekyll

Clone repository, `cd` into it and run:

```bash
jekyll serve
```

In a Vagrant environment, run:

```bash
jekyll serve --host 0.0.0.0 --force_polling
```
