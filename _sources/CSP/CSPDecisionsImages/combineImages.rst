..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../csp_global.rst 

|image_defs| 

Combining Pictures
====================

A common use of color replacement technology is "green scren" background replacement. An actor
performs in front of a green wall or a Zoom meeting participant sits in front of a green sheet.
A computer algorithm them looks for green pixels and replaces them with pixels from some other
image. The result is that the person looks like they are in some other location. (Unless of 
course they have a green shirt on, in which case it will look like their disembodied head is
floating in the background.)

We are going to put the woman shown below into the beach scene:

.. raw:: html

    <img class="center-block" src="../../_static/CSPImages/green_screen.jpg" id="green_screen.jpg">
    <img class="center-block" src="../../_static/CSPImages/beach.jpg" id="beach.jpg">

First up, we need to have an ``isGreen`` function to identify which pixels are part of the
green background. It will be very similar to the ``isRed`` from the last page, only we want
to verify that the green is greater than the red or blue values.

.. activecode:: isGreen
    :autograde: unittest
    :practice: T

    Write code to return ``True`` if the green value is 20 or more greater than both the red 
    and blue values. Otherwise, return ``False``

    ~~~~
    from image import *

    def isGreen(r, g, b):
        #Write your logic here

    # Main part of program
    # These three should be considered green
    print( isGreen(59, 165, 119) )
    print( isGreen(47, 142, 102) )
    print( isGreen(60, 220, 125) )
    # These should not be considered green
    print( isGreen(200, 200, 200) ) # gray
    print( isGreen(180, 180, 0) )   # dark yellow
    print( isGreen(200, 0, 200) )   # aqua
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(isGreen(59, 165, 144), True, "Testing 59, 165, 144.")
            self.assertEqual(isGreen(47, 142, 102), True, "Testing 47, 142, 102.")
            self.assertEqual(isGreen(190, 220, 125), True, "Testing 190, 220, 125.")
            self.assertEqual(isGreen(200, 200, 200), False, "Testing 200, 200, 200.")
            self.assertEqual(isGreen(180, 180, 0), False, "Testing 180, 180, 0.")
            self.assertEqual(isGreen(200, 0, 200), False, "Testing 200, 0, 200.")

    myTests().main()

Once you get that working, you can bopy and paste it into the program below. It will load the
two pictures, with the woman stored as ``img1`` and the beach as ``img2``. It the goes through
each pixel in ``img1`` and asks ``isGreen`` about it. If so, that pixel gets replaced with the
pixel from ``img2`` that is at the same x, y.

.. activecode:: Copy_Non_White
    :nocodelens:

    from image import *

    # PUT YOUR isGreen CODE HERE

    # Main program
    # CREATE THE IMAGES 
    img1 = Image("green_screen.jpg")
    img2 = Image("beach.jpg")

    # LOOP THROUGH ALL THE PIXELS IN IMG1
    for x in range(img1.getWidth()):
        for y in range(img1.getHeight()):
            p1 = img1.getPixel(x, y)
            r1 = p1.getRed()
            g1 = p1.getGreen()
            b1 = p1.getBlue()

            # CHECK IF THE PIXEL IS GREEN
            if isGreen(r1, g1, b1):
    
                # GET THE CORESPONDING PIXEL FROM img2 
                p2 = img2.getPixel(x, y)
                # USE THAT INSTEAD in img1
                img1.setPixel(x, y, p2)
    
    # SHOW THE CHANGED IMAGE
    win = ImageWin(img1.getWidth(), img1.getHeight())
    img1.draw(win)

.. mchoice:: 14_5_mc1
    :answer_a: y < 110 and y > 10 and x > 70 and x < 200
    :answer_b: (y > 110 or y < 10) and (x < 70 or x > 200)
    :answer_c: y > 110 and y < 10 and x < 70 and x > 200
    :answer_d: y > 110 or y < 10 or x < 70 or x > 200
    :correct: d
    :feedback_a: That will select pixels in the middle of the screen (y from 10-110 and x from 70-200). We want the opposite.
    :feedback_b: That requires both the x and y to be outside the center area. It will make a "cross" of color.
    :feedback_c: How can the y be > 110 and also be < 10? There will be no pixels that meet the criteria to be changed.
    :feedback_d: Correct

    Which of these recipes will result in just the faces being in color and the outer parts of
    the image being in black and white?