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

You can use as many ``elif`` statements as you need.  You can only have one ``else`` statement.  What if you have scaled some data from 0 to 1 and want to know what quartile a value is in?

.. activecode:: sd_four_options

    x = .25
    if x <= .25:
        print("x is in the first quartile - x <= .25")
    elif x <= .5:
        print("x is in the second quartile - .25 < x <= .5")
    elif x <= .75:
        print("x is in the third quartile - .5 < x <= .75")
    else:
        print("x is in the fourth quartile - .75 < x <= 1")

.. mchoice:: 11_4_2_elif1
   :answer_a: x is in the first quartile - x <= .25
   :answer_b: x is in the second quartile - .25 < x <= .5
   :answer_c: x is in the third quartile - .5 < x <= .75
   :answer_d: x is in the fourth quartile - .75 < x <= 1
   :correct: c
   :feedback_a: This will only print if x is less then or equal to .25.
   :feedback_b: This will print if the other if's were not true, and if x is less than or equal to .5.  By moving lines 6-7 before lines 4-5 this will never print.
   :feedback_c: This will print if the other if's are not true and if x is less than or equal to .75.  So, moving lines 6-7 before lines 4-5 messes up what this code is intended to do and incorrectly prints that .5 is in the third quartile.
   :feedback_d: This will only print if all of the other if's were false.

   What would be printed if you moved lines 6-7 before lines 4-5 and set x equal to .5?

.. activecode:: 11_4_elif_ac
    :autograde: unittest
    :practice: T

    Write the code for the function ``tempDescription``. It should take ``temp`` as a parameter
    that represents a temperature in degrees F. It should return the string ``"Hot"`` if the temp
    is above 80, ``"Warm"`` if it is not above 80 but is above 70, ``"Cool"`` if it is not above 70
    but is above 60, and ``"Cold"`` otherwise (below 60).

    Hint: You don't have to solve it all at once. You can start with just an ``if`` that only
    handles temp's greater than 80. Then add an ``elif`` to handle the Warm temps.
    Then add one for Cool...

    Make sure to ``return`` the answers and not just ``print`` them.

    ~~~~
    def tempDescription(temp):
        # Your code here

    # main part of program
    description1 = tempDescription(85)
    print( description1 )
    description2 = tempDescription(75)
    print( description2 )
    description3 = tempDescription(65)
    print( description3 )
    description4 = tempDescription(42)
    print( description4 )
    description5 = tempDescription(70)
    print( description5 ) # should be Cool
    description6 = tempDescription(80)
    print( description6 ) # should be Warm
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(tempDescription(85), "Hot", "Testing that you return \"Hot\" for 85.")
            self.assertEqual(tempDescription(75), "Warm", "Testing that you return \"Warm\" for 75.")
            self.assertEqual(tempDescription(65), "Cool", "Testing that you return \"Cool\" for 65.")
            self.assertEqual(tempDescription(42), "Cold", "Testing that you return \"Cold\" for 42.")
            self.assertEqual(tempDescription(70), "Cool", "Testing that you return \"Cool\" for 70.")
            self.assertEqual(tempDescription(80), "Warm", "Testing that you return \"Warm\" for 80.")

    myTests().main()

