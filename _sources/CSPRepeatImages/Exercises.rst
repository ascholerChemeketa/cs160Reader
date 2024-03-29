..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


.. setup for automatic question numbering.


.. include:: ../CSP/csp_global.rst 

|image_defs| 

Chapter Exercises
---------------------

.. activecode:: csprepeatimages_exercises1
    :autograde: unittest
    :nocodelens:

    Fix the indention below to correctly set the red to the green, the green to the blue, and the blue to the red.

    Hint: If your program runs out of time while it is running, it is probably because you are redrawing the
    window as you change each pixel. You should only draw the window one time!
    
    |image_defs| 
    ~~~~
    # STEP 1: USE THE IMAGE LIBRARY
    from image import *

    # STEP 2: PICK THE IMAGE
    img = Image("mount_hood.jpg")

    # STEP 3: LOOP THROUGH THE PIXELS
    pixels = img.getPixels()
    for p in pixels:

    # STEP 4: GET THE DATA
    r = p.getRed()
    g = p.getGreen()
    b = p.getBlue()

    # STEP 5: MODIFY THE COLOR
    p.setRed(g)
    p.setGreen(b)
    p.setBlue(r)

    # STEP 6: UPDATE THE IMAGE
    img.updatePixel(p)

    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            testPixel = img.getPixel(3, 4)
            self.assertEqual(testPixel.getRed(), 111, "Testing you set right red value for a particular pixel")
            self.assertEqual(testPixel.getGreen(), 180, "Testing you set right green value for a particular pixel")
            self.assertEqual(testPixel.getBlue(), 71, "Testing you set right blue value for a particular pixel")

    myTests().main()


