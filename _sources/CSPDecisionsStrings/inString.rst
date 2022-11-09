

Testing parts of strings and length
========================================

A common need is to see if a string is contained in another string. Maybe we want to test
if the user included "yes" anywhere in their response. Or we have a date that might look like
"Dec 1st" or "3rd of December" and we just want to verify that in contains "Dec".
To do this in Python, we can use the ``in`` operator. 

``in`` is used like ``PART in STRING`` where we are testing if the string ``PART`` is in the
string ``STRING``. Both can either be a string in quotes, or a variable that names a string.

This program asks if the user wants to continue. It is designed to handle any possible input
that in includes a "y" or "Y". First it changes the input to be all lowercase, then it
tests if there is a "y" in it. Try it with "Yes", "yeah", "yes please continue", "y", etc...
they all should work.

.. activecode:: cspdecisionsstrings_instring1

    continue = input("Do you wish to continue?")
    continue = continue.lower()   # change input to lower case

    if "y" in continue:
        print("Great, let's continue")
    else:
        print("Bye!")


We can combine ``in`` with other tricks like ``or`` or ``and`` to make more complex tests.
Complete this mixed up code problem that tells the user what season a given month is part of:

.. activecode:: cspdecisionsstrings_instring2
    :autograde: unittest
    :practice: T

    Complete the ``getSeason`` function so that it returns the correct season for each
    month. We want it to accept "dec" or "Dec" or "December" or "DECEMBER" all as being
    the same thing, so we will convert the month to lower case and then use ``in`` to
    test it. 

    Code for the Winter months is already there, write code for the other seasons. If
    there is no logical match for the ``monthName``, we will want to return "???" as the
    season.

    *Hints:*  

    1. There are a couple of ways to make sure that ``"???"`` gets returned as the
    default value for season.  

    2. To make a bunch of exclusive options, remember that it
    works better to use if/elif/elif/else instead of if/if/if/if

    ~~~~
    def getSeason(monthName):
        monthName = monthName.lower()
        season = ""
        if "dec" in monthName or "fan" in monthName or "feb" in monthName:
            season = "Winter"
        # add code for other seasons
        # mar, apr, may are Spring
        # jun, jul, aug are Summer
        # sep, oct, nov are Fall
        # for anything else, set the seson to "???"

        return season
    
    print("April is in ", getSeason("April"))
    print("aug is in ", getSeason("aug"))
    print("October is in ", getSeason("October"))
    print("July is in ", getSeason("July"))
    print("Novuary is in ", getSeason("Novuary"))
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(getSeason("nov"), "Fall", "Testing nov.")
            self.assertEqual(getSeason("February"), "Winter", "Testing February.")
            self.assertEqual(getSeason("june"), "Summer", "Testing june.")
            self.assertEqual(getSeason("???"), "???", "Testing nonsense month.")

    myTests().main()

Another common need is to check how long a string is. The ``len()`` function can be used to ask
for the length of a string. It accepts a string as its parameter and returns the length of that
string.

.. activecode:: cspdecisionsstrings_instring3

    name = "Daphne"
    nameLength = len(name)
    print("That name is", nameLength, "letters long.")

    fullName = "Daphne Smith"
    print("The full name is", len(fullName), "letters long.")

.. mchoice:: cspdecisionsstrings_instring4
    :answer_a: 8
    :answer_b: 7
    :answer_c: 0
    :answer_d: It would be an error
    :correct: a
    :feedback_a: Correct
    :feedback_b: The space counts as a "letter" in the string
    :feedback_c: Try it in the program above!
    :feedback_d: Try it in the program above!

    What would ``len("All good")`` result in?

