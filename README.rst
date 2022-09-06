Welcome To CS / CS160Reader
=============================

This ebook - **Welcome to CS** - was originally titled **CS160Reader**. It is designed for a CS0 style course that introduces the discipline to potential majors as well as non-majors and roughly corresponds to the AP CS Principles curriculum. 

Quick Start
=============================

These instructions assume you do not want to experiment with running backend server to track user progress and just want to generate static pages.

Python & Runestone Setup
--------------------------------------------

See here for full details of process `<https://pypi.python.org/pypi/runestone>`_.

Python 2.X or 3.X should work. Virutalenv recommended.

Do:

``pip install runestone``


Setup cs160reader
--------------------------------------------

#. Get source code from `https://github.com/ascholerChemeketa/cs160Reader/`.
#. Make output directory by hand. The default location for this should be a directory called ``built`` that is a sibling of the source code directory. (Up a level from this .rst file.). Can be configured in pavement.py
#. From cmd prompt in source folder, do ``runestone build`` to produce output. Future builds should only rebuild modified files unless you do ``runestone build --all``
#. pavement.py file has an alternate build definition that can be uncommented to produce latex output that can be converted to PDF using a latex editor/viewer.


For more info on runestone, see `<http://runestoneinteractive.org/build/html/developer.html>`.
