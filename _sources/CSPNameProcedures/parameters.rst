..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Parameters
===========================

.. index::
    single: parameter
    pair: parameter; procedure
    pair: parameter; function

The formal name for an input to a function is **parameter**:

.. code::

    def hop(turtleName):        # turtleName is a parameter
        ...

One of the trickiest parts to learning how to write and use procedures and functions is developing
an accurate understanding of how parameters work. Think of parameters as variables in a procedure
that are set by the procedure call. Just like any variable, parameters can hold any value. And,
just like any other variable, when you use the name of a parameter, you are accessing the value
that the parameter is holding.

.. index::
    single: argument
    pair: argument; procedure
    pair: argument; function

When we call (use) a procedure, we must provide values for each of the parameters that it has.
The values that we provide are known as the **arguments**.

.. code::

    ...
    hop(sue)                    # a procedure call using the sue turtle as the argument

When this procedure call happens, all the code from ``hop`` will be executed. Any time we
encounter the parameter ``turtleName``, we will actually use the argument - ``sue`` in its
place. This process of giving the procedure information by specifying arguments is known
as **passing parameters** to the procedure.

This system allows the procedure to work with any turtle. We can call ``hop(buster)`` to
run ``hop`` and when we do so, ``turtleName`` will mean the turtle named ``buster``.

.. note::

    Some people call **parameters** the **formal parameters** and **arguments** the
    **actual parameters**. We will stick to **parameters** and **arguments** to avoid
    confusion about what we mean when we just say *"parameters"*.

Try running this program below. It defines the ``hop`` procedure. Then, the main part of
the program makes two turtles, has them mark their starting location, then has them each
do a hop before doing a forward movement.

.. activecode:: cspnameprocedures_parameters1
    :nocodelens:

    def hop(turtleName):                # turtleName is the parameter
        turtleName.penup()              # turtleName means whatever turtle was passed to the procedure
        turtleName.forward(20)
        turtleName.pendown()

    # main part of the program
    from turtle import *
    space = Screen()
    sue = Turtle()
    buster = Turtle()
    sue.forward(0)
    buster.forward(0)

    hop(sue)                            # call hop with sue as the argument
    sue.forward(50)

    buster.left(90)
    hop(buster)                         # call hop with buster as the argument
    buster.forward(50)

.. warning:: 

    The only variables you can use in a procedure are its parameters or new ones you create inside
    the procedures. It is an error to use variables from the main part of the program while
    writing the body of a procedure.

    Think of each procedure as a self contained world. All that is known inside that world is
    what is passed into it as parameters.

**Check Your Understanding**

.. mchoice:: cspnameprocedures_parameters2
    :answer_a: turtleName
    :answer_b: sue
    :answer_c: buster
    :correct: c
    :feedback_a: There is no one turtle named <b>turtleName</b>. It will be used to name both
        sue during the first call to hop and buster during the second call to hop.
    :feedback_b: No. That turtle goes to the East.
    :feedback_c: Correct.

    Which turtle made the line going North (up)?

.. mchoice:: cspnameprocedures_parameters3
    :answer_a: ray
    :answer_b: who
    :answer_c: turtleName
    :correct: b
    :feedback_a: ray is the argument. To talk about the argument inside the procedure, we have
        to use the parameter's name.
    :feedback_b: Correct. Inside this procedure, <b>who</b> will be the name we use for whatever
        turtle is the argument in the function call.
    :feedback_c: The parameter for this function is not called turtleName.

    This code sample makes a turtle called ray and then calls the spin procedure. What belongs
    in the blank to make the program work?
    
    .. code::

        def spin(who):
            ________.left(180)

        # Main part of the program
        from turtle import *
        space = Screen()
        ray = Turtle()

        spin(ray)