..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


.. setup for automatic question numbering.



Chapter Exercises
---------------------

.. parsonsprob:: cspdecisionsimages_exercises1
    :numbered: left
    :practice: T

    .. raw:: html

        <img class="center-block" src="../_static/CSPImages/fr-flag.gif" id="fr-flag.gif">

    The code below is supposed to change the white in the French flag to aqua (Aqua is made
    by mixing blue and green with no red). Arrange and indent the blocks to make a correct
    program. You will not use them all.
    -----
    from image import *
    img = Image("fr-flag.gif")
    =====
    for x in range(img.getWidth()):
        for y in range(img.getHeight()):
    =====
            p = img.getPixel(x, y)
            r = p.getRed()
            g = p.getGreen()
            b = p.getBlue()
    =====
            if r > 250 and g > 250 and b > 250:
    =====
            if r < 250 and g < 250 and b < 250: #paired
    =====
                newPixel = Pixel(0, 250, 250)
    =====
                img.setPixel(x, y, newPixel)
    =====
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)



.. activecode:: cspdecisionsimages_exercises2
    :autograde: unittest
    :practice: T

    Write a program below to change all the greenish pixels in this image to the color:
    red 30, green 100, blue 150 (a slightly grayish blue). 
    
    Hint: The greenish pixels are not a pure green. They have almost as much red as they
    do green. A sample color value might be: 111 red, 115 green, 65 blue. However, they
    are not all exactly the same color. You will need to figure out a recipe to select
    the right colors from the image.

    .. raw:: html

        <img class="center-block" src="../_static/CSPImages/logo.jpg" id="logo.jpg">

    ~~~~
    from image import *

    # CREATE AN IMAGE FROM A FILE
    img = Image("logo.jpg")

    # LOOP THROUGH ALL PIXELS
    for x in range(img.getWidth()):
        for y in range(img.getHeight()):
            p = img.getPixel(x, y)
            r = p.getRed()
            g = p.getGreen()
            b = p.getBlue()


    # SHOW THE CHANGED IMAGE
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(str(img.getPixel(100, 100)), '[30,100,150]', "Testing one of the pixels that was supposed to change")

    myTests().main()


