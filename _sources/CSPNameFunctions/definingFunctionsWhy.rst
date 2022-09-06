..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Defining Functions - Why
===========================

We define functions for the same reasons we define procedures:

* To reuse code without having to type it multiple times or copy/paste it
* To make abstractions that allow us to focus on the big picture while solving
  a problem. These abstractions also make it easier for others to get some
  bit of work done without worrying about the details of how it works.

Our program on the last page to calculate the length of side c of a triangle did not really
benefit from making use of a function. We only did the calculation one time and the work
we were doing in the main part of the program was not all that complex. We could have just
calculated the length of the missing side by doing all the calculations in the main
part of the program.

Here is a program that shows off why a function can be useful. I am trying to use 20 feet
of material to make two sides of a right triangle. I want the length of the long side to be
as close to 15 feet as I can make it. So I decide to calculate the length of the hypotenuse
for different triangles - one where I make both legs 10; one where I make the legs 11 and 9;
one where I make the legs 12 and 8; etc... Looking at the results of these calculations,
I can see that my best option is to use lengths of 14 and 6 (which produces a hypotenuse
just a bit closer to 15 than sides of 13 and 7).

.. activecode:: function_why1

    def hypotenuse_length(sideA, sideB):
        # sideA and sideB are our inputs
        aSquared = math.pow(sideA, 2)
        bSquared = math.pow(sideB, 2)
        sideC = math.sqrt(aSquared + bSquared)          # this is the final answer
        return sideC                                    # we return it

        
    # main part of program
    import math
    hypotenuse1 = hypotenuse_length(10, 10)
    print("The length of side hypotenuse1 is", hypotenuse1)

    hypotenuse2 = hypotenuse_length(11, 9)
    print("The length of side hypotenuse2 is", hypotenuse2)

    hypotenuse3 = hypotenuse_length(12, 8)
    print("The length of side hypotenuse3 is", hypotenuse3)

    hypotenuse4 = hypotenuse_length(13, 7)
    print("The length of side hypotenuse4 is", hypotenuse4)

    hypotenuse5 = hypotenuse_length(14, 6)
    print("The length of side hypotenuse5 is", hypotenuse5)

    hypotenuse6 = hypotenuse_length(15, 5)
    print("The length of side hypotenuse6 is", hypotenuse6)

Now look below at a version of this program without a function. 

.. activecode:: function_why2

    import math
    aSquared = math.pow(10, 2)
    bSquared = math.pow(10, 2)
    hypotenuse1 = math.sqrt(aSquared + bSquared)
    print("The length of side hypotenuse1 is", hypotenuse1)

    aSquared = math.pow(11, 2)
    bSquared = math.pow(9, 2)
    hypotenuse2 = math.sqrt(aSquared + bSquared)
    print("The length of side hypotenuse2 is", hypotenuse2)

    aSquared = math.pow(12, 2)
    bSquared = math.pow(8, 2)
    hypotenuse3 = math.sqrt(aSquared + bSquared)
    print("The length of side hypotenuse3 is", hypotenuse3)

    aSquared = math.pow(13, 2)
    bSquared = math.pow(7, 2)
    hypotenuse4 = math.sqrt(aSquared + bSquared)
    print("The length of side hypotenuse4 is", hypotenuse4)

    aSquared = math.pow(14, 2)
    bSquared = math.pow(6, 2)
    hypotenuse5 = math.sqrt(aSquared + bSquared)
    print("The length of side hypotenuse5 is", hypotenuse5)

    aSquared = math.pow(15, 2)
    bSquared = math.pow(7, 2)
    hypotenuse6 = math.sqrt(aSquared + bSquared)
    print("The length of side hypotenuse6 is", hypotenuse6)

Not only did writing it involve retyping lines like ``aSquared = math.pow(___, ___)``
over and over, and it is harder to read and understand. 
A function call like ``hypotenuse_length(15, 5)`` allows us to instantly see
*"Oh, that is just where we are going to calcualte the hypotenuse."*. When there is no function,
the reader has to slog through things like this: 

.. code::

    aSquared = math.pow(10, 2)
    bSquared = math.pow(10, 2)
    hypotenuse1 = math.sqrt(aSquared + bSquared)

As they do so, they must come to their own conclusion *"Oh, I think
I see what is going on, we are doing all the math to calculate a hypotenuse"*. Doing this
distracts them from the big picture of the problem we are really trying to solve. 

**Check Your Understanding**

.. fillintheblank:: 7_3_fb

    We want to calculate the hypotenuse of a triangle with legs of 8 and 15 and then
    print out the result. Write the line of code that would go in the ______________
    to use the ``hypotenuse_length`` function defined above to do the math.

    .. code::

        ______________
        print(answer)

    - :answer\s*=\s*hypotenuse_length\(\s*8\s*,\s*15\s*\): Correct!
      :\w+\s*=\s*hypotenuse_length\(\s*8\s*,\s*15\s*\): Make sure you use the same variable name the second line is using.
      :^[^=]*hypotenuse_length\(\s*8\s*,\s*15\s*\)$: Make sure you store the result of function call.
      :.*: Make sure you call the function and specify 8 and 15 in order.