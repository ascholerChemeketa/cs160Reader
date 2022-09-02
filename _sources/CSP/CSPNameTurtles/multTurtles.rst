..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst
    
Single and Multiple Turtles
=================================

The program below draws a shape we have seen before.

.. fillintheblank:: 4_5_1_mystery shape

   What shape will the program below draw when you click on the Run button?

   -    :^triangle$|^Triangle$|^TRIANGLE$: Correct!
        :.*: Try to follow the directions as if you are the turtle

.. activecode:: 4_5_2_mystery
    :nocodelens:

    from turtle import *
    space = Screen()
    zari = Turtle()
    zari.setheading(90)
    zari.forward(100)
    zari.right(120)
    zari.forward(100)
    zari.right(120)
    zari.forward(100)
    zari.right(120)

This works because the turtle ``zari`` is keeping track of its state as we call different procedures.
When we say ``forward``, the actual direction ``zari`` moves depends on what turns it has done so far.

If we introduce another turtle and use it to run some of the procedures, we will not get the same
shape.

.. activecode:: Two_Turtles
    :nocodelens:

    from turtle import *
    space = Screen()
    zari = Turtle()
    chad = Turtle()                 # Make a second turtle named chad
    chad.color("orange")            # Change chad's color to make it clear what it draws

    zari.setheading(90)             # Have zari start drawing the shape
    zari.forward(100)
    zari.right(120)
    zari.forward(100)
    zari.right(120)

    chad.forward(100)               # Use chad for the last two procedures
    chad.right(120)

Every turtle object has its own state - it keeps track of its own position and color.  So, when
we created chad his position wasn't the same as zari's - all turtles start at the center of the
screen (0, 0). Similarly, his direction starts out at the default (East).

**Mixed up programs**

.. parsonsprob:: 4_5_4_JandT
    :numbered: left
    :adaptive:

    The following program has one turtle, "jamal", draw a capital L in blue and then another, "tina", draw a line to the west in orange as shown below.  The program should do all set-up, have "jamal" draw the L, and then have "tina" draw the line. Drag the blocks of statements from the left column to the right column and put them in the right order.  Then click on *Check* to see if you are right.

    .. image:: Figures/TwoTurtles1N.png
        :width: 200px
        :align: center
    -----
    from turtle import *
    wn = Screen()
    =====
    jamal = Turtle()
    jamal.pensize(10)
    jamal.color("blue")
    =====
    jamal.right(90)
    jamal.forward(150)
    =====
    jamal.left(90)
    jamal.forward(150) #paired
    =====
    jamal.left(90)
    jamal.forward(75)
    =====
    jamal.right(90)
    jamal.forward(75) #paired
    =====
    tina = Turtle()
    tina.pensize(10)
    tina.color("orange")
    =====
    tina = Turtle()
    tina.pensize(10)
    tina.color(orange) #paired
    =====
    tina.left(180)
    tina.forward(75)

.. parsonsprob:: 4_5_5_JandT2
    :numbered: left
    :adaptive:

    The following program has one turtle, "jamal", draw a line to the north in blue and then another, "tina", draw a line to the east in orange as shown below.  The program should import the turtle module, get the window to draw on, create the turtle "jamal", have it draw a line to the north, then create the turtle "tina", and have it draw a line to the east. Drag the blocks of statements from the left column to the right column and put them in the right order.  Then click on *Check* to see if you are right.

    .. image:: Figures/TwoTurtlesLN.png
        :width: 200px
        :align: center
    -----
    from turtle import *
    =====
    from turtle #paired
    =====
    wn = Screen()
    =====
    jamal = Turtle()
    =====
    jamal = turtle() #paired
    =====
    jamal.color("blue")
    jamal.pensize(10)
    jamal.left(90)
    jamal.forward(150)
    =====
    tina = Turtle()
    tina.pensize(10)
    =====
    tina.color("orange")
    tina.forward(150)
    =====
    tina.color("orange")
    tina.Forward(150) #paired



