..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Errors in Programs
================================

.. index::
    single: logic errors
    single: syntax errors
    pair: error; logic
    pair: error; syntax

Below are some programs that have errors you need to fix. Errors in programs fall into two
major categories. **Syntax errors** are errors in code that violate the rules of the language.
Syntax errors will either prevent the program from running or prevent a particular line
from running correctly. **Logic errors** are pieces of code that follow the rules of the
language correctly, but do not do what the programmer actually wants.

Here are some examples of the two types of errors as we might see them in turtle programs:

**Syntax errors:**

* Case matters in Python so ``screen`` is not the same as ``Screen``
* open and close parentheses ``()`` are required after every function and procedure call, even
  if it doesn't take any input.
* Spelling matters. ``froward`` is not the same as ``forward``.

Look back at previous programs if you need an example of correct syntax for a particular
function or procedure.

**Logic errors:**

* If instructions are in the wrong order, or missing, the turtle will not draw what we intended.
* If a procedure call like ``left(90)`` leaves out the angle - ``left`` - or uses the wrong
  angle, the turtle will not draw what we intend.

Debugging Programs
---------------------

.. index::
    single: debugging

A major part of writing programs is **debugging** them - finding and fixing **bugs**, or errors,
in the code. Debugging code is often time harder than writing it in the first place. It is easy
for a human to read code and mentally fill in gaps - to make assumptions about how the code will
work that are not actually true.

So how do you debug a program?

* Read carefully. Slow down, read each line out loud.
* Think about what each line is trying to do. Try to explain each line in English and think about
  what it is trying to accomplish.
* Make sure each line of code is doing what you intended. To do this, you can:  

  * Use a tool like the Codelens to run the program one line at a time. Examine all of the variables
    before and after each line runs. (Unfortunately, Codelens does not work for turtle programs.)
  * If you are working with strings or numbers, add ``print()`` commands to print out the result of
    each line of code. Instead of doing a bunch of calculations and then printing out the final
    answer, print out the result of each step.

Related to the idea of verifying each line is the idea you should focus your attention on one small
part of the program at a time. Do your best to isolate one part of the code from everything else
so there is less to worry about. One way to do this is by **commenting out** code. Commenting out
code means putting a ``#`` at the start of one or more lines of code to turn them into comments so
the computer ignores them.

In the program below, we have commented out lines 5-7. Try running the program - it won't try
to do anything after the ``alex.forward(150)``. Because it successfully creates the turtle and
does the move forward, we are pretty sure those lines are working correctly. 

The full program is supposed to draw a square, but there are some bugs.
Try turning one line of code at a time back on by removing the ``#`` at the start. Then run the
program. Does the line seem to do its job? If so, go to the next line. If not, stop and try to fix
that line before moving on. 

.. activecode:: Turtle_Error1
    :nocodelens:

    from turtle import *
    space = Screen()
    alex = Turtle()
    alex.forward(150)        # This is the last active line of code
    #alex.left               # This line is turned off and so is every line after it
    #alex.Forward(150)
    #alex.left(90)
    #alex.forward(150)
    #alex.left90)
    #alex.forward(150)
    #alex.left(90)


The following example has 3 errors.  Can you fix the errors so that the code runs correctly
to print a capital L? You may want to start by commenting out all the lines and turn them on
one by one like we did in the last exercise.

.. activecode:: Turtle_Error2
    :nocodelens:

    from turtle import *    # use the turtle library
    space = screen()        # create a turtle space
    alisha = Turtle()       # create a turtle named alisha
    alisha.right(90)        # turn alisha south
    alisha.forward          # move forward by 150 units
    alisha.left(90)         # turn to face east
    alisha.Forward(75)      # move forward by 75 units

The following example has 4 errors.  Can you fix the errors so that the code runs correctly
to print a capital C?

.. danger:: 
    
    One of the errors in this one is tricky. It won't cause an immediate problem, but will
    cause future lines to misbehave. Errors like this are especially hard to debug. If a
    line of code is not doing its job, and you are 100% certain it is right, you may have
    to go re-examine earlier lines of code that you thought were correct.

.. activecode:: Turtle_Error3
    :nocodelens:

    from turtle Import *    # use the turtle library
    space = Screen()        # create a turtle space
    Alex = Turtle           # create a turtle named alex
    alex.left(180)          # turn alex by 180 degrees
    alex.forward(75)        # move forward by 75 units
    alex.turn(90)           # turn left 90 degrees
    alex.forward(100)       # more forward by 100 units
    alex.left(90)           # turn left 90 degrees
    alex.forward            # move forward by 75 units


Use the area below to try to draw a block letter or number.

.. activecode:: Turtle_Letter_Own
    :nocodelens:






.. **Mixed up programs**

.. .. parsonsprob:: 5_2_1_DrawZ
..    :numbered: left
..    :adaptive:

..    The following program uses a turtle to draw a capital Z as shown below, but the lines are mixed up.  The program should do all necessary set-up: import the turtle module, get the space to draw on, and create the turtle.  Then it should draw the lines for the Z in the order shown by the numbers on the picture.  Drag the needed blocks of statements from the left column to the right column and put them in the right order.  There may be extra blocks that are not needed in a correct solution.  Then click on *Check* to see if you are right.

..    .. image:: Figures/DrawZ.png
..       :width: 200px
..       :align: center

..    -----
..    from turtle import *
..    =====
..    from turtle Import * #paired
..    =====
..    space = Screen()
..    =====
..    space = screen() #paired
..    =====
..    alex = Turtle()
..    =====
..    alex = turtle() #paired
..    =====
..    alex.forward(50)
..    alex.right(120)
..    =====
..    alex.forward(50)
..    alex.turn(120) #paired
..    =====
..    alex.forward(100)
..    =====
..    alex.left(120)
..    =====
..    alex.forward(50)


.. .. parsonsprob:: 5_2_1_DrawN
..    :numbered: left
..    :adaptive:

..    The following program uses a turtle to draw a capital N as shown below, but the lines are mixed up.  The program should do all necessary set-up: import the turtle module, get the space to draw on, and create the turtle.  Remember that the turtle starts off facing east when it is created.  Then it should draw the lines for the N in the order shown by the numbers on the picture.  Drag the needed blocks of statements from the left column to the right column and put them in the right order. There may be some extra blocks that are not needed in a correct solution.  Then click on *Check* to see if you are right.

..    .. image:: Figures/DrawN4.png
..       :width: 200px
..       :align: center
..    -----
..    from turtle import *
..    =====
..    space = Screen()
..    =====
..    ella = Turtle()
..    =====
..    ella = Turtle #paired
..    =====
..    ella.left(90)
..    ella.forward(100)
..    =====
..    ella.right(90)
..    ella.forward(100) #paired
..    =====
..    ella.right(150)
..    ella.forward(116)
..    =====
..    ella.left(150)
..    ella.forward(116) #paired
..    =====
..    ella.left(150)
..    =====
..    ella.forward(100)
..    =====
..    ella.Forward(100) #paired