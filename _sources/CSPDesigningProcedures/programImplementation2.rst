..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst
.. include:: ../global.rst

Program Implementation - 2
=========================================

Now that ``rectangle`` is working, we can use it to write our next function. I will tackle
``drawWall`` next. This procedure will take the name of the turtle, set a color, and then
draw a 300x200 rectangle.

|turtle_ref|

.. activecode:: cspdesigningprocedures_programimplementation21
    :nocodelens:

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

    from turtle import *
    space = Screen()
    steve = Turtle()
    steve.speed(10)
    steve.penup()
    steve.goto(-150, 50)
    drawWall(steve)                # test the drawWall procedure

.. mchoice:: cspdesigningprocedures_programimplementation22
    :correct: c
    :answer_a: turtleName
    :answer_b: turtle
    :answer_c: currentTurtle
    :feedback_a: drawWall calls its parameter turtleName. But there is nothing named "turtle" in drawDoor.
    :feedback_b: rectangle calls its parameter turtle. But there is nothing named "turtle" in drawDoor.
    :feedback_c: Correct.

    We want to write the code for the ``drawDoor`` procedure. Below is the code for it.

    .. code::

        def drawDoor(currentTurtle):
            ______________.fillcolor("black")
            rectangle(______________, 50, 100)


    What name belongs in the ______________?