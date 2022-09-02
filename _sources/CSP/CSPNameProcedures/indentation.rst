..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst

Order and Indentation
===========================

A function or procedure must be defined before you call it. So, like on the previous page, we will
typically first define our procedures, then write the main part of our program. Remember that a
function definition tells Python **how** to do a job. It won't actually do the job until it is
told to do the job with a procedure call.

Try running the program below.

.. activecode:: 5_order1
    :nocodelens:

    # main part of our program
    from turtle import *
    space = Screen()
    hector = Turtle()
    hector.forward(10)
    hop(hector)
    hector.forward(10)

    # define HOW to hop
    def hop(turtleName):
        turtleName.penup()
        turtleName.forward(10)
        turtleName.pendown()

You will get an error because ``hop`` is undefined when we reach it on line 6. Python has not
been told yet how to hop. Fix the program by moving the definition code (including the body)
up above the main part of the program.

Indentation
---------------------

Indentation shows Python (and humans) what code is contained inside other code. The instructions
that make up the body of a procedure **must** all be indented. Then, when we are done providing the
body, we stop indenting:

.. activecode:: 5_indentation
    :nocodelens:

    def square(turtleName):
        turtleName.forward(100)         # These are all indented to show they are inside square
        turtleName.right(90)
        turtleName.forward(100)
        turtleName.right(90)
        turtleName.forward(100)
        turtleName.right(90)
        turtleName.forward(100)
        turtleName.right(90)            # This is the last indented line for square

    def hop(turtleName):                # This is not indented. The hop definition is not a part of square
        turtleName.penup()              # Indented - it is a part of hop
        turtleName.forward(10)
        turtleName.pendown()            # Last line of hop

    # These are NOT indented. They are not part of either procedure. This is the main part of the program.
    from turtle import *
    space = Screen()
    malik = Turtle()
    square(malik)
    hop(malik)

When Python reads that program it does something like this:

* Ahhh... a definition for square, it must have some lines inside of its body, look for indented
  code. But don't run that code yet!
* The next 8 lines are indented, they are the body for square.
* Oh, another definition. Look for a body for this function. Don't do it yet.
* The next three lines are indented, they are the body for hop.
* ``from turtle import *`` - not indented run this now
* Next two lines - same - not indented run this now
* ``square(malik)`` - not indented - run this now. Now it is time to go do the square. When we
  are done with it, come back to this point and continue running.
* ``hop(malik)`` - not indented - run this now. Now it is time to go do the hop. When we
  are done with it, come back to this point and continue running.


Indentation Rules
---------------------

In Python, indentation is a syntax rule. It is not optional. If you do not indent correctly,
Python will not understand your code.

When a line of code in this book is indented, we indent it using **4 spaces**. Python will
let you use as many spaces as you want to indent, but once you start a function, you must use
the same amount of indentation for each line. You can't use 2 spaces on one line, then 3 on
the next. It is best to pick one distance and use that for all of your indentation.

.. hint::

    Pressing the **tab** key while on a line will shift it right 4 spaces. Pressing **shift-tab**
    will move the line left 4 spaces. You can also select multiple lines of code and use **tab**
    or **shift-tab** to move all the lines at once.

See the video below for a hint on how to solve the next mixed up code problem. 

.. the video is IndentVideo.mov

.. youtube:: 3oYHEHTt2hM
    :width: 640
    :height: 480
    :align: center
   
.. parsonsprob:: 5_3_3_Triangle_Procedure
    :numbered: left
    :adaptive:

    The following code should define a procedure that draws a triangle, but it may be mixed up *and may contain extra (unused) code*.  Drag the needed code to the right side in the correct order.  **Remember that the statements in the procedure must be indented!**  To indent a block drag it further right. 
    -----
    def triangle(turtle):
    =====
        turtleName.left(60)
        turtleName.forward(100)
        turtleName.right(120)
        turtleName.forward(100)
        turtleName.right(120)
        turtleName.forward(100)
        turtleName.right(120)  
    ===== 
    from turtle import *
    space = Screen()
    bianca = Turtle()
    triangle(bianca)
    ===== 
        endDef #distractor


Now fix the indentation in this code sample so it works correctly. Try using **tab** and
**shift-tab** to move lines right or left. A good trick for fixing a line is to move it
all the way left and then move it back to the right if it needs to be indented.

.. activecode:: T_Indentation_Fix
    :nocodelens:

    # define HOW to draw a T
    def drawT(turtleName):
    turtleName.left(90)
        turtleName.forward(100)
        turtleName.right(90)
         turtleName.forward(50)
        turtleName.right(180)
    turtleName.forward(100)

        # make a turtle and do the drawT procedure with it
        from turtle import *
    space = Screen()
    arnold = Turtle()
      drawT(arnold)
