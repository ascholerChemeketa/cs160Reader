..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

Using elif correctly
================================

In the grade printing program on the previous page, the program checked each possible grade
starting with the highest ("A") and working down to the lowest option ("F"):

   :: 

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

This ordering is important, because in an if/elif/else chain, Python will not skip ahead
to "the correct" option. If we put the various grades in a mixed up order, the first ``if``
or ``elif`` whose condition is true is the one that will run.

In this version of the program, a score of 83 will NOT be a B. Can you see why? Try running
it in codelens mode.

.. activecode:: bad_grade_elif

    score = 83
    if score >= 90:
        print("A")
    elif score >= 60:
        print("D")
    elif score >= 70:
        print("C")
    elif score >= 80:
        print("B")
    else:
        print("F")

To avoid issues like that, we always need to put the ``if``/``elif`` options in order from
highest to lowest, or from lowest to highest. The program below shows starting with the
lowest option and working our way up. Assumes x represents a percentile and we want to
indicate which quartile it is in. 

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

