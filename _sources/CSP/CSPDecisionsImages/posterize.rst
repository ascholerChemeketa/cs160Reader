..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../CSP/csp_global.rst 

|image_defs| 

Posterizing
===========================

The process of changing an image so it only uses a small number of colors is known as
**posterizing** (old posters had to be printed with a small number of colors - the
technology didn't let one make complex blends).

This time, we need to make a function that will force a color value between 0 and 255 to
become one of a few specific options.

.. activecode:: posterize
    :autograde: unittest
    :practice: T

    Write code to return 0 if ``colorValue`` is less than 50, 125 if it is 50-124, and
    255 otherwise.

    ~~~~
    from image import *

    def posterize(colorValue):
        #Write your logic here

    # Main part of program
    print( posterize(20) )
    print( posterize(49) )
    print( posterize(50) )
    print( posterize(124) )
    print( posterize(200) )
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(posterize(20), 0, "posterize(20)")
            self.assertEqual(posterize(49), 0, "posterize(49)")
            self.assertEqual(posterize(50), 125, "posterize(50)")
            self.assertEqual(posterize(124), 1125, "posterize(124)")
            self.assertEqual(posterize(200), 255, "posterize(200)")

    myTests().main()

Now that you have that function, add it to this program to see it in action:

.. activecode:: Posterize_Image
    :nocodelens:

    from image import *

    # ADD YOUR FUNCTION HERE
    
    # CREATE AN IMAGE FROM A FILE
    img = Image("mount_hood.jpg")

    # LOOP THROUGH ALL PIXELS
    for x in range(img.getWidth()):
        for y in range(img.getHeight()):
            p = img.getPixel(x, y)
            
            r = p.getRed()
            g = p.getGreen()
            b = p.getBlue()
            
            # VALUES FOR THE NEW COLOR
            r = posterize(r)
            g = posterize(g)
            b = posterize(b)
            
            # CREATE THE COLOR
            newPixel = Pixel(r,g,b)
            
            # CHANGE THE IMAGE
            img.setPixel(x, y, newPixel)
     
    # SHOW THE CHANGED IMAGE       
    win = ImageWin(img.getWidth(),img.getHeight())
    img.draw(win)
    
Rewrite the code for posterizing an image using if and else rather than multiple if's.  Test that it still works correctly. 

.. mchoice:: 15_4_1_posterize1
   :answer_a: 8
   :answer_b: 3
   :answer_c: 120
   :answer_d: 16,777,216 (= 256 * 256 * 256) 
   :correct: a
   :feedback_a: Two possible values of each of red, green, and blue (3 colors) is 2 raised to 3rd power combinations which is 8.
   :feedback_b: Two values of each of red, green, and blue is more than 3.
   :feedback_c: Far fewer
   :feedback_d: That's the total number of colors possible if each channel can be 0-255.  But this code reduces that.
   
   How many different colors are possible in our image after we posterize it using this function?


   
 




       
