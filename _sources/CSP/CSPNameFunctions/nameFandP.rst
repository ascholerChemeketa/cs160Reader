..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst

Procedures and Functions and Composition
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

Many procedures and functions are built into Python. We have seen a number of them that work with
strings and turtles. There are also functions that work with numbers. The function ``abs`` returns
the absolute value of its input. The function ``int`` takes a decimal number as input and
returns just the integer part. Try running this sample with the Codelens:

.. activecode:: Functions_6_1

    name = "jeff"
    upperName = name.upper()        # call upper function on the string called "name"

    x = -12.6
    wholePart = int(x)              # call the "int" function and use the variable x as input
    positiveValue = abs(x)          # call the "abs" function and use the variable x as input

Notice that functions work with numbers are general functions that are not called on a
particular object. That is different than how functions for strings and turtles and other objects
work. To call a string function, you have to call the function on a particular string. When you call
a function that works with numbers, you give the number as input to the function. 

.. index::
    single: composition
    single: functional composition

In both cases, the function **returns** a value that we need to do something with. In the sample
above, we store the result of each function call into a new variable. But we can also use the
returned value in other ways. One common technique is to do **functional composition**, where we
use the results of one function call as the input to another function or a procedure.

``print`` is a procedure that takes an input and prints it to the output area. The first line in
the sample below prints the string ``"Absolute value of -5:".`` The second line prints the value
that is returned by ``abs(-5)``. 

When a line of code runs, and there is a function call inside of another
function or procedure, like ``print(abs(-5))``, Python starts by running the inner function. Once
it calculates the result of that function, it uses that value as the input to the outer function or
procedure. Remember that you can think of a function as getting replaced by
the value that it returns. In this case, once ``abs(-5)`` returns ``5``, the second line of code
then essentially becomes ``print(5)`` and that is how the ``print`` function knows what to print.

.. activecode:: Functions_6_2

    print("Absolute value of -5:")
    print(abs(-5))
    print("Integer part of 34.2")
    print(int(34.2))

.. mchoice:: 7_2_1_Functions_Q1
    :practice: T
    :answer_a: -16
    :answer_b: -16.789
    :answer_c: 16.789
    :answer_d: 16
    :correct: d
    :feedback_a: The function abs will change the negative.
    :feedback_b: The original number will change.
    :feedback_c: The function int will remove the decimal part.
    :feedback_d: The function abs will make 16.789, and the function int will cut it down to 16, finally the <code>print</code> prints it.

    What do you think `print(int(abs(-16.789)))`, prints?


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
