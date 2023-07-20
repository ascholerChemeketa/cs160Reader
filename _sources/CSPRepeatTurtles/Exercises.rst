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
---------------------

.. activecode:: csprepeatturtles_exercises1
    :autograde: unittest
    :nocodelens:

    The code currently draws a square. Change it so that it draws a triangle. Do so by modifying the loop and the turn that the turtle makes without modifying other code.
    
    Remember that to make a complete shape, the turns must sum to 360 degrees.

    :ref:`Turtle reference`

    ~~~~
    from turtle import *
    space = Screen()
    alisha = Turtle()
    alisha.setheading(90)
    for sides in range(4):
        alisha.forward(100)
        alisha.right(90)
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertRegex(self.getEditorText(), r"for \w+ in range\(\s*3\s*\):", "Testing that your new loop is correct")
            self.assertRegex(self.getEditorText(), r"alisha\.right\(\s*120\s*\)", "Testing that your new turn is correct")

    myTests().main()


.. activecode:: csprepeatturtles_exercises2
    :autograde: unittest
    :nocodelens:

    Fix the errors in the code so that it draws an octagon. Do so by fixing the issues in the loop based code. There are three issues to fix.

    Remember that to make a complete shape, the turns must sum to 360 degrees.

    :ref:`Turtle reference`

    ~~~~
    from turtle import *
    space = Screen()
    steven = Turtle()
    for sides in range(8)
        steven.forward(45)
    steven.right(50)
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertRegex(self.getEditorText(), r"for \w+ in range\(\s*\d\s*\):", "Testing that the loop syntax is fixed")
            self.assertRegex(self.getEditorText(), r"\s{4}steven\.right", "Testing that the indentation is cleaned up")
            self.assertRegex(self.getEditorText(), r"steven\.right\(\s*45\s*\)", "Testing that the turn is now correct")

    myTests().main()

.. activecode:: csprepeatturtles_exercises3
    :autograde: unittest
    :nocodelens:

    Fix the indention in the code below to correctly draw 20 pentagons (5 sided polygons).

    Make sure to use four spaces for each indentation level (the tab key will automatically use 4 spaces).

    :ref:`Turtle reference`

    ~~~~
    from turtle import *
    import sys
    sys.setExecutionLimit(50000)
    space = Screen()
    zoe = Turtle()
    zoe.speed(0)

    for repeats in range(20):
    zoe.forward(10)
    zoe.right(18)

    for sides in range(5):
    zoe.forward(50)
    zoe.right(72)
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertRegex(self.getEditorText(), r"\nfor repeats", "Testing line 8")
            self.assertRegex(self.getEditorText(), r"\n\s{4}zoe.forward\(10", "Testing line 9")
            self.assertRegex(self.getEditorText(), r"\n\s{4}zoe.right\(18", "Testing line 10")
            self.assertRegex(self.getEditorText(), r"\n\s{4}for sides", "Testing line 12")
            self.assertRegex(self.getEditorText(), r"\n\s{8}zoe.forward\(50", "Testing line 13")
            self.assertRegex(self.getEditorText(), r"\n\s{8}zoe.right\(72", "Testing line 14")

    myTests().main()


.. mchoice:: csprepeatturtles_exercises4
    :answer_a: range(10, 0, -2)
    :answer_b: range(10, 1, 2)
    :answer_c: range(10, 2, -2)
    :answer_d: range(10, 3, 2)
    :correct: a
    :feedback_a: Correct
    :feedback_b: That counts up by 2's
    :feedback_c: That recipe would not generate 2 because it is the stop value
    :feedback_d: This recipe counts up by 2's

    Which is range recipe would generate the sequence: 10, 8, 6, ... 2
        

.. fillintheblank:: csprepeatturtles_exercises5

    Write the correct recipe to fill in the ____________ in the code below to generate the pattern
    5, 25, 45, ... 105. Use the smallest possible value for your stopValue. 
    
    Just write what would replace the blank below. (Don't include "range"
    or the parentheses in your answer; do include commas).

    ``range(____________)``

    - :^\s*5\s*,\s*106\s*,\s*20\s*$: Correct!
      :^\s*\d+\s*,\s*106\s*,\s*20\s*$: Wrong startValue
      :^\s*\d+\s*,\s*106\s*,\s*\d+\s*$: Wrong step
      :^\s*\d+\s*,\s*\d+\s*,\s*\d+\s*$: Wrong stopValue - use the smallest possible number
      :.*: Make sure you provide something that looks like ``startValue, stopValue, step``


