..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Using Random Numbers
==========================

If we want to simulate something like flipping a coin, we can assign a different number to each
possible outcome. There are two sides to a coin - *heads* and *tails* - so let's call heads *0* 
and tails *1*. If we make a random integer between 0 and 1, we can think of it as representing
heads or tails on the coin:

.. activeCode:: cspdecisionssimulations_usingrandom0a

    import random

    flip = random.randrange(0, 2)  # pick a number from 0-1
    if flip == 0:
        print("heads")
    else:
        print("tails")

By using the accumulator pattern and a loop, we could repeat a series of flips. Let's do 100
flips and count up how many are heads (0). Each time through the loop, we will pick a new
random number. We will only add to our accumulator ``numHeads`` if the random value is 0.

.. activecode:: cspdecisionssimulations_usingrandom0b

    import random

    numHeads = 0    # how many heads we have flipped
    for i in range(100):
        flip = random.randrange(0, 2)  # pick a number from 0-1
        #print(flip)                                    # commented out testing code
        if flip == 0:
            numHeads = numHeads + 1
            #print("Heads! We now have", numHeads)      # commented out testing code
    
    print("We got", numHeads, "heads.")

Try running the program a few times. You usually won't get exactly 50, but it will usually
be pretty close to that number since we flip 100 coins. Determining if this program is working
correctly is a bit of a challenge - it would take too long to use Codelens to watch the whole
execution. To sanity check it, try the following: 

* Change the number of iterations of the loop from 100 to 10. That will be a lot easier to
  deal with.
* Uncomment the two print lines that are commented out. The first will print each of the flips.
  The second will print each one that was determined to be a *head* and how many we have seen
  so far.
* Now you can verify that:

  * We generate 10 0's and 1's 
  * We call each 0 a "head"
  * The ``numHeads`` count goes up by 1 each time

.. note:: 

    Remember that while debugging we should simplify things as much as possible and use print
    statements to "see" what is happening as our code runs.


**Mixed up programs**

.. parsonsprob:: cspdecisionssimulations_usingrandom1
    :numbered: left
    :adaptive:

    The following program should roll 10 dice (that have sides from 1-6). We want to count
    print the number of dice that show a 6. Drag the blocks from
    the left and place them in the correct order on the right.  Be sure to also indent correctly!
    You will not use all of the blocks.
    -----
    import random
    numSixes = 0
    =====
    for i in range(10):
    =====
        # pick a number from 1-6
        die = random.randrange(1, 7)
    =====
        # pick a number from 1-6 #paired
        die = random.randrange(1, 6)
    =====
        if die == 6:
    =====
            numSixes = numSixes + 1
    =====
            numSixes + 1 #paired
    =====
    print("We got", numSixes, "6's.")
