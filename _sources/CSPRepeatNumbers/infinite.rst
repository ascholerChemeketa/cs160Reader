..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../CSP/csp_global.rst

Infinite Loops
================

In the last section, we saw what happens if a loop's control variable is never updated.
It will run forever.

.. codelens:: csprepeatnumbers_infinite1

    counter = 1
    while counter <= 10:
        print(counter)

Getting a computer to repeat a set of statements is simple. Sometimes it can be tricky to get
it to *stop*.  Remember that a while loop will execute as long as the logical expression is true.
What happens if the logical expression is *always* true?

.. codelens:: csprepeatnumbers_infinite2

    while 1 == 1:
        print("Looping")
        print("Forever")

.. index::
    single: infinite loop
    pair: loop; infinite

Since ``1`` will always be equal to ``1``, the two ``print`` statements will just be repeated
over and over and over again and the logical expression will never be false.  We call that an
**infinite loop**, which means a loop that continues forever or until it is forced to stop. 

In that program, it is obvious that the loop will be infinite. It is not always so clear.
Maybe we don't update the loop control variable. Or maybe we don't write the logical expression
in a way that it will ever become false. Look at this next program. Can you tell why it
has an infinite loop?

Try running it. The problem will freeze up and eventually your browser tab will likely crash!
To stop the program you will have to close the browser tab and reopen the page (copy the page
address from the address bar of your browser before closing it).

.. activecode:: csprepeatnumbers_infinite3

    counter = 1
    while counter != 10:
        print(counter)
        counter = counter + 2

If you run in Codelens mode, there will be an error displayed that tells you Codelens stopped
the run after 1000 lines of execution. You can watch the program run and see what it is doing
up until that point. Try doing so. The loop says to keep going as long as the counter is not
10. The counter never hits 10 - it skips directly from 9 to 11!


.. fillintheblank:: csprepeatnumbers_infinite4

    The program was supposed to display the numbers 1,3,5,7,9. What operator should have been
    used in ``while counter ______ 10:`` instead of ``!=``?

    - :^<=?$: Correct. < or <= both would work.
      :.*: Try again. Make sure to just type the operator: ``>``, ``>=``, ``<``, ``<=``, ``!=``, or ``==``