.. activecode:: csprepeatturtles_exercises6
    :nocodelens:

    We want to make a series of rectangles such that the first one is 10x90, the next
    is 20x80, the next is 30x70, ... until we draw one that is 90x10. Doing so will
    make a "staircase grid" like the one shown below:
    
    .. image:: Figures/TurtleStairs.png
        :width: 150px
        :align: center

    Below is a program with ``rectangle`` already defined. Add code that uses a for
    loop to call the procedure with the correct values for its parameters. Make sure
    that the 90 width and 10 height rectangle is the first one you draw. You should
    only need one loop - **it must count down from 90 to 10**.

    Start by writing a loop that just prints out the values 90, 80, 70, ..., 10. Then
    you can modify the code to use those values to draw rectangles of the appropriate
    widths and heights.

    Hint: The values we use for width and height will
    always add to 100. So if we call one of them :math:`w`, the other must be :math:`100 - w`.

    The autograder will not verify everything about your program. It is up to you to
    determine if your program is correct or not.

    :ref:`Turtle reference`

    ~~~~
    def rectangle(turtleName, width, height):
        for x in range(2):
            turtleName.forward(width)
            turtleName.left(90)
            turtleName.forward(height)
            turtleName.left(90)

    from turtle import *
    space = Screen()
    ralph = Turtle()
    ralph.speed(10)

    #Your code here

    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertRegex(self.getEditorText(), r"\nfor \w+ in range", "Testing you have a loop")
            self.assertRegex(self.getEditorText(), r"range\s*\(\s*90\s*,\s*\d\s*,\s*-10\s*\)", "Testing your loop generates the right values. It must count from 90 down to 10.")
            self.assertRegex(self.getEditorText(), r"range\s*\(\s*90\s*,\s*\d\s*,\s*-10\s*\)", "Testing your loop generates the right values")
            self.assertRegex(self.getEditorText(), r"\n\s{4}rectangle\(\s*ralph", "Testing you call rectangle in the loop")

    myTests().main()

..

..     .. tabbed:: ch8ex1t

..         .. tab:: Question

..             Fix 4 syntax errors in the code below to correctly draw a square

.. ..             .. activecode::activecode:: csprepeatturtles_exercises7
..                 :nocodelens:

..                 from turtle import
..                 space = screen()
..                 alisha = Turtle
..                 alisha.setheading(90)
..                 for sides in [1,2,3]:
..     	            alisha.forward(100)
..       	            alisha.right(90)




.. #.

..     .. tabbed:: ch8ex3t

..         .. tab:: Question

..            Fix the code below to draw a rectangle. You will need to fix the indention on 3 lines.

..             .. activecode::activecode:: csprepeatturtles_exercises8
..                 :nocodelens:

..                 from turtle import *
..                     space = Screen()
..                 carlos = Turtle()

..                 # repeat 2 times
..                 for i in [1,2]:
..                     carlos.forward(175)
..                     carlos.right(90)
..                 carlos.forward(150)
..                 carlos.right(90)


.. #.

..     .. tabbed:: ch8ex5t

..         .. tab:: Question

..            Fill in values for ``x`` on line 5 and ``y`` on line 7 to allow the code below to correctly draw a pentagon.

..             .. activecode::activecode:: csprepeatturtles_exercises9
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 will = Turtle()
..                 will.setheading(90)
..                 for sides in range(x):
..       	            will.forward(100)
..       	            will.right(y)




.. #.

..     .. tabbed:: ch8ex6t

..         .. tab:: Question

..             Complete the code on lines 5 and 7 to draw a hexagon.

.. ..             .. activecode::activecode:: csprepeatturtles_exercises10
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 mia = Turtle()
..                 mia.setheading(90)
..                 for sides in
..                     mia.forward(40)
..                     mia.



.. #.

..     .. tabbed:: ch8ex7t

..         .. tab:: Question

..            Finish the code on lines 1, 2, 3, 6 and 8 below to correctly draw a triangle.

..             .. activecode::activecode:: csprepeatturtles_exercises11
..                 :nocodelens:

..                 from
..                 space =
..                 marie =

..                 # repeat
..                 for i in range():
..                     marie.forward(100)
..                     marie.left()



.. #.

..     .. tabbed:: ch8ex8t

..         .. tab:: Question

..             Finish the code to draw a 15 sided figure with each side having a length of 40.

.. ..             .. activecode::activecode:: csprepeatturtles_exercises12
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 hi = Turtle()




.. #.

..     .. tabbed:: ch8ex10t

..         .. tab:: Question

..             The procedure below draws a square. Write code that uses the procedure to draw two squares connected by a line 50 units in length.

.. ..             .. activecode::activecode:: csprepeatturtles_exercises13
..                 :nocodelens:

