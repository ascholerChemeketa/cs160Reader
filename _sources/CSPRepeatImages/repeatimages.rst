..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".
    
.. include:: ../CSP/csp_global.rst

Using Repetition with Images
============================================

In Python, the line of code ``img = Image("cat.jpg")`` creates an Image object in the
program that has all of the data from the image cat.jpg and names it with the variable
``img``. Once we have done that, we can draw the entire image using lines of code like this:

.. code::

    win = ImageWin(img.getWidth(), img.getHeight())  # Make a window to hold the image
    img.draw(win)                                    # draw it in that window

To modify the colors in an image, we need to modify all of its pixels one by one. In
an image with 60,000 pixels, we would not want to write a separate line of code for
each pixel. What we would like to do is specify what code to run for each of the pixels.

That is exactly what a ``for`` loop does - it takes a list of values and some instructions
and runs the instructions for each one of the values. We can get a list of all the pixels
with the procedure ``img.getPixels()``.

The program below modifies the cat image to remove all the red from each of its pixels.
There are lot of lines in the program below, 

.. warning:: 
    
    Be patient with program that modify images, they can take a little while to produce their results.
    Don't press the "Save and Run" button multiple times or you will just have to wait longer.

    If you do hit the button too many times, you can reload the browser window to stop the program.

.. activecode:: csprepeatimages_repeatimages1
    :nocodelens:

    from image import *

    # Create an image from a file. This file must be part of the webpage.
    # Store that image in the variable img
    img = Image("cat.jpg")

    # Get a list of the pixels and store it in pixelList
    pixelList = img.getPixels()

    for p in pixelList:                 #Loop through each pixel in the list and call it p
        # set the red value of p to 0
        p.setRed(300)
            
        # p is a copy of a pixel from the image
        # we need to tell the image to use the updated version of p
        img.updatePixel(p)
            
    # show the image
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)


There are :math:`200 \times 300 = 60,000` pixels in the ``pixelList``. Our for loop takes that giant
list of pixels and one by one, calls the current one ``p`` and then does the body of the loop
with it. After the loop is done, we make a window to display the image in and draw it - but
don't worry too much about that code - we want to focus on the loop and what it does to each
pixel. This program changes the red value of each pixel to 0 - essentially it removes all the
red from the image, making it look like we are looking through blue-green glass at it.

.. _image-library:

A Library of Images
=====================

The images we work with in this book must be built into the webpage - you can't use an image
from your own computer. Below are some images that are built into the webpages in this chapter
that we can use. To use a different image, use it's name in the
command that creates an image ``img = Image("student1.jpg")``.

Try out one or more of these images by changing line 5 in the program above. 

.. raw:: html

    <style>
        .flexgrid {
            display: flex; 
            flex-wrap: wrap;
            gap: 10px;
        }
        .flexgrid div {
            flex: 1 200px;
        }
        .flexgrid .img-title {
            text-align: cetner;
        }
    </style>
    <div class="flexgrid">
    <div>
        <img src="../_static/CSPImages/mount_hood.jpg" id="mount_hood.jpg">
        <div class="img-title">mount_hood.jpg</div>
    </div>
    <div>
        <img src="../_static/CSPImages/graduates.jpg" id="graduates.jpg">
        <div class="img-title">graduates.jpg</div>
    </div>
    <div>
        <img src="../_static/CSPImages/goalkeeper.jpg" id="goalkeeper.jpg">
        <div class="img-title">goalkeeper.jpg</div>
    </div>
    <div>
        <img src="../_static/CSPImages/student1.jpg" id="student1.jpg">
        <div class="img-title">student1.jpg</div>
    </div>
    <div>
        <img src="../_static/CSPImages/student2.jpg" id="student2.jpg">
        <div class="img-title">student2.jpg</div>
    </div>
    <div>
        <img src="../_static/CSPImages/green_screen.jpg" id="green_screen.jpg">
        <div class="img-title">green_screen.jpg</div>
    </div>
    <div>
        <img src="../_static/CSPImages/scooter.jpg" id="scooter.jpg">
        <div class="img-title">scooter.jpg</div>
    </div>
    <div>
        <img src="../_static/CSPImages/logo.jpg" id="logo.jpg">
        <div class="img-title">logo.jpg</div>
    </div>
    <div>
        <img src="../_static/CSPImages/cat.jpg" id="cat.jpg">
        <div class="img-title">cat.jpg</div>
    </div>
    </div>

.. note:: 

    It is also possible to use an image that is on another web page if you know its full address.
    Doing this would look like:

    .. code::

        img = Image("https://shorturl.at/dNUX7")


    If you try this, make sure to stick to small images or your program will take a very long time
    to run.

