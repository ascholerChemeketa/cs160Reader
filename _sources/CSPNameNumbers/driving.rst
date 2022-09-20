..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: includes.rst

Driving from Chicago to Dallas
====================================

.. index::
    single: CodeLens

As an example, imagine that you were planning to drive from Chicago to Dallas. If you know how
many miles-per-gallon your car gets, and how many miles it is, you can estimate the number of
gallons it will take.

Use the *CodeLens* below to trace through what it would look like for a computer to execute
this program:

- Press |codelensfwd| to go forward executing a single line of the program.
- Press |codelenslast| to execute all the lines of the program.

.. codelens:: cspnamenumbers_driving1

    distance = 924.7
    mpg = 35.5
    gallons = distance / mpg
   
..  index::
    single: camel case

Now, if we know the average cost of a gallon of gas, we can figure out the cost of the trip
from Chicago to Dallas in your car.  

.. warning::

    Notice that in the code below that we are using **camel case** variable names like
    ``costPerGallon`` and ``costTrip``. When using this style, you have to be careful about
    capitalization - ``costperGallon`` is a different name than ``costPerGallon``. Try changing
    just the first copy of ``costPerGallon`` below to ``costpergallon`` and then run the code
    to see what happens.

.. codelens:: cspnamenumbers_driving2

   distance = 924.7
   mpg = 35.5
   gallons = distance / mpg
   costPerGallon = 3.65
   costTrip = gallons * costPerGallon
   
.. index::
    single: tracing
    single: string
    single: print
    pair: programming; tracing

What we're doing above is **tracing** a program.  Normally, we **run** a program -- tell the
computer to execute each step of the program as fast as possible. When we do that, we don't see
individual variable values, as we can above.  However, we can check values (including the values for
variables) by printing them.

The function ``print`` can take an *input* (a variable name inside
of parentheses) whose value will be displayed. The ``print`` function can also print a **string**
(like ``"Cost to get from Chicago to Dallas"``) which is a sequence of characters inside a pair of
double quotes as seen in line 8.  It will print the exact contents of the string.  This is useful
for explaining the values that you are printing.

You can also print multiple things on one line by putting them all inside the parentheses after
``print``, separated by commas. You can see this on line 12.

Press the |runbutton| below to see this program run at full speed.

.. activecode:: cspnamenumbers_driving3

    distance = 924.7
    mpg = 35.5
    gallons = distance / mpg
    costPerGallon = 3.65
    costTrip = gallons * costPerGallon
    
    #Use print to print out a description of costTrip, then the value
    print("Cost to get from Chicago to Dallas")
    print(costTrip)

    #Print the description and value on the same line
    print("Cost to get from Chicago to Dallas", costTrip)

Try editing the program above and running it to answer this question:

.. mchoice:: cspnamenumbers_driving4
    :answer_a: Yes
    :answer_b: No
    :answer_c: We should fly instead.
    :correct: a
    :feedback_a: Yes, the cost would be $89.86 (which you knew by editing the program above and running it)
    :feedback_b: Try it -- it's just under $90.
    :feedback_c: You might be right, but figure out the cost by editing the above program

    If the cost per gallon drops to $3.45, can we drive from Chicago to Dallas for less than $90 in gas?

.. mchoice:: cspnamenumbers_driving5
    :answer_a: 3.45
    :answer_b: 3.65
    :answer_c: costPerGallon
    :correct: c
    :feedback_a: This would be true if it was printing the value of original variable.
    :feedback_b: This would be true if it was printing the value of the variable after you changed it to figure out the previous question.
    :feedback_c: Since <code>costPerGallon</code> is in double quotes it is a string, and it will print out those exact characters.

    What would be printed by ``print("costPerGallon")`` if this line was added to the end of the program?



