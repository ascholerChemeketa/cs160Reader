..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../csp_global.rst

Turtle Procedures
=======================================

Turtles can do more than go forward, turn left, and turn right. The table below lists more turtle
procedures and functions.

.. index::
    pair: procedure list; turtle

.. list-table:: Turtle procedures
    :widths: 10 10 90
    :header-rows: 1
    :align: left

    * - Name
      - Input 
      - Description
    * - backward
      - amount
      - Moves the turtle backward by the specified amount. If the pen is down, draws a line.
        A move of 0 makes a dot if the pen is down.
    * - forward
      - amount
      - Moves the turtle forward by the specified amount. If the pen is down, draws a line.
        A move of 0 makes a dot if the pen is down.
    * - goto
      - x, y
      - Moves the turtle to position x, y. Note you must put a comma between the
        two values.
    * - left
      - angle
      - Turns the turtle counter clockwise by the specified angle
    * - right
      - angle
      - Turns the turtle clockwise by the specified angle
    * - setheading
      - angle
      - Turns the turtle to face the given heading. East is 0, north is 90, west is 180, and south is 270.
    * - speed
      - number
      - How fast to move the turtle. Should be a value from 1-10 (1 is slow, 10 is fast), 
        or 0 which means "as fast as possible".
    * - hideturtle
      - None
      - Hides the turtle (the triangle icon)
    * - pendown
      - None
      - Puts down the turtle's pen so that it draws when it moves
    * - penup
      - None
      - Picks up the turtle's pen so that it doesn't draw when it moves
    * - pensize
      - width
      - Sets the width of the pen for drawing
    * - color
      - colorname
      - Sets the color for drawing. Use **strings** - like 'red', 'black', etc...
        This page has a `table of colors <https://trinket.io/docs/colors>`__
        Make sure to put quotation marks around the name of the color!
    * - begin_fill
      - None
      - Tells the turtle to start painting inside the shape it draws
    * - end_fill
      - None
      - Tells the turtle to stop painting inside the shape it draws
    * - fillcolor
      - colorname
      - This page has a `table of colors <https://trinket.io/docs/colors>`__
    * - colormode
      - mode
      - If you pass 255 as the mode like ``turtleName.colormode(255)``, you
        can then set colors using a list of red, green, blue values between 0-255
        like: ``turtleName.color(255,255,0)`` or ``turtleName.fillcolor(0, 125, 200)``
    

.. note::

    You can find this table easily by look for "turtle - procedure list" in the book index.

To draw more than one letter you can use the ``penup()`` procedure after drawing the first
letter to pick up the pen before moving to where you want to start the next letter. Once you
are ready to draw again, use ``pendown()``. The example below draws a C and an S. 

.. note::
    
    In the sample we use blank lines to break up the code into logical chunks and comments to
    describe what each chunk does. The computer does not care about these things, but these
    tricks make it much easier for humans to understand what is happening.

.. activecode:: Turtle_CandL
    :nocodelens:

    from turtle import *
    space = Screen()
    ji = Turtle()         # create a turtle named ji
    ji.speed(0)           # make ji go as fast as possible
    ji.color("blue")      # make ji draw with blue

    # Draw the C
    ji.right(180)
    ji.forward(75)
    ji.right(90)
    ji.forward(100)
    ji.right(90)
    ji.forward(75)

    # Move to S location
    ji.penup()            # pick up the pen
    ji.forward(50)        # make a 50 pixel gap
    ji.right(90)          # position at the bottom of the S
    ji.forward(100)
    ji.left(90)
    ji.pendown()          # put the pen down

    # Draw the S
    ji.forward(75)
    ji.left(90)
    ji.forward(50)
    ji.left(90)
    ji.forward(75)
    ji.right(90)
    ji.forward(50)
    ji.right(90)
    ji.forward(75)

Try some experiments on the code:

* Change the speed to a different value (1-10)
* Try `looking up some other colors <https://trinket.io/docs/colors>`__ and change what color
  the turtle draws with.
* Try commenting out the code in the section called ``# Draw the S`` to see how the turtle is
  repositioned after the C so it can start the S.
