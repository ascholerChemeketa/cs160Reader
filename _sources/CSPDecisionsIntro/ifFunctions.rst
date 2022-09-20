..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Functions that make Decisions
====================================

Using ``if`` is essential for writing functions or procedures that need to make decisions.
Say we want a function that calculates the cost to print pages in a library computer lab.
The library charges $0.10 per page for up to 30 pages. If the number of pages is over 30,
they charge $3.00 plus $0.05 per page over 30. The ``costForPrints`` function in the
program below implements that logic.

.. activecode:: cspdecisionsintro_iffunctions1

    def costForPrints(numberPages):
        # Assume number is < 30
        cost = numberPages * 0.10

        # Fix answer if it is not
        if numberPages > 30:
            cost = 3 + numberPages * 0.05

        return cost

    # main part of program
    print( "10 prints costs", costForPrints(10) )
    print( "30 prints costs", costForPrints(30) )
    print( "40 prints costs", costForPrints(40) )

Notice an additional advantage of putting our logic into a function (instead of at the top level of
our program) - it is easier to use the code multiple times. 
In this case, it allows us to test how the ``if`` works for various values. We can call the function
multiple times and pass different values for each function call. If we don't use a function,
we can only test one value each time we run the program.


.. activecode:: cspdecisionsintro_iffunctions2
    :autograde: unittest
    :practice: T

    Write the code for the function ``cabCost``. It should calculate and return the cost a cab
    ride. If the distance traveled is less than or equal to 12 miles the cost is $2.00
    a mile, and if the distance traveled is more than 12 miles the cost is $1.50 a mile.
    ~~~~
    def cabCost(miles):
        # Your code here

    # main part of program
    cost1 = cabCost(10)
    print(cost1)
    cost2 = cabCost(12)
    print(cost2)
    cost3 = cabCost(20)
    print(cost3)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertAlmostEqual(cabCost(10), 20.0, 3, "Testing that you got the right value for cabCost(10).")
            self.assertAlmostEqual(cabCost(12), 24.0, 3, "Testing that you got the right value for cabCost(12).")
            self.assertAlmostEqual(cabCost(20), 30.0, 3, "Testing that you got the right value for cabCost(20).")

    myTests().main()
