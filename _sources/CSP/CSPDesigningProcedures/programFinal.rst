..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst
.. include:: ../../global.rst

Program Implementation - Final
=========================================

Now that we have all the building blocks, lets give a name to the lines of code that do the
work of drawing the house.

The instructions to ``goto`` particular locations and ``drawWall``, ``drawDoor``, etc... have
all been moved into a procedure to make it more clear what the overall goal of the instructions
is. But, we have not given that procedure a name. Chose a name for the procedure that draws
the whole house and replace the ``_____________`` below with your name. Make sure to replace
it in both the procedure definition and the procedure call.

.. activecode:: program_implementation_final
    :nocodelens:

    Name the procedure that draws the house.
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
    
    def drawRoof(turtleName):
        turtleName.fillcolor("brown")
        turtleName.pendown()
        turtleName.begin_fill()
        turtleName.left(30)
        turtleName.forward(173)
        turtleName.right(60)
        turtleName.forward(173)
        turtleName.right(150)
        turtleName.end_fill()
        turtleName.penup()

    def _____________(turtleName):
        turtleName.goto(-150, 50)
        drawWall(turtleName)
        turtleName.goto(-25, -50)
        drawDoor(turtleName)
        turtleName.goto(-100, 0)
        drawWindow(turtleName)
        turtleName.goto(50, 0)
        drawWindow(turtleName)
        turtleName.goto(-150, 50)
        drawRoof(turtleName)

    # main program
    from turtle import *
    space = Screen()
    steve = Turtle()
    steve.speed(0)
    steve.penup()
    _____________(steve)      # call your procedure

