..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Practice - Write a Procedure
=========================================

Time for a little practice - try writing your own procedure. 
There is an answer available, but don't look at it until you
have tried writing the procedure on your own!

|turtle_ref|

.. tabbed:: cspnameprocedures_practice_tab0

    .. tab:: Question

        The main part of this program is written. It makes a turtle ``emily`` and then tries 
        to call the ``pentagon`` function to use ``emily`` to draw a pentagon (5 sided figure)
        of size 100. However, the pentagon function has not been defined. You need to write it
        to complete the program.

        Hint: To figure out the angle to turn while drawing a regular shape, you need to
        divide 360 by the number of sides. :math:`350 / 5 = 72`.

        .. activecode:: cspnameprocedures_practice1
            :nocodelens:
            
            # DEFINE THE PROCEDURE HERE

            # Main part of program
            from turtle import *
            space = Screen()
            emily = Turtle()
            # CALL THE PROCEDURE 
            pentagon(emily, 100)

    .. tab:: Answer
        
        .. activecode:: cspnameprocedures_practice2
            :nocodelens:
            
            # DEFINE THE PROCEDURE
            def pentagon(turtle, size):
                turtle.forward(size) 
                turtle.right(72) 
                turtle.forward(size)
                turtle.right(72)
                turtle.forward(size)
                turtle.right(72)
                turtle.forward(size)
                turtle.right(72)
                turtle.forward(size)
                turtle.right(72)

            # Main part of program
            from turtle import *      
            space = Screen()          
            emily = Turtle()
            # CALL THE PROCEDURE 
            pentagon(emily, 100)



