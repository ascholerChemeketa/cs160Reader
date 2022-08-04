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
---------------------

.. activecode:: ch11ex1q
    :autograde: unittest
    :practice: T

    The code below is supposed ot set the price to 1.5 if the weight is less than 2 and
    otherwise set it to 1.3. It then calculates the total be multiplying the weight by price.

    Fix 3 errors with indention in the code below so that it calculates the right total
    for a weight of 0.5 (should be 0.75).

    Then change the weight to be 3 (leave numItems as 5).

    ~~~~
    weight = 0.5
    numItems = 5
    if weight < 2:
    price = 1.50
    if weight >= 2:
    price = 1.30
        total = weight * price
    print(total)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(weight, 3, "Testing that weight is 3.")
            self.assertEqual(price, 1.3, "Testing that price is correct.")
            self.assertEqual(total, 3.9, "Testing the total is correct.")

    myTests().main()


.. activecode:: ch11ex2q
    :autograde: unittest
    :practice: T

    Write code to complete the ``isEven`` function. It should return ``True`` if ``number`` is
    even and ``False`` if it is odd.

    To check if a number is even, you can divide it by 2 and look at the remainder. (Remember
    that ``x % 2`` says "divide x by 2 and get the remainder".) If the remainder is 1, the number
    is odd. If the remainder is 0, it is even.

    ~~~~
    def isEven(number):
        # Your code here

    # main part of program
    print( isEven(3) )
    print( isEven(9) )
    print( isEven(11) )
    print( isEven(131) )
    print( isEven(12) )
    print( isEven(8) )
    print( isEven(126) )
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(isEven(31), False, "Testing a mystery odd number.")
            self.assertEqual(isEven(6), True, "Testing a mystery even number.")

    myTests().main()


.. activecode:: ch11ex3q
    :autograde: unittest
    :practice: T

    Write code to complete the ``calculatePay`` function. It takes in a number of hours
    worked and an hourly pay. If the hours worked is less than 40, it should just return
    the hours times the hourly pay. If more than 40 hours were worked, the person should
    earn normal pay for 40 hours and 1.5 times the normal pay for the hours over 40.
    So if someone worked 50 hours, at $18 per hour they would recieve 
    :math:`40 \cdot 18 + ((50 - 40) \cdot 18) \cdot 1.5`

    ~~~~
    def calculatePay(hours, hourlyPay):
        # Your code here

    # main part of program
    print( calculatePay(30, 15) )
    print( calculatePay(40, 12) )
    print( calculatePay(50, 18) )
    print( calculatePay(60, 20) )
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(calculatePay(30, 15), 450.0, "Testing calculatePay(30, 15).")
            self.assertEqual(calculatePay(40, 12), 480.0, "Testing calculatePay(40, 12).")
            self.assertEqual(calculatePay(50, 18), 990.0, "Testing calculatePay(50, 18).")
            self.assertEqual(calculatePay(60, 20), 1400.0, "Testing calculatePay(60, 20).")

    myTests().main()


.. activecode:: ch11ex4q
    :autograde: unittest
    :practice: T

    The number of credits someone has determines what class level they are at a University.
    A Senior has taken 135 or more credits. A Junior hasn't taken that many, but has taken
    at least 90 credits. A Sophomore has taken at least 45. A Freshman is anyone who has
    taken 45 or less.

    Write code to complete the ``getClass`` function. Your code should use ``credits`` and
    the above logic to change ``classLevel`` to the appropriate value: either ``"Senior"``,
    ``"Junior"``, ``"Sophomore"``, or ``"Freshman"``.

    Make sure to change the variable, not just print out the answer!

    ~~~~
    def getClass(credits):
        classLevel = "Unknown"
        # Your code here
        return classLevel

    # main part of program
    print( getClass(150) )
    print( getClass(135) )
    print( getClass(120) )
    print( getClass(90) )
    print( getClass(85) )
    print( getClass(25) )
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(getClass(150), "Senior", "Testing getClass(150).")
            self.assertEqual(getClass(135), "Senior", "Testing getClass(135).")
            self.assertEqual(getClass(120), "Junior", "Testing getClass(120).")
            self.assertEqual(getClass(90), "Junior", "Testing getClass(90).")
            self.assertEqual(getClass(85), "Sophomore", "Testing getClass(85).")
            self.assertEqual(getClass(25), "Freshman", "Testing getClass(25).")

    myTests().main()

.. #.

..     .. tabbed:: ch11ex1t

..         .. tab:: Question

..             Fix 3 syntax errors in the code below so that it correctly prints "x is less than 3" and then "All done" when x is less than 3.

..             .. activecode:: ch11ex1q
..                 :nocodelens:

..                 x = 0
..                 if x < 3
..                 print ("x is less than 3")
..                 print ("All done)



.. #.

..     .. tabbed:: ch11ex2t

..         .. tab:: Question

..             The code currently prints "Hello" when the number is less than 3. Change it so that it prints "Hello" when the number is equal to 3.

..             .. activecode::  ch11ex2q
..                 :nocodelens:

..                 x = 3
..                 if x < 3:
..                     print("Hello")



.. #.

..     .. tabbed:: ch11ex3t

..         .. tab:: Question

..            Fix the indention in the code below to use a price of 1.45 if the weight is less than 1 and a price of 1.15 otherwise.  There is also one syntax error.

..            .. activecode::  ch11ex3q
..                 :nocodelens:

..                 weight = 0.5
..                 if weight < 1:
..                 price = 1.45
..                 if weight >= 1
..                 price = 1.15
..                 total = weight * price
..                 print(weight)
..                 print(price)
..                 print(total)



.. #.

..     .. tabbed:: ch11ex4t

..         .. tab:: Question

..             Fill in line 1 with a weight that will make the total equal 1, and fix the indentation errors.

..             .. activecode::  ch11ex4q
..                 :nocodelens:

..                 weight =

..                 if weight >= .5:
..                 price = 2
..                 if weight < .5:
..                 price = 1
..                     total = weight * price
..                     print(total)



.. #.

..     .. tabbed:: ch11ex5t

..         .. tab:: Question

..            Fix 3 errors with indention in the code below to correctly set the price to 1.5 if the weight is less than 2 and otherwise set it to 1.3.

..            .. activecode::  ch11ex5q
..                 :nocodelens:

..                 weight = 0.5
..                 numItems = 5
..                 if weight < 2:
..                 price = 1.50
..                 if weight >= 2:
..                 price = 1.30
..                 total = weight * price
..                 print(weight)
..                     print(price)
..                 print(total)



.. #.

..     .. tabbed:: ch11ex6t

..         .. tab:: Question

..             The code currently does not do anything if the number is equal to 2. Fix it so that it prints "Hey" if the number is 2.

..             .. activecode::  ch11ex6q
..                 :nocodelens:

..                 x = 2
..                 if x < 2:
..                     print("Hello")
..                 if x > 2:
..                     print("Hey")



.. #.

..     .. tabbed:: ch11ex7t

..         .. tab:: Question

..            Fix 4 errors in the code below to print "x is a number from 	1 to 10" when x is greater than or equal to 1 and less than or equal to 10.

..            .. activecode::  ch11ex7q
..                 :nocodelens:

..                 x = 3
..                 if x > 1 and x <= 10
..                 print ("x is a number from 1 to 10")
..                     print ("All done")



.. #.

..     .. tabbed:: ch11ex8t

..         .. tab:: Question

..             The following code prints "This is not 8" when the number is not 8. Change the if statement, so that it does the same thing but only uses one expression (No "and" or "or").

..             .. activecode::  ch11ex8q
..                 :nocodelens:

..                 x = 8
..                 if x < 8 or x > 8:
..                     print("This is not 8")
..                 else:
..                     print("This is 8")



.. #.

..     .. tabbed:: ch11ex9t

..         .. tab:: Question

..            Finish the conditional on line 3 to print "You can go out!" if either cleanedRoom or finishedHomework is true (not 0). It should always print "All done" as well.

..            .. activecode::  ch11ex9q
..                 :nocodelens:

..                 cleanedRoom = 1
..                 finishedHomework = 0
..                 if
..                     print ("You can go out!")
..                 print ("All done")



.. #.

..     .. tabbed:: ch11ex10t

..         .. tab:: Question

..             Complete the conditional and fix the errors so that it prints "Good job" when the number is between 1 and 10 (inclusive) or is 15 and "Fail" when it is not.

..             .. activecode::  ch11ex10q
..                 :nocodelens:

..                 x = 8
..                     if
..                 print("Good job")



.. #.

..     .. tabbed:: ch11ex11t

..         .. tab:: Question

..            Fix 5 errors in the following code to set the price to 1.45 if the weight is less than or equal to 1 and otherwise set it to 1.15.

..            .. activecode::  ch11ex11q
..                 :nocodelens:

..                 weight = 0.5
..                 if weight < 1:
..                 price = 1.45
..                 if weight > 1:
..                 price = 1.15
..                 total = weight * price
..                 print(weigh)
..                 print(Price)
..                 print(total)



.. #.

..     .. tabbed:: ch11ex12t

..         .. tab:: Question

..             Fix the indentation below, so that the code sets the price based off the weight, then checks if the total is greater than the amount in your wallet.

..             .. activecode::  ch11ex12q
..                 :nocodelens:

..                 weight = 0.5
..                 numItems = 5
..                 wallet = 2

..                 if weight < 1:
..                     price = 1.45
..                     if weight >= 1:
..                     price = 1.15
..                     total = numItems * price
..                     if total > wallet:
..                     print("You have no money")



.. #.

..     .. tabbed:: ch11ex13t

..         .. tab:: Question

..            Change 3 lines in the code below to correctly set the grade so that a 90 and above is an A, 80-89 is a B, 70 - 79 is a C, 60-69 is a D and below 60 is an E.

..            .. activecode::  ch11ex13q
..                 :nocodelens:

..                 score = 93
..                 if score >= 90:
..                     grade = "A"
..                 if score >= 80:
..                     grade = "B"
..                 if score >= 70:
..                     grade = "C"
..                 if score >= 60:
..                     grade = "D"
..                 if score < 60:
..                    grade = "E"
..                 print(grade)



.. #.

..     .. tabbed:: ch11ex14t

..         .. tab:: Question

..             Fix the errors in the code, and change it, so there's only 1 if statement. The code should print "The number is 5" when the number is 5, and should print "The number is NOT 5" when it is not.

..             .. activecode::  ch11ex14q
..                 :nocodelens:

..                 x = 5
..                 if x == 5:
..                 print("The number is 5")
..                 if x != 5:
..                 print("The number is NOT 5")




.. #.

..     .. tabbed:: ch11ex15t

..         .. tab:: Question

..            Fix 5 errors in the following code to set price to 1.45 if weight is less than 1 and otherwise set it to 1.15.

..            .. activecode::  ch11ex15q
..                 :nocodelens:

..                 weight = 0.5
..                 if weight < 1
..                 price = 1.45
..                 else
..                 price = 1.15
..                 total = weight * price
..                 print(weight)
..                 print(price
..                 print(Total)



.. #.

..     .. tabbed:: ch11ex16t

..         .. tab:: Question

..             Complete and finish the code on lines 1 and 4 so that the code prints "Hi".

..             .. activecode::  ch11ex16q
..                 :nocodelens:

..                 x =
..                 if not x != 3:
..                     print("Hi")

..                     print("Hello")





.. #.

..     .. tabbed:: ch11ex18t

..         .. tab:: Question

..             Write a procedure that takes 2 ints, total price, and amount in wallet. Print "You have enough money" if the difference between the wallet and price is 0 or greater; otherwise, print "Get more money"

..             .. activecode::  ch11ex18q
..                 :nocodelens:



.. #.

..     .. tabbed:: ch11ex19t

..         .. tab:: Question

..            Write a function that takes a number for a grade and returns a string grade.  It should return E for any value below 60, D for 61 to 69, C for 70 to 79, B for 80 to 89 and A for 90 and above.  Write code to test each grade range.

..            .. activecode::  ch11ex19q
..                :nocodelens:



.. #.

..     .. tabbed:: ch11ex20t

..         .. tab:: Question

..             Write code that prints "Fizz" when the number is divisible by 3, "Buzz" when it is divisible by 5, and "FizzBuzz" when it is divisible by 3 and 5  (If a number is divisible by 3 and 5, it should also print "Fizz" and "Buzz").

..             .. activecode::  ch11ex20q
..                 :nocodelens:



