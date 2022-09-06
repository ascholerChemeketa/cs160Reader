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
----------------------


.. activecode:: ch2_ex1q
    :autograde: unittest
    :nocodelens:
    :practice: T

    ``==`` is an operator that checks for equality. If the value on the left side is equal
    to the value on the right side, it gives ``True``. Otherwise it gives ``False``. 
    
    Insert the correct operators in place of the ``#``'s so each line prints ``True``. Don't change any 
    of the numbers.
    ~~~~
    print((7 # 2) # 10 == 35)
    print(2 # 4 == 0.5)
    print(5 # 2 # 3 == -1)
    print(3 # 2 # 1 == 7)
    print(16 # 7 == 2)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertNotIn("False", self.getOutput(), "Testing that you have no False's.")
            self.assertNotIn("True", self.getEditorText(), "Testing that you didn't hardcode the answer.")
            self.assertRegex(self.getOutput(), r"(True[\s\n]*){5}", "Testing that you produced 5 True's.")

    myTests().main()


.. activecode:: cs2_ex2
    :autograde: unittest
    :practice: T

    Add a set of parentheses to the expression  ``x = 6 * 1 - 2`` so that the code below prints -6 instead of 4.
    ~~~~
    x = 6 * 1 - 2
    print(x)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(x, -6, "Testing that x has the correct value." )
            self.assertNotIn("-6", self.getEditorText(), "Testing that you didn't hardcode the answer.")

    myTests().main()


.. activecode::  ch2_ex3q
    :nocodelens:
    :practice: T

    Add parentheses to ``x = 12 * 2 - 3 + 4 * 2`` so that it prints -4 instead of 29.
    ~~~~
    x = 12 * 2 - 3 + 4 * 2
    print(x)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(x, -4, "Testing that x has the correct value." )
            self.assertRegex(self.getEditorText(), r"x = 12[()\s]*\*[()\s]*2[()\s]*-[()\s]*3[()\s]*\+[()\s]*4[()\s]*\*[()\s]*2", "Testing that you still have all the original pieces.")

    myTests().main()



.. activecode:: ch2_ex4q
    :autograde: unittest
    :practice: T

    Complete the code on lines 3 and 5 below to print the cost of a car trip of 500 miles 
    when the car gets 26 miles per gallon and gas costs 3.45 a gallon.  It should print 66.34615384615385.
    ~~~~
    miles = 500
    milesPerGallon = 26
    numGallons =
    pricePerGallon = 3.45
    total =
    print(total)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(float(self.getOutput().strip()), 66.34615384615385, "Testing that output has the correct value." )
            self.assertNotIn("66.34615384615385", self.getEditorText(), "Testing that you didn't hardcode the answer.")

    myTests().main()


.. activecode:: ch2_ex5q
    :autograde: unittest
    :practice: T

    It is currently 10:00, complete the code to tell what time it is going to be in 18 hours (12-hour time,
    not 24-hour time). The answer should be 4 because 28 hours divided into 12 hour chunks leaves a remainder
    of 4 hours.

    *Hint: rember that **%** is the modulo or remainder operator.*

    ~~~~
    currentTime = 10
    newTime = 10 + 18
    clockTime =
    print(clockTime)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(clockTime, 4, "Testing that clockTime has the correct value." )
            self.assertNotIn("4", self.getEditorText(), "Testing that you didn't hardcode the answer.")

    myTests().main()



.. activecode:: ch2_ex6q
    :autograde: unittest
    :practice: T

    Finish the code on lines 2 and 3 in the code below to print how many hours and minutes
    you have been waiting when you have been waiting a total of 270 minutes. Remember that
    there are 60 minutes in an hour. It should print 4 and then 30.

    *Hint: don't forget the difference between division and integer division.*

    ~~~~
    totalMinutes = 270
    numHours =
    numMinutes =
    print(numHours)
    print(numMinutes)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(numHours, 4, "Testing that numHours has the correct value." )
            self.assertEqual(numMinutes, 30, "Testing that numHours has the correct value." )
            self.assertNotIn("30", self.getEditorText(), "Testing that you didn't hardcode the answer.")
            self.assertNotIn("4", self.getEditorText(), "Testing that you didn't hardcode the answer.")

    myTests().main()


.. #.

..     .. tabbed:: ch2_ex6t

..         .. tab:: Question

..             If Sunday is represented by 1, Monday by 2, Tuesday by 3, etc., and today is Sunday, complete the code on line 4 (with a math expression) to show what day it will be 82 days from today (it should print 6 which represents Friday)


..             .. activecode:: ch2_ex6q
..                 :nocodelens:

..                 today = 1
..                 numberOfDays = 82
..                 thatDayNumber = today + numberOfDays
..                 thatDay = thatDayNumber ...
..                 print(thatDay)




.. #.

..     .. tabbed:: ch2_ex7t

..         .. tab:: Question

..            Complete the code on lines 4 and 5 to print how many miles you can drive on $25 if your car gets 40 miles per gallon and the price of gas is $3.65 a gallon.  It should print 273.97260274.

..            .. activecode::  ch2_ex7q
..                :nocodelens:

..                funds = 25
..                milesPerGallon = 40
..                pricePerGallon = 3.65
..                numGallons =
..                numMiles =
..                print(numMiles)



.. #.

..     .. tabbed:: ch2_ex8t

..         .. tab:: Question

..             Fix the syntax errors.


..             .. activecode:: ch2_ex8q
..                 :nocodelens:

..                 a Number = 12
..                 3 = bNumber
..                 a Number * b Number = cNumber
..                 print(cNumber)



.. #.

..     .. tabbed:: ch2_ex9t

..         .. tab:: Question

..            Complete the code on lines 3 and 7 to print the final cost for an item that is priced $68, but is 40% off the original price and you have a coupon to take an additional 20% of the sale price.  It should print 32.64.

..            .. activecode::  ch2_ex9q
..                 :nocodelens:

..                 price = 68
..                 amountOff = 0.4
..                 saleReduction =
..                 salePrice = price - saleReduction
..                 amountOff = 0.2
..                 couponReduction = salePrice * amountOff
..                 couponPrice =
..                 print(couponPrice)



.. #.

..     .. tabbed:: ch2_ex10t

..         .. tab:: Question

..             Fix the syntax and semantic errors so that the answer is 1 instead of 3.5

..             .. activecode:: ch2_ex10q
..                 :nocodelens:

..                 7 = a
..                 b = 2
..                 a / b = c
..                 print (c)


.. #.

..     .. tabbed:: ch2_ex11t

..         .. tab:: Question

..            Finish the code on lines 4 and 5 to print how many wings you can buy if you have 5 people and they each can spend $4 a person and the wings are $0.50 a wing. It should print 40.0.

..            .. activecode::  ch2_ex11q
..                 :nocodelens:

..                 numPeople = 5
..                 amountPerPerson = 4
..                 price = 0.5
..                 total =
..                 numWings =
..                 print(numWings)


.. #.

..     .. tabbed:: ch2_ex14t

..         .. tab:: Question

..             You're buying groceries and your sub-total is $73, but you have to pay 7% tax. Complete the code to find your total price. Total should be 78.11


..             .. activecode:: ch2_ex14q
..                 :nocodelens:

..                 subTotal =
..                 tax = 0.07
..                 total =
..                 print (total)




.. #.

..     .. tabbed:: ch2_ex15t

..         .. tab:: Question

..            Fix the syntax errors in the code below so that it calculates and prints the number of hours you will need to work if you earn $8 an hour and want to earn $100.  It should print 12.5.

..            .. activecode::  ch2_ex15q
..                 :nocodelens:

..                 8 = payPerHour
..                 amount = 100
..                 amount / payPerHour = numHours
..                 print(numHours)




.. #.

..     .. tabbed:: ch2_ex16t

..         .. tab:: Question

..             Complete the code to show how many minutes are in 1.3 days and how many seconds are in 1.3 days. It should print 1872.0 and 112320.0

..             .. activecode:: ch2_ex16q
..                 :nocodelens:

..                 totalDays =
..                 numHours = totalDays * 24
..                 numMinutes =
..                 numSeconds =
..                 print(numMinutes)
..                 print(numSeconds)




.. #.

..     .. tabbed:: ch2_ex17t

..         .. tab:: Question

..            Finish lines 5 and 6 in the code below to print how many apples you can buy when apples cost 0.60 and you want to get 3 pears and they cost $1.2 each and you have $8.00.  It should print 7.33333333333.  Since you can't buy 7.333 apples can you also figure out how to make it print just 7?

..            .. activecode::  ch2_ex17q
..                 :nocodelens:

..                 pricePerApple = 0.6
..                 numPears = 3
..                 pricePerPear = 1.2
..                 funds = 8
..                 fundsAfterPears =
..                 numApples =
..                 print(numApples)




.. #.

..     .. tabbed:: ch2_ex18t

..         .. tab:: Question

..             A car consumes fuel at a rate of 23 mpg. Someone fills the car up with 15 gallons of gas and drives 112 miles. Fill in the code to determine how many more gallons are left. The answer should be 10.13043478260869


..             .. activecode:: ch2_ex18q
..                 :nocodelens:

..                 gasRate = 23
..                 amountGas = 15
..                 distance =
..                 gasConsumed =
..                 gasRemaining =
..                 print(gasRemaining)




.. #.

..     .. tabbed:: ch2_ex19t

..         .. tab:: Question

..            Write the code to calculate and print how many *miles* you can drive if your car holds 10 gallons and you have a quarter of a tank left and your car gets 32 miles per gallon.  It should print 80.

..            .. activecode::  ch2_ex19q
..                :nocodelens:



.. #.

..     .. tabbed:: ch2_ex20t

..         .. tab:: Question

..             A bullet is travelling 25 m/s. Write code to determine how many seconds it will take to travel 111 m. (It should be 4.44 seconds)

..             .. activecode::  ch2_ex20q
..                 :nocodelens:


