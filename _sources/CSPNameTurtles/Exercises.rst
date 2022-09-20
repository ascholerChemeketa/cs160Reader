..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".



Chapter Exercises
--------------------

.. activecode:: cspnameturtles_exercises1
    :autograde: unittest
    :nocodelens:
    :practice: T

    There are 3 syntax errors in the following code.  Fix it to work correctly without errors.
    ~~~~
    from turtle import *
    space = screen()
    alex = Turtle
    alex.Forward(150)
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(alex.xcor(), 150, "Testing alex's x position." )

    myTests().main()


.. activecode:: cspnameturtles_exercises2
    :autograde: unittest
    :nocodelens:
    :practice: T

    The code below is supposed to make alex move North 150 pixels and then move East 75, but the
    lines are in the wrong order. Fix it so that it runs properly.
    ~~~~
    alex = Turtle()
    alex.forward(150)
    alex.right(90)
    from turtle import *
    alex.left(90)
    space = Screen()
    alex.forward(75)
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(alex.xcor(), 75, "Testing alex's x position." )
            self.assertEqual(alex.ycor(), 150, "Testing alex's y position." )

    myTests().main()


.. activecode:: cspnameturtles_exercises3
    :nocodelens:

    
    Use the area below to draw to draw your initials in block style using different
    colors for each letter.

    This problem is not auto-checked, you will have to decide if it is correct or not.
    ~~~~
    from turtle import *
    space = Screen()
    jessica = Turtle()

.. activecode:: cspnameturtles_exercises4
    :nocodelens:
    :practice: T

    Create a drawing that uses a  mix of straight lines (possibly filled in) and one or more
    circles created by making large dots.

    This problem is not auto-checked, you will have to decide if it is correct or not.
    ~~~~
    from turtle import *
    space = Screen()
    antonio = Turtle()

.. #.

..     .. tabbed:: ch4ex3t

..         .. tab:: Question

..            The following program is missing things on lines 1, 2, and 3.  Add the missing parts.

            .. activecode:: cspnameturtles_exercises5
..                 :nocodelens:

..                 from
..                 space =
..                 alex =
..                 alex.forward(150)



.. #.

..     .. tabbed:: ch4ex4t

..         .. tab:: Question

..             Rearrange the code so it draws a square.

             .. activecode:: cspnameturtles_exercises6
..                 :nocodelens:

..                 from turtle import *
..                 franklin = Turtle()
..                 space = Screen()
..                 franklin.left(90)
..                 franklin.forward(100)
..                 franklin.forward(100)
..                 franklin.left(90)
..                 franklin.forward(100)
..                 franklin.left(90)
..                 franklin.forward(100)



.. #.

..     .. tabbed:: ch4ex5t

..         .. tab:: Question

..            The following code has 3 syntax errors.  Fix the errors so that the code runs.

            .. activecode:: cspnameturtles_exercises7
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 alex = turtle()
..                 alex.Forward(150)
..                 alex.turn(90)
..                 alex.forward(75)



.. #.

..     .. tabbed:: ch4ex6t

..         .. tab:: Question

..             Fix the 6 errors in the following code.

             .. activecode:: cspnameturtles_exercises8
..                 :nocodelens:

..                 from turtle import
..                 space = Screen
..                 john = turtle()
..                 john.Forward(100)
..                 john.Left(120)
..                 john.forward(100)
..                 john.left(120)
..                 john.Forward(100)



.. #.

..     .. tabbed:: ch4ex7t

..         .. tab:: Question

..            The following code draws two lines of a rectangle.  Add code to finish drawing the rectangle.

            .. activecode:: cspnameturtles_exercises9
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 alex = Turtle()
..                 alex.forward(150)
..                 alex.left(90)
..                 alex.forward(75)



.. #.

..     .. tabbed:: ch4ex8t

..         .. tab:: Question

..             You need to fix or add 4 things so that the code runs.

             .. activecode:: cspnameturtles_exercises10
..                 :nocodelens:

..                 space = Screen()
..                 hi = Turtle()
..                 hi.color(red)
..                 hi.Forward("50")
..                 hi.right(90)
..                 hi.color("BLUE")
..                 hi.forward(50)



.. #.

..     .. tabbed:: ch4ex9t

..         .. tab:: Question

..            The following code is missing 3 lines that do the required set-up.  Add them so that the code runs.

            .. activecode:: cspnameturtles_exercises11
..                 :nocodelens:

..                 alex.forward(150)
..                 alex.left(90)
..                 alex.forward(75)



.. #.

..     .. tabbed:: ch4ex10t

..         .. tab:: Question

..             Finish the code so that it draws an equilateral triangle.

             .. activecode:: cspnameturtles_exercises12
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 alex = Turtle()
..                 alex.forward(150)


.. #.

..     .. tabbed:: ch4ex12t

..         .. tab:: Question

..             Fix the 5 errors.

             .. activecode:: cspnameturtles_exercises13
..                 :nocodelens:

..                 From turtle Import *
..                 space = screen()
..                 bob = turtle
..                 Bob.forward("100")



.. #.

..     .. tabbed:: ch4ex13t

..         .. tab:: Question

..            Create a drawing with at least 3 colors and using at least 3 turtles.

            .. activecode:: cspnameturtles_exercises14
..                 :nocodelens:



.. #.

..     .. tabbed:: ch4ex14t

..         .. tab:: Question

..             Fix the errors.

             .. activecode:: cspnameturtles_exercises15
..                 :nocodelens:

..                 from turtle import *
..                 jack = Screen()
..                 jill = Turtle()
..                 jill.sizepen(10)
..                 jill.forward(10)
..                 jack.sizepen(15)
..                 jack.forward(10)



.. #.

..     .. tabbed:: ch4ex15t

..         .. tab:: Question

..            Write code below to draw a diamond shape.

            .. activecode:: cspnameturtles_exercises16
..                 :nocodelens:



.. #.

..     .. tabbed:: ch4ex16t

..         .. tab:: Question

..             Write code that spells CS in block letters (it will look more like C5).

             .. activecode:: cspnameturtles_exercises17
..                 :nocodelens:



.. #.

..     .. tabbed:: ch4ex17t

..         .. tab:: Question

..            Write code below to draw a star like this picture.

..            .. image:: Figures/star.png

            .. activecode:: cspnameturtles_exercises18
..                 :nocodelens:



.. #.

..     .. tabbed:: ch4ex18t

..         .. tab:: Question

..             Write code to draw a "V" starting from the center with each side a different color and only turning the turtle twice and no using penup or pendown.

             .. activecode:: cspnameturtles_exercises19
..                 :nocodelens:



.. #.

..     .. tabbed:: ch4ex19t

..         .. tab:: Question

..            Write code below to draw at least one of your initials in block style.

            .. activecode:: cspnameturtles_exercises20
..                :nocodelens:



.. #.

..     .. tabbed:: ch4ex20t

..         .. tab:: Question

..             Use 4 turtles and 4 colors to draw a big plus sign with each segment
..             of the plus sign being a different color.

             .. activecode:: cspnameturtles_exercises21
..                 :nocodelens: