..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


.. setup for automatic question numbering.



Chapter Exercises
--------------------

.. activecode:: ch7_ex1
    :autograde: unittest
    :practice: T

    Fix the errors so it runs and returns the perimeter of a rectangle.
    ~~~~
    def recPerimeter(length, width):
    perimeter = 2 * (length + width)
    Return recPerimeter

    # Main program
    result = recPerimeter(2, 4)
    print(result)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(result, 12, "Testing that result has the correct value." )
            self.assertNotIn("12", self.getEditorText(), "Testing that you didn't hardcode the answer.")

    myTests().main()


.. activecode:: ch7_ex2
    :autograde: unittest
    :practice: T

    The ``areaTriangle`` function below was hard coded so it always uses 5 and 4 for the base and
    height of a triangle to calculate the area for. Modify the function so that it has parameters
    for base and height and works to calculate the area of different triangles.
    ~~~~
    def areaTriangle():
        base = 5
        height = 4
        return (5 * 4) / 2

    # Main program. Do not modify lines below
    print(areaTriangle(5, 4))
    print(areaTriangle(6, 3))
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(self.getOutput().strip(), "10.0\n9.0", "Testing that your program prints the right answers." )
            self.assertRegex(self.getEditorText(), r"\nprint\(areaTriangle\(5, 4\)\)\nprint\(areaTriangle\(6, 3\)\)", "Testing that you still have the starter main program")

    myTests().main()


.. activecode:: ch7_ex3
    :autograde: unittest
    :practice: T

    The mathemetician Newton invented a method to approximate the square root of a number. 
    Take the number **N** you want the square root for and a guess **G** and then
    calculate :math:`1/2(N/G + G)`. You will get a rough approximation. If you use the
    answer as a new guess and repeat the process, you will get a closer approximation. You
    can keep repeating the process to make your approcimation closer and closer to the real
    value.

    Write an ``approximateSqrt`` function that takes a number and guess as its parameters
    and then uses Newton's formula to estimate the square root of the number. 
    
    There is already code provided to use your function to calculate the square root of 150.
    ~~~~
    # Your code here

    # Main program. Do not modify lines below
    number = 150            #number to figure out the square root of
    guess1 = 10             #initial guess
    guess2 = approximateSqrt(number, guess1)
    guess3 = approximateSqrt(number, guess2)
    guess4 = approximateSqrt(number, guess3)
    print(guess4)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertAlmostEqual(guess4, 12.2474489, 3, "Testing that you got the right value for guess4.")
            self.assertNotRegex(self.getEditorText(), r"12\.24", "Testing that you did not hard code the answer.")

    myTests().main()


.. #.

..     .. tabbed:: ch7ex11t

..         .. tab:: Question

..            Change the code below to create a function that calculates the cost of a trip.  It should take the ``miles``, ``milesPerGallon``, and ``pricePerGallon`` as parameters and should return the cost of the trip.

..            .. activecode::  ch7ex11q
..                 :nocodelens:

..                 miles = 500
..                 milesPerGallon = 26
..                 numGallons = miles / milesPerGallon
..                 pricePerGallon = 3.45
..                 total = numGallons * pricePerGallon
..                 print(total)


.. #.

..     .. tabbed:: ch7ex13t

..         .. tab:: Question

..            Change the code below to create a function to return the number of miles you can drive.  It will take as input (parameters) the ``tankCapacity``, ``theAmountLeft``, and the ``milesPerGallon``.

..            .. activecode::  ch7ex13q
..                 :nocodelens:

..                 tankCapacity = 10
..                 amountLeft = 0.25
..                 numGallons = tankCapacity * amountLeft
..                 milesPerGallon = 32
..                 numMiles = numGallons * milesPerGallon
..                 print(numMiles)



.. #.

..     .. tabbed:: ch7ex14t

..         .. tab:: Question

..             Complete and change the code to be a function with 2 parameters that returns the time taken to travel and call the function

..             .. activecode::  ch7ex14q
..                 :nocodelens:

..                 speed = 5
..                 distance = 25
..                 timeTakenToTravel =
..                 print(timeTakenToTravel)

.. #.

..     .. tabbed:: ch7ex20t

..         .. tab:: Question

..             Write a function that takes the current hour, current minute, an int to be added to the current hour, and an int to be added to the current minute, and return a string with the new hour and minute (standard 12 hour time; if minutes exceed 60, it should go to the hour) and call the function.

..             .. activecode::  ch7ex20q
..                 :nocodelens:


