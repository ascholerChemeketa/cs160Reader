..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst   
    
|image_defs| 

A Pattern for Image Processing
================================

There is a fair amount of code involved in a program like this. But there is a pattern
to the code we need to write. Learning to recognize the pattern makes it easier to
write a new program - we can follow the steps of the pattern and only worry about
modifying small parts of the basic recipe.

A basic image processing pattern is shown in the program below.  This program changes
the red to the original green, the green to the original blue, and the red to the
original green.  But, mostly we are trying to describe a pattern that you can use to
create many image effects.

.. activecode:: Image_Pattern
    :nocodelens:

    # STEP 1: USE THE IMAGE LIBRARY 
    from image import *
    
    # STEP 2: PICK THE IMAGE
    img = Image("goalkeeper.jpg")

    # STEP 3: LOOP THROUGH THE PIXELS
    pixels = img.getPixels()
    for p in pixels:
        
        # STEP 4: GET THE DATA
        originalRed = p.getRed() 
        originalGreen = p.getGreen()
        originalBlue = p.getBlue()
            
        # STEP 5: MODIFY THE COLOR
        p.setRed(originalGreen)
        p.setGreen(originalBlue)
        p.setBlue(originalRed)
            
        # STEP 6: UPDATE THE IMAGE WITH THE CHANGED PIXEL
        img.updatePixel(p)
            
    # STEP 7: SHOW THE RESULT
    win = ImageWin(img.getWidth(), img.getHeight())
    img.draw(win)


Here is the recipe without the code:

1. **STEP 1: USE THE IMAGE LIBRARY.**  We need to import the image library.

2. **STEP 2: PICK THE IMAGE.** We pick a particular image from our library by specifying
    it inside of the parentheses and double quotes.

3. **STEP 3: LOOP THROUGH THE PIXELS.** This example gets *every* pixel in the image and
    loops through them all one at a time.

4. **STEP 4: GET THE DATA.**  You could *always* use the STEP 4 lines just as they are above,
    but you might be able to make it shorter if you wanted.  If you only needed red and were
    going to set the green and blue to zero, you don't have to get the green and blue.

5. **STEP 5: MODIFY THE COLOR.** This is the part that you will most often change.  Here's where
    you change the red, green, and/or blue.  You don't have to change all of them. 

6. **STEP 6: UPDATE THE IMAGE.**  This will update the image at the original pixel location to the new color. 

7. **STEP 7: SHOW THE RESULT.**  This will draw the changed image in a window.


Time to experiment with our pattern.

.. mchoice:: 9_4_mc1
    :answer_a: It turns totally green
    :answer_b: It becomes a black and white picture
    :answer_c: It takes on a green cast
    :answer_d: All the green disappears
    :correct: b
    :feedback_a: Did you try it?
    :feedback_b: Yes, anytime the red, green, and blue values are the same we get a shade of gray.
    :feedback_c: Did you try it?
    :feedback_d: Did you try it?

    What happens if in step 5 you set all three colors to ``originalGreen``?

.. mchoice:: 9_4_mc2
    :answer_a: The goalkeeper looks pink
    :answer_b: It becomes solid red
    :answer_c: The goalkeeper looks red
    :answer_d: It becomes solid pink
    :correct: d
    :feedback_a: Did you try it?
    :feedback_b: Did you try it?
    :feedback_c: Did you try it?
    :feedback_d: Yes - we are ignoring the original colors completely!

    Change lines 17-19 so that the new red value is 255 and blue and green are each 150. What
    happens?


.. mchoice:: 9_4_mc3
    :answer_a: Values above 255 are treated as 255 and values less than 0 are treated as 0.
    :answer_b: Values outside of the range 0-255 are treated as 0.
    :answer_c: Values outside of the range 0-255 are treated as 255.
    :answer_d: Values outside the range 0-255 "wrap around". Going past 255 takes you back to 0, so 300 is the same as 300 - 255 = 45.
    :correct: a
    :feedback_a: Yes, if you use a value less than 0 it becomes 0. If you use a value over 255, it becomes 255.
    :feedback_b: That would mean 300 red would be treated as 0... there still is lots of red.
    :feedback_c: That would mean -100 blue would be treated as 255... but there is no blue in the image.
    :feedback_d: That does not seem to be the case. 300 red looks the same as 255 red.
    
    We know that the color values are each supposed to be 0-255. What happens if we use values
    outside of that range?

    Change lines 17-19 so that the new red value is 255 and blue and green are each 0. Run the
    program and observe the results. Then change the red value to 300 and the blue to -100. Run
    it again. What seems to happen?
