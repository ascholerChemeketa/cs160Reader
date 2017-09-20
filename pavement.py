import paver
from paver.easy import *
import paver.setuputils
paver.setuputils.install_distutils_tasks()
import os, sys

from sphinxcontrib import paverutils

sys.path.append(os.getcwd())

home_dir = os.getcwd()
master_url = 'http://127.0.0.1:8000'
master_app = 'cs160ReaderOld'
serving_dir = "../built/cs160ReaderOld"

options(
    sphinx = Bunch(docroot=".",),


	latex = Bunch(
        builddir="../builtlatex/cs160ReaderOld",
        sourcedir="_sources",
        outdir="../builtlatex/cs160ReaderOld",
        builder='latex',
        confdir=".",
        project_name = "cs160ReaderOld",
        template_args={'course_id': 'cs160ReaderOld',
                       'login_required':'false',
                       'appname':master_app,
                       'loglevel': 0,
                       'course_url':master_url,
                       'use_services': 'false',
                       'python3': 'false'
                        }
    ),

    build = Bunch(
        builddir="../built/cs160ReaderOld",
        sourcedir="_sources",
        outdir="../built/cs160ReaderOld",
        confdir=".",
        project_name = "cs160ReaderOld",
        template_args={'course_id': 'cs160ReaderOld',
                       'login_required':'false',
                       'appname':master_app,
                       'loglevel': 0,
                       'course_url':master_url,
                       'use_services': 'false',
                       'python3': 'false'
                        }
    ),

	#pdf=Bunch(
    #    builddir="../builtpdf/CS160Reader",
    #    sourcedir="_sources",
    #    outdir="../builtpdf/CS160Reader",
    #    project_name = "CS160Reader",
    #    builder='pdf',
    #    confdir=".",
    #),
)

from runestone import build  # build is called implicitly by the paver driver.
