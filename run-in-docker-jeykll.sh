#!/bin/bash	

#docker run --rm -it -v /dev/null:/srv/jekyll/Gemfile -v $(pwd):/srv/jekyll -p 4000:4000 jekyll/jekyll:pages jekyll s	
docker run --rm -it -v $(PWD):/srv/jekyll -p 4000:4000 -p 35729:35729 jekyll/jekyll jekyll serve --livereload
