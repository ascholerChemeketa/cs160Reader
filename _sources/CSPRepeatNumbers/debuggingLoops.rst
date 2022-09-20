..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../CSP/csp_global.rst


Debugging Loops
=====================================

Here is an attempt to sum up all the even numbers from 0 to 100 that has a bug:

.. activecode:: csprepeatnumbers_debuggingloops1

    # STEP 1: INITIALIZE ACCUMULATOR 
    sum = 0  # Start out with nothing
    # STEP 2: LOOP THROUGH THE DATA
    for number in range(0, 100, 2):
        # STEP 3: ACCUMULATE 
        sum = sum + number
    
    # STEP 4: PROCESS RESULT
    print(sum)

If you don't already know what the correct answer should be, it is hard to tell that
this program does not work correctly.  How do we know what's really going on in this
program? If we had wrote it, what could we do to verify it?

Here are some things we could do to check our program:

#. Verify the algorithm on a smaller set of data that we can check by hand. Change
   the program to use ``range(0, 10, 2)`` and try to sum up the even numbers from 0-10.
   This answer is small enough to check by hand.
#. Try running the program using Codelens one step at a time to check what it is doing.
   This is much easier if you have already modified the program to work on a smaller
   range of data.
#. Try printing out each number that we iterate through. Try adding this line to the
   start of the loop body (line 5): ``print("number is", number)``. This works
   with the full original range, but the output will be easier to read if you work
   with a smaller range of data.

Use those techniques to figure out what is wrong with the code and try to fix it.


.. mchoice:: csprepeatnumbers_debuggingloops2
    :answer_a: The loop starts too early (skips one or more numbers at the start)
    :answer_b: The loop goes too far (adds one or more extra numbers at the end)
    :answer_c: The loop stops too early (skips one or more numbers at the end)
    :answer_d: The loop is not actually iterating through even numbers
    :correct: c
    :feedback_a: We would want to include 100.
    :feedback_b: If we stop BEFORE 101, we include 100.
    :feedback_c: Correct. To read 100, we need the upper bound of the range to be 101 or 102.
    :feedback_d: Try using one of the strategies... you should see only even numbers

    What is the flaw in the original program?

A common feature of these techniques is that 
If you are writing a program that is going to calculate the GPA for 10,000 students,
test it on just a few students and fix all the bugs you can.

.. note:: 

    Whenever possible, debug on as small a problem as possible. Debugging is hard. You
    can make it easier by limiting your debugging to small chunks of code (by testing
    parts of your program as you go) and debugging on small sets of data (testing your
    algorithm on just a few values instead of on the large program you want to solve.)
