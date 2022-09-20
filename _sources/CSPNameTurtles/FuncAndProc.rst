..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

.. index::
    single: function
    single: procedure

Procedures and Functions
================================

**Functions** are code recipes that do some work and return a value. We have seen string
**functions** like ``lower()`` which returns a new string with all lowercase
characters. **Functions** return a value.  The ``Screen()`` and ``Turtle()`` in the code below
both create objects and return them, so they are functions.

**Procedures** are similar to functions in that they do some work. However, unlike functions,
they do not return a value when they are done. The turtle behaviors ``forward(75)`` and
``left(90)`` below are both procedures since they do an action, but don't return any kind
of answer when they are done.

When we execute a **function**, also known as **calling** the function, we have to make
sure to do something with the result. As we discussed in a previous chapter, you can
picture the function call as turning into the returned value. In the line of code below,
the ``Turtle()`` command turns into a new turtle object for us to use in the rest of the
program. We need to give that turtle a name by storing it into a variable - in this case
that variable is ``alex``:

.. code::

    alex = Turtle()

However, when we execute a **procedure**, there is no value that is returned. So the
procedure call does not turn into anything. There is nothing to store. It would not make
sense to write:

.. code::

    newDirection = alex.left(90)  # NO NO NO!

``alex.left(90)`` just changes the direction of the turtle. It does not give us a result;
it does not turn into anything. Thus, when it is done executing, we essentially would
have this:

.. code::

    newDirection =                # Done turning left, there is nothing left!!!


.. note::

    Some programmers don't make a distinction between procedures and functions and will call
    both of these functions.  In this book we are using **function** for named code that
    returns a value and **procedure** for named code that doesn't return a value.

    It is a difference worth paying attention to because of the difference in how we use them - 
    whether we need to worry about doing something with the returned value or not.



.. fillintheblank:: cspnameturtles_funcandproc1

    What letter (like A, B, C, D, etc) will the program below draw in block style when you click
    on the Run button?

    - :^c$|^C$: Correct!
      :.*: Try to follow the directions as if you are the turtle

.. activecode:: cspnameturtles_funcandproc2
    :nocodelens:

    from turtle import *    # use the turtle library
    space = Screen()        # create a turtle space
    alex = Turtle()         # create a turtle named alex
    alex.left(180)          # turn alex by 180 degrees
    alex.forward(75)        # move forward by 75 units
    alex.left(90)           # turn left 90 degrees
    alex.forward(100)       # more forward by 100 units
    alex.left(90)           # turn left 90 degrees
    alex.forward(75)        # move forward by 75 units

**Check Your Understanding**

.. mchoice:: cspnameturtles_funcandproc3
   :practice: T
   :answer_a: function
   :answer_b: procedure
   :correct: b
   :feedback_a: Does it return a value?
   :feedback_b: The right procedure will cause the turtle to turn right by the specified number of degrees and doesn't return any value so it is a procedure.

   Is ``forward(75)`` a function or procedure?

**Mixed up programs**

.. parsonsprob:: cspnameturtles_funcandproc4
    :numbered: left
    :adaptive:

    The following program uses a turtle to draw a capital T as shown below but the lines are mixed
    up.  The program should do all necessary set-up: import the turtle module, get the space to
    draw on, and create the turtle.  After that the turtle should draw the lines in the numbered
    order as shown in the picture on the left. Drag the needed blocks of statements from the left
    column to the right column and put them in the right order.  Then click on *Check* to see if
    you are right.

    **You will not use all the blocks.**

    .. image:: Figures/TurtleT1.png
        :width: 200px
        :align: center
    -----
    from turtle import *
    =====
    space = Screen()
    jamal = Turtle()
    =====
    jamal.left(90)
    =====
    jamal.Left(90) #distractor
    =====
    jamal.forward(150)
    =====
    jamal.Forward(150) #distractor
    =====
    jamal.left(90)
    jamal.forward(50)
    =====
    jamal.right(180)
    =====
    jamal.turn(180) #distractor
    =====
    jamal.forward(100)
    =====
    jamal.forward(100 #distractor

.. parsonsprob:: cspnameturtles_funcandproc5
    :numbered: left
    :adaptive:

    The following program uses a turtle to draw a capital A as shown below, but the lines are mixed
    up.  The program should do all necessary set-up: import the turtle module, get the space to draw
    on, and create the turtle.  After that the turtle should draw the lines in the numbered order
    as shown in the picture on the left. Drag the needed blocks of statements from the left column
    to the right column and put them in the right order.  Then click on *Check* to see if you are right.

    **You will not use all the blocks.**

    .. image:: Figures/turtleA2.png
        :width: 200px
        :align: center
    -----
    from turtle import *
    space = Screen()
    =====
    
    jamal = Turtle()
    =====
    jamal = Turtle #distractor
    =====
    jamal.left(70)
    =====
    jamal.left(90) #distractor
    =====
    jamal.forward(100)
    jamal.right(135)
    =====
    jamal.forward(100)
    =====
    jamal.forward(100 #distractor
    =====
    jamal.right(180)
    jamal.forward(50)
    =====
    jamal.right(180)
    jamal.Forward(50) #distractor
    =====
    jamal.left(65)
    jamal.forward(45)


