..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Defining Functions - How
===========================

.. index:: return

The same syntax we use to name procedures can be used to define new functions. The only difference
is that a function will **return** a value. To return a value from a function use the Python
keyword ``return`` followed by the value to return. The value can be a literal value like ``3.14``
or ``"Hello there"``, but will generally be a variable that we calculated within the function.

This is a definition for a function that accepts the lengths of the two legs (shorter sides) of a
right triangle as its parameters and calculates the length of the hypotenuse (long side). The final
value that it computes - ``sideC`` is what gets returned.

.. activecode:: def_function

    def hypotenuse_length(sideA, sideB):
        # sideA and sideB are our inputs
        aSquared = math.pow(sideA, 2)
        bSquared = math.pow(sideB, 2)
        sideC = math.sqrt(aSquared + bSquared)       # this is the final answer
        return sideC                                 # we return it

Of course, running it right now does nothing. Just like a procedure definition, a function definition
does not cause anything to happen on its own. It is only the instructions for what to do when
someone calls ``hypotenuse_length``. So let's add a call to the function. This working program
asks for the lengths of two sides from the user and then uses those two values ``a`` and ``b`` to
call ``hypotenuse_length``.

.. activecode:: def_function_and_call 

    def hypotenuse_length(sideA, sideB):
        aSquared = math.pow(sideA, 2)
        bSquared = math.pow(sideB, 2)
        sideC = math.sqrt(aSquared + bSquared)
        return sideC
    
    # main part of program
    import math
    a = float(input("Enter side a"))
    b = float(input("Enter side b"))
    c = hypotenuse_length(a, b)
    print("The length of side c is", c)


**Check Your Understanding**

.. fillintheblank:: 7_2_fb

    This function converts temperature in degrees F to degrees C. What code goes where the
    ______________ is to complete it correctly?

    .. code::

        def hypotenuse_length(tempF):
            tempF = tempF - 32
            tempC = (5 / 9) * tempF
            ______________

    - :^returns\s+tempC$: Correct!
      :.*: Make sure to use return and then the final value that was computed.