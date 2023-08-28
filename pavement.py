import os
import sys
import pkg_resources
from socket import gethostname

from paver.easy import options, Bunch
import paver.setuputils

from runestone import get_master_url
from runestone import build  # NOQA: F401 -- build is called implicitly by the paver driver.
from runestone.server import get_dburl

paver.setuputils.install_distutils_tasks()
sys.path.append(os.getcwd())

home_dir = os.getcwd()

master_url = get_master_url()
project_name = 'welcomecs'
serving_dir = './built/welcomecs'
dest = './published'

dynamic_pages = True

options(
    sphinx = Bunch(docroot=".",),

    build = Bunch(
        builddir = serving_dir,
        sourcedir = "_sources",
        outdir = serving_dir,
        confdir = ".",
        template_args={
            'login_required':'false',
            'loglevel': 10,
            'course_title': project_name,
            'python3': 'true',
            'dburl': '',
            'default_ac_lang': 'python',
            'downloads_enabled': 'false',
            'enable_chatcodes': 'false',
            'allow_pairs': 'false',
            'dynamic_pages': dynamic_pages,
            'use_services': 'true',
            'basecourse': project_name,
            'course_id': project_name,
            # These are used for non-dynamic books.
            'appname': project_name,
            'course_url': master_url,
            'minimal_outside_links': False,
        }
    ),
)

template_args={
    'login_required':'false',
    'loglevel': 10,
    'course_title': project_name,
    'python3': 'true',
    'dburl': '',
    'default_ac_lang': 'python',
    'downloads_enabled': 'false',
    'enable_chatcodes': 'false',
    'allow_pairs': 'false',
    'dynamic_pages': dynamic_pages,
    'use_services': 'true',
    'basecourse': project_name,
    'course_id': project_name,
    # These are used for non-dynamic books.
    'appname': project_name,
    'course_url': master_url,
    'minimal_outside_links': False,
}

version = pkg_resources.require("runestone")[0].version
options.build.template_args['runestone_version'] = version