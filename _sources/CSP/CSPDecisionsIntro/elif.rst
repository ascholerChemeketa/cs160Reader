..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

Using elif for more options
================================

It can be tricky to specify multiple different levels or options with just ``if`` and ``else``.
This problem provides a demonstration of the challenge:

.. mchoice:: 11_6_3_Grade_Ifs
   :practice: T
   :answer_a: B
   :answer_b: B C
   :answer_c: B C D
   :answer_d: B C D F
   :correct: c
   :feedback_a: B will print. But the program will keep checking the other if statements. Which other ones are true?
   :feedback_b: B and C will print. But the program will keep checking the other if statements. Which other ones are true?
   :feedback_c: Correct.
   :feedback_d: Score is not less than 60, so F will not print.

   What is printed when the following code executes?
   
   :: 
   
     score = 83
     if score >= 90: 
         print("A")
     if score >= 80: 
         print("B")
     if score >= 70: 
         print("C")
     if score >= 60: 
         print("D")
     if score < 60: 
         print("F")

We have used ``if`` and ``else`` to handle two possible options, but what could you do for if
you want more than two options?  What if you want to test if a value is negative, 0, or
positive?  One way to do this using multiple ``if`` statements is shown below.

.. activecode:: sd_three_options

    x = 8
    if x < 0:
        print("x is negative")
    if x == 0:
        print("x is 0")
    if x > 0:
        print("x is positive")

Run this several times and change the value of x each time.  Try it with a positive number, a negative
number, and 0 to check that it works correctly.

..  index::
    single: elif

Although that approach works, it doesn't really guarantee that only one option will be chosen. If
the first if said ``x <= 0``, we would print both "x is negative" and "x is 0". To guarantee that
only one option is chosen, we can use ``elif`` (short for "**el**se **if**"). ``elif`` is used
after an ``if`` or another ``elif`` to specify something to try if the previous conditions were not True:

.. code::

    if TEST1:
        # if body
    elif TEST2:
        # first elif body
    elif TEST3:
        # second elif body
    else:
        #else body

In that sample, we first check ``TEST1``. If it is true, the if body is performed and then all of the
elifs and the else are skipped. If ``TEST1`` is False, we check ``TEST2``. If it is true, we do the
first elif body and then skip the second elif and the else. If ``TEST2`` is also false, we move to
``TEST3``. If it too ends up as false, we finally do the else.

Note that although we can have as many ``elif``'s as we want, we can only have one ``else``. It must
always come last and does not have a condition. The ``else`` is what runs if everything else fails
to run.

Here is the positive/negative check rewritten with elif:

.. activecode:: sd_three_options_elif

    x = 8
    if x < 0:
        print("x is negative")
    elif x == 0:
        print("x is 0")
    else:
        print("x is positive")

Which way is better? Beginners often have an easier time understanding 3 ``if`` statements.
Experts prefer using ``if``, ``elif``, and ``else`` since it better communicates that these
are exclusive options (we only want one of the three) which helps humans read the code and
helps prevent bugs where we do multiple options.

To see the advantages of using ``elif``, try running this version of the letter grade
calculation program. Because the if/elif/else makes the options exclusive, we are guaranteed
to get only one answer. If the score is ``>= 90`` we will print A, and then skip all the
rest of the tests.

.. activecode:: grade_with_elif

     score = 83
     if score >= 90: 
         print("A")
     elif score >= 80: 
         print("B")
     elif score >= 70: 
         print("C")
     elif score >= 60: 
         print("D")
     else: 
         print("F")

**Check Your Understanding**

.. parsonsprob:: 11_4_1_string_elif
   :numbered: left
   :adaptive:

   The following program should report which team won or if there was a tie.  But the code
   has been mixed up.  Drag it into the right order with the right indention.
   -----
   # The scores
   team1 = int( input("Enter team 1 score") )
   team2 = int( input("Enter team 2 score") )
   =====
   if (team1 > team2):
       print("team1 won")
   =====
   elif (team2 > team1):
   =====
       print("team2 won")
   =====
   else:
   =====
       print("team1 and team2 tied")
