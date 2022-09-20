..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Using the Loop Variable
============================

In previous pages, we have seen examples that are repetitive, but where each line has a slight
change, like this sequence of calls to ``polygon``:

.. code::

    ...
    polygon(mia, 6, 100)
    polygon(mia, 5, 100)
    polygon(mia, 4, 100)
    polygon(mia, 3, 100)

In situations like that, it would be nice to use a loop to repeat the lines instead of typing
them out one by one. But to do so, we need to use a variable for the value that changes. Something
like ``polygon(mia, sides, 100)`` where ``sides`` is set to the values 6, 5, 4, 3 in successive
calls.

.. index:: 
    pair: loop; variable

We can do this by making use of the **loop variable**. It is the variable that is used to store
each value in the list that the loop is iterating over. This program shows using two loops. In the
first one, the loop variable is called ``x`` and is used count from 0 to 4. In the second, the
loop variable is called ``y`` and counts from 0 to 9.

.. activecode:: csprepeatturtles_loopvariable1

    # x will be set to 0, 1, 2, 3, 4
    for x in range(5):
        print("x is ", x)

    print("--------------------------------------")

    # y will be set to 0, 1, 2, 3, 4, ... 9
    for y in range(10):
        print("y is ", y)

Range Recipes
----------------------------

.. index:: 
    pair: range

That gives us a way to count through a series of numbers. But what if we want, like with the
``polygon`` example, to count from 6 down to 3? Or to count from 10 to 100 by 10's? To do these
tasks, we can use a three-parameter version of ``range``:

.. code::

    range(startValue, stopValue, step)

This version of ``range`` begins from the ``startValue``, increases by ``step`` with each value,
and stops when it hits ``stopValue`` (but does not actually include the ``stopValue``). If the
``step`` is negative, range will count down from ``startValue`` to ``stopValue``.

.. activecode:: csprepeatturtles_loopvariable2

    # x will count from 0, by 2's and stop at 11 (10 will be last value)
    for x in range(0, 11, 2):
        print("x is ", x)
        
    print("--------------------------------------")

    # y will be start at 6 and count down by 1. It stops at 2 (3 is last value)
    for y in range(6, 2, -1):
        print("y is ", y)

.. note::

    The one-parameter range recipe ``range(10)`` is the same as the three-parameter recipe
    ``range(0, 10, 1)``.

**Check Your Understanding**

.. mchoice:: csprepeatturtles_loopvariable3
    :answer_a: range(2, 11, 3)
    :answer_b: range(2, 12, 3)
    :answer_c: range(3, 12, 2)
    :answer_d: range(2, 3, 11)
    :correct: b
    :feedback_a: If the stopValue is 11, it will not actually generate 11.
    :feedback_b: This will not cause an error.
    :feedback_c: The startValue is the first parameter. This recipe would start with 3.
    :feedback_d: This recipe starts at 2, counts by 11, and stops at 3. It would only include 2.

    Which is range recipe would generate the sequence: 2, 5, 8, 11?

Range Recipes With Turtles
----------------------------

We can now use the complex version of range to write a turtle program that repeats
steps but uses a different value for a variable during each repetition.

The program below will use the ``stamp`` procedure to leave a copy of itself on the screen
that will remain after the turtle has moved somewhere else. It also uses the ``shape``
procedure to change the turtle's icon from the default triangle to an actual turtle.

|turtle_ref|

The loop, ``for size in range(5, 60, 2):``, says to count by 2's from 5 to 59. The loop
variable is called ``size`` and is used to control how far forward the turtle moves in
each repetition.

.. activecode:: csprepeatturtles_loopvariable4
    :nocodelens:

    from turtle import *
    space = Screen()
    tess = Turtle()
    tess.color("blue")
    tess.shape("turtle")
    tess.penup()

    # size counts by 2's from 5, stop at 60
    for size in range(5, 60, 2):
        tess.stamp()              # leave a copy of turtle at current location
        tess.forward(size)
        tess.right(24)

All except one of the shapes you see on the screen here are copies of the turtle shape
created by ``stamp``. But the program still only has *one* turtle instance --- can you
figure out which one is the real tess?  (Hint: if you're not sure, write a new line
of code after the ``for`` loop to change tess' color, or to put her pen down and draw a
line, or to change her shape, etc...)

**Mixed up program**

.. parsonsprob:: csprepeatturtles_loopvariable5
    :numbered: left
    :adaptive:

    The following program creates a square spiral as shown below. To do so, we must draw sides
    of length 0, 5, 10, 15, ... 195. After drawing each side, we will turn to get ready for
    the next side.
    
    Arrange and indent the blocks correctly. You will not use them all.

    .. image:: Figures/TurtleSpiral.png
        :width: 150px
        :align: center
    -----
    from turtle import *
    space = Screen()
    nikea = Turtle()
    nikea.color("blue")
    =====
    for x in range(0, 200, 5):
    =====
    for x in range(0, 195, 5): #paired
    =====
    for x in range(0, 205, 5): #paired
    =====
        nikea.forward(x)
    =====
        nikea.forward(size) #paired
    =====
        nikea.forward(195) #paired
    =====
        nikea.right(90)
    =====
        nikea.right(x) #paired
    =====
        nikea.right(size) #paired



.. parsonsprob:: csprepeatturtles_loopvariable6
    :numbered: left
    :adaptive:

    The following program defines a ``square`` procedure and then uses it to draw squares of size
    20, 40, 60, 80, and 100.
    
    Arrange and indent the blocks correctly. You will not use them all.

    .. image:: Figures/TurtleSquares.png
        :width: 150px
        :align: center
    -----
    def square(turtleName, size):
    =====
        for side in range(4):
    =====
        for side in range(size): #paired
    =====
            turtleName.forward(size)
            turtleName.right(90)
    =====
            turtleName.forward(x)
            turtleName.right(90) #paired
    =====
    # main program
    from turtle import *
    space = Screen()
    jose = Turtle()
    jose.speed(10)
    =====
    for x in range(20, 101, 20):
    =====
    for x in range(20, 100, 20): #paired
    =====
        square(jose, x)
    =====
        square(jose, size) #paired