..                 def square(aTurtle):
..                     for sides in range(4):
..                         aTurtle.forward(100)
..                         aTurtle.right(90)



.. #.

..     .. tabbed:: ch8ex11t

..         .. tab:: Question

..            Fix the following code below to draw a circle of turtles using the ``stamp`` procedure.  You will need to change 3 lines.

..             .. activecode::activecode:: csprepeatturtles_exercises14
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 jose = Turtle()
..                 jose.shape("turtle")
..                 jose.
..                 for size in range():
..                     jose.forward(50)
..                     jose.stamp()
..                     jose.forward()
..                     jose.right(36)



.. #.

..     .. tabbed:: ch8ex12t

..         .. tab:: Question

..                 Complete the code where the ``x's`` are so that the code draws 20 triangles.

.. ..             .. activecode::activecode:: csprepeatturtles_exercises15
..                 :nocodelens:

..                 from turtle import *
..                 from sys import *
..                 setExecutionLimit(50000)
..                 space = Screen()
..                 t = x
..                 t.setheading(90)
..                 for repeats in range(x):
..                     t.color("blue")
..                     t.forward(10)
..                     t.left(18)
..                     for sides in range(x):
..                         t.color("green")
..                         t.forward(x)
..                         t.right(x)



.. #.

..     .. tabbed:: ch8ex13t

..         .. tab:: Question

..            Rewrite the following code to create a procedure to draw a square with a turtle.  Pass the turtle and the size of the square as input (parameters) to the procedure.

..             .. activecode::activecode:: csprepeatturtles_exercises16
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 alisha = Turtle()
..                 alisha.setheading(90)
..                 for sides in [1,2,3,4]:
..     	            alisha.forward(100)
..       	            alisha.right(90)




.. #.

..     .. tabbed:: ch8ex14t

..         .. tab:: Question

..             Currently, the code has a turtle drawing a straight line. Add 2 lines of code (1 before the loop and 1 in the loop) to make the turtle stamp in the line.

.. ..             .. activecode::activecode:: csprepeatturtles_exercises17
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 tess = Turtle()
..                 tess.color("blue")
..                 tess.shape("turtle")


..                 for size in range(5, 60, 2):

..                     tess.forward(size)



.. #.

..     .. tabbed:: ch8ex15t

..         .. tab:: Question

..            Rewrite the following code to create a procedure to draw a rectangle with a turtle.  Pass the turtle and the length and width of the rectangle as parameters to the procedure.

..             .. activecode::activecode:: csprepeatturtles_exercises18
..                 :nocodelens:

..                 from turtle import *
..                 space = Screen()
..                 carlos = Turtle()

..                 # repeat 2 times
..                 for i in [1,2]:
..                     carlos.forward(175)
..                     carlos.right(90)
..                     carlos.forward(150)
..                     carlos.right(90)



.. #.

..     .. tabbed:: ch8ex16t

..         .. tab:: Question

..             Complete the code so that the turtle stamps a square pattern 20 times (it should look like a circle enclosing a couple of circles if you use a turn angle of 18)

.. ..             .. activecode::activecode:: csprepeatturtles_exercises19
..                 :nocodelens:

..                 from turtle import *
..                 from sys import *
..                 setExecutionLimit(50000)
..                 space = Screen()
..                 zoe = Turtle()



.. #.

..     .. tabbed:: ch8ex17t

..         .. tab:: Question

..            Create a procedure to draw 4 turtles at the 4 corners of a square using the ``stamp`` procedure.

..             .. activecode::activecode:: csprepeatturtles_exercises20
..                 :nocodelens:



.. #.

..     .. tabbed:: ch8ex18t

..         .. tab:: Question

..             Create a procedure that takes in a turtle and integer parameter. The procedure should stamp a turtle shape into a circle in 20 steps with the forward number being equal to the parameter.

.. ..             .. activecode::activecode:: csprepeatturtles_exercises21
..                 :nocodelens:




.. #.

..     .. tabbed:: ch8ex19t

..         .. tab:: Question

..            Write a procedure that takes a turtle and a number of sides as parameters and draws a polygon with that number of sides.

..             .. activecode::activecode:: csprepeatturtles_exercises22
..                :nocodelens:



.. #.

..     .. tabbed:: ch8ex20t

..         .. tab:: Question

..             Write a procedure that takes a turtle, an int for the number of sides for a polygon, and an int for the number of times to draw that polygon. The procedure should draw that polygon that number of times in a circular path.

.. ..             .. activecode::activecode:: csprepeatturtles_exercises23
..                 :nocodelens:



