..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

More Turtle Repetition Practice
=====================================

This section provides more practice using repetition and turtles.

**Mixed up program**

.. parsonsprob:: 8_6_1_turtle-x
    :numbered: left
    :adaptive:

    The following program uses the stamp method to create an X of turtle shapes as shown below, but
    the lines are mixed up.  The program should do all necessary set-up, create the turtle, set the
    shape to "turtle", and pick up the pen. Stamp the blue turtles before you stamp the green ones.

    Arrange and indent the blocks correctly. You will not need them all.

    .. image:: Figures/TurtleStampX.png
        :width: 150px
        :align: center
    -----
    from turtle import *
    =====
    space = Screen()
    =====
    space = screen() #distractor
    =====
    nick = Turtle()
    nick.shape("turtle")
    =====
    nick.penup()
    =====
    nick.penUp() #distractor
    =====
    nick.goto(-150,-150)
    nick.left(45)
    =====
    nick.goto(-150,-150)
    nick.left(90) #distractor
    =====
    nick.color("blue")
    for num in range(15):
        nick.stamp()
        nick.forward(30)
    =====
    nick.goto(150,-150)
    nick.left(90)
    =====
    nick.goto(150,-150)
    nick.left(45) #distractor
    =====
    nick.color("green")
    for num in range(14):
    =====
        nick.stamp()
        nick.forward(30)

.. parsonsprob:: 8_6_2_turtle-squares
    :numbered: left
    :adaptive:

    The following program uses the stamp method to create two squares of turtle shapes as shown
    below, but the lines are mixed up.  The program should do all necessary set-up, create the
    turtle, set the shape to "turtle", and pick up the pen.  Draw the blue square before you draw
    the green one.

    Arrange and indent the blocks correctly. You will not need them all.

    .. image:: Figures/TurtleStampDoubleSquare.png
        :width: 150px
        :align: center
    -----
    from turtle import *
    space = Screen()
    =====
    nick = Turtle()
    nick.shape("turtle")
    =====
    nick = Turtle()
    nick.shape("Turtle") #distractor
    =====
    nick.penup()
    =====
    nick.goto(-150,-150)
    nick.left(90)
    =====
    nick.goto(-150,-150)
    nick.right(90) #distractor
    =====
    nick.color("blue")
    for count in range(4):
        for num in range(5):
            nick.stamp()
            nick.forward(30)
        nick.right(90)
    =====
    nick.goto(-120,-120)
    nick.color("green")
    for count in range(4):
    =====
        for num in range(3):
    =====
        for num in range(2): #distractor
    =====
            nick.stamp()
            nick.forward(30)
    =====
        nick.right(90)
    =====
        nick.left(90) #distractor



.. activecode:: 8_6_polygons
    :autograde: unittest
    :nocodelens:

    In the program below, we want to draw a series of polygons, from 10 sides down to 3 sides,
    each with a side length of 100. The ``polygon`` procedure is provided as is starter code for
    the main part of the program. Add a loop and use it to call polygon. Make sure that you
    draw everything from a 10 sided to a 3 sided polygon, counting down (10, 9, 8, ... 3). Each
    shape should have a size (side length) of 100.

    |turtle_ref|

    ~~~~
    def polygon(turtleName, sides, size):
        turtleName.begin_fill()
        for s in range(sides):
            turtleName.forward(size)
            turtleName.left(360 / sides)
        turtleName.end_fill()

    # main program
    from turtle import *
    space = Screen()
    lucia = Turtle()
    lucia.speed(0)
    lucia.penup()
    lucia.fillcolor("lavender")
    lucia.goto(-50, -150)
    lucia.pendown()

    # add your code here
    for x in range(10, 2, -1):
        polygon(lucia, x, 100)
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertRegex(self.getEditorText(), r"for \w+ in range.*:", "Testing that you created a loop.")
            self.assertRegex(self.getEditorText(), r"range\(\s*\d+\s*,\s*2\s*", "Testing that your loop stops at the right value.")
            self.assertRegex(self.getEditorText(), r"range\(\s*\d+\s*,\s*\d+\s*,\s*-1\s*", "Testing that your loop counts down.")
            self.assertRegex(self.getEditorText(), r"\s+polygon\(\s*lucia", "Testing that you call polygon with lucia")
            self.assertRegex(self.getEditorText(), r"\s+polygon\(\s*lucia\s*,\s*\w+", "Testing that you use the loop variable in the call")
            self.assertRegex(self.getEditorText(), r"\s+polygon\(\s*lucia\s*,\s*\w+\s*,\s*100\s*\)", "Testing that you specify size 100")


    myTests().main()