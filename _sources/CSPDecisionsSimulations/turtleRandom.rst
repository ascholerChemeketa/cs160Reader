..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Turtles And Randomness
==========================

We can use random numbers to make the results of turtle drawings unpredictable. The program
below will pick a random number between 50 and 199 and call it ``squareSize``. That number
gets passed to the ``drawSquare`` function as the size of the square to draw. Each time you
run the program, the square should be a different size.

As a reminder, here are the turtle commands:

|turtle_ref|

.. activecode:: cspdecisionssimulations_turtlerandom1
    :nocodelens:

    def drawSquare(turtleName, size):
        for side in range(4):
            turtleName.forward(size)
            turtleName.right(90)

    # main part of program
    from turtle import *
    import random
    becca = Turtle()
    squareSize = random.randrange(50, 200)
    drawSquare(becca, squareSize)

Note that although we want the size of the square to be random, it is important that all the
sides of the square are the same size. That is why we pick the random number in the main
part of the program. If we picked a random number on line 3 as we draw each side, each side
would be a different length! Try changing line 3 to read ``turtleName.forward(random.randrange(50, 200))``
to see for yourself.

We can also pick a random location for the turtle to start in. Remember that the turtle uses this
coordinate system:

.. figure:: Figures/spaceCoord.png
    :width: 400px
    :align: center
    :alt: the space coordinate system
    :figclass: align-center

    The coordinates for the drawing space.  Note that the center is x = 0 and y = 0.

Because the square procedure is going to make a square up to 200 wide and tall extending
to the right and down from where we start, I don't want it to start to the right or below
the point 0, 0 or it might go off screen. I am fine with it starting to the left of or above
that location, but I don't want it to start right at the edge of the screen. So I want the
starting x location to be between -190 and 0 and the starting y to be between 0 and 190.
So this version of the program uses ``goto(x, y)`` and random numbers to pick a random 
starting location before drawing each square. We use a loop to draw 5 squares.

.. activecode:: cspdecisionssimulations_turtlerandom2
    :nocodelens:

    def drawSquare(turtleName, size):
        for side in range(4):
            turtleName.forward(size)
            turtleName.right(90)

    # main part of program
    from turtle import *
    import random
    becca = Turtle()
    becca.speed(0)

    for square in range(5):
        becca.penup()
        #pick a random starting location 
        startX = random.randrange(-190, 1)
        startY = random.randrange(0, 191)
        becca.goto(startX, startY)
        becca.pendown()
        squareSize = random.randrange(50, 200)
        drawSquare(becca, squareSize)

Try the program a few times. Each time you should get different squares. 

Now let's make it a little more interesting by picking a random color inside the loop
before we call ``drawSquare``. The ``colormode`` has been set to 255, so to pick a random color, 
you need to call ``becca.fillcolor(red, green, blue)`` where red/green/blue are each a value
between 0-255. The ``drawSquare`` procedure has been changed to call ``begin_fill`` and ``end_fill``
to fill in the squares.

.. activecode:: cspdecisionssimulations_turtlerandom3
    :nocodelens:
    :practice: T
    :autograde: unittest

    In the location marked at line 20, add lines of code to make three random values that are
    each 0-255 and name them ``red``, ``green``, and ``blue``. Then call 
    ``becca.fillcolor(red, green, blue)`` to set a random color.
    ~~~~
    def drawSquare(turtleName, size):
        turtleName.begin_fill()
        for side in range(4):
            turtleName.forward(size)
            turtleName.right(90)
        turtleName.end_fill()

    # main part of program
    from turtle import *
    import random
    becca = Turtle()
    becca.colormode(255)
    becca.speed(0)

    for square in range(5):
        becca.penup()
        #pick a random starting location 
        startX = random.randrange(-190, 1)
        startY = random.randrange(0, 191)
        becca.goto(startX, startY)
        becca.pendown()
        #pick a random color here
        squareSize = random.randrange(50, 200)
        drawSquare(becca, squareSize)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertRegex(self.getEditorText(), r"random.randrange\(0, 25[56]\)", "Testing that you make a random number 0-255.")
            self.assertRegex(self.getEditorText(), r"becca.fillcolor\([^,]+,[^,]+,[^,]+(,[^,]+)?\)", "Testing that you call becca.fillcolor.")

    myTests().main()

Optional experiment: If you want to make the squares partially transparent, you can change your
call to fillcolor to look like ``becca.fillcolor(red, green, blue, 0.5)``. The 0.5 as the fourth
parameter says to make the fill be 50% opaque. (Opaque is the opposite of transparent. 20% opaque
means 80% transparent and 60% opaque means 40% transparent. The closer to 1.0 that fourth value is,
the more solid the color. The closer to 0 it is, the more transparent it will be.)
