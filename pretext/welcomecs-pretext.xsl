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
  <!-- <xsl:message>==========================raw========================</xsl:message> -->
    <xsl:copy-of select="node()"/>
</xsl:template>

<!-- Comment out xrefs until conversion is done -->
<!-- <xsl:template match="xref">
  <xsl:message>=========================xref========================</xsl:message>
  <xsl:comment>
    <xsl:copy-of select="node()"/>
  </xsl:comment>
</xsl:template> -->

<!-- Generate items that are hidden on the page -->
<xsl:template match="hidden">
  <!-- <xsl:message>=========================hidden========================</xsl:message> -->
  <div class="hidden">
    <xsl:apply-templates select="*" />
  </div>
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
