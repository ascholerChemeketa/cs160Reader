..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../CSP/csp_global.rst

A Regular Polygon Recipe
===========================

You undoubtedly have recognized that there are some similarities to drawing shapes like the
square or hexagon. It turns out there is a general pattern to drawing any regular (all sides are
the same length and all angles are the same size) geometric shape. 

Let's look at a few more examples. Here's a triangle:

.. activecode:: csprepeatturtles_turtlegeom1
    :nocodelens:

    from turtle import *
    space = Screen()
    avery = Turtle()
    avery.begin_fill()

    for side in range(3):
        avery.forward(100)
        avery.right(120)
        
    avery.end_fill()

And here's a pentagon:

.. activecode:: csprepeatturtles_turtlegeom2
    :nocodelens:

    from turtle import *
    space = Screen()
    will = Turtle()
    will.begin_fill()

    for side in range(5):
        will.forward(100)
        will.right(72)

    will.end_fill()

Notice that the only code that is "inside" the ``for`` loop (indented after it) are the
parts we want to repeat. We only want to ``end_fill`` once, so it is not indented. It is
not part of the code that is repeated.

The only two things that are different between the two programs are the number of repetitions
in the loop, and the angle that the turtle turns.

Any time we want to make a regular polygon, we need the turns to all sum up to :math:`360`. 
In the triangle example :math:`3 * 120 = 360` and in the pentagon example :math:`5 * 72 = 360`.

Change the ``??`` in line 7 below to the amount to turn each time to draw a 12 sided polygon
(called a dodecagon).  If you get it right the turtle will draw a 12 sided closed polygon.

.. activecode:: csprepeatturtles_turtlegeom3
    :nocodelens:

    from turtle import *
    space = Screen()
    mia = Turtle()
    mia.begin_fill()

    for sides in range(12):
        mia.forward(40)
        mia.right(??)
        
    mia.end_fill()

.. mchoice:: csprepeatturtles_turtlegeom4
   :answer_a: 15
   :answer_b: 30
   :answer_c: 12
   :answer_d: 90
   :correct: b
   :feedback_a: This one will not close
   :feedback_b: Exactly! 12 * 30 = 360
   :feedback_c: No, 12 * 12 is 144, which is not a multiple of 360
   :feedback_d: This one will generate a square, three times. 12 * 90 = 1080 = 360 * 3

   How much does ``mia`` need turn in the program above to create a closed dodecagon
   (12-sided figure)?  Only one of these works.

Now that we have identified a pattern, it is a bit silly to write separate functions
like ``square`` and ``dodecagon`` for all the shapes. They are all basically the same and
we don't like repeating ourselves.

In this case, the way to avoid repeating ourselves is to make an abstraction - a procedure
that can draw any ``polygon``. It will take parameters to control how many sides there
are and how long to make each side.


.. parsonsprob:: csprepeatturtles_turtlegeom5
    :numbered: left
    :adaptive:

    Arrange the blocks in the correct order and indentation to make the ``polygon`` procedure.
    This procedure will use ``begin_fill`` and ``end_fill`` to make the shapes be colored.

    Those commands do not need to be repeated - we only want to use each one once - so make
    sure they are not 

    You will not need to use all of them.

    -----
    def polygon(turtleName, sides, size)
    =====
        turtleName.begin_fill()
    =====
        for s in range(sides):
    =====
        for s in range(size) #paired
    =====
            turtleName.forward(size)
    =====
            turtleName.forward(sides) #paired
    =====
            turtleName.left(360 / sides)
    =====
            turtleName.turn(sides / 360) #paired
    =====
        turtleName.end_fill()

Once you have figured out the procedure, add it to the program below:

.. activecode:: csprepeatturtles_turtlegeom6
    :nocodelens:

    # DEFINE THE PROCEDURE HERE

    # Main program
    from turtle import *
    space = Screen()
    mia = Turtle()
    mia.fillcolor("light blue")

    polygon(mia, 6, 100)
    polygon(mia, 5, 100)
    polygon(mia, 4, 100)
    polygon(mia, 3, 100)
