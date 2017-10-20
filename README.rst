
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

#. Get my source code from `https://bitbucket.org/ascholerChemeketa/cs160reader`. You can clone it in mercurial or download the raw repo. (If you start working on your own version I would **STRONGLY** encourage you to fork my repo and work with that - only way we will be able to easily share changes.)
#. Make output directory by hand. The default location for this should be a directory called ``built`` that is a sibling of the source code directory. (Up a level from this .rst file.). Can be configured in pavement.py
#. From cmd prompt in source folder, do ``paver build`` to produce output. Future builds should only rebuild modified files unless you do ``paver build --all``


For more info see `<http://runestoneinteractive.org/build/html/developer.html>`_ or bug me.
