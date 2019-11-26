---
layout: post
title: "Using OSF for public peer review and proceedings"
date: 2019-09-24
author: Daniel Nüst, Mario Pesch, Thomas Bartoschek
abstract: "This week the Forum Citizen Science 2019, the largest Citizen Science conference in Germany, took place in Münster, Germany."
thumbnail: /images/blog_images/forumCS-paper/osf_overview.png
image1: /images/blog_images/forumCS-paper/osf_overview.png
lang: de
---


# Using OSF for public peer review and proceedings
-----

This week the ["Forum Citizen Science" 2019](https://www.buergerschaffenwissen.de/citizen-science/veranstaltungen/forum-citizen-science-2019), the largest Citizen Science conference in Germany, took place in Münster, Germany.
It was organised jointly by ["Bürger schaffen Wissen"](https://www.buergerschaffenwissen.de/) and the [senseBox](https://sensebox.de/)/[openSenseMap](https://opensensemap.org/) team from the Institute for Geoinformatics ([ifgi](https://www.uni-muenster.de/Geoinformatics/en/)) at the [University of Münster](https://www.uni-muenster.de).
For the first time the Forum Citizen Science featured a track for scholarly articles.
The review and publication was built on the [Open Science Framework](https://en.wikipedia.org/wiki/Center_for_Open_Science#Open_Science_Framework) (OSF).
In this blog post, the programme committee shares their experiences and lessons learned, especially reflecting on the process and features.
We hope this is useful to others, but mostly we want to avoid making the same mistakes again, because while the notes below may sound like many things went wrong, it surely was a great experience and we'd do it again in a heartbeat.

_We thank the reviewers for making the first academic track at the ForumCS possible and thank the authors for their hard work and trust in the new format._

All material including the manuscripts (preprints and accepted), reviews, process descriptions, and document processing code, are on [OSF](https://doi.org/10.17605/OSF.IO/68UWN)

## A Citizen Science short paper track

Early on the decision was made to pursue an inclusive open conference track for scholarly manuscripts.
Sadly the idea to have both reviewers with a (topical/current) academic background and citizen scientists could not be fulfilled.
This could be due tue a lack of a suitable network and incentives for non-academics to participate.

We're very happy to have achieved the following goals, and how the technical infrastructure by OSF and Open Source tools enabled these successes: 

* a fully [open peer review](https://en.wikipedia.org/wiki/Open_peer_review),
* reviewing and accepting papers in both English and German, 
* no requirements on the form,
* a "branded" final proceedings PDF, and finally 
* citable [Open Access](https://en.wikipedia.org/wiki/Open_access) publications with a [DOI](https://en.wikipedia.org/wiki/Digital_object_identifier).


Somebody must have said something along the lines of _"no timeline survives first contact with the authors and reviewers"_.
For us, with the conference end of September, the following rough deadlines worked out mostly well, factoring in the summer time with a risk of longer absences:

- March: Secure reviewers, call for submissions
- End of May: Distribute reviews
- End of June: Deadline for reviews, inform authors
- Mid August: Deadline for revisions, inform original reviewers, "rebuttal" phase
- Beginning of September: Final decision on acceptance
- 13 September: conference registration deadline
- 26/27 September: publish proceedings, conference sessions

While the _bilingual submissions_ did not make matching reviewers easier, it worked well enough for us but could become tricky with higher submission numbers.
It also increased the work in preparing material (e.g. the submission guidelines), though we opted for a "on demand" translation asking readers to reach out to us, so we only translated contents when actually needed.

The _free form_ (i.e. no document template) was a win, as it allowed the diversity of the CitSci community to shine through, e.g. using Mathematicians and social scientists alike to follow their community's established practices for citations and formatting.
Still a small conflict on article length could not be avoided, when a social science-article did reach 1.5-times the word limit, partially due to the extensive use footnotes, which was not at all a problem for manuscripts from other backgrounds.

## Submission and review

### The numbers

Twelve short paper submissions were reviewed in an open peer review, and [eight articles](https://osf.io/68uwn/wiki/Papers/) (three in German, five in English) were eventually [accepted](https://osf.io/68uwn/wiki/Papers/) while the not-accepted submissions contribute to the open body of knowledge as [preprints](https://en.wikipedia.org/wiki/Preprint).
Some submissions were eventually presented as posters at the conference, which is a great way to get feedback and develop a piece of work further.
Considering this was the first time the Forum Citizen Science featured an academic-conference-style reviewed paper track, we are pretty happy with the collaboration and turnout of authors and reviewers.

### On the review process

We detailed the submission and review process on [a Wiki page](https://osf.io/68uwn/wiki/Review%20Process%20and%20Guidelines/) and received some questions leading to clarifications, but no strong objections to anything outlined there.
We explicitly mentioned [_preproducibility_](https://www.nature.com/articles/d41586-018-05256-0) as the guiding principle and tried to be very clear on openness and licensing: authors would have to agree too an open attribution license (CC-BY).
This did not seem to be a problem for the community.

There were a few discussions by authors who were surprised by the result or disagreed with the reviews, as can be expected in any review process.
These could be sorted out though as far as possible, and were partially due to inprecise rules for reviews (see lessons below).

Despite some efforts on social media, there was _not a single unsolicited review or comment_.
We would have thought the CitSci community would engage more in this way, but probably there needs to be a more personal and active outreach.

Reviewers seemed to be happy with the form and open for the review to happen in public.

_We invite all participating authors and reviewers to give us their feedback in person at the conference, or via email! Please help us documenting what can be done better so that future short paper tracks are an even better experience!_

### On the technical side

Because it is not possible to add any project as a component to an OSF project, we decided to let authors submit their manuscript via email and tell us their OSF account.
Then _we_ created components (type: "project"), added the manuscript file using a consistent naming scheme (i.e. `ForumCS-2019_short-paper_<last name of first author>.pdf`), and added the author as administrator of the component.
The author themselves could then add more metadata, e.g. their coauthors, which took some workload away from us, and could also add addional files and supplements.
The latter was an untapped potential: just one of the authors added their appendix as an extra file to the OSF.
This is probably also due to the nature of presented works, but nevertheless something to advertise more in the future: you can add arbitrary supplemental documents to an OSF component and make your resarch more transparent, understandable (e.g. videos) and reproducible (code & data).
The same was done with reviews, revisions, and the final article documents: we received the files and uploaded them (consistently named) to the respective OSF projects.

Some authors did upload the revision themselves, so we fixed the file name online.
But there is certainly a need for clarification here, maybe one should even embrace authors making the upload of revisions and files?
There also was inconsistency in communication about the revision.
Some authors wrote a letter to the reviewer, some handed in a Word document with tracked changes, some just a revised PDF.
On the plus side, each author could follow the most effective workflow for them.
On the negative side, the level of review of the revisions was quite diverse.

The programme committee accounts were added as non-bibliographic contributors and admins, so we all could edit each paper's OSF project.
Then the OSF component made publicly available and a DOI was minted.
The reviewers were send the DOI to conduct their review.
The reviews were added as `ForumCS-2019_short-paper_<last name of first author>_review_{n}.pdf` to the OSF component.
To distinguish between original submissions and versions, we appended `_revision.pdf` to the name of the file and the respective reviews.
On the side of the programme committee, the file management was done in a shared cloud storage and a shared spreadsheet organised the reviewer assignments and manuscript state as well as non-public notest and comments.

A consistent naming was crucial for the automated process of compiling a large _proceedings document_.
Programme committee member Daniel put his R scripting skills to work and created a fully automated workflow to download the final revision PDFs from OSF based on a list of OSF project identifiers.
The script then queries project metadata (author names, title), downloads the final manuscripts, and uses a number of templates (contributed by the Bürger Schaffen Wissen team - thanks!) to create title page, table of contents, and cover pages.
In case the authors did add their co-authors as bibliographic contributors on OSF, we stepped in at this point.

The whole process is based on Free and Open Source Software, namely LibreOffice, R packages [`osfr`](https://github.com/CenterForOpenScience/osfr/) and [`officer`](https://github.com/davidgohel/officer/), and various PDF tools.
The main outputs are PDFs files for each manuscripts with a cover sheet and watermark (ForumCS logo and the respective DOI) on every page, as well as a PDF document with all accepted papers.
The code is published [on GitLab](https://gitlab.com/nuest/forumcs-2019-osf-proceedings) and could be adopted for other proceedings.
The workflow requires just "one click" and even runs in [the project's continuous integration service](https://gitlab.com/nuest/forumcs-2019-osf-proceedings/pipelines).

At the very end, we configured [redirects](https://help.osf.io/hc/en-us/articles/360019737934-Add-a-Redirect-Link) for each OSF component, so that entering the DOI takes readers directly to final version of the article, not the project.
If a reader does not follow the redirect, they have access to all revisions and additional files.

Overall, the submission and review process worked well for us and nicely makes each submission (accepted or not) a component in the [main OSF project](https://doi.org/10.17605/OSF.IO/68UWN) with its own DOI in a branded PDF file.
We acknowledge the file handling during review might not scale well though for larger events.
Unfortunately there is also no way to obivously tag articles as accepted or not.

 {% include image.html image=page.image1 %}

## Lessons learned

- OSF's ["project links"](https://help.osf.io/hc/en-us/articles/360019930313-link-to-a-project) might make the submission and file creation process easier, so authors take ownership of their component from the beginning; however, still might need a programmme committee member as a non-bibliographic contributor to handle files. Alternatively, the [Journal of Meta-Psychology](https://open.lnu.se/index.php/metapsychology/about/submissions) uses components more extensively to model articles stages, see [https://osf.io/3m4z3/](https://osf.io/3m4z3/).
- While using file names to distinguish versions of manuscripts works well for showing the evolution, it makes it harder to tell which is the "final" one. Using the built-in versioning of OSF and a wiki page explaining how to access versions of a file could be better. Alternatively, make every step in the submission it's own component, see e.g. [https://osf.io/ps5ru/](https://osf.io/ps5ru/).
- Reviewers put some content in the email and some in the review text, and some did not sign within the provided PDF > needs to be more specific next time, maybe do not let reviewers opt for anonymity and make clear that they need to provide a review _including_ their name and their recommendation in the text as a single PDF document.
- No required styling/formatting was great, except that a consistent page format (in our case A4) and a naming scheme could have made things a bit smoother.
- You cannot search for OSF accounts with an email,  so better ask authors for the link to their OSF account (which includes their account ID).
- It's not easily possible to split up components in "accepted" and "rejected", so we created a wiki page and put it prominently on the project landing page.
- None of the reviewers used the OSF commenting feature - it's probably worth point that out more explicitly, though one reviewer did mention the free form for him (he just sent an email to us) was a nice change of pace.
- Unsolicited reviews don't come for free, but there must be active community outreach and engagement, especially if the ideal of citizen involvement remains.
- Newcomers to OSF need nudging towards supplemental files and taking ownership of their components (adding description, tags, etc. on their own).
- Have clear rules on who uploads new revisions.
- Require authors to provide some documentation of the changes in a revision, e.g. a letter to the reviewers or a document with tracked changes in an open format (e.g. suggest a track changes view exported as PDF).

## OSF Wishlist

Here are some features that would make OSF-based proceedings easier (without turning it into a proceedings publishing system):

- allow to request a project to become a component in another project (may have limitations, like same license) and auto-add contributors from the main to the component
- have a project type "manuscript"
- enable tagging or grouping of components (e.g. into "accepted papers" and "submissions")
