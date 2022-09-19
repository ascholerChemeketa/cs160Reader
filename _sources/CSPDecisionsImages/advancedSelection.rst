..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../CSP/csp_global.rst 

|image_defs| 

A Pixel Selection Function
==============================

This time, we're going to get a big trickier. We are going to try to change the red scooter
in this picture into a blue one. 

.. raw:: html

    <img class="center-block" src="../_static/CSPImages/scooter.jpg" id="scooter.jpg">

To do that we need to select all the red pixels. But there are a lot of different "reds".
Obviously, a pixel with the color red = 255, green = 0, blue = 0 is red. 
But most of the pixels in the scooter aren't pure red. The
red channel might not be 255. Or the blue or green might not be 0. Furthermore, a pixel
with color values (255, 255, 255) has the maximum red value... but it is not red, it is
white. Here are three examples of colors that might be part of the scooter:

.. raw:: html

    <div style="background: rgb(122, 4, 18); color: white; padding: 2px 10px;">122, 4, 18</div>
    <div style="background: rgb(194, 8, 20); color: white; padding: 2px 10px;">194, 8, 20</div>
    <div style="background: rgb(247, 190, 194); color: white; padding: 2px 10px;">247, 190, 194</div>

We will say that if a pixel's red value is at least 10 greater than both the green and
the blue values, it is "red". To express this as a conditional will look like 
``r >= g + 20 and r >= b + 20``, where r, g, b are the red, green, and blue colors values.
To test out our recipe, we are going to make a function ``isRed``. It will accept values for
``r``, ``g``, and ``b`` and return ``True`` if they meet our criteria and false otherwise.

.. activecode:: isRed

    from image import *

    def isRed(r, g, b):
        if r >= g + 20 and r >= b + 20:
            return True
        else:
            return False

    # Main part of program
    # These three should be considered red
    print( isRed(122, 4, 18) )
    print( isRed(194, 8, 20) )
    print( isRed(247, 190, 194) )
    # These should not be considered red
    print( isRed(200, 200, 200) ) # gray
    print( isRed(200, 200, 0) )   # yellow
    print( isRed(200, 0, 200) )   # aqua

Now that we have some evidence that the function works, we can use it as the
condition for our ``if`` statement. Because the function returns ``True`` or
``False``, it can serve as the condition for the if: ``if isRed(r, g, b):``.

If the pixel is determined to be "red", we need to change it to a similar blue.
A dark red should become a dark blue and a light red a light blue. The easiest
way to do this is to swap the red and blue values. Like this:

.. raw:: html

    <div style="background: rgb(122, 4, 18); color: white; padding: 2px 10px;">122, 4, 18</div>
    <div style="background: rgb(18, 4, 122); color: white; padding: 2px 10px;">18, 4, 122</div>

Or this:

.. raw:: html

    <div style="background: rgb(247, 190, 194); color: white; padding: 2px 10px;">247, 190, 194</div>
    <div style="background: rgb(194, 190, 247); color: white; padding: 2px 10px;">194, 190, 247</div>

Here is the final program:

.. activecode:: Scooter_Color_Replace
    :nocodelens:

    from image import *

    def isRed(r, g, b):
        if r >= g + 20 and r >= b + 20:
            return True
        else:
            return False

    # Main part of program
    # CREATE AN IMAGE FROM A FILE
    img = Image("scooter.jpg")

    # LOOP THROUGH ALL PIXELS
    for x in range(img.getWidth()):
        for y in range(img.getHeight()):
            # GET CURRENT COLOR VALUES
            p = img.getPixel(x, y)
            r = p.getRed()
            g = p.getGreen()
            b = p.getBlue()

            # IS IT RED?
            if isRed(r, g, b):

                # CREATE THE COLOR
                # Pixel takes the "red" value first and "blue" last.
                # This swaps the red and blue values
                newPixel = Pixel(b, g, r)

                # CHANGE THE IMAGE
                img.setPixel(x, y, newPixel)

    # SHOW THE CHANGED IMAGE
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)

After running the program, try modifying it to answer the question below.

.. mchoice:: 14_1_mc1
    :answer_a: Almost identical to the complex version.
    :answer_b: All of the white pixels become blue too!
    :answer_c: You get something that looks like a blue flame pattern.
    :answer_d: Light red pixels are not affected and you get a "blue outline".
    :correct: c
    :feedback_a: Try it!
    :feedback_b: Try it!
    :feedback_c: Correct, those apparently are the only pixels that have a close to max red value.
    :feedback_d: Try it!

    A simpler test for "is it red" might just be to see if the red value is 250 or more and not
    worry about the green or blue. What happens if you change the condition in ``isRed`` to read
    ``if r >= 250:``?