.. activecode:: csprepeatimages_exercises2
    :autograde: unittest
    :nocodelens:

    Fix 4 syntax errors in the code below so that it correctly sets the green in all pixels to 0.

    |image_defs| 
    ~~~~
    from image import

    # CREATE AN IMAGE FROM A FILE
    img = Image("mount_hood.jpg)

    # LOOP THROUGH THE PIXELS
    pixelList = img.getPixels()
    for p in pixelList:

        # SET THE GREEN TO 0
        p.setGreen()

        # UPDATE THE IMAGE
        img.updatePixel()

    # SHOW THE RESULT
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            testPixel = img.getPixel(3, 4)
            self.assertEqual(testPixel.getGreen(), 0, "Testing you set right red value for a particular pixel")

    myTests().main()



.. activecode:: csprepeatimages_exercises3
    :autograde: unittest
    :nocodelens:

    Fill in the missing code on lines 9, 12, and 18 below so that the blue value of each pixel ends up 1/2 of what it used to be.
    
    |image_defs| 

    ~~~~
    # STEP 1: USE THE IMAGE LIBRARY
    from image import *

    # STEP 2: PICK THE IMAGE
    img = Image("mount_hood.jpg")

    # STEP 3: LOOP THROUGH THE PIXELS
    pixels = img.getPixels();
    for p

        # STEP 4: GET THE DATA
        b = p.

        # STEP 5: MODIFY THE COLOR
        p.setBlue(b * 0.5);

        # STEP 6: UPDATE THE IMAGE
        img.

    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            testPixel = img.getPixel(3, 4)
            self.assertEqual(testPixel.getBlue(), 90, "Testing you set right blue value for a particular pixel")

    myTests().main()



.. activecode:: csprepeatimages_exercises4
    :autograde: unittest
    :nocodelens:

    Fix the indention below to correctly so that the red and green values for each pixel are set to be the
    same as its blue value. This should make a black & white version of the image.
    
    |image_defs| 
    ~~~~
    # STEP 1: USE THE IMAGE LIBRARY
    from image import *

    # STEP 2: PICK THE IMAGE
    img = Image("mount_hood.jpg")

    # STEP 3: LOOP THROUGH THE PIXELS
    for x in range(img.getWidth()):
    for y in range(img.getHeight()):

    # STEP 4: GET THE DATA
    p = img.getPixel(x, y)
    r = p.getRed()

    # STEP 5: MODIFY THE COLOR
    p.setGreen(r)
    p.setBlue(r)

    # STEP 6: UPDATE THE IMAGE
    img.updatePixel(p)

    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            testPixel = img.getPixel(3, 4)
            self.assertEqual(testPixel.getRed(), 71, "Testing you set right red value for a particular pixel")
            self.assertEqual(testPixel.getGreen(), 71, "Testing you set right green value for a particular pixel")
            self.assertEqual(testPixel.getBlue(), 71, "Testing you set right blue value for a particular pixel")

    myTests().main()



.. activecode:: csprepeatimages_exercises5
    :autograde: unittest
    :nocodelens:

    Write code that for each pixel, adds the ``y`` value of its location to the red. You will have to use the
    nested-loop approach to iterating through all of the pixels so that you have access to the
    x and y coordinates of the pixel you are working with.
    
    |image_defs| 

    ~~~~
    # STEP 1: USE THE IMAGE LIBRARY
    from image import *

    # STEP 2: PICK THE IMAGE
    img = Image("mount_hood.jpg")

    # STEP 3: LOOP THROUGH THE PIXELS


        # STEP 4: GET THE DATA


        # STEP 5: MODIFY THE COLOR


        # STEP 6: UPDATE THE IMAGE


    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            testPixel = img.getPixel(3, 40)
            testPixel2 = img.getPixel(3, 42)
            self.assertEqual(testPixel.getRed(), 129, "Testing you set right red value for a particular pixel")
            self.assertEqual(testPixel2.getRed(), 132, "Testing you set right red value for a particular pixel")

    myTests().main()


.. activecode:: csprepeatimages_exercises6
    :autograde: unittest
    :nocodelens:

    Write code that blacks out the top half of the image by setting just the pixels in the top half to have
    a color value of 0, 0, 0. You will have to use the nested-loop approach and only visit the pixels in the
    top half. 
    
    Remember to use ``//`` when dividing the width or height so that you don't get a decimal (float) answer.
    
    |image_defs| 
    ~~~~
    # STEP 1: USE THE IMAGE LIBRARY
    from image import *

    # STEP 2: PICK THE IMAGE
    img = Image("mount_hood.jpg")

    # STEP 3: LOOP THROUGH THE PIXELS
    pixels = img.getPixels();

        # STEP 4: GET THE DATA

        # STEP 5: MODIFY THE COLOR

        # STEP 6: UPDATE THE IMAGE

    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            testPixel = img.getPixel(3, 99)
            testPixel2 = img.getPixel(3, 100)
            self.assertEqual(testPixel.getRed(), 0, "Testing you blacked out pixels in the top half")
            self.assertEqual(testPixel2.getRed(), 144, "Testing you did not black out the bottom half")

    myTests().main()


.. activecode:: csprepeatimages_exercises7
    :autograde: unittest
    :nocodelens:

    Write code top copy the top half of the image to the bottom half. You should end
    up with something that has two copies of the top of mount hood.
    
    You must use loops that track x and y locations to loop through all of the 
    possible x,y pairs. Then use ``getPixel`` and ``setPixel`` to copy
    from **x, y** to **x, y + half the height of the image**.

    Hint: You saw a program to make a mirror image of the top half of an image.
    This is pretty similar...

    
    |image_defs| 
    ~~~~
    # STEP 1: USE THE IMAGE LIBRARY
    from image import *

    # STEP 2: PICK THE IMAGE
    img = Image("mount_hood.jpg")

    # STEP 3: LOOP THROUGH THE PIXELS
        
        # STEP 4: GET THE DATA

        # STEP 6: UPDATE THE IMAGE

    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            testPixel = img.getPixel(3, 5)
            testPixel2 = img.getPixel(3, 105)
            self.assertEqual(testPixel.getRed(), testPixel2.getRed(), "Testing you copied from top half to bottom half.")

    myTests().main()


.. #.

..     .. tabbed:: ch11ex2t

..         .. tab:: Question

..     	    The code below makes the image have a green-blue tint. Change 1 thing in order to make it have a red tint instead.

             .. activecode:: csprepeatimages_exercises8
..                 :nocodelens:

..                 # USE THE IMAGE LIBRARY
..         	from image import *
..                 # PICK THE IMAGE
..         	img = Image("puppy.jpg")
..                 # LOOP THROUGH THE PIXELS
..         	pixelList = img.getPixels()
..     	        for p in pixelList:
..                     # SET THE COLOR
..     		    p.setRed(0)
..                     # UPDATE THE PIXEL
..     	            img.updatePixel(p)

..                 # SHOW THE RESULT
..         	win = ImageWin(img.getWidth(), img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch11ex4t

..         .. tab:: Question

..     	    Fix the 5 errors in the code, so that the Red pixels get the value of the green, the green get the value of blue, and the blue get the value of the red. (The cat should look purple and gray)

             .. activecode:: csprepeatimages_exercises9
..                 :nocodelens:

..                 # STEP 1: USE THE IMAGE LIBRARY
.. 		from image import *
..                 # STEP 2: PICK THE IMAGE
..                 img = Image("kitten")
..                 # STEP 3: LOOP THROUGH THE PIXELS
..                 pixels = img.getPixels()
..                 for p in pixel:
..                     # STEP 4: GET THE DATA
..                     r = p.getred()
..                     b = p.getGreen()
..                     g = p.getBlue()
..                     # STEP 5: MODIFY THE COLOR
..                     p.setRed(g)
..                     p.setGreen(b)
..                     p.setBlue(r)
..                     # STEP 6: UPDATE THE IMAGE
..                     img.updatePixel(p)
..                 # STEP 7: SHOW THE RESULT
..                 win = ImageWin(img.getWidth(), img.getHeight())
..                 img.draw(win)








.. #.

..     .. tabbed:: ch11ex6t

..         .. tab:: Question

..             Complete the code in order to set the blue value to an eighth of the green value plus an eighth of the red value.

             .. activecode:: csprepeatimages_exercises10
..                 :nocodelens:

..                 # STEP 1: USE THE IMAGE LIBRARY
.. 		from image import *
..                 # STEP 2: PICK THE IMAGE
..                 img = Image("swan.jpg")
..                 # STEP 3: LOOP THROUGH THE PIXELS
..                 pixels = img.getPixels()
..                 for
..                     # STEP 4: GET THE DATA
..                     b = p.get
..                     g = p.get
.. 		            r = p.get
..                     # STEP 5: MODIFY THE COLOR
..                     p.set
..                     # STEP 6: UPDATE THE IMAGE
..                     img.updatePixel(p)
..                 # STEP 7: SHOW THE RESULT
..                 win = ImageWin(img.getWidth(), img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch11ex7t

..         .. tab:: Question

..            Fix the indention in the code below so that it correctly increases the red in each pixel in the picture by 1.5.

            .. activecode:: csprepeatimages_exercises11
..                 :nocodelens:

..                 # STEP 1: USE THE IMAGE LIBRARY
..                 from image import *

..                     # STEP 2: PICK THE IMAGE
..                     img = Image("beach.jpg")

..                 # STEP 3: LOOP THROUGH THE PIXELS
..                 pixels = img.getPixels();
..                 for p in pixels:

..                     # STEP 4: GET THE DATA
..                     r = p.getRed()

..                 # STEP 5: MODIFY THE COLOR
..                 p.setRed(r * 1.5);

..                     # STEP 6: UPDATE THE IMAGE
..                     img.updatePixel(p)

..                 # STEP 7: SHOW THE RESULT
..                 win = ImageWin(img.getWidth(), img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch11ex8t

..         .. tab:: Question

..             This code is supposed to make the picture completely black; however, it is taking forever when it should only take a few seconds. Fix the code (without adding anything new) so that it runs in a few seconds.

             .. activecode:: csprepeatimages_exercises12
..                 :nocodelens:

..                 # STEP 1: USE THE IMAGE LIBRARY
.. 		        from image import *
..                 # STEP 2: PICK THE IMAGE
..                 img = Image("motorcycle.jpg")

..                 # STEP 3: LOOP THROUGH THE PIXELS
..                 pixels = img.getPixels()
..                 for p in pixels:
..                     # STEP 4: GET THE DATA
..                     r = p.getRed()
..                     b = p.getBlue()
..                     g = p.getGreen()
..                     # STEP 5: MODIFY THE COLOR
..                     p.setRed(0)
..                     p.setGreen(0)
..                     p.setBlue(0)
..                     # STEP 6: UPDATE THE IMAGE
..                     img.updatePixel(p)
..                     # STEP 7: SHOW THE RESULT
..                     win = ImageWin(img.getWidth(), img.getHeight())
..                     img.draw(win)



.. #.

..     .. tabbed:: ch11ex9t

..         .. tab:: Question

..            Fix the code below to correctly set the green and blue values to 0.75 times their current values.

            .. activecode:: csprepeatimages_exercises13
..                 :nocodelens:

..                 # STEP 1: USE THE IMAGE LIBRARY
..                 from image import *

..                 # STEP 2: PICK THE IMAGE
..                 img = Image("beach.jpg")

..                 # STEP 3: LOOP THROUGH THE PIXELS
..                 pixels = img.getPixels();
..                 for p in pixels:

..                     p.setGreen(g * 0)
..                     p.setBlue(b * 0)
..                     g = p.getGreen()
..                     b = p.getBlue()

..                     # STEP 6: UPDATE THE IMAGE
..                     img.updatePixel(p)

..                 # STEP 7: SHOW THE RESULT
..                 win = ImageWin(img.getWidth(), img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch11ex10t

..         .. tab:: Question

..     	    The code below sets all the pixels to half their original values with one for loop. Change the code so it uses 2 for loops that utilize the range function (1 for loop should be nested in the other).

             .. activecode:: csprepeatimages_exercises14
..                 :nocodelens:

..                 # STEP 1: USE THE IMAGE LIBRARY
.. 		        from image import *
..                 # STEP 2: PICK THE IMAGE
..                 img = Image("baby.jpg")
..                 # STEP 3: LOOP THROUGH THE PIXELS
..                 pixels = img.getPixels()
..                 for p in pixels:
..                     # STEP 4: GET THE DATA
..                     r = p.getRed()
..                     b = p.getBlue()
..                     g = p.getGreen()
..                     # STEP 5: MODIFY THE COLOR
..                     p.setRed(r/2)
..                     p.setGreen(g/2)
..                     p.setBlue(b/2)
..                     # STEP 6: UPDATE THE IMAGE
..                     img.updatePixel(p)
..                 # STEP 7: SHOW THE RESULT
..                 win = ImageWin(img.getWidth(), img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch11ex11t

..         .. tab:: Question

..            Change the following code to set the red to 0 for all pixels in the left half of the picture.

            .. activecode:: csprepeatimages_exercises15
..                 :nocodelens:

..                 from image import *

..                 # CREATE AN IMAGE FROM A FILE
..                 img = Image("gal2.jpg")

..                 # LOOP THROUGH THE PIXELS
..                 for x in range(img.getWidth()):
..     	            for y in range(img.getHeight()):

..     	                # GET THE DATA
..     	                p = img.getPixel(x, y)

..                         # SET THE RED TO 0
..                         p.setRed(0)

..                         # UPDATE THE IMAGE
..                         img.updatePixel(p)

..                 # SHOW THE RESULT
..                 win = ImageWin(img.getWidth(), img.getHeight())
..                 img.draw(win)



.. #.

..     .. tabbed:: ch11ex12t

..         .. tab:: Question

..         	   The code below makes the whole image have a blue-green tint. Change the code so that it makes an only blue tint in the bottom left corner.

             .. activecode:: csprepeatimages_exercises16
..                 :nocodelens:

.. 		from image import *
..                 # CREATE AN IMAGE FROM A FILE
.. 		img = Image("vangogh.jpg")
..                 # LOOP THROUGH THE PIXELS
..         	for x in range(int(img.getWidth())):
..         	    for y in range(int(img.getHeight())):
..                         # GET THE DATA
..         	        p = img.getPixel(x, y)
..                         # SET THE PIXEL
..         		p.setRed(0)
..                         # UPDATE THE PIXEL
..         		img.updatePixel(p)
..                 # SHOW THE RESULT
..         	win = ImageWin(img.getWidth(), img.getHeight())
..         	img.draw(win)



.. #.

..     .. tabbed:: ch11ex13t

..         .. tab:: Question

..            Change the code below to set the red value in the pixels in the bottom half of the picture to 0.

            .. activecode:: csprepeatimages_exercises17
..                 :nocodelens:

..                 from image import *

..                 # CREATE AN IMAGE FROM A FILE
..                 img = Image("gal2.jpg")

..                 # LOOP THROUGH THE PIXELS
..                 for x in range(img.getWidth()):
..     	            for y in range(img.getHeight()):

..     	                # GET THE DATA
..     	                p = img.getPixel(x, y)

..                         # SET THE RED TO 0
..                         p.setRed(0)

..                         # UPDATE THE IMAGE
..                         img.updatePixel(p)

..                 # SHOW THE RESULT
..                 win = ImageWin(img.getWidth(), img.getHeight())
..                 img.draw(win)





.. #.

..     .. tabbed:: ch11ex14t

..         .. tab:: Question

..     	    The code below makes the whole image seem red. Change it, so that only every 5 pixels get changed, so that it will look like a red grid.

             .. activecode:: csprepeatimages_exercises18
..                 :nocodelens:

..                 from image import *
..                 # CREATE AN IMAGE FROM A FILE
..         		img = Image("guy1.jpg")
..                 # LOOP THROUGH THE PIXELS
..         		for x in range(int(img.getWidth())):
..         		    for y in range(img.getHeight()):
..                     # GET THE DATA
..         		    p = img.getPixel(x, y)
..                     # SET THE PIXEL
..         		    p.setGreen(0)
..         		    p.setBlue(0)
..                     # UPDATE THE IMAGE
..         		    img.updatePixel(p)
..                 # SHOW THE RESULT
..     		    win = ImageWin(img.getWidth(), img.getHeight())
..     		    img.draw(win)




.. #.

..     .. tabbed:: ch11ex15t

..         .. tab:: Question

..            Change the following code into a procedure to keep only the green values in all pixels in a picture.

            .. activecode:: csprepeatimages_exercises19
..                 :nocodelens:

..                 # STEP 1: USE THE IMAGE LIBRARY
..                 from image import *

..                 # STEP 2: PICK THE IMAGE
..                 img = Image("beach.jpg")

..                 # STEP 3: LOOP THROUGH THE PIXELS
..                 pixels = img.getPixels();
..                 for p in pixels:

..                     # STEP 5: MODIFY THE COLOR
..                     p.setRed(0)
..                     p.setBlue(0)

..                     # STEP 6: UPDATE THE IMAGE
..                     img.updatePixel(p)

..                 # STEP 7: SHOW THE RESULT
..                 win = ImageWin(img.getWidth(), img.getHeight())
..                 img.draw(win)




.. #.

..     .. tabbed:: ch11ex16t

..         .. tab:: Question

..             A grayscale picture is when the red, green, and blue value of a pixel are all equal to the average of the original pixel value. Write the code to turn the left half of an image into gray scale.

             .. activecode:: csprepeatimages_exercises20
..                 :nocodelens:




.. #.

..     .. tabbed:: ch11ex17t

..         .. tab:: Question

..            Define a procedure to negate an image.  See Image_Negate_Quarter from Chapter 11 section 7 for how to create a negative of an image.  Pass the image to the procedure.  Do the import, create the image, call the prodecure, and show the result.

            .. activecode:: csprepeatimages_exercises21
..                 :nocodelens:




.. #.

..     .. tabbed:: ch11ex19t

..         .. tab:: Question

..            Write a procedure to mirror an image from left to right around a vertical line in the middle of the image.  Pass the image to the procedure.  Do the import, create the image, call the prodecure, and show the result.

            .. activecode:: csprepeatimages_exercises22
..                :nocodelens:



.. #.

..     .. tabbed:: ch11ex20t

..         .. tab:: Question

..             Write code that flips the image across a horizontal line.

             .. activecode:: csprepeatimages_exercises23
..                 :nocodelens:


