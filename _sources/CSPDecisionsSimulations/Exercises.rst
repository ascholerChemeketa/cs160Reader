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


Chapter Exercises
---------------------

.. parsonsprob:: cspdecisionssimulations_exercises1
    :numbered: left

    The code below is supposed to roll an 8 sided die (sides numbered 1-8) 10000 times and
    after it is done, print out how many times 1 was rolled.

    Move the correct blocks from the left to the right and indent them properly. You will
    not need to use all of the blocks. Make sure to put ``import random`` first.

    -----
    import random
    =====
    numberOfOnes = 0
    =====
    for roll in range(10000):
    =====
        randValue = random.randrange(1, 9)
    =====
        randValue = random.randrange(1, 8) #paired
    =====
        randValue = random.randrange(0, 8) #paired
    =====
        randValue = random.randrange(0, 9) #paired
    =====
        if randValue == 1:
    =====
            numberOfOnes = numberOfOnes + 1
    =====
    print(numberOfOnes)


.. parsonsprob:: cspdecisionssimulations_exercises2
    :numbered: left

    The code below is supposed to "flip a coin" 100 times by making a random number that is
    0 (heads) or 1 (tails) and keep track of the longest streak of heads that we see. It
    will do so by first updating the ``headsInARow`` counter (like the sample from the
    :ref:`building-a-simulation` page). If the ``headsInARow`` increased (but not if it was
    reset to 0), we will check and see if it is bigger than ``longestStreak``. If so, we
    will update the ``longestStreak`` to match ``headsInARow``. After all 100 flips are done
    we will print out the ``longestStreak``.

    Move the correct blocks from the left to the right and indent them properly. You will
    use all of the blocks. Make sure to put ``import random`` first.

    -----
    import random
    =====
    headsInARow = 0
    longestStreak = 0
    =====
    for i in range(100):
    =====
        flip = random.randrange(0, 2)
    =====
        if flip == 0:
    =====
            headsInARow = headsInARow + 1
    =====
            if headsInARow > longestStreak:
    =====
                longestStreak = headsInARow
    =====
        else:
    =====
            headsInARow = 0
    =====
    print(longestStreak)


.. activecode:: cspdecisionssimulations_exercises3
    :autograde: unittest
    :practice: T

    Using the code below, write a program that simulates rolling a pair of six-sided dice (1-6)
    10000 times and counting up the number of times that an eight is rolled (the two dice
    add to 8).

    Make sure to generate two seperate numbers between 1-6 for each roll. Then add those two
    numbers up and if they make eight, increment the ``numEights`` counter.

    If you have troubles, try reducing the range to something like 10 or 20 rolls and printing
    out what you roll for each of the dice and the total them make. When you get it working,
    make sure to reset the loop to 10000 trials or you won't pass the tests.

    **Note:** It is possible, but *extremely* unlikely that you will get really lucky or
    unlucky and the tests will think your code is wrong even if it is right. If that happens,
    just run it again. 


    ~~~~
    import random

    numEights = 0
    for roll in range(10000):
        #code here

    print(numEights)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertIn("range(10000)", self.getEditorText(), "Testing that you looped 10000 times.")
            self.assertGreaterEqual(numEights, 1300, "Testing that you got a number that isn't too low.")
            self.assertLessEqual(numEights, 1500, "Testing that you got a number that isn't too high.")

    myTests().main()


