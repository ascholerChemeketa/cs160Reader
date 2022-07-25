..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. index:: ../csp_global.rst

While Loops - While vs Until
==============================

While loops are most useful when we don't have a set list of items to repeat over or any
time we can more easily describe *"here is the sign we should stop"* rather than *"here are
all the values we need to do this for"*. We saw one example of that in the program that
asked for user input. But there are many other situations in which a ``while`` is the easiest
way to make a loop.

Say we want to convert a decimal number to binary using the division method .
The :ref:`algorithm to do the conversion<binary_conversion_division>` says that we need to keep
dividing by 2 **until** the quotient is 0. That is a description of when to stop, which means
a while loop is what we will use to write the algorithm. However, when we write a while loop,
we need to describe the situation that means *"keep doing the loop"*. If we want to *"stop when
the quotient is 0"* that is the same as *"keep going while the quotient is NOT 0."* Try running
this version of the algorithm in codelens mode:

.. activecode:: binary_10_4

    number = 11
    binary = ""     # this will hold our answer

    # != means "is not equal to"
    while number != 0:
        # % gives remainder
        remainder = number % 2      
        
        # turn remainder into a string to add it to front of binary
        binary = str(remainder) + binary

        # use // to do whole number division
        number = number // 2

    print(binary)

.. warning::

    The condition for a while loop always describes a test that tells us to keep going - *"Keep
    doing this while"*. A common mistake is to write **until** logic - a test that
    says when to stop. 

    If the natual way to say what you want involved **until**, like "Keep going until the user
    enters 0", turn it into **while** by reversing it - "Keep going while the user has NOT entered
    0".

.. mchoice:: 10_4_while_cond
    :answer_a: while balance >= 10000
    :answer_b: while balance < 10000
    :answer_c: while balance == 10000
    :answer_d: while balance != 10000
    :correct: b
    :feedback_a: That is the "until" logic - the situation to stop in. We want the condition under which to continue.
    :feedback_b: Correct. The sign to keep going is that the balance is less than 10000
    :feedback_c: We need to write the logic that describes when to continue looping. That would only loop if we already had 10000.
    :feedback_d: That is close. We need to loop until we hit 10000. But if we do not hit 10000 exactly, that loop would not stop.

    We have a program that is going to keep adding interest to a bank account until the ``balance``
    reaches $10,000 or more. Which would be the correct logic to complete ``while ___________:``?

Thus a while loop allows us to write a program to use Newton's method to calculate a square root
and say "keep repeating the formula until the answer stays the same". This will produce the most
accurate answer we can produce, without having to worry in advance about how many repetitions we
should ask for. Try running this program and changing ``number`` to smaller and larger values.
Notice how the number of repetitions is different for different numbers.

.. activecode:: 10_4_sqrt

    number = 110
    guess = number              # guess will store our most recent guess
    last_guess = 0              # The guess before this one
    while guess != last_guess:  # != means "not eaul to"
        last_guess = guess      # Update our last_guess to match current one
        #Now calculate a new guess
        guess = 1/2 * ((number / guess) + guess)
        print("New guess is:", guess)