.. activecode:: cspdecisionsimages_exercises3
    :autograde: unittest
    :practice: T

    Write a program below that makes the white pixels in the right half of the image
    below turn black. The left half of the image should stay the same.

    Although perfect white is (255, 255, 255), the pixels in the image are not all
    perfectly white. Write your code to turn any pixel that has red, green, and blue
    values of above 230 to black (0, 0, 0).

    Hint: Start by trying to make all the white pixels in the image turn black. then
    add a condition to check the x value of the pixel to see if it is in the right half
    of the image (more than half the image's width).

    .. raw:: html

        <img class="center-block" src="../_static/CSPImages/logo.jpg" id="logo.jpg">

    ~~~~
    from image import *

    # CREATE AN IMAGE FROM A FILE
    img = Image("logo.jpg")

    # LOOP THROUGH ALL PIXELS
    for x in range(img.getWidth()):
        for y in range(img.getHeight()):
            p = img.getPixel(x, y)
            r = p.getRed()
            g = p.getGreen()
            b = p.getBlue()


    # SHOW THE CHANGED IMAGE
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(str(img.getPixel(280, 10)), '[0,0,0]', "Testing one of the pixels that was supposed to change")
            self.assertEqual(str(img.getPixel(5, 260)), '[253,254,255]', "Testing one of the pixels that was supposed to stay the same")

    myTests().main()


.. activecode:: cspdecisionsimages_exercises4
    :autograde: unittest
    :practice: T

    Write the function ``isYellow`` that accepts red, green, and blue values as its parameters
    and returns ``True`` if both the green and red values are at least 40 more than the red value.
    If the blue value is close to, or above, either the green or red, it should return ``False``.

    Once you write the function, it will be used to turn the goal keeper's jersey from yellow to
    aqua by swapping the red and blue values.

    Hint: Start by writing a function that returns ``True`` always. That will let you run the
    program but will change every pixel. Then add a condition to say ``True`` or ``False`` based
    on the ``r, g, b`` values passed in.

    .. raw:: html

        <img class="center-block" src="../_static/CSPImages/goalkeeper.jpg" id="goalkeeper.jpg">

    ~~~~

    from image import *

    # Write isYellow here!!!

    # Main part of program
    # CREATE AN IMAGE FROM A FILE
    img = Image("goalkeeper.jpg")

    # LOOP THROUGH ALL PIXELS
    for x in range(img.getWidth()):
        for y in range(img.getHeight()):
            # GET CURRENT COLOR VALUES
            p = img.getPixel(x, y)
            r = p.getRed()
            g = p.getGreen()
            b = p.getBlue()

            # IS IT YELLOW?
            if isYellow(r, g, b):

                # CHANGE THE COLOR TO SWAP RED AND BLUE
                newPixel = Pixel(b, g, r)

                # UPDATE THE IMAGE
                img.setPixel(x, y, newPixel)

    # SHOW THE CHANGED IMAGE
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(isYellow(80, 70, 29), True, "Testing if 80,70,29 is considered Yellow")
            self.assertEqual(isYellow(70, 80, 29), True, "Testing if 70,80,29 is considered Yellow")
            self.assertEqual(isYellow(60, 70, 29), False, "Testing if 60,70,29 is considered Yellow")
            self.assertEqual(isYellow(70, 60, 29), False, "Testing if 70,60,29 is considered Yellow")
    myTests().main()



.. #.

..     .. tabbed:: ch15ex1t

..         .. tab:: Question

..             Make changes to 10 lines in the code below so that it runs.  It changes areas that look red in the original to green.

             .. activecode:: cspdecisionsimages_exercises5
..                 :nocodelens:

..                 from  import *

..                 # CREATE AN IMAGE FROM A FILE
..                 img = Image("gal2.jpg")

..                 # LOOP THROUGH ALL PIXELS
..                 for x in range(img.getWidth()):
..                     for y in range(img.getHeight())
..                         p = img.getPixel(x, y)
..                         r = p.getRed()
..                         g = p.getGreen()
..                         b = p.getBlue()

..                     # VALUES FOR THE NEW COLOR
..                     if r > 200 and g < 100 and b < 100:

..                         # CREATE THE COLOR
..                         newPixel = Pixel(0, g, b)

..                         # CHANGE THE IMAGE
..                         img.setPixel(x, y, newPixel)

..                 # SHOW THE CHANGED IMAGE
..                 win = ImageWin(img.getWidth(),img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch15ex2t

..         .. tab:: Question

..             Fix the code below so that the red in the picture gets changed to blue.

             .. activecode:: cspdecisionsimages_exercises6
..                 :nocodelens:

..                 from image import *

..                 # CREATE AN IMAGE FROM A FILE
..                 img = Image("girl.jpg")

..                 # LOOP THROUGH ALL PIXELS
..                 for x in range(img.getWidth()):
..                 for y in range(img.getHeight()):
..                         p = img.getPixel(x, y)
..                         r = p.getRed()
..                         g = p.getGreen()
..                         b = p.getBlue()

..                         # VALUES FOR THE NEW COLOR
..                         if r < 150 and g > 100 and b > 100:

..                             # CREATE THE COLOR
..                             newPixel = Pixel(0, 0, 0)

..                             # CHANGE THE IMAGE
..                             img.setPixel(x, y, newPixel)

..                 # SHOW THE CHANGED IMAGE
..                     win = ImageWin(img.getWidth(),img.getHeight())
..                     img.draw(win)



.. #.

..     .. tabbed:: ch15ex3t

..         .. tab:: Question

..            Fix the indention in the code below so that it runs correctly.  It does a primitive form of edge detection by getting all of the pixels (except for the last row) and all the pixels to the right of those and determining if the difference between the average of the rgb values for the pixel and the pixel to the right are substantially different.

            .. activecode:: cspdecisionsimages_exercises7
..                 :nocodelens:

..                 from image import *

..                 # CREATE AN IMAGE FROM A FILE
..                 img = Image("swan.jpg")

..                 # LOOP THROUGH ALL BUT LAST COLUMN
..                 for x in range(img.getWidth() - 1):
..                     for y in range(img.getHeight()):
..                     p = img.getPixel(x, y)
..                     p2 = img.getPixel(x + 1, y)
..                     r1 = p.getRed()
..                     g1 = p.getGreen()
..                     b1 = p.getBlue()
..                     average1 = (r1 + g1 + b1) / 3
..                     r2 = p2.getRed()
..                     g2 = p2.getGreen()
..                     b2 = p2.getBlue()
..                     average2 = (r2 + g2 + b2) / 3

..                     # VALUES FOR THE NEW COLOR
..                     if abs(average2 - average1) > 10:
..                     newPixel = Pixel(0, 0, 0)
..                     else:
..                     newPixel = Pixel(255, 255, 255)

..                         # CHANGE THE IMAGE
..                         img.setPixel(x, y, newPixel)

..                 # SHOW THE CHANGED IMAGE
..                 win = ImageWin(img.getWidth(),img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch15ex4t

..         .. tab:: Question

..             Fix and change the code to change just the background color from white to gray.

             .. activecode:: cspdecisionsimages_exercises8
..                 :nocodelens:

..                 # CREATE AN IMAGE FROM A FILE
..                 img = Image("gal2.jpg")

..                 # LOOP THROUGH ALL PIXELS
..                 for x in range(img.getWidth()):
..                 for y in range(img.getHeight()):
..                 p = img.getPixel(x, y)
..                 r = p.getRed()
..                 g = p.getGreen()
..                 b = p.getBlue()

..                 # VALUES FOR THE NEW COLOR
..                 if r > 0 and g > 0 and b > 0:

..                 # CREATE THE COLOR
..                 newPixel = Pixel(100, 100, 100)

..                 # CHANGE THE IMAGE
..                 img.setPixel(x, y, p)

..                 # SHOW THE CHANGED IMAGE
..                 win = ImageWin(img.getWidth(),img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch15ex5t

..         .. tab:: Question

..            Fix the indention in the code below so that it runs correctly.  It posterizes a picture which means that it reduces all the colors in a picture to a small number of colors – like the ones you might use if you were making a poster..

            .. activecode:: cspdecisionsimages_exercises9
..                 :nocodelens:

..                 from image import *

..                 # CREATE AN IMAGE FROM A FILE
..                 img = Image("beach.jpg")

..                 # LOOP THROUGH ALL PIXELS
..                 for x in range(img.getWidth()):
..                     for y in range(img.getHeight()):
..                         p = img.getPixel(x, y)

..                         r = p.getRed()
..                         g = p.getGreen()
..                         b = p.getBlue()

..                         # VALUES FOR THE NEW COLOR
..                         if r < 120:
..                         r = 0
..                         if r >= 120:
..                         r = 120
..                         if g < 120:
..                         g = 0
..                         if g >= 120:
..                         g = 120
..                         if b < 120:
..                         b = 0
..                         if b >= 120:
..                         b = 120

..                         # CREATE THE COLOR
..                         newPixel = Pixel(r,g,b)

..                         # CHANGE THE IMAGE
..                         img.setPixel(x, y, newPixel)

..                 # SHOW THE CHANGED IMAGE
..                 win = ImageWin(img.getWidth(),img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch15ex6t

..         .. tab:: Question

..             Fix the indentation so that the code puts the motorcycle on the beach. The code checks if the pixel isn't white in the first image, and if it's not, it places that pixel in the same location on the second image.

             .. activecode:: cspdecisionsimages_exercises10
..                 :nocodelens:

..                 from image import *

..                 # CREATE THE IMAGES
..                 img1 = Image("motorcycle.jpg")
..                 img2 = Image("beach.jpg")
..                 width1 = img1.getWidth()
..                 height1 = img1.getHeight()
..                 width2= img2.getWidth()
..                 height2 = img2.getHeight()
..                 maxWidth = min(width1,width2)
..                 maxHeight = min(height1,height2)

..                 # LOOP THROUGH THE PIXELS
..                 for x in range(maxWidth):
..                 for y in range(maxHeight):
..                 p1 = img1.getPixel(x, y)
..                 r1 = p1.getRed()
..                 g1 = p1.getGreen()
..                 b1 = p1.getBlue()

..                 # CHECK IF THE PIXEL ISN'T WHITE
..                 if r1 < 250 and g1 < 250 and b1 < 250:

..                 # COPY THE COLOR TO IMG2
..                 img2.setPixel(x, y, p1)

..                 # SHOW THE CHANGED IMAGE
..                 win = ImageWin(img2.getWidth(),img2.getHeight())
..                 img2.draw(win)



.. #.

..     .. tabbed:: ch15ex7t

..         .. tab:: Question

..            Fix 5 errors in the code below. It will copy the non-white pixels from gal1.jpg to guy1.jpg.

            .. activecode:: cspdecisionsimages_exercises11
..                 :nocodelens:

..                 from image import *

..                 # CREATE THE IMAGES
..                 img1 = Image("gal1.jpg")
..                 img2 = Image(guy1.jpg")

..                 # LOOP THROUGH ALL THE PIXELS IN IMG1
..                 for x in range(img1.getWidth():
..                     for y in range(img1.getHeight())
..                         p1 = img1.getPixel(x, )
..                         r1 = p1.getRed()
..                         g1 = p1.getGreen()
..                         b1 = p1.getBlue()

..                         # CHECK IF THE PIXEL ISN'T WHITE
..                         if r1 < 250 and g1 < 250  b1 < 250:

..                             # COPY THE COLOR TO IMG2
..                             img2.setPixel(x, y, p1)

..                 # SHOW THE CHANGED IMAGE
..                 win = ImageWin(img2.getWidth(),img2.getHeight())
..                 img2.draw(win)




.. #.

..     .. tabbed:: ch15ex8t

..         .. tab:: Question

..             Fix the 5 errors so that a swan in shown on a beach.

             .. activecode:: cspdecisionsimages_exercises12
..                 :nocodelens:

..                 from image import *

..                 # CREATE THE IMAGES
..                 img1 = Image(swan.jpg)
..                 img2 = Image("beach.jpg")
..                 width1 = img1.getWidth()
..                 height1 = img1.getHeight()
..                 width2= img2.getWidth()
..                 height2 = img2.getHeight()
..                 maxWidth = min(width1,width2)
..                 maxHeight = min(height1,height2)

..                 # LOOP THROUGH THE PIXELS
..                 for x in range(maxWidth):
..                   for y in range(maxHeight):
..                     p1 = img1.getPixel()
..                     r1 = p1.getRed
..                     g1 = p1.getGreen()
..                     b1 = p1.getBlue()

..                     # CHECK IF THE PIXEL ISN'T WHITE
..                     if r1 > 100 and g1 > 100 and b1 > 100

..                       # COPY THE COLOR TO IMG2
..                       img2.setPixel(x, y, pixel)

..                 # SHOW THE CHANGED IMAGE
..                 win = ImageWin(img2.getWidth(),img2.getHeight())
..                 img2.draw(win)



.. #.

..     .. tabbed:: ch15ex9t

..         .. tab:: Question

..            Change the code below to use ``if`` and ``else`` rather than two ``if`` statements per color.  It posterizes an image.

            .. activecode:: cspdecisionsimages_exercises13
..                 :nocodelens:

..                 from image import *

..                 # CREATE AN IMAGE FROM A FILE
..                 img = Image("beach.jpg")

..                 # LOOP THROUGH ALL PIXELS
..                 for x in range(img.getWidth()):
..                     for y in range(img.getHeight()):
..                         p = img.getPixel(x, y)

..                         r = p.getRed()
..                         g = p.getGreen()
..                         b = p.getBlue()

..                         # VALUES FOR THE NEW COLOR
..                         if r < 120:
..                             r = 0
..                         if r >= 120:
..                             r = 120
..                         if g < 120:
..                             g = 0
..                         if g >= 120:
..                             g = 120
..                         if b < 120:
..                             b = 0
..                         if b >= 120:
..                             b = 120

..                         # CREATE THE COLOR
..                         newPixel = Pixel(r,g,b)

..                         # CHANGE THE IMAGE
..                         img.setPixel(x, y, newPixel)

..                 # SHOW THE CHANGED IMAGE
..                 win = ImageWin(img.getWidth(),img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch15ex10t

..         .. tab:: Question

..             Fix the indentation in the code and change it so that it edges the motorcycle but the background is black and the motorcycle edging will be white.

             .. activecode:: cspdecisionsimages_exercises14
..                 :nocodelens:

..                     from image import *

..                     # CREATE AN IMAGE FROM A FILE
..                     img = Image("motorcycle.jpg")

..                     # LOOP THROUGH ALL BUT LAST COLUMN
..                     for x in range(img.getWidth() - 1):
..                     for y in range(img.getHeight()):
..                     p = img.getPixel(x, y)
..                     p2 = img.getPixel(x + 1, y)
..                     r1 = p.getRed()
..                     g1 = p.getGreen()
..                     b1 = p.getBlue()
..                     average1 = (r1 + g1 + b1) / 3
..                     r2 = p2.getRed()
..                     g2 = p2.getGreen()
..                     b2 = p2.getBlue()
..                     average2 = (r2 + g2 + b2) / 3

..                     # VALUES FOR THE NEW COLOR
..                     if abs(average2 - average1) > 10:
..                         newPixel = Pixel(0, 0, 0)
..                     else:
..                         newPixel = Pixel(255, 255, 255)

..                     # CHANGE THE IMAGE
..                     img.setPixel(x, y, newPixel)

..                     # SHOW THE CHANGED IMAGE
..                     win = ImageWin(img.getWidth(),img.getHeight())
..                     img.draw(win)



.. #.

..     .. tabbed:: ch15ex11t

..         .. tab:: Question

..            Change the following code into a procedure. It posterizes an image. Be sure to call it to test it.

            .. activecode:: cspdecisionsimages_exercises15
..                 :nocodelens:

..                 from image import *

..                 # CREATE AN IMAGE FROM A FILE
..                 img = Image("beach.jpg")

..                 # LOOP THROUGH ALL PIXELS
..                 for x in range(img.getWidth()):
..                     for y in range(img.getHeight()):
..                         p = img.getPixel(x, y)

..                         r = p.getRed()
..                         g = p.getGreen()
..                         b = p.getBlue()

..                         # VALUES FOR THE NEW COLOR
..                         if r < 120:
..                             r = 0
..                         if r >= 120:
..                             r = 120
..                         if g < 120:
..                             g = 0
..                         if g >= 120:
..                             g = 120
..                         if b < 120:
..                             b = 0
..                         if b >= 120:
..                             b = 120

..                         # CREATE THE COLOR
..                         newPixel = Pixel(r,g,b)

..                         # CHANGE THE IMAGE
..                         img.setPixel(x, y, newPixel)

..                 # SHOW THE CHANGED IMAGE
..                 win = ImageWin(img.getWidth(),img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch15ex12t

..         .. tab:: Question

..             Fix the 5 errors in the procedure so that it edges the motorcycle which means the image should only have 2 colors. The motorcycle should be one color, everything else should be the other color.

             .. activecode:: cspdecisionsimages_exercises16
..                 :nocodelens:

..                 def edger(img):
..                     # LOOP THROUGH ALL BUT LAST COLUMN
..                     for x in range(img.getWidth() ):
..                         for y in range(img.getHeight()):
..                             p = img.getPixel(x, y)
..                             p2 = img.getPixel(x + 1, y)
..                             r1 = p.getRed()
..                             g1 = p.getGreen()
..                             b1 = p.getBlue()
..                             average1 = (r1 + g1 + b1) / 3
..                             r2 = p2.getRed()
..                             g2 = p2.getGreen()
..                             b2 = p2.getBlue()
..                             average2 = (r2 + g2 + b2) / 3

..                             # VALUES FOR THE NEW COLOR
..                             if abs(average2 - average1) > 10
..                                 newPixel = Pixel(0, 0, 0)
..                             else:
..                                 newPixel = Pixel(255, 255, 255)

..                             # CHANGE THE IMAGE
..                             img.setPixel(x, y, newPixel)

..                             # SHOW THE CHANGED IMAGE
..                             win = ImageWin(img.getWidth(),img.getHeight())
..                             img.draw(win)

..                     from image import *

..                     # CREATE AN IMAGE FROM A FILE
..                     img = Image(motorcycle.jpg)
..                     edger(img)



.. #.

..     .. tabbed:: ch15ex13t

..         .. tab:: Question

..            Change the following into a procedure. It changes areas that are mostly red looking to green.  Be sure to call it to test it.

            .. activecode:: cspdecisionsimages_exercises17
..                 :nocodelens:

..                 from image import *

..                 # CREATE AN IMAGE FROM A FILE
..                 img = Image("gal2.jpg")

..                 # LOOP THROUGH ALL PIXELS
..                 for x in range(img.getWidth()):
..                     for y in range(img.getHeight()):
..                         p = img.getPixel(x, y)
..                         r = p.getRed()
..                         g = p.getGreen()
..                         b = p.getBlue()

..                         # VALUES FOR THE NEW COLOR
..                         if r > 200 and g < 100 and b < 100:

..                             # CREATE THE COLOR
..                             newPixel = Pixel(0, g, b)

..                             # CHANGE THE IMAGE
..                             img.setPixel(x, y, newPixel)

..                 # SHOW THE CHANGED IMAGE
..                 win = ImageWin(img.getWidth(),img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch15ex14t

..         .. tab:: Question

..             The code below currently makes the picture gray. Change it so that it posterizes (reduce the number of colors) the image instead.

             .. activecode:: cspdecisionsimages_exercises18
..                 :nocodelens:

..                 from image import *

..                 # CREATE AN IMAGE FROM A FILE
..                 img = Image("kitten.jpg")

..                 # LOOP THROUGH ALL PIXELS
..                 for x in range(img.getWidth()):
..                     for y in range(img.getHeight()):
..                         p = img.getPixel(x, y)

..                         r = p.getRed()
..                         g = p.getGreen()
..                         b = p.getBlue()

..                         # VALUES FOR THE NEW COLOR
..                         if r < 120:
..                             r = 150
..                         if r >= 120:
..                             r = 200
..                         if g < 120:
..                             g = 150
..                         if g >= 120:
..                             g = 200
..                         if b < 120:
..                             b = 150
..                         if b >= 120:
..                             b = 200

..                         # CREATE THE COLOR
..                         newPixel = Pixel(r,g,b)

..                         # CHANGE THE IMAGE
..                         img.setPixel(x, y, newPixel)

..                 # SHOW THE CHANGED IMAGE
..                 win = ImageWin(img.getWidth(),img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch15ex15t

..         .. tab:: Question

..            Write the code to posterize a picture but use 3 values for each color instead of 2.  Use 0 if the current value is less than 85, use 85 if the value is less than 170, else use 170.

            .. activecode:: cspdecisionsimages_exercises19
..                 :nocodelens:




.. #.

..     .. tabbed:: ch15ex16t

..         .. tab:: Question

..             Fix the errors in the code and change the code to use if's and else's instead of just if's.

             .. activecode:: cspdecisionsimages_exercises20
..                 :nocodelens:

..                 from image import *

..                 # CREATE AN IMAGE FROM A FILE
..                 img = Image("arch.jpg")

..                 # LOOP THROUGH ALL PIXELS
..                 for x in range(img.getWidth()
..                     for y in range(img.getHeight()):
..                         p = img.getPixels(x, y)

..                         r = p.getRed()
..                         g = p.getGreen()
..                         b = p.getBlue()

..                         # VALUES FOR THE NEW COLOR
..                         if r < 120:
..                             r = 0
..                         if r >= 120:
..                             r = 120
..                         if g < 120:
..                             g = 0
..                         if g >= 120:
..                             g = 120
..                         if b < 120:
..                             b = 0
..                         if b >= 120:
..                             b = 120

..                         # CREATE THE COLOR
..                         newPixel = Pixel(r,g,b)

..                 # CHANGE THE IMAGE
..                 img.setPixel(x, y, newPixel)

..                 # SHOW THE CHANGED IMAGE
..                 win = ImageWin(img.getWidth(),img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch15ex17t

..         .. tab:: Question

..            Write the code to do edge detection on a picture, but compare the curent pixel with the one below it rather than the one to the right.

            .. activecode:: cspdecisionsimages_exercises21
..                 :nocodelens:



.. #.

..     .. tabbed:: ch15ex18t

..         .. tab:: Question

..             Write a procedure that takes an image as a parameter and edges it using the colors blue and white.

             .. activecode:: cspdecisionsimages_exercises22
..                 :nocodelens:



.. #.

..     .. tabbed:: ch15ex19t

..         .. tab:: Question

..            Write a procedure to remove the red on very red pixels (pixels that have a red value greater than 200 and a green and blue value of less than 100).

            .. activecode:: cspdecisionsimages_exercises23
..                :nocodelens:



.. #.

..     .. tabbed:: ch15ex20t

..         .. tab:: Question

..             Write a procedure that takes a picture as a parameter and converts all the red to grayscale.

             .. activecode:: cspdecisionsimages_exercises24
..                 :nocodelens:


