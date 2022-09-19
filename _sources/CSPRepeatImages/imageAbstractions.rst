..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".
    
Understanding Image Representation
====================================================================

In everyday life, we can often work at multiple levels of abstraction when thinking about a 
topic or talking about it. We might refer to a particular thing as a *"car"*. That is
sufficient to communicate a lot of important information - that it probably has four wheels,
that it is used for transportation, etc... But as we describe a problem we are having
with the car, we might need to refer to its parts - say its *"engine"*. A "car" is really
just a collection of parts that work together. And the "engine" itself is an abstraction - 
the engine is made up of a collection of parts and we could get even more detailed by talking
about those parts.

In computer science, we often work with similar stacks of abstractions. We build high-level
abstractions to more easily describe collections of lower-level data. Images are a great
example of this.

.. index::
    single: pixel

1. An **image** is a picture that we can draw or modify.

2. An image contains a grid of little squares known as **pixels**, for *picture* (pix)
    *elements* (els). The pixels are laid out on a grid, from left to right (horizontal or **x** dimension)
    and top to bottom (vertical or **y** dimension). 

    .. figure:: Figures/grid.png
        :align: center
        :alt: A grid with horizontal (x) and vertical (y) dimensions 
        :figclass: align-center

        A grid with horizontal (x) and vertical (y) dimensions

    
    Pixels are quite small. Even this small picture below has 200 columns and 300 rows of pixels:

    .. raw:: html

        <img class="center-block" src="../_static/CSPImages/cat.jpg" id="cat.jpg">

3. Each pixel has a **color** value that is specified as three values: the amount of red
    the amount of blue, and the amount of green. Each of those values is a number between
    0 and 255. :ref:`Check the Hex Data & Colors section for more details.<hex_colors>`

4. Those color values are each stored as 8 bits (:math:`2^8 = 256` possible values or 0-255).

Depending on what we are doing with the image, we will need to work with different levels of the
abstraction. We can draw the image without talking about the grid of pixels. To crop the image,
we would need to change the size of its pixel grid, but we would not need to worry about colors.
If we want to make the image a little brighter, we will have to talk about the image in terms
of the colors of its pixels.

.. index::
    single: bitmap

.. note::

    This way of representing images is known as a **bitmap**. There are other ways to represent 
    images, but **bitmaps** are the most common scheme, especially for photographs.