.. activecode:: cspdecisionssimulations_exercises4
    :autograde: unittest
    :practice: T

    Finish the function ``getOddsFor``. It should determine the odds of rolling ``targetNumber``
    when rolling two six-sided dice (1-6). It should do so by using a loop to repeat ``TRIALS``
    number of times rolling two dice and seeing how many times ``targetNumber`` is the total of
    the two dice. Then return that number divided by ``TRIALS``.

    Your code from the previous problem should be a guide for most of the process. 
    Just make sure to check if the
    total you "roll" is the same as the ``targetNumber`` as opposed to always checking against 8.

    Make sure to ``return`` your answer from the function, don't print it in the function!

    You can change ``TRIALS`` while debugging so that you can print information and mange to read
    it all. But make sure to change it back to 100000 (or a similar large number) for the final
    run.

    ~~~~
    import random
    TRIALS = 100000

    def getOddsFor(targetNumber):
        # your code here
        match = 0
        for i in range(100000):
            total = random.randrange(1,7) + random.randrange(1,7)
            if total == targetNumber:
                match = match + 1
        return match / TRIALS

    # main program
    print("Testing 8's, expect 0.13889", getOddsFor(8))
    print("Testing 5's, expect 0.1111", getOddsFor(5))
    print("Testing 12's, expect 0.0277", getOddsFor(12))

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertAlmostEqual(getOddsFor(8), 0.13888, 2, "Testing that you got about the right answer for 8.")
            self.assertAlmostEqual(getOddsFor(5), 0.11111, 2, "Testing that you got about the right answer for 5.")
            self.assertAlmostEqual(getOddsFor(12), 0.02777, 2, "Testing that you got about the right answer for 12.")

    myTests().main()


.. activecode:: cspdecisionssimulations_exercises5
    :autograde: unittest
    :practice: T

    This program currently makes a pink dot that is 50 pixels across and is centered at 0, 0.

    Modify the program so that the size of the dot is a random value between 50 and 200 and
    the location it draws it is a random location where both x and y are random numbers between
    -100 and 100.

    The automatic tests will make sure you generate appropriate values, but it won't necessarily
    verify you used the random numbers you make in the correct spots. You are responsible for
    checking that yourself!

    |turtle_ref|

    ~~~~
    from turtle import *
    import random
    drew = Turtle()
    drew.shape("circle")
    drew.colormode(255)

    #set starting location
    drew.penup()
    drew.goto(0, 0)
    drew.pendown()

    #set up the color and size
    drew.pensize(50)
    drew.color(255, 200, 200)

    #draw the dot
    drew.forward(0)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertRegex(self.getEditorText(), r"random.randrange\(\s*-100,\s*10[01]\s*\)", "Testing that you make a random number between -100 and 100.")
            self.assertRegex(self.getEditorText(), r"random.randrange\(\s*50,\s*20[01]\s*\)", "Testing that you make a random number between 50 and 200.")

    myTests().main()



.. #.

..     .. tabbed:: ch14ex1t

..         .. tab:: Question

..             Fix 5 errors in the code below so that it runs correctly. It will draw red and black horizontal stripes.

             .. activecode:: cspdecisionssimulations_exercises6
..                 :nocodelens:

..                 from turtle import               # use the turtle library
..                 from sys import *                # use the system library
..                 setExecutionLimit(100000)        # let this take up to 100 seconds
..                 space = screen()                 # create a turtle screen (space)

..                 width = space.window_width()     # get the width of the screen (space)
..                 maxX = width / 2                 # set the max x value to half the width

