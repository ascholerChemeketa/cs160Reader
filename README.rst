
Quick Start
=============================

These instructions assume you do not want to experiment with running backend server to track user progress and just want to generate static pages.

Get runestone interactive
--------------------------------------------

#. Get repository from github `https://github.com/bnmnetp/runestone`. Should end up with a folder called **runestone**.
#. Follow instructions here on Configuring the book: `http://runestoneinteractive.org/build/html/developer.html#configure-the-book`. Unless you are trying to use backend server what you do here doesn't matter, just needs to be done to avoid endless warnings.


Setup Python
--------------------------------------------

#. Need Python 2.7
#. Install pip. For Windows check here: `http://docs.python-guide.org/en/latest/starting/install/win/`
#. Install the required packages using pip. You can find a list in **runestone/requirements.txt**. Install them one by one ``pip install sphinx``... or all at once by feeding that requirements.txt to pip with instructions from here: `http://runestoneinteractive.org/build/html/developer.html#dependencies`__. Don't worry about the web2py part.


Setup cs160reader
--------------------------------------------

#. Get my source code from `https://bitbucket.org/ascholerChemeketa/cs160reader`. You can clone it in mercurial or download the raw repo. (If you start working on your own version I would **STRONGLY** encourage you to fork my repo and work with that - only way we will be able to easily share changes.)
#. Make sure **cs160reader** folder is sitting in same directory as runestone folder.
#. Make output directory by hand: In same folder where cs160reader and runestone folders are make a "built" folder. Inside that make a "cs160reader" folder. This is where final product will end up. That folder can be uploaded as is to webserver.
#. From cmd prompt in cs160reader folder, do ``paver build`` to produce output. Future builds should only rebuild modified files unless you do ``paver build --all``


For more info see `http://runestoneinteractive.org/build/html/developer.html`, `http://runestoneinteractive.org/instructors.html#getstarted`, or bug me.


Building PDF
--------------------------------------------

#. Change pavement.py build options to be same as latex options. Do 'paver build'. Convert .tex output to PDF (via sharelatex.com is easiest way).