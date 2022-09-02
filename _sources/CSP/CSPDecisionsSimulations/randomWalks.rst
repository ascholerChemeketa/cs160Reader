..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst

Random Walks
==========================

A `random walk <https://en.wikipedia.org/wiki/Random_walk>`__ is simulation technique that has
been applied to solve problems in areas from physics to biology to materials science economics
to who to recommend that people follow on `Twitter <https://dl.acm.org/doi/10.1145/2488388.2488433>`__

The basic idea is to think about a process in terms of a series of steps. These steps are done
with some degree of randomness: maybe a fixed distance in a random direction, or in a fixed direction
with a random distance. In a simulation, "direction" and "distance" may not mean actual physical
dimensions. In a stock market simulation random walk, a step might be a price movement from one
day to the next.

However, the Python turtle makes for a great visual way to do a random walk where "direction"
and "distance" refer to actual physical movement.
This example does a random walk where each step involves moving 10 pixels forward in one of the
cardinal directions (north, south, east, west). 

.. activecode:: random_walk
    :nocodelens:

    def takeStep(turtleName):
        # generate 0, 1, 2, or 3
        direction = random.randrange(0, 4)
        # change it to 0, 90, 180, or 270
        direction = direction * 90
        turtleName.setheading(direction)
        turtleName.forward(10)

    from turtle import *
    import random
    travis = Turtle()
    travis.speed(8)

    for step in range(100):
        takeStep(travis)

To generate a random direction, we are picking a random integer from 0-3 and then multiplying
that by 90. This guarantees that the only numbers we can pick are 0, 90, 180, and 270.
Try changing line 3 to ``direction = random.randrange(0, 360)`` and removing line 5. What
is the result?

.. mchoice:: 12_walk_test
    :answer_a: The turtle still moves in the same was as before.
    :answer_b: The turtle's steps can go in any direction.
    :answer_c: The turtle goes in circles.
    :correct: b
    :feedback_a: Did you remove line 5?
    :feedback_b: Correct.
    :feedback_c: Did you try making the changes?

    What is the result of making those changes to lines 3 and 5?

To simulate something like the stock market, we might want to do something like the following.
Try running this program and think of the x dimension as time - the far left is day 0 and each
step to the right is another day - and the y dimension as value - the price of a stock.

.. activecode:: random_walk_progress
    :nocodelens:

    from turtle import *
    import random
    travis = Turtle()
    travis.speed(8)

    currentX = -200
    currentY = 0
    travis.penup()
    travis.goto(currentX, currentY)
    travis.pendown()
    while(currentX < 200):
        currentX = currentX + 2
        currentY = currentY + random.randrange(-10, 11)
        travis.goto(currentX, currentY)

To take steps in this program, we track the current location of the turtle. To do a 
step, we increase ``currentX`` by 2 and change ``currentY`` by a random amount between
-10 and 10. This will mean each step moves slightly to the right and move up/down
by anywhere from -10 to 12.

One possible flaw with this program is that the change in stock prices uses a different
distribution of random changes. Most days the price goes up or down by a very small amount.
However, some days it climbs or drops by a lot more. Let's figure out that logic.

.. parsonsprob:: 12_walk_parson
    :numbered: left
    :adaptive:

    This program should work like the one above. However, at each step, we want there
    to be a 2% chance that the stock change up to 80 in either direction instead of just
    10. To do that, we will make a variable ``randValue`` hold a value between 1 and 100.
    If that is less than or equal to 2, then we will adjust ``currentY`` with a random
    value chosen form the larger range.

    Order and indent the codeblocks to build this logic. Make sure to update ``currentX``
    and ``currentY`` before you do the ``goto``.
    -----
    from turtle import *
    import random
    travis = Turtle()
    travis.speed(8)

    currentX = -200
    currentY = 0
    travis.penup()
    travis.goto(currentX, currentY)
    travis.pendown()
    =====
    while(currentX < 200):
        currentX = currentX + 2
    =====
        randValue = random.randrange(1, 101)
    =====
        randValue = random.randrange(1, 100) #paired
    =====
        if randValue <= 2:
    =====
            currentY = currentY + random.randrange(-80, 81)
    =====
        else:
    =====
            currentY = currentY + random.randrange(-10, 11)
    =====
        travis.goto(currentX, currentY)

Now that you have figured out the recipe, try using it in the program above. Does the graph
look more like a `stock market price history`_?

.. _stock market price history: https://finance.yahoo.com/chart/INTC#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjgsImZsaXBwZWQiOmZhbHNlLCJ2b2x1bWVVbmRlcmxheSI6dHJ1ZSwiYWRqIjp0cnVlLCJjcm9zc2hhaXIiOnRydWUsImNoYXJ0VHlwZSI6ImxpbmUiLCJleHRlbmRlZCI6ZmFsc2UsIm1hcmtldFNlc3Npb25zIjp7fSwiYWdncmVnYXRpb25UeXBlIjoib2hsYyIsImNoYXJ0U2NhbGUiOiJsaW5lYXIiLCJzdHVkaWVzIjp7IuKAjHZvbCB1bmRy4oCMIjp7InR5cGUiOiJ2b2wgdW5kciIsImlucHV0cyI6eyJpZCI6IuKAjHZvbCB1bmRy4oCMIiwiZGlzcGxheSI6IuKAjHZvbCB1bmRy4oCMIn0sIm91dHB1dHMiOnsiVXAgVm9sdW1lIjoiIzAwYjA2MSIsIkRvd24gVm9sdW1lIjoiI2ZmMzMzYSJ9LCJwYW5lbCI6ImNoYXJ0IiwicGFyYW1ldGVycyI6eyJ3aWR0aEZhY3RvciI6MC40NSwiY2hhcnROYW1lIjoiY2hhcnQifX19LCJwYW5lbHMiOnsiY2hhcnQiOnsicGVyY2VudCI6MSwiZGlzcGxheSI6IklOVEMiLCJjaGFydE5hbWUiOiJjaGFydCIsImluZGV4IjowLCJ5QXhpcyI6eyJuYW1lIjoiY2hhcnQiLCJwb3NpdGlvbiI6bnVsbH0sInlheGlzTEhTIjpbXSwieWF4aXNSSFMiOlsiY2hhcnQiLCLigIx2b2wgdW5kcuKAjCJdfX0sInNldFNwYW4iOnt9LCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsImV2ZW50TWFwIjp7ImNvcnBvcmF0ZSI6eyJkaXZzIjp0cnVlLCJzcGxpdHMiOnRydWV9LCJzaWdEZXYiOnt9fSwic3ltYm9scyI6W3sic3ltYm9sIjoiSU5UQyIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJJTlRDIiwicXVvdGVUeXBlIjoiRVFVSVRZIiwiZXhjaGFuZ2VUaW1lWm9uZSI6IkFtZXJpY2EvTmV3X1lvcmsifSwicGVyaW9kaWNpdHkiOjEsImludGVydmFsIjoiZGF5IiwidGltZVVuaXQiOm51bGwsInNldFNwYW4iOnt9fV19