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
from docutils.parsers.rst.roles import set_classes

from docutils.nodes import TextElement, Inline


from docutils.parsers.rst.directives.admonitions import BaseAdmonition


def setup(app):
    app.add_directive('add_script',AddScript)
    app.add_directive('pseudo_h1',PseudoHeader) 
    app.add_directive('pseudo_h2',PseudoHeader)
    app.add_directive('pseudo_h3',PseudoHeader)
    app.add_directive('pseudo_h4',PseudoHeader)
    app.add_directive('pseudo_h5',PseudoHeader)
    app.add_directive('attribution',Attribution)
    app.add_directive('faux_code',FauxCodeBlock)
    app.add_directive('definition',DefinitionBlock)
    app.add_directive('quick_attribution',QuickAttribution)

class AddScript(Directive):
    """Argument is URL of script to load. Specify :defer: as option to set defer attr on script tag."""
    required_arguments = 1
    has_content = False
    option_spec = {'defer': directives.flag}

    def run(self):
        print("====",self.arguments[0])
        if 'defer' not in self.options:
            self.options['defer'] = True
        defer_val = "defer" if bool(self.options['defer']) else ""
        rawsource='<script src="{src}" {defer}></script>'.format(src = self.arguments[0], defer = defer_val)
        return [nodes.raw('', rawsource , format='html')]

class FauxCodeBlock(Directive):
    required_arguments = 0
    has_content = True
    option_spec = {'class': directives.class_option,
                   'name': directives.unchanged}

    def run(self):
        if 'class' not in self.options:
            self.options['classes'] = "faux"
        else:
            self.options['classes'] = 'class="faux ' + self.options['class'] + '"'
        set_classes(self.options)
        self.assert_has_content()
        text = "".join(self.content)
        node = nodes.literal_block(text, '')
        self.state.nested_parse(self.content, self.content_offset,
                                node)
        return [node]
        
        
        
""" currently broken... """    
class DefinitionBlock(Directive):
    required_arguments = 1
    has_content = True
    final_argument_whitespace = True
    option_spec = {'class': directives.class_option,
                   'name': directives.unchanged}
            
    def run(self):
        self.assert_has_content()
        if 'class' not in self.options:
            self.options['classes'] = "definition"
        else:
            self.options['classes'] = 'class="definition ' + self.options['class'] + '"'
        set_classes(self.options)
        self.assert_has_content()
        text =  "<div %(classes)s>" % self.options
        text = text + '<p class="first admonition-title">' + self.arguments[0] + "</p>"
        text = text + '\n'.join(self.content)
        text = text + "</div>"
        node = nodes.container(rawsource=text)
        self.state.nested_parse(self.content, self.content_offset,
                                node)
        return [node]

               

"""
    ReST directive for making heading tags that are not indexed

    .. h2:: This is a heading
"""

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
        

        
class AttributionLine():
    """
        Helper to Attribution and QuickAttribution
         options for construction should be a dict with:
         options['title'] : title of source
         options['title_link'] : optional link to source
         options['author'] : optional name of author
         options['author_link_' : optional link to author
         options['license'] : optional license name
    """

    options = {}

    def __init__(self, options):
        self.options = options
        
        
    def getTitleText(self):
        if 'title_link' in self.options:
            return "<a src='%(title_link)s'>%(title)s</a>" % self.options
        else:
            return "%(title)s" % self.options
            
    def getAuthorText(self):
        if 'author' in self.options:
            if 'author_link' in self.options:
                return " by <a src='%(author_link)s'>%(author)s</a>" % self.options
            else:
                return " by %(author)s" % self.options
        else:
            return ""
            
    def getLicenseText(self):
        if 'license' in self.options:
            if self.options['license'] == 'CC_BY_NC_30':
                return ' (<a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/">CC BY-NC 3.0</a>)'
            if self.options['license'] == 'CC_SA_30':
                return ' (<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>)'
            else:
                return ""
        else:
            return ""
            
            
    def getText(self):
        output = ''
        output = output + '<br />\n' + self.getTitleText()
        output = output + self.getAuthorText()
        output = output + self.getLicenseText()
        return output

        
        
        
class QuickAttribution(Directive):
    """Adds attribution(s) from list of known sources
        sources to be listed should be whitespace separated after quick_attribution. Ex:
        .. quick_attribution:: ICSJava VT"""
    required_arguments = 0
    optional_arguments = 5
    has_content = False
                   
    def run(self):
        attribution_number = 0
        
        output = '\n<div class="attribution">Materials on this page adapted from:'
        
        for argument in self.arguments:
            cur_options = {}
            if argument == 'VT':
                cur_options['title'] = "Online Interactive Modules for Teaching Computer Science"
                cur_options['title_link'] = "http://courses.cs.vt.edu/csonline/"
                cur_options['author'] = "Osman Balci et al."
                
            if argument == 'ICSJava':
                cur_options['title'] = "Introduction to Computer Science using Java"
                cur_options['title_link'] = "http://chortle.ccsu.edu/java5/index.html"
                cur_options['author'] = "Bradley Kjell"
                cur_options['author_link'] = "http://chortle.ccsu.edu/"
                cur_options['license'] = "CC_BY_NC_30"
            
            if argument == 'Wikipedia':
                cur_options['title'] = "Wikipedia"
                cur_options['title_link'] = "http://en.wikipedia.org/"
                cur_options['license'] = "CC_SA_30"
            
            if argument == 'ACM':
                cur_options['title'] = "Association for Computing Machinery"
                cur_options['title_link'] = "http://computingcareers.acm.org/"
                
            output = output + AttributionLine(cur_options).getText()
            
        output = output + '</div>'
        return [nodes.raw('',output , format='html')]
        

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
            return "<a href='%(title_link)s'>%(title)s</a>" % options
        else:
            return "%(title)s" % options
            
    def getAuthorText(self, options):
        if 'author' in options:
            if 'author_link' in options:
                return " by <a href='%(author_link)s'>%(author)s</a>" % options
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
            
            cur_line = AttributionLine(cur_options).getText()
            output = output + cur_line
            
            attribution_number = attribution_number + 1
            
        output = output + '</div>'
        return [nodes.raw('',output , format='html')]