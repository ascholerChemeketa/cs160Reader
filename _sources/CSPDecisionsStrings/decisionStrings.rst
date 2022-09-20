..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".



Using Decisions with Strings
=================================

We can use conditional statements in code to produce different strings for different situations
and to treat different strings in different ways. As a first example, here is a program that
prints a different message depending on how many item(s) a person orders. Try this program
a few times and enter different values for the input.

.. activecode:: cspdecisionsstrings_decisionstrings1

    numItems = int( input("How many items do you want?") )

    if numItems > 1:
        message = "You ordered " + str(numItems) + " items"
    elif numItems == 1:
        message = "You ordered 1 item"
    else:
        message = "That is not a valid number to order!"

    print(message)

In the program, notice that we have to use the ``int`` function to turn the input from a string
into an integer. Anytime we use ``input`` to get some input from the user, it will be read as
a string. If the user types ``20``, that will be stored by Python as the string ``"20"`` and not
as the numeric value 20. Any time we get input, if we want to work with it as a number and not
as a string (a piece of text that may have digits in it) we will need to use this trick.

Similarly, when we go to construct the string that is the elif response, we are trying to combine
the string ``"You ordered "`` with ``numItems`` a number. As we have seen before, to make this
work, we need to call the ``str`` function to make a string out of the number that can be added
to the other strings.

.. mchoice:: cspdecisionsstrings_decisionstrings2
    :answer_a: It runs the same
    :answer_b: It sometimes produces the wrong answer because it is comparing a string to a number
    :answer_c: There is an error because we are comparing a string to a number
    :correct: c
    :feedback_a: Try it!
    :feedback_b: Try it!
    :feedback_c: Correct. You are not allowed to compare a string to a number. Even if the string is something like "2" that looks like a number.

    What will happen if you change the first line to remove the ``int`` function by making it
    ``numItems = input("How many items do you want?")``?

