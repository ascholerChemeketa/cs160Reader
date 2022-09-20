..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

.. _building-a-simulation:

Building a Simulation
==========================


Let's use what we have learned about random numbers and if statements to build a simulation.
We want to know the answer to *"If you flip a coin 100 times, what are the chances you get
5 heads in a row at some point?"*

This is a complex problem. We need to flip a coin 100 times and figure out if we get at
least 5 heads in a row - that is slightly different than what we have done so far. We will
also need to repeat that a bunch of times - if we want to know the chances of something
happening, we will need to do it say 10000 times and see what percent of the time we
get the right result.

So let's start with the basics - how do we see if we got 5 heads in a row? Well, each time
we flip a coin, if it is a heads, we need to add one to ``headsInARow``. If it is a tails,
that means we now have seen 0 ``headsInARow``:

.. activecode:: cspdecisionssimulations_simulationbuild1

    import random

    headsInARow = 0
    for i in range(100):
        flip = random.randrange(0, 2)  # pick a number from 0-1
        print(flip)                                    # testing code
        if flip == 0:
            headsInARow = headsInARow + 1
        else:
            headsInARow = 0
        print("We have seen", headsInARow, "in a row") # testing code

Try running the program. Does it appear to work correctly? Once you have verified that
the code appears to work, we need to modify it so it produces just one answer - true
or false - yes we got at least 5 heads in a row or no we did not.

To do this, we will use ``break`` to stop the loop if we see 5 heads in a row. The
``break`` command is a way to stop a loop - it "breaks" us out of the loop and continues
with the rest of the program. In this case, if ``headsInARow`` hits 5, we can stop
the loop early - we know that we got 5 heads and we don't want to keep going and flip a
tails and then "forget" that we had 5 in a row.

.. activecode:: cspdecisionssimulations_simulationbuild2

    import random

    headsInARow = 0
    for i in range(100):
        flip = random.randrange(0, 2)  # pick a number from 0-1
        print(flip)                                    # testing code
        if flip == 0:
            headsInARow = headsInARow + 1
        else:
            headsInARow = 0
        print("We have seen", headsInARow, "in a row") # testing code

        if headsInARow == 5:
            break
    
    if headsInARow >= 5:
        print(True)
    else:
        print(False)


.. mchoice:: cspdecisionssimulations_simulationbuild3
    :answer_a: 4, 13, 16
    :answer_b: 13, 16
    :answer_c: 7, 13, 16
    :answer_d: 4, 7, 13, 16
    :correct: b
    :feedback_a: We don't need to change the loop - we still want 100 flips.
    :feedback_b: Correct.
    :feedback_c: We don't need to change how flips work. A 0 is still heads.
    :feedback_d: We don't need to change the loop - we still want 100 flips. 

    I decide that I want to try to get 7 heads in a row. Which lines would I need to change in the program?
    (Use the history slider to go back to the original version if you made changes to it.)

Now, we want to turn the code into a function that returns True or False instead of printing the
answer. Making it into a function will make it easier to repeat the process over and over. 

.. parsonsprob:: cspdecisionssimulations_simulationbuild4
    :numbered: left
    :adaptive:

    Arrange the code so that the ``checkHeadsInRow(desiredStreak)`` function works correctly.
    It will take a number as its parameter - the number of heads in a row we want to see. It
    will do 100 flips and see if we get that many in a row. If so, it returns True, otherwise False.
    Using a parameter means we could use this same funciton to easily ask for 4 heads in a row,
    or 6 heads.

    You will use all of the blocks. Make sure to put the import at the very top of the program
    and the main part of the program (the function call) after you define the function.
    -----
    # import at top of program
    import random
    =====
    def checkHeadsInRow(desiredStreak):
        headsInARow = 0 #start with 0
    =====
        for i in range(100):
    =====
            flip = random.randrange(0, 2)
    =====
            if flip == 0:
                headsInARow = headsInARow + 1
            else:
                headsInARow = 0
    =====
            if headsInARow == desiredStreak:
                break
    =====
        # Make final decision
        if headsInARow >= desiredStreak:
    =====
            return True
    =====
        else:
    =====
            return False
    =====
    # main part of program
    print( checkHeadsInRow(5) )
