# sensebox.github.io

![senseBox Logo](https://raw.githubusercontent.com/sensebox/sensebox.github.io/master/images/logo.png "senseBox Logo")

senseBox website

## Editing the website

Most of the articles and press releases are written with [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). HTML can be used if needed, e.g. for linking to external pages or for embedding images.

### Adding blog entries

Add the blog text as a markdown file in the format `2015-01-01-topic.md` in the `_news` folder. Follow the same schema as existing files.

### Adding press reports

Add the biography as a markdown file in the format `2015-01-01-topic.md` in the `_press` folder. Follow the same schema as existing files.

### Adding team members biographies

Add the biography as a markdown file in the format `name.md` in the `_team` folder. Follow the same schema as existing files.

## Running the page locally with Jekyll

Clone repository, `cd` into it and run:

```bash
jekyll serve
```

In a Vagrant environment, run:

```bash
jekyll serve --host 0.0.0.0 --force_polling
```