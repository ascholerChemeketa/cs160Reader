# Copyright (C) 2011  Bradley N. Miller
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
__author__ = 'andewscholer'

from docutils import nodes
from docutils.parsers.rst import directives
from docutils.parsers.rst import Directive

"""
    ReST directive for making heading tags that are not indexed

    .. h2:: This is a heading
"""


def setup(app):
    app.add_directive('pseudo_h1',PseudoHeader)
    app.add_directive('pseudo_h2',PseudoHeader)
    app.add_directive('pseudo_h3',PseudoHeader)
    app.add_directive('pseudo_h4',PseudoHeader)
    app.add_directive('pseudo_h5',PseudoHeader)
    app.add_directive('attribution',Attribution)




class PseudoHeader(Directive):
    required_arguments = 1
    has_content = False
    final_argument_whitespace = True
    option_spec = {'class': directives.unchanged}
    CODE = """\
            <%(type)s %(classes)s>
               %(text)s
            </%(type)s>
            """
    def run(self):
        if 'class' not in self.options:
            self.options['classes'] = ""
        else:
            self.options['classes'] = 'class="' + self.options['class'] + '"'
        self.options['text'] = self.arguments[0]
        self.options['type'] = self.name.split("_")[1]
        
        res = self.CODE % self.options
        
        return [nodes.raw('',res , format='html')]
        

        
def attribution_link(argument):
    """Conversion function for the "attribute_type" option."""
    result = directives.choice(argument, ('CC_BY_NC_30'))
    if result == "CC_BY_NC_30":
        result = ' <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/">CC BY-NC 3.0</a>'
        
    return result

class Attribution(Directive):
    required_arguments = 0
    has_content = False
    option_spec = {'title_1': directives.unchanged,
                   'title_link_1': directives.unchanged,
                   'author_1': directives.unchanged,
                   'author_link_1': directives.unchanged,
                   'license_1': directives.unchanged,
                   'title_2': directives.unchanged,
                   'title_link_2': directives.unchanged,
                   'author_2': directives.unchanged,
                   'author_link_2': directives.unchanged,
                   'license_2': directives.unchanged,
                   'title_3': directives.unchanged,
                   'title_link_3': directives.unchanged,
                   'author_3': directives.unchanged,
                   'author_link_3': directives.unchanged,
                   'license_3': directives.unchanged,
                   }
    
   
    def getTitleText(self, options):
        if 'title_link' in options:
            return "<a src='%(title_link)s'>%(title)s</a>" % options
        else:
            return "%(title)s" % options
            
    def getAuthorText(self, options):
        if 'author' in options:
            if 'author_link' in options:
                return " by <a src='%(author_link)s'>%(author)s</a>" % options
            else:
                return " by %(author)s" % options
        else:
            return ""
            
    def getLicenseText(self, options):
        if 'license' in options:
            if options['license'] == 'CC_BY_NC_30':
                return ' (<a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/">CC BY-NC 3.0</a>)'
            else:
                return ""
        else:
            return ""
            
            
    def run(self):
        """scan until we run out of title_#s"""
        attribution_number = 1
        
        output = '\n<div class="attribution">Materials on this page adapted with permission from:'
        
        while 'title_' + str(attribution_number) in self.options:
            num_s = str(attribution_number)
            cur_options = {}
            cur_options['title'] = self.options['title_' + num_s]
            if 'title_link_' + num_s in self.options:
                cur_options['title_link'] = self.options['title_link_' + num_s]
            if 'author_' + num_s in self.options:
                cur_options['author'] = self.options['author_' + num_s]
            if 'author_link_' + num_s in self.options:
                cur_options['author_link'] = self.options['author_link_' + num_s]
            if 'license_' + num_s in self.options:
                cur_options['license'] = self.options['license_' + num_s]
            
            output = output + '<br />\n' + self.getTitleText(cur_options)
            output = output + self.getAuthorText(cur_options)
            output = output + self.getLicenseText(cur_options)
            
            attribution_number = attribution_number + 1
            
        output = output + '</div>'
        return [nodes.raw('',output , format='html')]