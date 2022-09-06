..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Introducing the While Loop
=================================

.. index::
    single: while
    single: logical expression
    pair: loop; while

Recall that a ``for`` loop is designed to repeat steps for every value in a list. The ``range``
function in the code below is designed to generate a list that looks like [0, 1, 2, 3, 4] and
thus causes the loop to repeat 5 times. By forcing us to provide that list of values, the ``for``
loop requires us to specify the number of iterations there will be before we begin looping.

.. code::

    for iteration in range(5):
        guess = 1/2 * ((number / guess) + guess)

However, there is another way to repeat statements: the ``while`` loop.  It will repeat the
**body** of the loop as long as some **logical expression** is true. Just like with a for loop,
the **body** of a while loop is the lines of code after ``while`` that are indented. A **logical
expression** is one that is either true or false like ``x < 5``. (We will talk more about them
later.)

``While`` loops are typically used when you don't know how many times to execute the loop. they
allow us to say *"keep repeating this while we don't have an answer"*. One reason we might not
know in advance how many times to repeat is if we are getting input from outside the program.
The code below will keep asking you to enter numbers. It will do so until you enter a number
that isn't negative. It will print out the sum and average of all of the numbers you have entered.

.. activecode:: while_input

    sum = 0
    count = 0
    message = "Enter an integer. Enter 0 or less to stop."
    value = input(message)
    while int(value) > 0:
        print("You entered " + value)
        sum = sum + int(value)
        count = count + 1
        value = input(message)

    print("The sum is: " + str(sum) + " the average is: " + str(sum / count))

The loop in this sample takes your input, which is stored in ``value`` as a string like "12", and
turns that into an integer like 12. It checks to see if that value is greater than 0. If so, it
does the loop body, if not, we skip over the loop body and continue with the rest of the program.

.. mchoice:: 10_1_2_While_Input1
    :answer_a: 3
    :answer_b: 4
    :answer_c: 5
    :answer_d: 6
    :correct: b
    :feedback_a: All the statements that are indented 4 spaces to the right of the <code>while</code> are part of the body of the loop.
    :feedback_b: There are four statements that are indented 4 spaces to the right of the <code>while</code> statement, so there are four statements in the body of this loop.
    :feedback_c: Is the <code>print(message)</code> line indented 4 spaces to the right of the <code>while</code>? If not it is not part of the body of the loop.
    :feedback_d: While line 11 is indented this is just to allow the print statement to take up more than one line.  The print statement is not indented so the body of the loop contains just 4 lines.

    How many lines are in the body of the ``while`` loop in while_input above?

.. mchoice:: 10_1_2_While_InputError
    :answer_a: It prints the sum is 0 and the average is 0.
    :answer_b: It prints a message that it can't divide by 0.  
    :answer_c: There is an error.
    :correct: c
    :feedback_a: Do you see code to do this in the program?
    :feedback_b: This might be nice, but is that what happens?
    :feedback_c: You will get a ZeroDivisionError since you can't divide by zero.
    
    What happens if you enter a negative number as the first input to the code above?

