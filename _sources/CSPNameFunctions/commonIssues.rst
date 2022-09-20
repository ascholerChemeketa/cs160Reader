..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Common Function Issues
===========================

There are a few common mistakes you should watch out for while writing functions.

Returning Ends a Function
---------------------------------

One common mistake when writing functions is to try to do work after a return statement.
When Python hits a ``return``, it does just that: it returns to the place the function was
called. The program below tries to use the ``addFive`` function to add 5 to the score
only the code in that function that actually does the math comes after the return and thus 
never runs! Try running it in Codelens mode to see:

.. activecode:: cspnamefunctions_commonissues1

    def addFive(x):
        return x 
        x = x + 5           #This never gets to run!

    # Main program
    score = 10
    score = addFive(score)
    print(score)

.. warning::

    A ``return`` ends a function immediately when it is hit.

Trying to Change a Parameter
---------------------------------

The parameters for a function are variables that only exist inside of that function. You can
make changes to their values, but doing so has no effect on the rest of the program.

This version of the program does not work correctly either. ``score`` is passed as the argument
from the main part of the program into ``addFive``. That means ``addFive`` uses a **copy** of
``score``'s value as its value for ``x``. But ``x`` and ``score`` are not actually linked. A change
to ``x`` does nothing to change the value of ``score``. Nothing is ever returned, so the rest
of the program never learns about the changes that happened in ``addFive``.

Again, try running in Codelens:

.. activecode:: cspnamefunctions_commonissues2

    def addFive(x):
        x = x + 5           #This never gets to run!

    # Main program
    score = 10
    addFive(score)
    print(score)

.. warning::

    The only way to get information (new values) out of a function is to return them.

**Check Your Understanding**

.. parsonsprob:: cspnamefunctions_commonissues3
    :numbered: left
    :adaptive:

    The following program is supposed to convert a Celsius temp into Fahrenheight.
    
    Put the blocks in the right order and indentation. As usual, you will
    not use all the blocks.
    -----
    def convertCtoF(celsiusValue): 
    =====
        newTemp = (9 / 5) * celsiusValue
        newTemp = newTemp + 32
    =====
        celsiusValue = (9 / 5) * celsiusValue
        celsiusValue = celsiusValue + 32  #distractor
    =====
        return newtemp
    =====
        return todaysTempF #distractor
    =====
    todaysTempCelsius = 16
    todaysTempF = convertCtoF(todaysTempCelsius)
    print(todaysTempF)
