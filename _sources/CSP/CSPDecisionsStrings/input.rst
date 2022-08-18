..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".



Comparing Strings
===================================
.. index::
    single: input

We can also work with user input directly in string form. If the user is supposed to enter
a word or other piece of text, it makes no sense to try to convert that to a number. Fortunately,
the comparison operators like ``==``, ``!=``, ``>``, etc... all work with strings. 

This program is something like we might have in part of a text based adventure game where the
user is trying to navigate a maze:

.. activecode:: csp_sd_story
    
    print("You are in front of a creepy door in a hallway.")
    print("What do you want to do?")
    action = input("Type: in, left, or right. Then click OK or press enter")
    if action == "in":
        print("You choose to go in.")
        print("The room is pitch black.")
    elif action == "left":
        print("You choose to turn left.")
        print("A ghost appears at the end of the hall.")
    elif action == "right":
        print("You choose to turn right.")
        print("A greenish light is visible in the distance.")
   
.. mchoice:: 13_2_2_story1
    :answer_a: The room is pitch black.
    :answer_b: A ghost appears at the end of the hall.
    :answer_c: A greenish light is visible in the distance.  
    :answer_d: None of the above is printed.
    :correct: d
    :feedback_a: This line will be printed when the user enters in.
    :feedback_b: This line will printed when the user enters left.
    :feedback_c: This line will printed when the user enters right.
    :feedback_d: None of the conditions will be true if the user enters something other than in, left, or right so none of these will be printed.

    What is the printed if the user answer something other than in, left, or right?

.. index::
    single: hardcoded
    pair: input; hardcoded

Now it is your turn to write a program that makes decisions with strings. In the program below, you job
is to write the function that will turn a letter grade like "A" into the GPA points it is
worth: 4. That function will be used to calculate the GPA of someone who took three classes.

Notice that there is some commented out code that **hardcodes** in three input values. 
**Hardcoded** values are ones that are written into a program instead of coming from outside
as the program runs (like from user input). Sometimes, **hardcoding** some values makes
it easier to test a function like the one you need to write - you can run the program and
immediately see the result instead of having to type in all the inputs every time you run it.
Then, once you get the function working, you can remove the hardcoded values and start using
real input.

.. activecode:: 13_2_gpa
    :autograde: unittest
    :practice: T

    Write the code for the ``getGPAPoints`` function. It should **return** the GPA points for the
    given ``letterGrade``. An ``"A"`` should result in 4, a ``"B"`` in 3, a ``"C"`` in 2, 
    a ``"D"`` in 1, and an "F" in 0.

    ~~~~
    def getGPAPoints(letterGrade):
        #write funciton code here

    # Main part of program

    letter1 = input("Enter your first grade")
    letter2 = input("Enter your second grade")
    letter3 = input("Enter your third grade")

    # Hard coded values to test with. You can comment out the lines above
    # and uncomment these three lines to make it easier to test your code.
    # letter1 = "A"
    # letter2 = "C"
    # letter3 = "A"

    totalPoints = getGPAPoints(letter1) + getGPAPoints(letter2) + getGPAPoints(letter3)
    gpa = totalPoints / 3
    print("Your GPA is", totalPoints)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(getGPAPoints("A"), 4, "Testing output for A.")
            self.assertEqual(getGPAPoints("B"), 3, "Testing output for B.")
            self.assertEqual(getGPAPoints("C"), 2, "Testing output for C.")
            self.assertEqual(getGPAPoints("D"), 1, "Testing output for D.")
            self.assertEqual(getGPAPoints("F"), 0, "Testing output for F.")

    myTests().main()







