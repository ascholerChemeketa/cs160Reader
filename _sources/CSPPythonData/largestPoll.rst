..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


What's the largest pollution values?
======================================

This section uses the same data file that we have been using, but if you want to review
the data click on the *Show* button below.  Once it appears, you can hide it again by
clicking on the *Hide* button.

.. include:: ./usPollData.rst

Now that we have figured out how to process the data in the file, we can get to work on
answering questions about it. One of the interesting questions to explore might be,
"Which city has the worst pollution at the PM2.5 level?" The program below figures that
out. It uses the maximum value pattern to do this - ``max25`` will be used to store the
highest PM2.5 value we have seen. We also need to remember the name of the city that
value was from. We will use ``maxCity`` to do this and update it every time we find a
new ``max25``. It isn't easy to initialize these to match the first record, so we will
start ``max25`` with a tiny value we know will get replaced by the first record.

There is one extra wrinkle we need to worry about. Recall that the data in a text file
is stored as ASCII text. So a PM2.5 value in the file would be ``"12"`` instead of the
number ``12``. That is a problem, because when you compare strings, they are compared
alphabetically. ``"B"`` is greater than ``"Apple"`` because B comes after A. By the same
logic, the string ``"2"`` is greater than the string ``"12"`` because 2 is greater than
1. If we convert the strings to numbers, things will work as expected - ``2`` is smaller
than ``12``. So we must use ``int()`` to convert the PM2.5 values to integer numbers.

.. activecode:: max25
    :nocodelens:
    
    inFile = open("uspoll.txt")
    data = inFile.read().splitlines()
    inFile.close()
    
    # initialize the variables
    maxCity = ''
    max25 = 0 

    for line in data:
        values = line.split(":")
        
        # get the PM 2.5 pollution and turn into a number
        new25 = int(values[2]) 
        
        # if current >  max
        if new25 > max25:
            # save the new max info
            maxCity = values[0]
            max25 = new25 # save the new maximum
            
    # print the largest PM 2.5 value
    print("Highest pollution is", max25, "in", maxCity)

.. mchoice:: 18_4_3_max10_max25_q
    :answer_a: The same city has the maximum value for both PM 2.5 and PM 10.
    :answer_b: Different cities have the maximums, but they are in the same state.
    :answer_c: Different cities in different states have the maximum values.
    :correct: a
    :feedback_a: Fresno, CA is the worst for both.
    :feedback_b: Check that are using values[1] to find the worst PM 10.
    :feedback_c: You did not actually run and change the program, did you?

    Modify the code to find the city with the highest PM10 value. Which statement is true?

.. fillintheblank:: 18_4_3_max10_max25_q2

    What PM10 value does the most polluted city have?

    - :^\s*70\s*$: Correct!
      :^\s*\d+\s*$: That is not the right value.
      :.*: Make sure to give your answer as a number