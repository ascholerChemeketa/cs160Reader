..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst
.. include:: ../../global.rst

Program Implementation - 3
=========================================

You may have noticed that the ``drawWall`` and ``drawDoor`` functions do not worry about
where the shape is being drawn. We could put a ``goto`` into them so that they handle
jumping to the right location to draw their shape. But, that would make it so they can
only draw in one location. We will want to call the ``drawWindow`` procedure twice to
draw two different windows. That will not work if ``drawWindow`` always jumps to a fixed
location to do its drawing.

This version of the program has ``drawWindow`` defined. But, it is not tested yet. Add
a test of the procedure to the end of the main part of the program.

|turtle_ref|

.. activecode:: program_implementation_3
    :autograde: unittest
    :nocodelens:

    Test ``drawWindow`` by drawing a window at -100, 0
    ~~~~
    def rectangle(turtle, width, height):
        # Assumes turtle faces East to start with
        turtle.pendown()
        turtle.begin_fill()
        turtle.forward(width)
        turtle.right(90)
        turtle.forward(height)
        turtle.right(90)
        turtle.forward(width)
        turtle.right(90)
        turtle.forward(height)
        turtle.right(90)
        turtle.end_fill()
        turtle.penup()

    def drawWall(turtleName):
        turtleName.fillcolor("tan")
        rectangle(turtleName, 300, 200)

    def drawDoor(turtleName):
        turtleName.fillcolor("black")
        rectangle(turtleName, 50, 100)

    def drawWindow(turtleName):
        turtleName.fillcolor("light blue")
        #first row
        rectangle(turtleName, 25, 25)
        turtleName.forward(25)
        rectangle(turtleName, 25, 25)
        turtleName.backward(25)
        #reposition
        turtleName.right(90)
        turtleName.forward(25)
        turtleName.left(90)
        #second row
        rectangle(turtleName, 25, 25)
        turtleName.forward(25)
        rectangle(turtleName, 25, 25)

    # main program
    from turtle import *
    space = Screen()
    steve = Turtle()
    steve.speed(0)
    steve.penup()
    steve.goto(-150, 50)
    drawWall(steve)                # test the drawWall procedure
    steve.goto(-25, -50)
    drawDoor(steve)                # test the drawDoor procedure

    # add a test here for the window. Try drawing it at -100, 0
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertRegex("".join(self.getEditorText().split("\n")[-4:]), r"steve.goto\(\s*-100,\s*0\s*\)", "Testing that you goto the right location.")
            self.assertRegex("".join(self.getEditorText().split("\n")[-4:]), r"drawWindow\(\s*steve\s*\)", "Testing that you correctly call drawWindow.")

    myTests().main()