..                 sue = Turtle(                    # create a turtle named sue
..                 sue.pensize(10)                  # set the pen width

..                 for y in range(5):               # repeat 5 times
..     	            sue.penup()                      # pick up the pen
..        	            if y % 2 == 0:                   # if even row
..                     sue.color('red')                 # set the color to red
..        	            if y % 2 == 1:                   # if odd row
..                         sue.color('black')               # set the color to black
..        	            sue.goTo(-1 * maxX,y * 10)       # move to the next row
..        	            sue.pendown()                    # put the pen down
..        	            sue.forward(width)               # move forward by the width



.. #.

..     .. tabbed:: ch14ex2t

..         .. tab:: Question

..             The code below draws three peaks, vertically. Change 1 thing to make it draw three peaks horizontally. (Hint: You have to change something that's in the body of the for loop)

             .. activecode:: cspdecisionssimulations_exercises7
..                 :nocodelens:

..                 def draw(jaz, maxX):
..                     for x in range(3):
..                         jaz.forward(100)
..                         jaz.right(120)
..                         jaz.forward(100)
..                         jaz.left(120)
..                         if (jaz.xcor() <= maxX):
..                             jaz.penup()
..                             jaz.goto(-1 * maxX,jaz.ycor() - 100)
..                             jaz.pendown()

..                 def turtleSetup(width, jaz):
..                     space.setup(width,width)  # set the space width and height
..                     maxX = width / 2          # set the max x value to half the width
..                     jaz.shape('turtle')
..                     jaz.penup()
..                     jaz.goto(-1 * maxX,100)
..                     jaz.pendown()
..                     jaz.left(60)
..                     draw(jaz, maxX)


..                 from turtle import *      # use the turtle library
..                 from sys import *         # use the system library
..                 setExecutionLimit(50000)  # let this take up to 50 seconds
..                 space = Screen()          # create a turtle screen (space)
..                 jaz = Turtle()
..                 width = 400

..                 turtleSetup(width, jaz)



.. #.

..     .. tabbed:: ch14ex3t

..         .. tab:: Question

..            Indent lines in the code below so that it runs correctly.  It will stamp 4 turtles in two different colors at the corners of a square.

            .. activecode:: cspdecisionssimulations_exercises8
..                 :nocodelens:

..                 from turtle import *             # use the turtle library
..                 from sys import *                # use the system library
..                 setExecutionLimit(100000)        # let this take up to 100 seconds
..                 space = Screen()                 # create a turtle screen (space)

..                 width = space.window_width()     # get the width of the screen (space)
..                 maxX = width / 2                 # set the max x value to half the width

..                 sue = Turtle()                   # create a turtle named sue
..                 sue.shape("turtle")
..                 sue.penup()
..                 sue.left(45)

..                 for y in range(4):               # repeat 4 times
..        	        if y % 2 == 0:                   # if even row
..                 sue.color('red')                 # set the color to red
..        	        if y % 2 == 1:                   # if odd row
..                 sue.color('black')               # set the color to black
..                 sue.forward(100)
..                 sue.stamp()
..                 sue.backward(100)
..                 sue.left(90)




.. #.

..     .. tabbed:: ch14ex4t

..         .. tab:: Question

..             Fix the errors so the turtle stays in a straight vertical line without leaving the screen.

             .. activecode:: cspdecisionssimulations_exercises9
..                 :nocodelens:

..                 from turtle import *      # use the turtle library
..                 from sys import *         # use the system library
..                 setExecutionLimit(50000)  # let this take up to 50 seconds
..                 space = Screen()          # create a turtle screen (space)

..                 height = 400               # set the desired height
..                 space.setup(height,height)  # set the space width and height
..                 maxY = height / 2          # set the max y value to half the height
..                 t = Turtle()
..                 t.shape('turtle')

..                 for x in range(10):
..                 if (100 + t.ycor() > maxY):
..                 t.color("blue")
..                 t.left(180)
..                 t.backward(100)
..                 elif (t.ycor() - 100 > (-1* maxY)):
..                 t.color("red")
..                 t.left(180)
..                 t.forward(100)
..                 else
..                 t.color("green")
..                 t.forward(100)



.. #.

..     .. tabbed:: ch14ex5t

..         .. tab:: Question

..            Fix 5 errors in the code below so that it runs correctly.  It will draw a repeating pattern from left to right until it hits the width of the window and then will move back to the left side of the window to continue the pattern.

            .. activecode:: cspdecisionssimulations_exercises10
..                 :nocodelens:

..                 def turtleLoop(jaz, maxX):
..                     for x in range(10):       # repeat the body 10 times
..                         jaz.forward100)           # go forward 100
..                         jaz.right(120)             # turn right 120 degrees
..                         jaz.forward(100)           # go forward 100
..                         jaz.left(120              # turn left 120 degrees
..                         if (jaz.xcor() >= maxX):   # if at right edge of space
..                             jaz.penup()                # pick up the pen
..                             jaz.goto(-1 * maxX,jaz.ycor() - 100)  # move left & down
..                             jaz.pendown()              # put the pen down

..                 def turtleProcedure(width, jaz):
..                     space.setup(width,width)  # set the space width and height
..                     maxX = width / 2          # set the max x value to half the width
..                     jaz.shape('turtle')       # set the shape for jaz to turtle
..                     jaz.penup()               # pick up the pen (don't draw)
..                     jaz.goto(-1 * maxX,100)   # go to the left side of the space
..                     jaz.penDown()             # put the pen down to draw with
..                     jaz.left(60)              # turn the turtle left 60 degrees
..                     turtleLoop(jaz, maxX)     # call the other function


..                 from turtle  *      # use the turtle library
..                 from sys import *         # use the system library
..                 setExecutionLimit(50000)  # let this take up to 50 seconds
..                 Space = Screen()          # create a turtle screen (space)

..                 width = 400               # set the desired width
..                 jaz = Turtle()            # create a turtle named jaz
..                 turtleProcedure(width,jaz)



.. #.

..     .. tabbed:: ch14ex6t

..         .. tab:: Question

..             The code currently draws 5 horizontal lines of alternating colors. Change it so that it draws 5 vertical lines of alternating colors.

             .. activecode:: cspdecisionssimulations_exercises11
..                 :nocodelens:

..                 from turtle import *             # use the turtle library
..                 from sys import *                # use the system library
..                 setExecutionLimit(100000)        # let this take up to 100 seconds
..                 space = Screen()                 # create a turtle screen (space)

..                 width = space.window_width()     # get the width of the screen (space)
..                 maxX = width / 2                 # set the max x value to half the width

..                 sue = Turtle()                   # create a turtle named sue
..                 sue.pensize(10)                  # set the pen width

..                 for y in range(5):               # repeat 5 times
..                     sue.penup()                      # pick up the pen
..                     if y % 2 == 0:                   # if even row
..                         sue.color('yellow')                 # set the color to yellow
..                     if y % 2 == 1:                   # if odd row
..                         sue.color('black')               # set the color to black
..                     sue.goto(-1 * maxX,y * 10)       # move to the next row
..                     sue.pendown()                    # put the pen down
..                     sue.forward(width)               # move forward by the width



.. #.

..     .. tabbed:: ch14ex7t

..         .. tab:: Question

..            Change the code below to use ``if`` and ``else``.  Also fix any errors.   You will need to change 3 lines.  The code will draw random connected lines in alternating colors of red and black.

            .. activecode:: cspdecisionssimulations_exercises12
..                 :nocodelens:

..                 from turtle import *      # use the turtle library
..                 import random
..                 space = Screen()          # create a turtle screen (space)
..                 width = space.window_width()
..                 height = space.window_height()
..                 maxX = width / 2  # get the max x value
..                 minX = -1 * maxX
..                 maxY = height / 2
..                 minY = -1 * maxY
..                 jaz = Turtle()            # create a turtle named jaz
..                 for num in range(10):
..                     if num % 2 == 0              # if even row
..                         jaz.color('red')          # set the color to red
..                     if num % 2 == 1:             # if odd row
..                     jaz.color('black')       # set the color to black
..                     randX = random.randrange(minX, maxX)
..                     randY = random.randrange(minY, maxY)
..                     jaz.goto(randX,randY)




.. #.

..     .. tabbed:: ch14ex8t

..         .. tab:: Question

..             Fix the errors in the code so it alternates between printing a horizontal yellow line and a vertical black line.

             .. activecode:: cspdecisionssimulations_exercises13
..                 :nocodelens:

..                 from turtle import *             # use the turtle library
..                 from sys import *                # use the system library
..                 setExecutionLimit(100000)        # let this take up to 100 seconds
..                 space = Screen()                 # create a turtle screen (space)

..                 height = space.window_height()     # get the height of the screen (space)
..                 width = space.window_width        #get the width
..                 maxY = height / 2                 # set the max y value to half the height
..                 maxX = width

..                 sue = Turtle()                   # create a turtle named sue
..                 sue.pensize(10)                  # set the pen width

..                 for x in range(4):               # repeat 5 times
..                     sue.penup()                      # pick up the pen
..                     if x % 2 == 0:                   # if even row
..                     sue.color('yellow')                 # set the color to yellow
..                     sue.goto(-1 * maxX, x * 10)
..                     sue.penup()
..                     sue.forward(height)
..                     sue.left(90)
..                     if x % 2 == 1:                   # if odd row
..                         sue.color('black')               # set the color to black
..                         sue.goto(x * 10,-1 * maxY)
..                         sue.pendown()
..                         sue.forward(height)
..                         sue.left(90)




.. #.

..     .. tabbed:: ch14ex9t

..         .. tab:: Question

..            Fix the indention so that the code runs correctly.  Two turtles will move towards each other and then turn around and move away from each other.

            .. activecode:: cspdecisionssimulations_exercises14
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 jaz = Turtle()
..                 mia = Turtle()
..                 mia.color('red')
..                 mia.penup()
..                 mia.goto(100,0)
..                 mia.pendown()
..                 mia.right(180)
..                 for x in range(20):
..                 jaz.forward(10)
..                 mia.forward(10)
..                 if (mia.xcor() - jaz.xcor() < 40):
..                 jaz.right(45)
..                 mia.right(45)



.. #.

..     .. tabbed:: ch14ex10t

..         .. tab:: Question

..             Change and fix the code below so that it draws random, but connected black and red lines (it should look like scribbling) only in the bottom right half of the drawing window.

             .. activecode:: cspdecisionssimulations_exercises15
..                 :nocodelens:

..                 from turtle import *      # use the turtle library
..                 import random
..                 space = Screen()          # create a turtle screen (space)
..                 width = space.window_width()
..                 height = space.window_height()
..                 maxX = width / 2  # get the max x value
..                 minX = -1 * maxX
..                 maxY = height / 2
..                 minY = -1 * maxY
..                 jaz = Turtle()            # create a turtle named jaz
..                 for num in range(10):
..                 if num % 2 == 0             # if even row
..                             jaz.color('red')          # set the color to red
..                     if num % 2 == 1             # if odd row
..                     jaz.color('black')       # set the color to black
..                     randX = random.randrange(minX, maxX)
..                     randY = random.randrange(minY, maxY)
..                     jaz.goto(randX,randY)



.. #.

..     .. tabbed:: ch14ex11t

..         .. tab:: Question

..            The following code stamps a circle of turtles.  Change the following code to use a different color per stamp and use at least 3 colors.  You can use a counter and reset the counter to 0 after it reaches the number of colors (i.e. use a for loop and change color based off divisibility of each number).  Use ``if``, ``elif``, and ``else``.

            .. activecode:: cspdecisionssimulations_exercises16
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 jose = Turtle()
..                 jose.shape("turtle")
..                 jose.penup()
..                 for size in range(10):
..                     jose.forward(50)
..                     jose.stamp()
..                     jose.forward(-50)
..                     jose.right(36)



.. #.

..     .. tabbed:: ch14ex12t

..         .. tab:: Question

..             Add to the code so that  ``num`` is a random number between 1 and 3 (inclusive), and change the if clauses to be if, elif, and else. The code should draw random lines with 3 different colors based off the value of ``num``.

             .. activecode:: cspdecisionssimulations_exercises17
..                 :nocodelens:

..                 from turtle import *      # use the turtle library
..                 import random
..                 space = Screen()          # create a turtle screen (space)
..                 width = space.window_width()
..                 height = space.window_height()
..                 maxX = width / 2  # get the max x value
..                 minX = -1 * maxX
..                 maxY = height / 2
..                 minY = -1 * maxY
..                 jaz = Turtle()            # create a turtle named jaz
..                 for x in range(10):
..                     num =
..                     if num % 3 == 0:             # if even row
..                             jaz.color('red')          # set the color to red
..                     if num % 2 == 1:             # if odd row
..                             jaz.color('black')       # set the color to black
..                     if num % 1 == 2:
..                             jaz.color('blue')
..                     randX = random.randrange(minX, maxX)
..                     randY = random.randrange(minY, maxY)
..                     jaz.goto(randX,randY)



.. #.

..     .. tabbed:: ch14ex13t

..         .. tab:: Question

..            The following code stamps turtles in a spiral.  Change the code below to cycle through at least 3 colors.  Use ``if``, ``elif``, and ``else``.

            .. activecode:: cspdecisionssimulations_exercises18
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 tess = Turtle()
..                 tess.shape("turtle")
..                 tess.penup()                  # ask tess to pick up her pen
..                 for size in range(5, 60, 2):  # start with size = 5 and grow by 2
..                     tess.stamp()                # leave an impression on the canvas
..                     tess.forward(size)          # move tess along
..                     tess.right(24)              # and turn her




.. #.

..     .. tabbed:: ch14ex14t

..         .. tab:: Question

..             The code currently makes the two turtles just draw a circle. Fix the errors on line 13 so that the turtles move towards each other and then turn around and move away from each other.

             .. activecode:: cspdecisionssimulations_exercises19
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 jaz = Turtle()
..                 mia = Turtle()
..                 mia.color('red')
..                 mia.penup()
..                 mia.goto(100,0)
..                 mia.pendown()
..                 mia.right(180)
..                 for x in range(20):
..                     jaz.forward(10)
..                     mia.forward(10)
..                     if (mia.xcor() + jaz.xcor() > 40):
..                         jaz.right(45)
..                         mia.right(45)



.. #.

..     .. tabbed:: ch14ex15t

..         .. tab:: Question

..            The following code draws vertical stripes alternating between red and black.  Change and add code below to use 5 different colors.  Use ``y % 5`` instead of ``y % 2`` to get 5 possible values.

            .. activecode:: cspdecisionssimulations_exercises20
..                 :nocodelens:

..                 from turtle import *             # use the turtle library
..                 from sys import *                # use the system library
..                 setExecutionLimit(100000)        # let this take up to 100 seconds
..                 space = Screen()                 # create a turtle screen (space)

..                 width = space.window_width()     # get the width of the screen (space)
..                 maxX = width / 2                 # set the max x value to half the width

..                 sue = Turtle()                   # create a turtle named sue
..                 sue.pensize(10)                  # set the pen width

..                 for y in range(10):               # repeat 10 times
..     	            sue.penup()                      # pick up the pen
..        	            if y % 2 == 0:                   # if even row
..                         sue.color('red')                 # set the color to red
..        	            if y % 2 == 1:                   # if odd row
..                         sue.color('black')               # set the color to black
..        	            sue.goto(-1 * maxX,y * 10)       # move to the next row
..        	            sue.pendown()                    # put the pen down
..        	            sue.forward(width)               # move forward by the width



.. #.

..     .. tabbed:: ch14ex16t

..         .. tab:: Question

..             Complete and add to the ``turtleLoop`` procedure so that when the turtles collide, they move away, then turn so that they move in the same direction. It should look like a mirror image divided across the vertical axis.

             .. activecode:: cspdecisionssimulations_exercises21
..                 :nocodelens:

..                 def turtleLoop(jaz,mia):
..                     for x in range(20):
..                         jaz.forward(10)
..                         mia.forward(10)
..                         if (mia.xcor() - jaz.xcor() < 30):


..                 def turtleDraw(jaz, mia):
..                     jaz.shape('turtle')
..                     mia.shape('turtle')
..                     mia.color('red')
..                     mia.penup()
..                     mia.goto(100,0)
..                     mia.pendown()
..                     mia.right(180)
..                     turtleLoop(jaz,mia)

..                 from turtle import *
..                 space = Screen()
..                 jaz = Turtle()
..                 mia = Turtle()
..                 turtleDraw(jaz,mia)



.. #.

..     .. tabbed:: ch14ex17t

..         .. tab:: Question

..            Write a function takes a number and returns a color.  It will return 'yellow' if the number modulus 3 is 0, 'blue' if it is 1, and 'green' if it is 2.

            .. activecode:: cspdecisionssimulations_exercises22
..                 :nocodelens:



.. #.

..     .. tabbed:: ch14ex18t

..         .. tab:: Question

..             Write a procedure that takes in any number as the first parameter and a turtle as another parameter. The procedure should determine if the number is even or odd. If it is even have the turtle go right. If it is odd, have it go left. The procedure should get a random value between 1 and 2 (inclusive) and assign a color based on that number.

             .. activecode:: cspdecisionssimulations_exercises23
..                 :nocodelens:



.. #.

..     .. tabbed:: ch14ex19t

..         .. tab:: Question

..            Write code that draws a pattern with the turtle with at least 3 different colors used.  The code must have a ``for`` loop and must have a ``if`` statement inside the for loop that changes the color.

            .. activecode:: cspdecisionssimulations_exercises24
..                :nocodelens:



.. #.

..     .. tabbed:: ch14ex20t

..         .. tab:: Question

..             Write code that uses 2 turtles and a for loop to get a range of numbers. You should change the color of the based off if the number from the for loop is even or odd. The two turtles should move towards each other but turn away and move when they are about to intersect.

             .. activecode:: cspdecisionssimulations_exercises25
..                 :nocodelens:


