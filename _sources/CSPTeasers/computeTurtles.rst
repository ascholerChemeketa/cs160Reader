..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

..  shortname:: Chapter: What You Can Do with a Computer
..  description:: Some tidbits of what you can do with a computer

.. include:: includes.rst

Compute with Turtles
=====================

The idea of "turtle programming" dates back to the 1960's and originated with Seymour Papert.
He developed a robot turtle with a physical pen in it.  Children would steer the robot around
and create drawings with the pen by writing programs in a language called Logo.

.. figure:: Figures/mindstorms_turtle.jpg 
    :width: 200px
    :align: center
    :alt: Children playing with a Logo turtle robot that can draw with a pen
    :figclass: align-center
    
    Children playing with a Logo turtle robot that could draw with a pen
    
    
.. index::
    single: library
    single: turtle

Today, we can play with virtual turtles in a fully-graphical and non-robotic way. To do so, we
will make use of another feature of Python - code libraries. A **library** is a collection of
existing code designed to help programs perform some task. Using a library means we do not have
to figure out how to handle all the details of a particular problem - the library code will
take care of many of those details for us. In the case of making a virtual turtle, our program
will need to have a way to keep track of where the turtle is, a way to move the turtle around,
a way to draw to the screen, etc... The ``turtle`` library will handle these details for us.

.. index::
    single: import

To use a library, we need to tell Python we want to use the library with an **import** statement.
In the program below, we start with ``from turtle import *`` to tell Python we want to make use
of the **turtle** library. Then it creates a **Screen**, a space on the page for the turtle to
move in and draw on (``space = Screen()``).  Next it creates a turtle named ``alex``
(``alex = Turtle()``). The turtles that we make are  **objects** that have behaviors we can access
with dot-notation. We use these to tell the turtle ``alex`` to move around on the screen using
commands like: ``alex.forward(150)``. As the turtle moves around it draws a line behind itself. 

Try clicking the |runbutton| button below to see what the following program does.

.. activecode:: 
    :nocodelens:
    
    from turtle import *    # use the turtle library
    space = Screen()        # create a turtle space
    alex = Turtle()         # create a turtle named alex
    alex.forward(150)       # move forward by 150 units
    alex.left(90)           # turn by 90 degrees
    alex.forward(75)        # move forward by 75 units 


.. mchoice:: cspt_ct_mc1
   :answer_a: Up
   :answer_b: Right
   :answer_c: Down
   :answer_d: Left
   :correct: b
   :feedback_a: Check which way alex moved first in the example above
   :feedback_b: Check which way alex moved first in the example above
   :feedback_c: Check which way alex moved first in the example above
   :feedback_d: Turtles start off facing right by default
   
   Which direction will alex move when the code below executes? 
   
   :: 
   
        from turtle import * 
        space = Screen() 
        alex = Turtle()
        alex.forward(100)  

Just by going forward, backward, left, and right, we can have a turtle draw a shape.  

.. fillintheblank:: cspt_ct_fb1

    What shape will the program below draw when you click on the Run button? 
    
    :: 

        from turtle import *    # use the turtle library
        space = Screen()        # create a turtle screen (space)
        zari = Turtle()         # create a turtle named zari
        zari.setheading(90)     # Point due north
        zari.forward(100)       # tell zari to move forward by 100 units
        zari.right(90)          # turn by 90 degrees
        zari.forward(100)       # tell zari to move forward by 100 units
        zari.right(90)          # turn by 90 degrees
        zari.forward(100)       # tell zari to move forward by 100 units
        zari.right(90)          # turn by 90 degrees
        zari.forward(100)       # tell zari to move forward by 100 units
        zari.right(90)          # turn by 90 degrees
    
    - :square|Square|SQUARE: Correct!
      :.*: Make sure to type the name of the shape created. You can copy this code into
        the ActiveCode area above and then hit **Save & Run** to test it.