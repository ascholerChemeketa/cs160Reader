..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Using Repetition with Turtles
===============================

While learning how to draw with the turtle, we have found many reasons to repeat ourselves in
ways that a loop can make easier. A simple example is a ``square`` procedure - it needs to
do both ``forward`` and ``right`` 4 times. So why not have a ``for`` loop repeat those for us:

.. activecode:: csprepeatturtles_repeatturtles1
    :nocodelens:

    def square(turtleName, size):
        for side in range(4):              # repeat the indented lines 4 times
            turtleName.forward(size)
            turtleName.right(90)

    from turtle import *
    space = Screen()
    alisha = Turtle()
    square(alisha, 10)
    alisha.forward(10)
    square(alisha, 20)
    alisha.forward(20)
    square(alisha, 30)
    alisha.forward(30)



.. parsonsprob:: csprepeatturtles_repeatturtles2
    :numbered: left
    :adaptive:

    The following program should define a procedure `triangle` that uses a loop
    to help draw a triangle. The main part of the program calls that function twice
    to draw two different triangles.

    Arrange and indent the blocks correctly. You will not need them all.

    -----
    def triangle(turtleName):
    =====
        for side in range(3):
    =====
            turtleName.forward(120)
            turtleName.right(90)
    =====
            nick.forward(120)
            nick.right(90)  #distractor
    =====
    #Start of main part of program
    from turtle import *
    space = Screen()
    =====
    nick = Turtle()
    triangle("nick")
    nick.right(180)
    triangle("nick")

.. parsonsprob:: csprepeatturtles_repeatturtles3
    :numbered: left
    :adaptive:

    The following program uses a turtle to draw a 175x150 rectangle as shown below, but the lines
    are mixed up. We want to define a ``rectangle`` procedure that repeats twice the process to draw
    half of a rectangle: draw a line for the width, then turn, draw a line for the height, and 
    turn again.

    Arrange the blocks into the correct solution and indent them properly.
    You will not use all of the blocks.

    .. image:: Figures/TurtleRect.png
        :width: 150px
        :align: center
    -----
    def rectangle(turtle, width, height):
    =====
        # repeat 2 times
        for i in range(2):
    =====
        # repeat 2 times
        for i in range(2) #paired

    =====
            turtle.forward(width)
            turtle.right(90)
    =====
            carlos.forward(width)
            carlos.right(90) #paired
    =====
            turtle.forward(height)
            turtle.right(90)
    =====
            turtle.forward(150)
            turtle.right(90) #paired
    =====
    from turtle import *
    =====
    space = Screen()
    carlos = Turtle()
    rectangle(carlos, 175, 150)
