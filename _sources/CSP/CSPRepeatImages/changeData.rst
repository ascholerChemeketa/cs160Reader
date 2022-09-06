..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".
    

.. include:: ../CSP/csp_global.rst 

|image_defs| 

Changing which data we use
============================================

Now that we are using coordinates to iterate through all of the pixels, we can also change which
part of the picture we read and manipulate. Instead of writing a loop that visits every possible
x and y, we can chose to only visit some of the coordinate pairs.

This program changes only the upper-left 1/4 of the image. To do so, it uses loops that
only go up to 1/2 the width and 1/2 the height. At each location, it gets the existing pixel
and then inverts each color channel (subtracts it from 255 so that a value of 0 becomes 255,
a value of 1 becomes 254, 2 becomes 253, etc...).

.. activecode:: Image_Negate_Quarter
    :nocodelens:

    # STEP 1: USE THE IMAGE LIBRARY 
    from image import *
    
    # STEP 2: PICK THE IMAGE
    img = Image("scooter.jpg")

    # STEP 3: SELECT THE DATA
    # Calculate the midpoint for x and y. Make sure answer is changed to a whole number (int)
    halfWidth = img.getWidth() // 2
    halfHeight = img.getHeight() // 2

    for x in range(halfWidth):
        for y in range(halfHeight):

            # STEP 4: GET THE DATA
            p = img.getPixel(x, y)
            
            # STEP 5: CREATE THE COLOR
            p.setRed(255 - p.getRed())
            p.setBlue(255 - p.getBlue())
            p.setGreen(255 - p.getGreen())
            
            # STEP 6: CHANGE THE PIXEL
            img.setPixel(x, y, newPixel)
            
    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)


.. mchoice:: 9_7_1_Image_Quadrent_mc
    :answer_a: Change line 12 to <code>for x in range(halfWidth, img.getWidth()):</code>
    :answer_b: Change line 13 to <code>for y in range(halfHeight, img.getHeight()):</code>
    :answer_c: Do both
    :correct: c
    :feedback_a: Correct, that uses x coordinates from the half way point until the full width.
    :feedback_b: No, that is the lower-left quadrant. It uses y value that start halfway down and go until the bottom.
    :feedback_c: That would be the lower-right quadrant. For both x and y, it starts at the midpoint and goes until the right or bottom edge.

    Which of the following changes would invert the upper-right quadrent instead of the upper-left?


You may have noticed that we used ``// 2`` to divide by two in that sample. Why?
``range`` only works with whole numbers. And ``/ 2`` produces a decimal value (also known as a 
``float`` for "floating decimal point").  Try this example and note the error you get.

.. activecode:: range_integer_only

    max = 11 / 2
    print(max)
    for x in range(max):           # error here!!! range wants an integer
        print(x)

Change the first line to set ``max`` to ``10 / 2``. It is the same problem - ``/`` produces a decimal
even for whole numbers and range does not want that. Then try changing the first line to set ``max``
to ``11 // 2``. Recall that the ``//`` operator does integer division and drops the decimal part of
the answer. So using ``//`` ensures that we always get a whole number (or ``int`` for integer).

We could even use two sets of loops to visit two different parts of the image. This program
has two copies of the code for steps 3-6. The first one visits the top 30 rows. The second
copy visits the last 30 rows. In each of those locations, we don't even both accessing
the existing color. Instead we use the ``Pixel(red, green, blue)`` function to make a new
red pixel (255 red, 0 green and blue) and store it into the image at the current location.

.. activecode:: Image_Every_Other
    :nocodelens:

    # STEP 1: USE THE IMAGE LIBRARY 
    from image import *
    
    # STEP 2: PICK THE IMAGE
    img = Image("scooter.jpg")

    # STEP 3: SELECT THE DATA - TOP
    for x in range(img.getWidth()):
        for y in range(30):
            # STEP 5: CREATE THE COLOR
            newPixel = Pixel(255, 0, 0)
            
            # STEP 6: CHANGE THE PIXEL
            img.setPixel(x, y, newPixel)

    # STEP 3: SELECT THE DATA - BOTTOM
    for x in range(img.getWidth()):
        for y in range(img.getHeight() - 30, img.getHeight()):
            # STEP 5: CREATE THE COLOR
            newPixel = Pixel(255, 0, 0)
            
            # STEP 6: CHANGE THE PIXEL
            img.setPixel(x, y, newPixel)
            
    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)

Try modifying the program so that the red bars are on the left and right side of the image. To
do so, you will have to "fix" ``for y...`` loops AND change the ``for x`` loops to only cover
a limited distance. The first ``for x`` should cover a range from 0 to 30. The second one
should start at the width - 30 and continue until it hits the full width.

