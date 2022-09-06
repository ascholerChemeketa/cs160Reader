..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Repeating Steps & Range
=====================================

.. index::
    single: loop

*Learning Objectives:*

- Use a ``for`` loop to repeat steps with turtles.

Often times we have to repeat steps in a process. If you are making a cake the recipe might say add
an ingredient and then stir it 50 times or until the batter is smooth. The recipe would not say
the word "stir" 50 times. It instead would instruct you to "stir 50 times" or "stir until smooth".

When our programs need to repeat a step or series of steps, we want to use this same trick to make
the programs easier to write and read. 
While writing turtle programs, we have seen many examples of steps repeated. Here is our recipe
for a turtle ``alex`` to draw a hexagon:

.. code::
    
    alex.forward(100)
    alex.right(60)
    alex.forward(100)
    alex.right(60)
    alex.forward(100)
    alex.right(60)
    alex.forward(100)
    alex.right(60)
    alex.forward(100)
    alex.right(60)
    alex.forward(100)
    alex.right(60)

There are six repetitions of the ``forward`` and ``right`` commands. Although copy/paste can save
us from having to type the lines six times, it is still not ideal. Remember that there is a general 
rule in programming: **DRY - don't repeat yourself**. Repeating ourselves in this case makes for a 
long chunk of code that is awkward to read - you have to stop and think "OK, how many times is this
repeating... ah, six... OK, this must be a hexagon."

.. index::
    single: loop
    single: for loop

We would like to rewrite our code to tell alex to repeat the ``forward`` and ``right`` steps 6
times each instead of listing them six times. We can do so with a ``for`` **loop**: 

.. activecode:: Turtle_For_Intro
    :nocodelens:

    from turtle import *
    space = Screen()
    alex = Turtle()
    for side in range(6):       # repeat the indented lines 6 times
        alex.forward(100)
        alex.right(60)
    
    print("Done with program")

A **loop** in a program is anything that causes lines of code to get executed multiple times
in a row. A ``for`` loop is a specific kind of loop in Python that uses a list of values and
a series of steps and repeats all of the steps for each item in the list.

In this case, the steps that are repeated are the ``forward`` and ``right`` commands that
are indented after the ``for``. Notice that the ``print``, which is not indented, only happens
one time, after we have repeated the ``forward`` and ``right`` commands.


Range
--------------------------------

The list of items the ``for`` uses to determine how many times to repeat is created by the
``range`` function. This is a function built into Python that can be used to generate a list of numbers.
This example shows exactly what ``range(6)`` produces:

.. activecode:: Range_demo
    :nocodelens:

    sides = list( range(6) )
    print(sides)

.. mchoice:: 8_1_1
    :answer_a: The list of numbers 0 to 6
    :answer_b: The list of numbers 1 to 6
    :answer_c: The list of numbers 1 to 5
    :answer_d: The list of numbers 0 to 5
    :correct: d
    :feedback_a: Try running the program...
    :feedback_b: Try running the program...
    :feedback_c: Try running the program...
    :feedback_d: Correct

    What is the list produced by ``range(6)``

.. index::
    single: iteration

For now, we don't need to worry about exactly what values ``range`` produces. What is
important for now is that ``range(6)`` makes a list that has 6 values. When that list is
used in a ``for`` statement, it will cause the code to repeat 6 times.
For each value in the list produced by ``range``, the ``for`` loop will repeat the
indented statements that come after it. Each of these repetition is called an
**iteration**. To **iterate** is to go through items one at a time.

That just leaves the variable **side** in the for statement to explain:

.. faux_code::

    for ``side`` in range(6):

It is the name we will use for each item as we iterate through them. For now we will not
need to us the names of the items very often. We mostly care that ``range`` produces a
certain number of values, not what those values are. But if we wanted to print out each
of the values that range produces, we could modify the program to use ``side`` to name
them. In this program, for each value in the list produced by ``range``, we call the
current item ``side``, print it out, then do the turtle commands.

.. activecode:: Turtle_For_Intro_finals
    :nocodelens:

    from turtle import *
    space = Screen()
    alex = Turtle()
    for side in range(6):                       # repeat the indented lines 6 times
        print("side is currently", side)        # print current value of side

        alex.forward(100)
        alex.right(60)

    print("Done with program")

.. index::
    pair: loop; body

The **body** of a loop is the part that gets repeated. It is the lines of code after the
``for`` that are indented past the ``for`` itself. (Like how the body of a procedure is
indented after ``def``). 

Notice that a blank line does not "end" the body of the ``for``. Both ``print("side is currently", side)``
and the ``alex.forward`` and ``alex.right`` are part of the body and get repeated. The loop
body ends at the first line that is indented to the same level as the ``for``. In this case,
the ``print("Done with program")`` is indented to the same level as ``for``, so at that
point the loop body is done and the line is not part of the loop. That last print will only
happen one time.

.. note::

    The code that is the body of a loop must be indented one step past the loop. The loop
    body ends at the first line that is indented the same (or fewer) spaces.
