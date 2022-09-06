..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


Rainfall Problem
=========================

Let's imagine that you have a list that contains amounts of rainfall for each day, collected
by a meteorologist. We want to figure out the average rainfall from the list. However, her
rain gathering equipment occasionally makes a mistake and reports a negative amount for that
day. We have to ignore those. 

We will build the program gradually in the following steps:

Rainfall Step 1
----------------------------

.. activecode:: rainfall_1
    :autograde: unittest

    First, lets not worry about filtering out the bad values or finding the average.
    Let's just calculate the total of the values in the list. 

    We will write the code in a function ``getRealAvg`` so that it is easier to test
    with different possible lists of data - we will get a different list for each month of data,
    so we need our program to work correctly for any list it is given. This function
    should add all of the values in ``rainList`` to the variable ``sumRain`` which will be
    the answer it returns.
    
    Right now that name is not accurate because we are not calculating the average yet, but
    it will be an appropriate name when we complete the program.

    While working on the program, you may want to use codelens or print out information
    so you can see what is happening as the code runs. You can also comment out one
    of the two tests to focus on the other one.

    ~~~~
    def getRealAvg(rainList):
        sumRain = 0
        # Your code here - total up all the values from rainList into sumRain
        # using the accumulator pattern
        
        # Return the total
        return sumRain

    # Main program
    testData1 = [2, 0, 4, -5, 0, 1]
    total1 = getRealAvg(testData1) 
    print(total1)

    testData2 = [0, 5, 1, 0, -1, 6, 4, -2, 0]
    total2 = getRealAvg(testData2) 
    print(total2)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(getRealAvg(testData1), 2, "Testing with testData1.")
            self.assertEqual(getRealAvg(testData2), 13, "Testing with testData2.")

    myTests().main()


Rainfall Step 2
----------------------------

.. activecode:: rainfall_2
    :autograde: unittest

    Now, let's worry about about ONLY adding the values of the numbers that aren't negative
    to the total. You can copy your code from part 1 and use it to get started here. Then
    add logic so that you only add each value to ``sumRain`` if it is 0 or more.

    Hint: The if condition needs to be checked for each value in the list. You must nest
    the ``if`` inside the ``for``.

    Again, use codelens or print statements to understand what your code is doing. You may
    want to print each value that you add to the list so you can see if the right ones are
    being included.

    ~~~~
    def getRealAvg(rainList):
        sumRain = 0

        # Your code here

        return sumRain

    # Main program
    testData1 = [2, 0, 4, -5, 0, 1]
    total1 = getRealAvg(testData1) 
    print(total1)

    testData2 = [0, 5, 1, 0, -1, 6, 4, -2, 0]
    total2 = getRealAvg(testData2) 
    print(total2)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(getRealAvg(testData1), 7, "Testing with testData1.")
            self.assertEqual(getRealAvg(testData2), 16, "Testing with testData2.")

    myTests().main()


Rainfall Step 3
----------------------------

.. activecode:: rainfall_3
    :autograde: unittest

    To get the average, we need to know how many values we have added up. If we were using
    all of the values, we could simply do ``len(rainList)``. But since we only are going 
    to use some of the values, we need to calculate how many there are.

    We will make a variable ``count`` and use that to keep track of the number of items.
    Add the code you have written so far to the program below. Then add code so that each
    time you add a value to ``sumRain``, you add 1 to count.

    For now, we will just return the ``count`` so we can see if this new code is working
    correctly. Leave the code for ``sumRain`` there, once we are sure the count is correct
    we will use both values to get the average.

    Again, use codelens or print statements to understand what your code is doing.

    ~~~~
    def getRealAvg(rainList):
        sumRain = 0
        count = 0

        # Your code here

        return count

    # Main program
    testData1 = [2, 0, 4, -5, 0, 1]
    count1 = getRealAvg(testData1) 
    print(count1)

    testData2 = [0, 5, 1, 0, -1, 6, 4, -2, 0]
    count2 = getRealAvg(testData2) 
    print(count2)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(getRealAvg(testData1), 5, "Testing with testData1.")
            self.assertEqual(getRealAvg(testData2), 7, "Testing with testData2.")

    myTests().main()


Rainfall Finished
----------------------------

.. activecode:: rainfall_4
    :autograde: unittest

    Now that we know we have the right sum and count, you can finish the function by returning
    the average from the function. Use the code you have already written, but write new code
    to calculate and return the average. 

    ~~~~
    def getRealAvg(rainList):
        sumRain = 0
        count = 0

        # Your code here

        # Your code to return the average

    # Main program
    testData1 = [2, 0, 4, -5, 0, 1]
    average1 = getRealAvg(testData1) 
    print(average1)

    testData2 = [0, 5, 1, 0, -1, 6, 4, -2, 0]
    average2 = getRealAvg(testData2) 
    print(average2)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertAlmostEqual(getRealAvg(testData1), 1.4, 1, "Testing testData1")
            self.assertAlmostEqual(getRealAvg(testData2), 2.285714285714286, 3, "Testing testData2")

    myTests().main()