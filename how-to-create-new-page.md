### Adding a new page

1. Create new .html file in root directory as well in `en`
   ```yaml
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
  ```yaml
    helloWorld: "Hallo Welt"
  ```
  - yourNewPageID.html:
  ```
    bla bla {{ t.helloWorld }} bla bla
  ```

5. Change the navbar title of your page in `_data/translations/de/header.yml` __and__ `_data/translations/en/header.yml` like this:
```yaml
newPageID: "Navbar Title"
```

6. Add yourNewPageID to the `pages` list in line 1 of `_includes/carousel-header.html`. If you do not want to add your new page to the navbar, ignore this step.

### Changing page carousel background
1. Create a gradient (http://www.colorzilla.com/gradient-editor/) and save the output CSS code in `_sass/sensebox.scss`. Check out the other gradients starting at line 908. Remember the css class you have given your gradient.

2. Duplicate the file `_includes/_carousel_content/default_carousel.html` and save it as `<yourNewPageID>_carousel.html`

3. Edit the new file and change the background-gradient to your new class
```html
<div class="item active">
    <div class="carousel-background <your new carousel gradient class>">
      <!-- You can put content here -->
    </div>
</div>
```

4. Append yourNewPageID to the carouselpages list in line 2 of `_includes/carousel-header.html`
