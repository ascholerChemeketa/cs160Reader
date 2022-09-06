..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Repeating Calculations
================================

While calculating an approximate square root with Newton's method, we often want to use the
formula :math:`1/2((N/G) + G)` multiple times to keep improving our approximation. Earlier, we 
defined a procedure to make it easier to reuse the formula. But if we want to apply the
formula a whole bunch of times in a row, a loop makes sense. Try running this program with the
Codelens:

.. activecode:: Numbers_Repeat1

    # Number to find square root of
    number = 110
    # Our first (obviously incorrect guess)
    guess = number          
    
    for iteration in range(5):
        guess = 1/2 * ((number / guess) + guess)

    print("The square root of ", number, "is approximately:")
    print(guess)

Each time we pass through the loop, we update the guess and it becomes a little closer to
the truest value for the square root we can represent (we can never write a perfect
representation of the answer as a decimal, so we have to settle for being correct to a 
significant number of digits). The for loop is initially set to
repeat 4 times, which gets us pretty close to the true value of the square root - 10.48808848170152.

.. fillintheblank:: 10_2_fb

    Modify the loop to repeat more times. What is the minimum number of repetitions you
    need to get an answer that is as acurate as possible? (One that displays as 10.48808848170152)

    - :^8$: Correct!
      :^9$: That is more repetitions than needed
      :\d{2}: That is more repetitions than needed
      :\d: The answer is still changing after that many repetitions
      :.*: Make sure to give your answer as a number

The number of repetitions needed to get the most accurate possible square root for a given
number is not always the same. If you change ``number`` to be 2, it would only take 5 iterations
of the loop to find the best possible guess for the square root. Without experimenting, we
don't really know how many repetitions are needed to get the best possible answer. Currently
our program says something like *"repeat this calculation 5 times"*. What we would like to say
is something more like *"repeat this calculation while it keeps producing a new value"*.