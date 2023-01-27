..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. include:: ../CSP/csp_global.rst

Chapter Exercises
============================

.. activecode:: cspnameprocedures_exercises1
    :autograde: unittest
    :nocodelens:
    :practice: T

    There are errors in the indention in the following code.  Fix it to work correctly without errors.
    ~~~~
    def square(turtle):
    turtle.forward(100)
    turtle.right(90)
    turtle.forward(100)
    turtle.right(90)
    turtle.forward(100)
    turtle.right(90)
    turtle.forward(100)
    turtle.right(90)

    from turtle import *
    space = Screen()
    malik = Turtle()
        square(malik)           # draw a square with malik
    ====

    from unittest.gui import TestCaseGui
    import re

    class myTests(TestCaseGui):
        def countCopies(self, regex):
            matches = re.findall(regex, self.getEditorText())
            return len(matches)

        def testOne(self):
            self.assertEqual(self.countCopies("def square\(\s*turtle\s*\)"), 1, "Testing that you have the procedure")
            self.assertEqual(self.countCopies("\nsquare\(\s*malik\s*\)"), 1, "Testing that you used the procedure")

    myTests().main()

.. activecode:: cspnameprocedures_exercises2
    :autograde: unittest
    :nocodelens:
    :practice: T

    The following code has some syntax errors. There are two errors, but each error is repeated multiple times
    due to the author copy/pasting lines of code. Fix the errors so that the code runs and draws multiple squares.
    ~~~~
    def square(turtle, size):
        turtle.forward(Size)
        turtle.right(90)
        turtle.forward(Size)
        turtle.right(90)
        turtle.forward(Size)
        turtle.right(90)
        turtle.forward(Size)
        turtle.right(90)


    from turtle import *
    space = Screen()
    dave = Turtle()
    square(100)             # draw a square of size 100
    square(75)              # draw a square of size 75
    square(50)              # draw a square of size 50
    square(25)              # draw a square of size 25
    ====

    from unittest.gui import TestCaseGui
    import re

    class myTests(TestCaseGui):
        def countCopies(self, regex):
            matches = re.findall(regex, self.getEditorText())
            return len(matches)

        def testOne(self):
            self.assertEqual(self.countCopies("square\(\s*dave\s*,"), 4, "Testing that you pass dave to the square function.")
            self.assertEqual(self.countCopies("forward\s*\(\s*size\s*\)"), 4, "Testing that you fix size/Size issues.")

    myTests().main()

.. activecode:: cspnameprocedures_exercises3
    :autograde: unittest
    :nocodelens:
    :practice: T

    Define a function ``hexagon`` that has a turtle's name as its parameter.
    Your procedure should draw a hexagon (6 sides) where each side has a length of 50.
    The turtle should end up in its original position and facing.
    Remember the turns required (exterior angles) for a regular shape are :math:`360 / numSides`. 

    While you are developing your procedure, we will call the ``hexagon`` procedure just once.
    When you are done, uncomment the code at the bottom of the program to draw 5 more hexagons.

    :ref:`Turtle reference`
    ~~~~
    # define hexagon here

    from turtle import *
    space = Screen()
    brittany = Turtle()
    brittany.speed(10)

    #Draw one hexagon
    hexagon(brittany)

    ##For fun once hexagon is working - draw 5 more hexagons
    #for i in range(5):
    #    brittany.right(60)
    #    hexagon(brittany)
    ====

    from unittest.gui import TestCaseGui
    import re

    class myTests(TestCaseGui):
        def countCopies(self, regex):
            matches = re.findall(regex, self.getEditorText())
            return len(matches)

        def testOne(self):
            self.assertEqual(self.countCopies("def \w+\s*\(\w+\)"), 1, "Testing that you defined a procedure with one parameter.")
            self.assertGreaterEqual(self.countCopies("\s{4}\w+\.(right|left)\(\d*\)"), 6, "Testing that used enough turns.")
            self.assertGreaterEqual(self.countCopies("\s{4}\w+\.(right|left)\(60\)"), 6, "Testing that each turn was the right amount.")
            self.assertEqual(self.countCopies("\s{4}\w+\.(backward|forward)\(\d*\)"), 6, "Testing that you moved enough times.")
            self.assertEqual(self.countCopies("\s{4}\w+\.(backward|forward)\(50\)"), 6, "Testing that each move was the right length.")

    myTests().main()


