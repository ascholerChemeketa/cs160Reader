..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


Our first data set: Air pollution in the United States
=======================================================

This first data set that we're going to explore is from *The Guardian* newspaper's data blog.
It is a record of the air pollution in various cities. According to the World Health
Organization, 2.5 micrometer pollution is particularly deadly, because it more easily gets
`deep into our lungs <http://en.wikipedia.org/wiki/Particulates>`_. To give a sense of how
dangerous this kind of pollution  is, an annual mean amount of just 5 µg/m3 (microgram per 
cubic meter of air) was linked with a 13% increased risk of heart attacks.


We will use just the US data. It is in a large text file that looks like this:

::

    Aberdeen, SD :13 :8
    Adrian, MI :15 :9
    Akron, OH :18 :11
    Albany, GA :18 :11
    Albany-Lebanon, OR :14 :8
    Albany-Schenectady-Troy, NY :13 :8
    Albuquerque, NM :12 :7
    Alexandria, LA :20 :12
    ...

There are three columns separated by colon (':') characters:

- The city and state, separated by a comma.
- The annual mean amounts of particulate pollution that's 10 micrometers in
  diameter, measured in terms of micrograms per cubic meter (ug/m3) of air.
  This is abbreviated as PM10.
- The annual mean amounts of particulate pollution that's 2.5 micrometers in
  diameter (even smaller), measured in the same micrograms per cubic meter of
  air. This is abbreviated as PM2.5.


If you want to see **all** of the data click on the *Show* button below.  Once it appears,
you can hide it again by clicking on the *Hide* button.

.. include:: ./usPollData.rst