..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

List Accumulation
=======================

.. index::
    single: accumulator

We have already encountered the **accumulator** pattern - where we loop through a list
of values and combine them all. This is a natural thing to do with our lists. Say I want
to total the points that were earned by a student on the quizzes. I might use the following
program:

.. activecode:: cspcollectionsintro_listaccumulation1

    scores = [82, 95, 92, 76, 98, 84, 89, 92]

    # Pick an appropriate initial value
    total = 0

    # Loop through the values
    for score in scores:
        #Add each one to the total, store the result back into the total
        total = total + score
    
    print(total)

The key steps are described with comments. We always need to start with some initial value
as our "accumulation variable", loop through the items, and combine each value with the
accumulation variable.

If I wanted to multiple a group of numbers together, my accumulator variable would need to
start with 1 (the multiplicative identity). At each step, I would multiply the current value
from the list by my accumulated value to get the new accumulated value. This is shown in
the animation below, using ``product`` as the accumulator variable.


.. codelens:: cspcollectionsintro_listaccumulation2

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    # Pick an appropriate initial value
    product = 1 

    # Loop through the values
    for n in numbers:
        # Multiply each one into the product
        product = product * n

    print(product)

.. mchoice:: cspcollectionsintro_listaccumulation3
    :answer_a: 1
    :answer_b: 2
    :answer_c: 3
    :answer_d: 4
    :answer_e: 10
    :correct: c
    :feedback_a: That's the value the first time through the loop
    :feedback_b: That's the value the second time through the loop
    :feedback_c: That's the value the third time through the loop
    :feedback_d: That's the value the fourth time through the loop
    :feedback_e: That's the value the last time through the loop

    What is the value of number at the end of the 3rd time through the loop?
    If you want, you can indent the ``print`` statement so that it prints the product
    each time through the loop instead of just once at the end.

We can "accumulate" other types of data as well. Say I have a series of words stored in
a list. I can use the accumulator pattern to build up one string with all of the words.
My accumulator variable will need to start with an appropriate empty value for a string,
which is ``""``.

.. codelens:: cspcollectionsintro_listaccumulation4

    words = ["Roses", "are", "red", "violets", "are", "dead"]

    # Pick an appropriate initial value
    poem = ""

    # Loop through the values
    for item in words:
        # Add each to the poem with space in front
        poem = poem + " " + item
    
    print(poem)


.. parsonsprob:: cspcollectionsintro_listaccumulation5
    :numbered: left
    :adaptive:

    The following program should calculate the average of some numbers by adding them all up
    before dividing by the number of values there are and printing out the answer.
    Put the blocks in the correct order and indentation. You will not need them all.
    -----
    numbers = [90, 80, 75, 90, 83]
    sum = 0
    =====
    for number in numbers:
    =====
        sum = sum + number
    =====
        sum = sum + numbers #paired
    =====
    average = sum / len(numbers)
    print(average)

