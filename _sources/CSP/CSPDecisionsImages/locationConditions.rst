..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../csp_global.rst 

|image_defs|


Location based Conditions
===========================

We can also use conditionals and the x and y coordinates of pixels to make decsisions about
what pixels to process. One popular graphic desgin technique is to make parts of an image
black and white and only leave color in parts we want to highlight. We will do this to make
the graduates faces stand out from the background in this image:

.. raw:: html

    <img class="center-block" src="../../_static/CSPImages/graduates.jpg" id="graduates.jpg">

First, we need to make some procedures that we will use to make a pixel gray and to darken it.
These procedures will accept a pixel as their parameter (or one of their parameters) and modify
them. Because we are modifying an existing object, there will be no new value to return. We will
just update the colors of the pixel and those changes will persist when the procedure is done.
(Similar to how when we write a procedure that move a turtle there is no new answer to return. 
Changing the turtle's location or direction in a function permanantly changes it.)

Below, the code for ``makeGray`` is already written. Your task is to write the code for
``darken`` that will be used to make pixels darker:

.. activecode:: pixelHelpers
    :autograde: unittest
    :practice: T

    Write code to implement ``darken``. It should reduce all three color values (red, green,
    blue) of the ``pixel`` by the parameter ``amount``. But, if a color would end up with A
    value below 0, set it to 0 instead.

    ~~~~
    from image import *

    def makeGray(pixel):
        #get the average of the three colors
        average = (pixel.red + pixel.green + pixel.blue) / 3
        #use that for all three colors
        pixel.red = average
        pixel.green = average
        pixel.blue = average

    def darken(pixel, amount):
        #Your code here to reduce each color by amount.
        #If a color ends up less than 0, set it to 0
        pass

    # Main part of program
    testPixel = Pixel(120, 0, 0)
    makeGray(testPixel)
    print("testPixel after makeGray:", testPixel, "should be 40,40,40")

    testPixel2 = Pixel(60, 40, 50)
    darken(testPixel2, 30)
    print("testPixel2 after darken by 30:", testPixel2, "should be 30,10,20")

    testPixel3 = Pixel(60, 40, 50)
    darken(testPixel3, 50)
    print("testPixel3 after darken by 50:", testPixel3, "should be 10,0,0")
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(str(testPixel2), "[30,10,20]", "testPixel2 - darken works")
            self.assertEqual(str(testPixel3), "[10,0,0]", "testPixel3 - darken won't make colors negative")

    myTests().main()

Now we can use a conditional to apply those only to particular pixels in the image. Start by copy/pasting
``darken`` and ``makeGray`` from the program above into this program. Then examine the code inside the loop.
Notice that we use a conditional to apply the functions only to pixels that have a Y value of 110 or more.

.. activecode:: Location_Condition
    :nocodelens:

    from image import *

    # PUT THE makeGray AND darken PROCEDURES HERE

    # Main program
    # CREATE THE IMAGES 
    img1 = Image("graduates.jpg")

    # LOOP THROUGH ALL THE PIXELS IN IMG1
    for x in range(img1.getWidth()):
        for y in range(img1.getHeight()):
            currentPixel = img1.getPixel(x, y)

            # TEST IF THIS PIXEL GETS CHANGED
            if y >= 110:
                # CHANGE PIXEL AND UPDATE IMAGE
                makeGray(currentPixel)
                darken(currentPixel, 20)
                img1.setPixel(x, y, currentPixel)
    
    # SHOW THE CHANGED IMAGE
    win = ImageWin(img1.getWidth(), img1.getHeight())
    img1.draw(win)

Try modifying the condition so it only leaves a rectangle of color around the students
heads and turns the rest to gray.