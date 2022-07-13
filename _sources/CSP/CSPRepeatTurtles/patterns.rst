..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst

Nesting Loops
======================================

If we keep drawing the same shape over and over, turning slightly and/or moving
between each drawing, we can make `spirograph <http://en.wikipedia.org/wiki/Spirograph>`_
like patterns.

.. index::
    pair: loop; nested

The program below does this by drawing 20 pentagons. To do this, we need to repeat the
pentagon recipe 20 times with a ``for`` loop. The pentagon recipe has its own ``for`` loop
which repeats 5 times. A loop inside of another loop is known as a **nested loop**. The
inner loop will do all of its repetitions for each iteration of the outer loop.

In this example, the code inside of the inner loop (``forward(50)`` and ``right(72)``) will
be repeated 5 times and that group will be repeated 20 times. So each of those lines will
happen 100 times!

.. activecode:: Turtle_Spirograph1
    :nocodelens:

    from turtle import *
    from sys import *
    space = Screen()
    zoe = Turtle()
    zoe.speed(0)

    for repeats in range(20):
        zoe.forward(10)
        zoe.right(18)

        # This part makes a pentagon
        for sides in range(5):
            zoe.forward(50)
            zoe.right(72)


By setting the pen color differently, we can distinguish the part that draws the shape
from the part that draws *between* the shapes. The ``forward`` and ``right`` inside of
the outer loop, before the second ``for`` work together to make a circle. 20 turns of
18 degrees will make a full circle of 360 degrees. At each of those 20 points, the
turtle draws a pentagon.

.. activecode:: Turtle_Spirograph2
    :nocodelens:

    from turtle import *
    from sys import *
    space = Screen()
    zoe = Turtle()
    zoe.speed(0)

    for repeats in range(20):
      	zoe.color("blue")
      	zoe.pensize(2)
        zoe.forward(10)
        zoe.right(18)

        # This part makes a pentagon
      	zoe.color("red")
      	zoe.pensize(1)
        for sides in range(5):
            zoe.forward(50)
            zoe.right(72)

You can use the coloring in the picture below to help you figure out the correct order of the
lines below.

.. parsonsprob:: 10_3_1_Turtle_Spiro
   :numbered: left
   :adaptive:

   There is a way of arranging the statements below such that the image shown below is created.
   The turtle will draw 10 triangles. As it does so, we want it to make a full circle. Think
   carefully about how many degrees the turtle needs to turn at each step to make a full circle.

   You will not need all of the blocks.

   .. image:: Figures/RedTrianglesBlueCircle.png
       :width: 150px
       :align: center
   -----
   from turtle import *
   from sys import *
   screen = Screen()
   mateo = Turtle()
   mateo.speed(0)
   =====
   for repeats in range(10):
   =====
   for repeats in range(10) #paired
   =====
       mateo.color("blue")
       mateo.forward(10)
       mateo.left(36)
   =====
       mateo.color("blue")
       mateo.forward(10)
       mateo.left(18) #paired
   =====
       for sides in range(3):
       =====
       for sides in range(4): #paired
   =====
           mateo.color("red")
           mateo.forward(50)
           mateo.right(120)

The following example has 3 syntax errors. Can you fix the errors so that the code compiles and runs?
(None of the errors are in the numbers used - those would be logic errors, not syntax errors.)

.. activecode:: Turtle_Nested_Error1
    :nocodelens:

    from turtle import *
    from sys import *

    screen = Screen
    dave = Turtle()
    dave.speed(0)

    for repeats in range(20)
        dave.color("red")
        dave.forward(10)
        dave.left(18)

        dave.Color("blue")
        for sides in range(4):
        dave.forward(50)
        dave.right(90)

Execution Limit & Run Amok Programs
------------------------------------------

.. index::
    single: setExecutionLimit

A Python program that is running in the browser has a limited amount of time it is allowed to run.
If a program takes more than ~20 seconds, it will stop running even if it is not done. This can
prevent complex programs for ever finishing what they are doing. Try running this program and wait
until an error is printed.

.. activecode:: Turtle_Timeout
    :nocodelens:

    from turtle import *
    import sys
    sys.setExecutionLimit(60000)

    screen = Screen
    dave = Turtle()
    dave.speed(3)

    for repeats in range(36):
        dave.forward(10)
        dave.left(10)

        for sides in range(4):
            dave.forward(50)
            dave.right(90)

Now try uncommenting these two lines:

.. code::

    import sys
    sys.setExecutionLimit(60000)

They set the time limit for the program to 60,000 millisends. (One second is 1,000 milliseconds,
so 60,000 milliseconds is 60 seconds.) This should give the program time to finish.

Of course we also could increase the speed of the turtle to help get the program done faster.
But since there is a limit to the turtle's speed, it may sometimes be necessary to also increase
the execution limit.

.. index::
    single: timeout

If you ever get bored waiting for a program to **timeout** (exceed its execution limit), you can
simply refresh the browser page.


Indirect Nesting
------------------------------------------

It is also important to recognize that we can get the same behavior if we indirectly nest loops.
The sample below has a ``square`` procedure with a loop. The main part of the program has a loop as
well and that loop calls the ``square`` procedure inside of it. So the lines inside ``square``'s
loop get executed 40 total times - the loop in main calls square 10 times and each call to square
repeats them 4 times.

.. activecode:: Turtle_Indirect_Nested_loops
    :nocodelens:

    def square(turtleName):
        for sides in range(4):
            turtleName.forward(50)
            turtleName.right(90)

    # main part of program
    from turtle import *
    screen = Screen
    dave = Turtle()
    dave.speed(0)

    for repeats in range(10):
        dave.forward(10)
        dave.left(36)
        square(dave)

Normal nested loops can get difficult to read once you have multiple "levels" of loop all stacked
inside of each other. The "indirect" nesting, where the inner loop is hidden inside of a procedure
makes the main part of the program a bit easier to read. Compare this program to the one at the
top of the page. It is much easier to see that this program draws 10 squares than it was to see
that the first one drew 20 pentagons. We had to use a comment in the first one just to try to make
things clear.
