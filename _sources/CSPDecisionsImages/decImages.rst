..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../CSP/csp_global.rst 

|image_defs| 

Using Decisions with Images
==============================

We can create image effects by conditionally executing code on pixels that meet a particular
criteria.  In the code below we will, try to change the French flag (the image on top), into
the flag of Chad (bottom).

.. raw:: html

    <img class="center-block" src="../_static/CSPImages/fr-flag.gif" id="fr-flag.gif">
    <img class="center-block" src="../_static/CSPImages/cd-flag.gif" id="cd-flag.gif">

To do this, we need to change just the white pixels in the image and make them yellow. This
means we need a way to answer the question "is this pixel white?". A pure white pixel has
red, green, and blue values all of 255. A not quite pure white may not have 255 for each of
the three values, but they will all be high, and they will all be very similar to each other.
In comparison, a blue pixel is going to have a high blue value and low red and green 
(potentially 0 for a "perfect" blue). A red pixel will have a high red value and low blue and
green ones.

So in general, to find a white pixel we could look for something where ``red > 250 and 
green > 250 and blue > 250``. ``250`` is not always going to be the right number to use,
it just represents a value that is pretty close to maxed out without counting on all three
colors being exactly 255.
(In this image, we could get away with just looking at ``green > 250`` as we would not
expect the blue or red pixels to have a high green value. But we will stick with a more
generic recipe.)

All of the white pixels need to be changed to yellow. A yellow will always have a relatively
high green and red value and a low blue value. A good value for the yellow in the flag is
254 red, 242 green, 0 blue.

.. activecode:: Flag_Swap
    :nocodelens:
 
    from image import *

    # CREATE AN IMAGE FROM A FILE
    img = Image("fr-flag.gif")

    # LOOP THROUGH ALL PIXELS
    for x in range(img.getWidth()):
        for y in range(img.getHeight()):
            # GET CURRENT COLOR VALUES
            p = img.getPixel(x, y)
            r = p.getRed()
            g = p.getGreen()
            b = p.getBlue()

            # IS IT WHITE?
            if r > 250 and g > 250 and b > 250:
                # CREATE A NEW PIXEL
                newPixel = Pixel(254, 242, 0)
                # CHANGE THE IMAGE
                img.setPixel(x, y, newPixel)


    # SHOW THE CHANGED IMAGE
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)


The Belgian flag is very similar to the Chad flag. See if you can turn the Chad
falg into the Belgian one by turning the blue pixels into black ones. Hint:
the blue is not a perfect blue. An approximate color value is (red = 0, green = 100, 
blue = 180). You should not count on pixels having exactly those values - come up
with a recipee using ``>`` and ``<`` that selects the blue pixels but not the yellow
or red ones.

.. raw:: html

    <img class="center-block" src="../_static/CSPImages/be-flag.gif" id="be-flag.gif">

.. activecode:: Flag_Swap_2
    :nocodelens:
 
    from image import *

    # CREATE AN IMAGE FROM A FILE
    img = Image("cd-flag.gif")

    # LOOP THROUGH ALL PIXELS
    for x in range(img.getWidth()):
        for y in range(img.getHeight()):
            # GET CURRENT COLOR VALUES
            p = img.getPixel(x, y)
            r = p.getRed()
            g = p.getGreen()
            b = p.getBlue()

            # YOUR CODE HERE

    # SHOW THE CHANGED IMAGE
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)


.. mchoice:: 14_flag_mc1
    :answer_a: red < 20 and green > 80 and blue > 150
    :answer_b: red < 20 and green < 20 and blue > 200
    :answer_c: red < 20 and green > 20 and blue > 200
    :answer_d: red < 20 and green < 80 and blue > 150
    :correct: a
    :feedback_a: Correct, that works to select the blue but not the red or yellow.
    :feedback_b: The blue in the flag has a higher green value than 20
    :feedback_c: The blue in the flag isn't actually that blue
    :feedback_d: The blue in the flag has a higher green value than 80

    Which recipe is reasonable for checking for "is it a blue pixel" for the flag
    of Chad?
