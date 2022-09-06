..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Stand Alone Procedures and Functions
===========================================

We've already seen how we can use names to represent numbers (both integers like ``3`` and
``-325`` and decimal numbers like ``2.4`` and ``-322.9392``), strings (like ``"Hi There"``),
turtles, and images.  When we do calculations using the names, the computer will look up the
value for each name, and then use the value in the calculation.

.. index::
    single: procedure
    pair: programming; procedure

.. index::
    single: function
    pair: programming; function

We can also name a sequence of statements and then ask the computer to run that sequence whenever
we use that name. In programming there are two different terms used for a named sequence of
statements: **procedure** and **function**.  As we have already learned, **procedure**
accomplishes some task or makes something happen, but doesn't return anything. A **function**
returns a result.

Many procedures and functions are built directly into Python or libraries that we can import.
We have seen a number of them that work with
strings and turtles. There are also functions that work with numbers. The function ``abs`` returns
the absolute value of its input. The function ``int`` takes a decimal number as input and
returns just the integer part. Try running this sample with the Codelens:

.. activecode:: Functions_5_1

    name = "jeff"
    upperName = name.upper()        # call upper function on the string called "name"

    x = -12.6
    wholePart = int(x)              # call the "int" function and use the variable x as input
    positiveValue = abs(x)          # call the "abs" function and use the variable x as input

Notice that functions like ``abs`` and ``int`` are called differently than the ones we use for
strings and turtles. The procedures ``left`` and ``forward`` are part of the turtle object. So when
we use them, we need to specify which turtle should run them using dot notation:
``alex.left(90)``.  The function ``upper`` is part of a string object. So when we want to convert
a string to upper case, we need to say which string is going to do the upper function: 
``name.upper()``. In constrast, ``abs`` and ``int`` are not part of any object - they are stand
alone functions that are not part of any object. So we call them without using dot notation to
specify a particular object.

In this book we will focus on writing these stand alone procedures and functions. These are not
part of any particular object and thus are not called using dot notation. However, as we will
see over the next few pages, they can still work with objects as long as those objects are
provided to the procedure or function as input.
