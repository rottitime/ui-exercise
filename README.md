![Valtech logo](http://i.imgur.com/32Oipl4.png "Valtech logo")

UI exercise
==============================


Overview
--------

We are interested in your approach to the following problems. Each of the given problems have a handful of valid solutions, and possibly other solutions we haven't seen, so don't worry about finding "the" solution. It should render correctly in all major browsers and devices, from mobile to desktop.

You should try to complete the task in under 1 hour, so plan accordingly and focus on the most important aspects.

Getting started
---------------
Fork this project.

Commit each exercise once you've finished with it.

Exercise #1
-----------
Create a full width page with a header, a footer and a main section in index.html. The main section should contain a content section and a sidebar. Set the width of the content section to 70% and the sidebar section to 30%. The sidebar should appear on the right hand side of the content section.

index.html should include these assets:

- `https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js`
- `test.js`
- `test.css`

The header section should contain a navigation bar with three links:

- Home ( index.html )
- About ( /about )
- Blog ( /blog )
    
Exercise #2
-----------
Style the header in whatever way you think suits.

In the content section of index.html build the following design.

![HTML Layout](http://i.imgur.com/Q9dHL3d.png "HTML Layout")

Exercise #3
-----------
Add a new link to the header called "sidebar", when clicked on will show/hide the sidebar with a transition effect.

Finish up
---------
Once you're finished, send us a link to your fork.


Dev notes:
* For setup I would minify the assets (JS, CSS) via Grunt. For purpose of readability I have not.
* Ideally I would add a h1 in header. Or for SEO reasons add a H1 in the #content and have header float at the top e.g. http://jaspaul.com
* Only support for webkit which covers ios, android 4.x, console devices. Firefox and Opera tend to support w3c. (Though I have commercial experience to support older devices). I base my support of elements by both: Analytics and caniuse.com
* Sass should be split up into many files: variables.scss, functions.scss, global.scss, template.scss and modules.scss


