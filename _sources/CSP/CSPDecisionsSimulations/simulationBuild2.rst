..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst

Building a Simulation - 2
==========================

Now that we have a working function, we can focus on using the function. Look for the spot 
with missing code at line 28. Add the needed code to complete the accumulator pattern to
count up the number of times ``result`` ends up as ``True``. The expected answer is around
80% - about 8 times out of 10 you should get at least 5 heads in a row if you flip a coin
100 times.

If you run into troubles, here are some debugging tips:

* We know ``checkHeadsInRow`` works. Focus your attention on the main part of the program.
* Print the ``result`` you get in each repetition loop.
* Print the ``successCounter`` at the end of each repetition of the loop.
* Reduce repetitions to something like 10 to make it easier to see all the output. Your
  answer will be less reliable with fewer repetitions, so reset it to 10000 when you are
  done debugging.

.. activecode:: 12_heads_in_row_full

    import random

    def checkHeadsInRow(desiredStreak):
        headsInARow = 0 #start with 0

        for i in range(100):
            flip = random.randrange(0, 2)

            if flip == 0:
                headsInARow = headsInARow + 1
            else:
                headsInARow = 0

            if headsInARow == desiredStreak:
                break

        # Make final decision
        if headsInARow >= desiredStreak:
            return True
        else:
            return False

    # main part of program
    repetitions = 10000
    successCounter = 0
    for run in range(repetitions):
        result = checkHeadsInRow(100)
        # TODO if result is True increase successCounter by 1

    percent = (successCounter / repetitions) * 100
    print(str(percent) + "%")

.. fillintheblank:: 12_simulation_fb

    Change the program to check the odds of getting 6 heads in a row in 100 flips.
    Make sure to use 10,000 repetitions so your answer is reliable.
    What answer do you get? Round it to the nearest whole number.

    - :^5[45](\.\d*)?%?$: Correct!
      :.*: Looks like you have an issue. Make sure to write the number like ``XX``. It is possible to get really unlucky or lucky, so try running the program again and double check the answer.