.. activecode:: cspnameprocedures_exercises4
    :autograde: unittest
    :nocodelens:
    :practice: T

    Complete the body of the function ``colorRectangle(turtleName, width, colorValue)``.

    It should draw a rectangle that has a width specified by the parameter ``width`` and a height of 100.
    The turtle should be told to draw with a ``color`` specified by the parameter ``colorValue``.
    The turtle should end up in its original position and facing.

    Make sure to do ``pendown`` and ``color`` at the beginning of the procedure and then 
    do ``penup`` at the end of the procedure.

    There is code in the main part of the program to draw two different color rectangles. Once you
    get your procedure working, you can comment it out and uncomment the last 4 lines of the program
    to make a cool pattern.

    :ref:`Turtle reference`
    ~~~~
    def colorRectangle(turtleName, width, colorValue):
        # height will always be 100
        # your code here


    from turtle import *
    space = Screen()
    stu = Turtle()
    stu.speed(0)

    # test - comment these 3 lines out when done testing
    colorRectangle(stu, 50, "light blue")
    stu.goto(-100, 0)
    colorRectangle(stu, 50, "red")

    # fun design - uncomment these lines when done testing
    #for i in range(127, 0, -1):
    #    hexValue = format(i * 2, '02x')            # change i * 2 into a hexadecimal number
    #    colorString = "#" + "00" + (2 * hexValue)  # make a #XXXXXX formatted hex color using no red and two copies  of i*2
    #    colorRectangle(stu, i, colorString)

    ====

    from unittest.gui import TestCaseGui
    import re

    class myTests(TestCaseGui):
        def countCopies(self, regex):
            matches = re.findall(regex, self.getEditorText())
            return len(matches)

        def testOne(self):
            self.assertEqual(self.countCopies("\s{4}turtleName.forward\(\s*100\s*\)"), 2, "Testing that you told turtleName to move forward 100 twice (for the height).")
            self.assertEqual(self.countCopies("\s{4}turtleName.forward\(\s*width\s*\)"), 2, "Testing that you turtleName to move forward the right width twice.")
            self.assertEqual(self.countCopies("\s{4}\w+\.(right|left)\(\90\)"), 4, "Testing that told turtleName to use four turns.")
            self.assertEqual(self.countCopies("\s{4}turtleName.color\s*\(\s*colorValue\s*\)"), 1, "Testing that you told turtleName to use color colorValue.")
            self.assertEqual(self.countCopies("\s{4}turtleName.pendown\("), 1, "Testing that you told turtleName to put down the pen.")
            self.assertEqual(self.countCopies("\s{4}turtleName.penup\("), 1, "Testing that you told turtleName to pick up the pen.")

    myTests().main()


..     .. tabbed:: ch6ex6t

..         .. tab:: Question

..             Change the code to take 3 parameters, a turtle, a size that tells it how far to go, and an angle it tells the turtle to turn.

             .. activecode:: cspnameprocedures_exercises5
..                 :nocodelens:

..                 def move(turtle):
..                     turtle.forward(100)
..                     turtle.right(90)
..                     turtle.forward(100)
..                     turtle.right(90)
..                     turtle.forward(100)
..                     turtle.right(90)
..                     turtle.forward(100)
..                     turtle.right(90)

..                 from turtle import *
..                 space = Screen()
..                 t = Turtle()
..                 move(t, 100, 90)



.. #.

..     .. tabbed:: ch6ex7t

..         .. tab:: Question

..            The following code has three lines that need to be changed.  Fix the code to run correctly.

            .. activecode:: cspnameprocedures_exercises6
..                 :nocodelens:

..                 def square(turtle,size):
..                     turtle.forward(size)
..                     turtle.right(90)
..                     turtle.forward(size)
..                     turtle.right(90)
..                     turtle.forward(size)
..                     turtle.right(90)
..                     turtle.forward(size)
..                     turtle.right(90)


..                 from turtle import *	# use the turtle library
..                 space = Screen()    	# create a turtle screen (space)
..                 malik = Turtle()    	# create a turtle named malik
..                 square(100, malik) 	# draw a square of size 100
..                 square(malik)   	    # draw a square of size 75
..                 square(50)    	    # draw a square of size 50
..                 square(malik, 25)   	# draw a square of size 25




.. #.

..     .. tabbed:: ch6ex15t

..         .. tab:: Question

..            Create a procedure to draw a rectangle and call it.  Be sure to take the ``width`` and ``height`` of the rectangle as input to the procedure.

            .. activecode:: cspnameprocedures_exercises7
..                 :nocodelens:



.. #.

..     .. tabbed:: ch6ex17t

..         .. tab:: Question

..            Create a procedure to draw a triangle and call it.  Be sure to take the length of each side of the triangle as input to the procedure.

            .. activecode:: cspnameprocedures_exercises8
..                 :nocodelens:



.. #.

..     .. tabbed:: ch6ex18t

..         .. tab:: Question

..             Create a procedure that takes 7 paramters (turtle, distance, angle, and 4 color strings) and call the procedure to draw a square in 4 different colors.

             .. activecode:: cspnameprocedures_exercises9
..                 :nocodelens:
