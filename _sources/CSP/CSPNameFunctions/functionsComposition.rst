..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Functions and Composition
===========================================

So far we have focused on writing **procedures** - problem solving recipes that do part of
a job and return no answer. Now we will shift our attention to **functions** - problem
solving recipes that are designed to calculate some value and return it to the code that
calls the function so we can do more work with the result.

In the sample below, we can see the importance of returning results from functions so
that we can string together a number of steps. Line 3 calls the ``input`` function to get
a string like ``"4"`` from the user and store it as ``sideAText``. 
Then on line 5 we use the ``float`` function to turn that string  into a numeric value
``4.0`` and store that in ``sideA``. We then use ``math.pow`` to raise that value to the second
power and store the result as ``aSquared``. ``aSquared`` gets used as part of the input
to the ``math.sqrt`` function which produces our final answer ``sideC`` which gets passed to the
``print`` function.

.. activecode:: Functions_7_1
    
    import math

    sideAText = input("Enter length of side A")
    sideBText = input("Enter length of side B")
    sideA = float(sideAText)
    sideB = float(sideBText)
    
    aSquared = math.pow(sideA, 2)
    bSquared = math.pow(sideB, 2)
    sideC = math.sqrt(aSquared + bSquared)

    print("The length of side C is", sideC)

The fact that every function (other than ``print``) returns a value is what allows to chain this
work together and use the result of one function as the input to the next function. We take the
returned value (the output of the function) and store it into a variable so we can pass it on
to the next as input.

Note that just like with procedures, some functions like ``input`` are standalone and are called
on their own. Other functions are part of a library or object and must be called with dot notation
like ``math.pow``.

.. index::
    single: composition
    single: functional composition

Function Composition
----------------------------

We can more directly specify to use the result of calling one function as the input to another
function via **functional composition**. That is where we put one function call inside of another - 
like how this version of the same program does ``float(input("Enter length of side A"))``.

.. activecode:: Functions_7_2
    
    import math

    sideA = float( input("Enter length of side A") )
    sideB = float( input("Enter length of side B") )

    sideC = math.sqrt( math.pow(sideA, 2) + math.pow(sideB, 2) )

    print("The length of side C is", sideC)

Like when doing math, we always do work inside of parentheses before worrying about the work
outside of them. In this case, that means we start with the ``"Enter length of side A"``. It is
just a string, so there is nothing special to do with it other than use it as the argument to
``input()``. Then the ``input`` function runs and does its job to get input from the user. It
returns a string with whatever the user typed. Recall that the mental model you should use forget
function calls is that they are replaced by the value they return. So 
``input("Enter length of side A")`` ends up just becoming something like ``"4"``. That value
is what gets used as the argument for ``float()``.

When ``sqrt(pow(sideA, 2) + pow(sideB, 2))`` is evaluated, we have to start with the inner functions
and get answers for ``pow(sideA, 2)`` and ``pow(sideA, 2)``. Then we can add those answer to get
one number. That one number ends up being the argument for ``sqrt`` which takes the square root of
it and returns the answer.

.. warning:: 

    Writing code using functional composition in this style can make programs look shorter, but
    it tends to make them harder to debug. In the first version of this program, we could add a 
    ``print`` call after any line to see what value a function produced and check if it is
    correct. If something isn't working right in a line of code like 
    ``sqrt( pow(sideA, 2) + pow(sideB, 2) )``, it can be hard to figure out what part is not
    working as expected - the ``pow``, the ``+``, or the ``sqrt``.

.. mchoice:: 7_2_1_Functions_Q1
    :practice: T
    :answer_a: 15
    :answer_b: 16
    :answer_c: 17
    :answer_d: 18
    :correct: d
    :feedback_a: Make sure to do the abs function first. Then add one.
    :feedback_b: Make sure to do the abs function first. Then add one.
    :feedback_c: Correct.
    :feedback_d: The int function will not round the value up. It just removes the decimal part.

    ``int()`` takes a number and returns just the whole number part (without rounding). 
    ``int(3.9)`` would return 3. ``abs()`` takes one number and returns it as a positive value.

    What do you think `print(int(abs(-16.789) + 1))`, prints?


.. mchoice:: 7_2_1_Functions_Q2
    :practice: T
    :answer_a: Procedures always happen after functions.
    :answer_b: The procedure does not return anything. There will not be a value for the function to work with.
    :answer_c: You can't mix functions and procedures.
    :correct: b
    :feedback_a: No, Python always evaluates the innermost function or procedure first if there are composed call. 
    :feedback_b: Correct.
    :feedback_c: No. You can mix functions and procedures. We have seen the int function called inside of the print procedure.

    It would not make sense to put a procedure call like ``alex.forward(50)`` inside a function
    call to make something like ``int(alex.forward(50))``.
    
    Why does it not make sense to put a procedure call inside of a function?
