..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst 
    
|image_defs| 

Increasing and decreasing brightness
========================================================

We can change one color channel (red/green/blue) at a time, or we can change all three.
If we increase the value of all colors, we make the image get brighter. If we decrease
all the colors, we make the image darker.

This program uses step five to increase each color value by 50% (1.5 times its original
value.)

.. activecode:: Image_Decrease_Red
    :nocodelens: 

    # STEP 1: USE THE IMAGE LIBRARY 
    from image import *
    
    # STEP 2: PICK THE IMAGE
    img = Image("student1.jpg")
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)

    # STEP 3: LOOP THROUGH THE PIXELS
    pixels = img.getPixels();
    for p in pixels:

        # STEP 4: GET THE DATA
        r = p.getRed()
        g = p.getGreen()
        b = p.getBlue()
            
        # STEP 5: MODIFY THE COLOR
        p.setRed(r * 1.5)
        p.setGreen(g * 1.5)
        p.setBlue(b * 1.5)
            
        # STEP 6: UPDATE THE IMAGE 
        img.updatePixel(p)
            
    # STEP 7: SHOW THE RESULT
    win2 = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win2)

Try decreasing each color channel by 50% (0.5 times its original value) - you should end up with a 
darker version of the same picture.

.. parsonsprob:: Image_Decrease_GB
    :numbered: left
    :adaptive:

    If we ant to make the image both brighter and more red, we could increase just the red value.
    However, if we want it to look more red, but get brighter overall, we would want to make a
    small increase to the red value and a decrease to the blue and green values. 

    Arrange and indent the blocks below to make a recipe that would make the image more red but
    not increase the overall brightness much. You should modify the red value before you modify
    the green & blue (that would not matter in a real program, but here you need to have them
    in that order.)

    -----
    from image import *
    =====
    img = Image("cat.jpg")
    =====
    pixels = img.getPixels()
    for p in pixels:
    =====
        r = p.getRed()
        g = p.getGreen()
        b = p.getBlue()
    =====       
        p.setRed(g * 1.2)
    =====       
        p.setRed(g * 0.9) #paired
    =====       
        p.setGreen(g * 0.9)
        p.setBlue(b * 0.9)
    =====       
        p.setGreen(g * 1.2)
        p.setBlue(b * 1.2) #paired
    =====
        img.updatePixel(p)
    =====
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)

