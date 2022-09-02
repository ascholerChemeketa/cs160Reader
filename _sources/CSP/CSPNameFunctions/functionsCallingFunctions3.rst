..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst

Functions Calling Functions - 3
================================

Here is the final version of our program, being used to test a new triangle. Use the Codelens
view to run the program. As you watch it run, here are some things to pay attention to:

* The program starts running lines of code at the main part (non-indented code)
* The main part calls ``triangle_area``
* ``triangle_area`` calls ``distance`` three times. After each time ``distance`` runs,
  it returns a value that gets used by ``triangle_area`` to set a, b, or c
* What ``distance`` calls x1, x2, y1, and y2 does not always match the names used for those
  values in ``triangle_area``. For example, when we call ``distance(x2, y2, x3, y3)`` in 
  ``triangle_area``, distance will be given the value that ``triangle_area`` is calling **x2**
  as its first parameter. ``distance`` calls its first parameter **x1**.

  This is a little confusing if we try to think of something like **x1** as some fixed value
  that all functions agree on. But that is not how variables work. If multiple functions or
  procedures have a parameter or variable named **x1**, each one is potentially talking about
  a different piece of information.

When the **perimeter** is set in ``triangle_area``, use the value to answer the question below the code
sample.

.. activecode:: triangle_area_final 

    def distance(x1, y1, x2, y2):
        xDifference = x2 - x1
        yDifference = y2 - y1
        distance = math.sqrt( xDifference ** 2 + yDifference ** 2 )
        return distance

    def triangle_area(x1, y1, x2, y2, x3, y3):
        a = distance(x1, y1, x2, y2)
        b = distance(x2, y2, x3, y3)
        c = distance(x1, y1, x3, y3)
        perimeter = a + b + c
        s = perimeter / 2                   #semi-perimeter
        area = math.sqrt(s * (s - a) * (s - b) * (s - c))
        return area

    # Main program
    import math
    p1x = -1
    p1y = 4
    p2x = 6
    p2y = -4
    p3x = 3
    p3y = 2
    testArea = triangle_area(p1x, p1y, p2x, p2y, p3x, p3y)
    print(testArea)


.. fillintheblank:: 7_7_fb

    What is the value of ``perimeter`` that is calculated inside ``triangle_area``?

    - :21.81: Correct!
      :.*: Make sure to watch the program run and type in the value of perimeter to at least 2 decimal places.
