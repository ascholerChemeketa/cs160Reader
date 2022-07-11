..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst

Functions Calling Functions - 2
================================

Now that we have written and tested ``distance``, we can use it to help write ``triangle_area``.
This function will take all six coordinates and return the area.

.. code::

    def triangleArea(x1, y1, x2, y2, x3, y3):
        Do work to calculate area - use distance function to help
        return area

Recall that the formula we need to use is: :math:`\sqrt{s (s - a) (s - b) (s - c)}`

The work for this function will involve calling the distance function three times to calculate
the lengths of the three sides (**a**, **b**, **c**). We then need to use those to calculate **s**,
the semi-perimeter.

Below is the code for the final program but jumbled up - figure out the right order.

.. parsonsprob:: 7_6_triangleArea
    :numbered: left
    :adaptive:

    Put the blocks in the right order and indentation. **You will use all of the blocks.**
    -----
    def distance(x1, y1, x2, y2):
        xDifference = x2 - x1
        yDifference = y2 - y1
        distance = math.sqrt( xDifference ** 2 + yDifference ** 2 )
        return distance
    =====
    def triangle_area(x1, y1, x2, y2, x3, y3):
    =====
        a = distance(x1, y1, x2, y2)
        b = distance(x2, y2, x3, y3)
        c = distance(x1, y1, x3, y3)
    =====
        perimeter = a + b + c
    =====
        s = perimeter / 2                   #semi-perimeter
    =====
        area = math.sqrt(s * (s - a) * (s - b) * (s - c))
    =====
        return area
    =====
    # Main program
    import math
    p1x = 0
    p1y = 0
    p2x = 3
    p2y = 1
    p3x = 2
    p3y = 6
    testArea = triangle_area(p1x, p1y, p2x, p2y, p3x, p3y)
