# Neighbourhood Map Project

## Intention
* I created this app with the intention of showing off all of the awesomeness that Brighton has to offer.
* I wanted it to be a portfolio piece I could be proud of.
* I felt it needed to be an image led site to help the user to engage with the vibe that Brighton has to offer.
* The aim was to integrate these intentions into an app which also fulfilled the project brief

## Running the App
* The app is fully responsive and should run on any OS.
* It has been fully tested in Google Chrome only.
* There are no particular dependencies that a user would have to install.
* To see the google maps error handling popups must not be blocked by your browser

Step-by-step detailed instruction on how to open the app (locally, Github Page link doesn't count - even though it's excellent to host app on Github Pages)

For example, we can instruct user to run app on localhost:8080 by setting up a local server using one of these Python methods (only one is adequate to meet Documentation requirement):

Python 3:

python -m http.server 8080
Python 2:

python -m SimpleHTTPServer 8080


## Programming Complications
* Returning an alt property on the various images was complicated somewhat by having to source the alt content from 2 different locations. This was becuase of formatting which had to be applied to long location names, to allow them to fit into the popup info windows.
* Returning attribution information had to come from 2 different sources - img source was used for images taken from venue websites, and image attrib was used for flickr attribution with an accompanying link to the relevant Creative Commons Licence.
* Making my populateImageArea fit all possiblle image arrays which would be passed to it was fairly complicated because of the issues with alt and attribution outlined above.

## Concerns
* I have slight concerns about performance with the site being so image heavy, The reason I chose to do it this way rather than hotlinking was becuase the site is so image driven I needed 100% reassurance that the images would be available. The reason I didn't go for a flickr api was becuase my image requirements were so specific I figured this was the easiest way to work it.
* The reason I didn't go for a full on Yelp API solution was that I was only really interested in specific reviews rather than the rest of their features, and their iFrame embed feature is set up to do just that. I feel it works well with the look and feel of the site and gives the consumer the information they need without being an overly comlicated solution.

## Final thoughts
* I am pleased with the product I have created. I am very happy to include this as a piece of portfolio work that I am proud of.
* I am partiularly pleased with the originality of the project and I feel it does my home town justice.
* I have learnt **a lot** by creating this project, and I feel it has stretched my programming skills significantly. I am also a lot more confident in taking a javascript based project from start to finish now which I am very pleased with.
* I've enjoyed working with a framework and definitely intend to look further into other available javascript frameworks for future project work.
* I hope I have managed to fulfil all of the project criteria, albeit in a rather unconventional manor!
* I hope you enjoy viewing the app as much as I do.

Thanks. Beth
The project can be viewed at www.awesomebrighton.co.uk
My personal site is: www.bethpalmer.co.uk