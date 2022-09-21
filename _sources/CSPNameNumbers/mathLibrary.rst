..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../CSP/csp_global.rst

Math Library Functions
=======================================

Occaisionally while programming, we may need to do more complex mathematical work than the
basic math operators allow for. 

.. index::
    pair: library; math

The `Python math library <https://docs.python.org/3/library/math.html>`__ has a wide assortment
of functions and predefined variables we can use to do so.

For instance, say we want to figure out the radius of a circle with an area of 100 sq. inches.
The formula to calculate this is :math:`radius = \sqrt{\frac{area}{\pi}}`. The math library has
a ``math.sqrt(number)`` function that will give us the square root of whatever value we give.
It also has a built in value for pi (:math:`{\pi}`) that can be accessed as ``math.pi``.

To make use of these, we need to first ``import math`` to make the math library available to use
in our program. We then can access things like ``math.sqrt`` and ``math.pi``.

.. activecode:: cspnamenumbers_mathlibrary1

    # make the math library functions and variable available
    import math

    area = 100
    radius = math.sqrt(area / math.pi)
    print("Radius is", radius)
    print("The value we used for pi was", math.pi)

An important detail to notice is that ``math.sqrt`` **returns** an answer to us that we must do
something with. Just like the line of code ``x * 2`` doesn't do anything unless we store the result,
(something like ``y = x * 2``), writing ``math.sqrt(area / math.pi)`` would do the math, but then
throw away the answer. We need to store the answer into a variable if we want to do anything
with it.

.. mchoice:: cspnamenumbers_mathlibrary2
    :practice: T
    :answer_a: Nothing, it runs just the same
    :answer_b: The line that has math.sqrt reports an error that "name 'math' was not defined"
    :answer_c: The line that has math.sqrt reports an error that "library 'math' was not included"
    :answer_d: The program runs and silently fails without displaying anything.
    :correct: b
    :feedback_a: Did you try it?
    :feedback_b: Correct
    :feedback_c: Try it!
    :feedback_d: Try it!

    If you delete the line that says ``import math``, what happens when you run the code?

You do not need to worry about memorizing these, we will introduce them again in later chapters
as needed. But here are some more examples of math library functions.

.. list-table:: Math functions
    :widths: 10 10 90
    :header-rows: 1
    :align: left

    * - Name
      - Input 
      - Description
    * - math.ceil
      - number
      - Returns the smallest integer (whole number) that is greator than or equal to the number.
        ``math.ceil(4.2)`` would give 5.
    * - math.floor
      - number
      - Returns the largest integer (whole number) that is less than or equal to the number.
        ``math.floor(4.9)`` would give 4.
    * - math.fabs
      - number
      - Returns the absolute value of the number.
    * - math.log
      - number, base
      - Returns :math:`\log_{number} base`. Example: ``math.log(16, 2)`` returns 4 (:math:`\log_2 16`)
