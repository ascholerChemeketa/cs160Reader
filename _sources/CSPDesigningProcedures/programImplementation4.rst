..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst
.. include:: ../global.rst

Program Implementation - 4
=========================================

We are finally ready to add a roof! This version of the program has added a ``drawRoof``, but
the procedure is missing its body. Try writing the body of ``drawRoof``. 

Tips:

* If you make the roof a 30, 120, 30 triangle, the two upper sides should be 173 long.
* Make sure to use ``begin_fill`` and ``end_fill`` in your procedure. Without them, the triangle
  will not get filled in.
* You don't actually have to draw the bottom edge of the roof since there is already
  a line there.

Notice we have commented out the tests for the doors and windows. There is no need to run
that code while you are working on the roof.

.. activecode:: cspdesigningprocedures_programimplementation41
    :nocodelens:

    Implement the ``drawRoof`` procedure
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
        # add code here!!!

    # main program
    from turtle import *
    space = Screen()
    steve = Turtle()
    steve.speed(0)
    steve.penup()
    steve.goto(-150, 50)
    drawWall(steve)
    #steve.goto(-25, -50)
    #drawDoor(steve)
    #steve.goto(-100, 0)
    #drawWindow(steve)
    #steve.goto(50, 0)
    #drawWindow(steve)

    steve.goto(-150, 50)
    drawRoof(steve)                # test the drawRoof procedure
