<?xml version='1.0'?> <!-- As XML file -->

<!--********************************************************************
Copyright 2013 Robert A. Beezer

This file is part of MathBook XML.

MathBook XML is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 or version 3 of the
License (at your option).

MathBook XML is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with MathBook XML.  If not, see <http://www.gnu.org/licenses/>.
*********************************************************************-->

<!-- http://pimpmyxslt.com/articles/entity-tricks-part2/ -->
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "entities.ent">
    %entities;
]>

<!-- Identify as a stylesheet -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:xml="http://www.w3.org/XML/1998/namespace"
    xmlns:pi="http://pretextbook.org/2020/pretext/internal"
    xmlns:date="http://exslt.org/dates-and-times"
    xmlns:exsl="http://exslt.org/common"
    xmlns:str="http://exslt.org/strings"
    extension-element-prefixes="pi exsl date str"
    xmlns:mb="https://pretextbook.org/"
    exclude-result-prefixes="mb"
>

<xsl:import href="./core/pretext-html.xsl"/>

<!-- Dump some raw html blocks into output until ported to something better -->
<xsl:template match="raw">
  <xsl:message>==========================raw========================</xsl:message>
    <xsl:copy-of select="node()"/>
</xsl:template>

<!-- Comment out xrefs until conversion is done -->
<xsl:template match="xref">
  <xsl:message>=========================xref========================</xsl:message>
  <xsl:comment>
    <xsl:copy-of select="node()"/>
  </xsl:comment>
</xsl:template>

<!-- Generate items that are hidden on the page -->
<xsl:template match="hidden">
  <xsl:message>=========================hidden========================</xsl:message>
  <div class="hidden">
    <xsl:apply-templates select="*" />
  </div>
</xsl:template>


