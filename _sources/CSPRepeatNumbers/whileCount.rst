..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. index:: ../CSP/csp_global.rst

Counting with a While Loop
===========================

We can also use a ``while`` loop to count through values similar to a ``for`` loop that is
iterating over a range. However, it does involve a little extra work on our part.

A ``for`` loop automatically moves to the next value as we iterate through a list. This program
will set ``counter`` to 1, print it, then change ``counter`` to 2, print that, etc... It continues
counting until it reaches 11 (and stops the loop before printing it).

.. codelens:: csprepeatnumbers_whilecount1

    for counter in range(1,11):
        print(counter)

In a ``while`` loop, there is not a known list of items we are iterating through. So the ``while``
can't automatically go to the next value. It is up to us to advance the loop. Here is a ``while``
loop that counts from 1 to 10:

.. codelens:: csprepeatnumbers_whilecount2

    counter = 1
    while counter < 11:
        print(counter)
        counter = counter + 1

.. index::
    single: loop control variable

Loop Control Variable
------------------------------

In the while loop in the program above, ``counter`` is known as the **loop control variable**.
The **loop control variable** is a variable that is tested as part of the logical expression
of the ``while`` (``counter < 11``). A loop control variable should be initialized before The
while (``counter = 1``), tested by the while, and then updated in the loop body.

The last line in the loop: ``counter = counter + 1`` is the update. It is what advances us
to the next value. Without that line, ``counter`` would never change. Try running this version
of the program:

.. codelens:: csprepeatnumbers_whilecount3

    counter = 1
    while counter < 11:
        print(counter)

Remember that in assignment (``=``) statements, we always do the work on the right side, and
then store the answer into the variable on the left side. Thus in ``counter = counter + 1``,
we first do ``counter + 1`` which says "add one to the value we have stored in counter". On its
own, that would not change ``counter``. To actually change counter, we need to store the answer
back into counter, so we do ``counter = ...``.

We can do whatever we want to update the counter. We could count from 30 down to 0 by 5:

.. codelens:: csprepeatnumbers_whilecount4

    counter = 30
    while counter > 0:
        print(counter)
        counter = counter - 5

Or we could double the counter with each iteration:

.. codelens:: csprepeatnumbers_whilecount5

    counter = 1
    while counter < 100:
        print(counter)
        counter = counter * 2

Where we do the update matters. In this loop, ``counter`` starts at 0. We print that value,
then add 2 to the ``counter``. When we get to 6, it is printed, then we add 2. Then we go
back to the ``while``'s test. Since ``counter < 8`` is no longer true, we end the loop. So
we see the value 0,2,4,6 even though the counter ends up reaching 8.

.. codelens:: csprepeatnumbers_whilecount6

    counter = 0
    while counter < 8:
        print(counter)
        counter = counter + 2
    print("Done")

In this loop, the counter starts at 0, but we add 2 to it before we print it the first time.
Thus the first thin printed is 2. Then, when counter gets to 6, we add 2 more to get 8 and
then print that value before we go back up to test the ``while``'s expression again.
At that point, we realize it is time to stop. Thus this version prints out 2,4,6,8.

.. codelens:: csprepeatnumbers_whilecount7

    counter = 0
    while counter < 8:
        counter = counter + 2
        print(counter)
    print("Done")

.. note::

    A common misconception is that a while loop will stop as soon as it's logical expression
    becomes false. A while loop won't stop in the middle of the body. It is only at the
    start of each iteration that the logical expression is evaluated to decide "should we
    do the body again?"

.. parsonsprob:: csprepeatnumbers_whilecount8
    :numbered: left
    :adaptive:

    The following is the correct code for printing a countdown that prints from 10 to 0, but
    it is mixed up. Drag the blocks from the left and put them in the correct order on the right.
    Don't forget to indent blocks in the body of the loop.
    -----
    counter = 10
    while counter >= 0:
        print(counter)
        counter = counter - 1

.. parsonsprob:: csprepeatnumbers_whilecount9
    :numbered: left
    :adaptive:

    The following is the correct code for printing the even numbers from 2 to 10, by 2's **but it
    also includes some extra code that you won't need**. Drag the needed blocks from the left
    and put them in the correct order on the right.  Don't forget to indent blocks in the
    body of the loop.
    -----
    counter = 2
    =====
    counter = 0 #distractor
    =====
    while counter <= 10:
    =====
        print(counter)
    =====
        counter = counter + 2
    =====
        counter = counter + 1 #distractor


.. mchoice:: csprepeatnumbers_whilecount10
    :answer_a: 1
    :answer_b: 10
    :answer_c: 11
    :correct: c
    :feedback_a: Counter is incremented each time the loop executes.
    :feedback_b: The last value to be printed is 10.  But, the counter is incremented after the current value is printed.
    :feedback_c: Counter gets incremented to 11 after printing, and then the while loop tests counter, finds counter is not less than 11 and then continues after the body of the loop.

    What is the value of counter **after** the loop finishes executing?

    ::

        counter = 0
        while counter < 11:
            print(counter)
            counter = counter + 1

.. mchoice:: csprepeatnumbers_whilecount11
   :practice: T
   :answer_a: 5 4 3 2 1
   :answer_b: -5 -4 -3 -2 -1
   :answer_c: -4 -3 -2 -1 0
   :correct: c
   :feedback_a: If x starts at -5 how can the first value printed be 5?
   :feedback_b: This would be true if the print statement was before we increased x.
   :feedback_c: The value of x is incremented before it is printed so the first value printed is -4.

   What does the following code print?

   ::

      output = ""
      x = -5
      while x < 0:
          x = x + 1
          output = output + str(x) + " "
      print(output)