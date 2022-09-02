..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst

Multiple Parameters
========================

Below we have a program that draws a square of size 100. What if we want to draw a different size
square, like one with a side length of 50?  We could do that by changing each of the ``100``s into
a ``50``. 

.. activecode:: Function_Change_Size
    :nocodelens:

    def square(turtle):
        turtle.forward(100)
        turtle.right(90)
        turtle.forward(100)
        turtle.right(90)
        turtle.forward(100)
        turtle.right(90)
        turtle.forward(100)
        turtle.right(90)

    # Main part of the program
    from turtle import *
    space = Screen()
    grace = Turtle() 
    square(grace)

But, this means we have to change each of the four ``forward`` statements and we could make a
mistake and not set all of them to the same number.  Is there a better way?  What if we create
a variable ``size`` and set its value to the amount to move forward?

.. activecode:: Function_Add_Var
    :nocodelens:

    def square(turtle):
        size = 50
        turtle.forward(size)
        turtle.right(90)
        turtle.forward(size)
        turtle.right(90)
        turtle.forward(size)
        turtle.right(90)
        turtle.forward(size)
        turtle.right(90)

    # Main part of the program
    from turtle import *
    space = Screen()
    grace = Turtle() 
    square(grace)

Now the program is easier to change since we only have one line to change - ``size = 50`` -
to draw another size square. Once we change the ``size`` variable, all of the ``forward``
commands will use that new value.

But, the procedure can still only draw a square of one particular size. We can't use it
to draw two different size squares. If we want ``grace`` to draw a small square and then
a large square, we would need two different procedures:

.. code:: 

    def square(turtle):
        size = 50
        turtle.forward(size)
        turtle.right(90)
        turtle.forward(size)
        turtle.right(90)
        turtle.forward(size)
        turtle.right(90)
        turtle.forward(size)
        turtle.right(90)

    def largesSquare(turtle):
        size = 100
        turtle.forward(size)
        turtle.right(90)
        turtle.forward(size)
        turtle.right(90)
        turtle.forward(size)
        turtle.right(90)
        turtle.forward(size)
        turtle.right(90)

Yuck. How repetitive. Now imagine we want to make squares of size 75 and 25 as well. We would
need 4 different procedures that all basically look the same! Remember that if you find
yourself writing the same code multiple times, there is probably a better way to do things.

In this case, we can add an additional parameter to the procedure that specifies the size
of the square. Recall that a procedure can have as many parameters (inputs) as we like - 
just separate the names for the parameters with a comma like: ``(turtle, size)``.

Now that square has two parameters, any call to ``square`` must provide two arguments.
We need to specify the name of the turtle to draw with, then the size of the square to draw.
Something like ``square(grace, 100)`` or ``square(grace, 50)``.

.. activecode:: Function_Call2
    :nocodelens:

    def square(turtle, size):   # square now has two parameters
        turtle.forward(size)
        turtle.right(90)
        turtle.forward(size)
        turtle.right(90)
        turtle.forward(size)
        turtle.right(90)
        turtle.forward(size)
        turtle.right(90)

    from turtle import *
    space = Screen()
    grace = Turtle()
    square(grace, 100)          # draw a square of size 100
    square(grace, 75)           # draw a square of size 75
    square(grace, 50)           # draw a square of size 50
    square(grace, 25)           # draw a square of size 25

.. mchoice:: 5_4_2_Name_The_Shape_Q1
    :practice: T
    :answer_a: square
    :answer_b: rectangle
    :answer_c: triangle
    :correct: b
    :feedback_a: Check the 2nd and 4th forwards.  How much do they move forward by?
    :feedback_b: This will draw a rectangle with two sides with the specified size and two sides half that size.  Copy this code into the area above and run it.
    :feedback_c: A triangle has 3 sides.

    What shape would the following code draw?

    ::

        def mystery(turtle,size):
            turtle.forward(size)
            turtle.right(90)
            turtle.forward(size / 2)
            turtle.right(90)
            turtle.forward(size)
            turtle.right(90)
            turtle.forward(size / 2)
            turtle.right(90)

        from turtle import *	# use the turtle library
        space = Screen()     	# create a turtle screen (space)
        grace = Turtle()     	# create a turtle named grace
        mystery(grace, 100)   	# draw something with size = 100


.. mchoice:: 5_4_3_Name_Args_Q1
    :practice: T
    :answer_a: turtle and size
    :answer_b: grace and 25
    :answer_c: imani and 25
    :correct: c
    :feedback_a: These are the names of the parameters (formal parameters).
    :feedback_b: Look again at the code above.  Is that the name of this turtle?
    :feedback_c: The turtle is named imani and the size is 25 in the code: square(imani, 25).

    In the following code what are the arguments?

    ::

        def square(turtle,size):
            turtle.forward(size)
            turtle.right(90)
            turtle.forward(size)
            turtle.right(90)
            turtle.forward(size)
            turtle.right(90)
            turtle.forward(size)
            turtle.right(90)

        from turtle import * 	# use the turtle library
        space = Screen()      	# create a turtle screen (space)
        imani = Turtle()    	# create a turtle named imani
        square(imani, 25)      # draw a square with size 25

.. parsonsprob:: 5_4_4_Draw_Squares
    :numbered: left
    :adaptive:

    The following code assumes that a procedure square has been defined that takes a size.
    The code should create a turtle and then use it to draw a square, move forward, and draw
    a second square as shown below, but the lines are mixed up.

    .. image:: Figures/SquareForwardSquare.png
        :width: 150px
        :align: center
    -----
    from turtle import *
    =====
    space = Screen()
    =====
    imani = Turtle()
    =====
    square(imani, 75)
    =====
    imani.forward(100)
    =====
    square(imani, 50)