<xsl:template match="program" mode="runestone-activecode">
    <xsl:param name="exercise-statement" select="/.."/>

    <xsl:variable name="active-language">
        <xsl:apply-templates select="." mode="active-language"/>
    </xsl:variable>
    <xsl:variable name="hosting">
        <xsl:apply-templates select="." mode="activecode-host"/>
    </xsl:variable>
    <!-- Use an id from the "program" element, unless employed -->
    <!-- inside an exercise/project-like, which is up a level  -->
    <!-- (and could be many different types of project-like).  -->
    <xsl:variable name="hid">
        <xsl:choose>
            <xsl:when test="$exercise-statement">
                <xsl:apply-templates select="parent::*" mode="runestone-id"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:apply-templates select="." mode="runestone-id"/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:variable>
    <xsl:choose>
        <!-- unsupported on Runestone, period -->
        <xsl:when test="$active-language = ''">
            <xsl:apply-templates select="$exercise-statement"/>
            <xsl:apply-templates select="." mode="code-inclusion"/>
        </xsl:when>
        <!-- needs server, and we aren't there -->
        <xsl:when test="($hosting = 'jobeserver') and not($b-host-runestone)">
            <xsl:apply-templates select="$exercise-statement"/>
            <xsl:apply-templates select="." mode="code-inclusion"/>
        </xsl:when>
        <!-- this is the logical negation of the previous, so could be "otherwise" -->
        <xsl:when test="($hosting = 'browser') or $b-host-runestone">
            <div class="ptx-runestone-container">
                <div class="runestone explainer ac_section ">
                    <div data-component="activecode">
                        <xsl:attribute name="id">
                            <xsl:value-of select="$hid"/>
                        </xsl:attribute>
                        <!-- add some lead-in text to the window -->
                        <xsl:if test="$exercise-statement">
                            <div class="ac_question">
                                <xsl:attribute name="id">
                                    <xsl:value-of select="concat($hid, '_question')"/>
                                </xsl:attribute>
                                <xsl:apply-templates select="$exercise-statement"/>
                            </div>
                        </xsl:if>
                        <textarea data-lang="{$active-language}" data-timelimit="25000" data-audio="" data-coach="true" style="visibility: hidden;">
                            <xsl:attribute name="id">
                                <xsl:value-of select="concat($hid, '_editor')"/>
                            </xsl:attribute>
                            <xsl:attribute name="data-question_label"/>
                            <!-- Code Lens only for certain languages -->
                            <xsl:attribute name="data-codelens">
                                <xsl:choose>
                                    <xsl:when test="($active-language = 'python') or ($active-language = 'python2') or ($active-language = 'python3')">
                                        <xsl:text>true</xsl:text>
                                    </xsl:when>
                                    <xsl:when test="($active-language = 'c') or ($active-language = 'cpp') or ($active-language = 'java')">
                                        <xsl:text>true</xsl:text>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:text>false</xsl:text>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:attribute>
                            <!-- allow @datafile attribute on <program> -->
                            <xsl:if test="@datafile">
                                <!-- multiple files, coma- or space- separated -->
                                <xsl:variable name="tokens" select="str:tokenize(@datafile, ', ')"/>
                                <xsl:attribute name="data-datafile">
                                    <xsl:for-each select="$tokens">
                                        <xsl:value-of select="."/>
                                        <!-- n - 1 separators, required by receiving Javascript -->
                                        <!-- comma-separated this time                          -->
                                        <xsl:if test="following-sibling::token">
                                            <xsl:text>,</xsl:text>
                                        </xsl:if>
                                    </xsl:for-each>
                                </xsl:attribute>
                            </xsl:if>
                            <!-- allow @include attribute on <program> -->
                            <xsl:if test="@include">
                                <!-- space-separated this time -->
                                <xsl:attribute name="data-include">
                                    <xsl:apply-templates select="@include" mode="runestone-targets">
                                        <xsl:with-param name="separator" select="' '"/>
                                    </xsl:apply-templates>
                                </xsl:attribute>
                            </xsl:if>
                            <!-- SQL (only) needs an attribute so it can find some code -->
                            <xsl:if test="$active-language = 'sql'">
                                <xsl:attribute name="data-wasm">
                                    <xsl:text>/_static</xsl:text>
                                </xsl:attribute>
                                <!-- A SQL database can be provided for automated  -->
                                <!-- testing of correct answers via unit tests.    -->
                                <!-- This is a location in the external directory. -->
                                <xsl:if test="@database">
                                    <xsl:attribute name="data-dburl">
                                        <xsl:choose>
                                            <xsl:when test="$b-managed-directories">
                                                <xsl:value-of select="$external-directory"/>
                                                <xsl:value-of select="@database"/>
                                            </xsl:when>
                                            <xsl:otherwise>
                                                <xsl:value-of select="@database"/>
                                            </xsl:otherwise>
                                        </xsl:choose>
                                    </xsl:attribute>
                                </xsl:if>
                            </xsl:if>
                            <!-- the code itself as text -->
                            <xsl:call-template name="sanitize-text">
                                <xsl:with-param name="text" select="input" />
                            </xsl:call-template>
                            <!-- optional unit testing, with RS markup to keep it hidden -->
                            <xsl:if test="tests">
                                <xsl:text>====&#xa;</xsl:text>
                                <xsl:call-template name="sanitize-text">
                                    <xsl:with-param name="text" select="tests" />
                                </xsl:call-template>
                            </xsl:if>
                        </textarea>
                    </div>
                </div>
            </div>
        </xsl:when>
    </xsl:choose>
</xsl:template>

<!-- Sometimes this template is useful to see which    -->
<!-- templates are not implemented at all in some new  -->
<!-- (basic) conversion building just on this -common. -->
<!-- Maybe "dead-ending" is preferable (remove the     -->
<!-- apply-templates) and/or maybe a lower priority    -->
<!-- will work better.                                 -->

<!-- <xsl:template match="*" priority="0">
    <xsl:message>[<xsl:value-of select="local-name(.)"/>]</xsl:message>
    <xsl:apply-templates/>
</xsl:template> -->

</xsl:stylesheet>
