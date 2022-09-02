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

.. activecode:: ch16_ex1
    :autograde: unittest

    Write code for the function ``printFirst``. It should print the first ``numberItems`` from
    ``list`` with one item appearing on each line.

    The tests for you code will check the output - make sure not to print anything extra or
    remove anything from the main program.
    ~~~~
    def printFirst(numberItems, list):
        #Your code here to print the first numberItems in list

    # Main program - Do not modify
    values1 = [5, 2, 3, 8, 9, 1, 4]
    printFirst(2, values1)
    print("------------------")
    printFirst(4, values1)
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(self.getOutput().split("\n")[0:2], ["5", "2"], "Testing that printFirst(2, values1) worked")
            self.assertEqual(self.getOutput().split("\n")[3:7], ["5", "2", "3", "8"], "Testing that printFirst(4, values1) worked")

    myTests().main()


.. activecode:: ch16_ex2
    :autograde: unittest

    Improve your code for the ``printFirst`` you wrote in the previous exercise.

    Before printing, make sure that ``numberItems`` is not greater than the length of the list.
    If ``numberItems`` is OK, do the printing. If not, just print ``"Invalid numItems"``.

    The tests for you code will check the output - make sure not to print anything extra or
    remove anything from the main program.
    ~~~~
    def printFirst(numberItems, list):
        #Your code here to print the first numberItems in list

    # Main program - Do not modify
    values1 = [5, 2, 3, 8, 9, 1, 4]
    printFirst(2, values1)
    print("------------------")
    printFirst(4, values1)
    print("------------------")
    printFirst(10, values1)
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(self.getOutput().split("\n")[0:2], ["5", "2"], "Testing that printFirst(2, values1) worked")
            self.assertEqual(self.getOutput().split("\n")[3:7], ["5", "2", "3", "8"], "Testing that printFirst(4, values1) worked")
            self.assertEqual(self.getOutput().split("\n")[-2], "Invalid numItems", 'Testing that printFirst(10, values1) resulted in "Invalid numItems"')

    myTests().main()


.. activecode:: ch16_ex3
    :autograde: unittest

    We have a list of numbers that are all supposed to be 8-bit values (0-255).
    
    Write code for the ``fixNumbers`` function. It should go through the ``list``
    that is passed as a parameter and change any value above 255 to 255 and any value
    below 0 to 0.

    You may want to just worry about the either fixing just the "too high" or just
    the "too low" values first, then worry about the other category once that is working.
    ~~~~
    def fixNumbers(list):
        #Your code here to limit the list values to 0-255 

    # Main program
    values1 = [-10, 100, 300]
    fixNumbers(values1)
    print(values1)
    values2 = [127, 216, 280, 250, 50, 0, -3, 20]
    fixNumbers(values2)
    print(values2)
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            values1 = [-10, 100, 300]
            fixNumbers(values1)
            self.assertEqual(values1, [0, 100, 255], "Testing that your function code works on values1.")
            values2 = [127, 216, 280, 250, 50, 0, -3, 20]
            fixNumbers(values2)
            self.assertEqual(values2, [127, 216, 255, 250, 50, 0, 0, 20], "Testing that your function code works on values2.")

    myTests().main()



.. activecode:: ch16_ex4
    :autograde: unittest

    Write the code for ``middleThird()``. It should accept a ``list`` as its parameter and
    then slice the list into three equal parts (first third, middle third, last third) and
    return the middle third.

    You can assume the ``list`` will always be of a size that evenly divides by 3.

    Hint: Indexes you use in a list slice must be integers. You can't ask for a slice
    ``[2.0:4.0]``, just ``[2:4]``. When you do division, use ``//``
    to get an integer answer instead of ``/`` which gives a decimal answer.

    If you are having issues, first calculate the indexes you will use to make the slice
    and print them out. 
    ~~~~
    def middleThird(list):
        # slice the list into three equal parts
        # return just the middle third

    # Main program
    values1 = [10, 20, 30]
    print( middleThird(values1) )
    values2 = [10, 20, 30, 40, 50, 60]
    print( middleThird(values2) )
    values3 = list(range(1, 31)) # Makes a list out of the range. Will have 1-30
    print( middleThird(values3) )
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            values1 = [10, 20, 30]
            values2 = [10, 20, 30, 40, 50, 60]  
            values3 = list(range(1, 31))
            self.assertEqual(middleThird(values1), [20], "Testing that your function code works on values1.")
            self.assertEqual(middleThird(values2), [30, 40], "Testing that your function code works on values2.")
            self.assertEqual(middleThird(values3), list(range(11, 21)), "Testing that your function code works on values3.")

    myTests().main()


.. #.

..     .. tabbed:: ch16ex6t

..         .. tab:: Question

..             Complete the code on lines 4 and 5 so that the function returns the average of a list of integers.

..             .. activecode::  ch16ex6q
..                 :nocodelens:

..                 def gradeAverage(aList):
..                     sum = 0
..                     for num in aList:

..                     average =
..                     return average

..                 aList = [99, 100, 74, 63, 100, 100]
..                 print(gradeAverage(aList))



.. #.

..     .. tabbed:: ch16ex7t

..         .. tab:: Question

..            Fix the indention in the code below so that it runs correctly.  It should loop and add the current value of ``source`` to ``soFar`` each time through the loop.  It should also print the value of ``soFar`` each time through the loop.

..            .. activecode::  ch16ex7q
..                 :nocodelens:

..                 source = ["This","is","a","list"]
..                 soFar = []
..                 for index in range(0,len(source)):
..                 soFar = [source[index]] + soFar
..                 print(soFar)



.. #.

..     .. tabbed:: ch16ex8t

..         .. tab:: Question

..             Fix the code so that the code prints "['hihi', 0, 0, 4]" .

..             .. activecode::  ch16ex8q
..                 :nocodelens:

..                 items = ["hi" 2, 3, 4]
..                 items[0] = items[0] * items0
..                 items(1) = items[2] - 3
..                 items[2] = items[1]
..                 print(items)



.. #.

..     .. tabbed:: ch16ex9t

..         .. tab:: Question

..            Fix 4 syntax errors in the code below.  After the code executes the list ``soFar`` should contain the reverse of the ``source`` list.

..            .. activecode::  ch16ex9q
..                 :nocodelens:

..                 # setup the source list
..                 source = ["This","is" "a","list"]

..                 # Set the accumulator to the empty list
..                 soFar = [

..                 # Loop through all the items in the source list
..                 for index in range(0,len(source))

..                     # Add the current item in the source and print the current items in soFar
..                     soFar = [source[index]] + sofar
..                     print(soFar)




.. #.

..     .. tabbed:: ch16ex10t

..         .. tab:: Question

..             The code below currently prints the reverse of a list. Change it so that it prints a mirrored version of the list. It should print "['list', 'a', 'is', 'This', 'This', 'is', 'a', 'list']".

..             .. activecode::  ch16ex10q
..                 :nocodelens:

..                 # setup the source list
..                 source = ["This","is","a","list"]

..                 # Set the accumulator to the empty list
..                 soFar = []

..                 # Loop through all the items in the source list
..                 for index in range(0,len(source)):

..                     # Add a list with the current item from source to soFar
..                     soFar =  [source[index]] + soFar
..                 print(soFar)



.. #.

..     .. tabbed:: ch16ex11t

..         .. tab:: Question

..            Change the following code into a function.  It should take the list and return a list of the values at the even indicies.

..            .. activecode::  ch16ex11q
..                 :nocodelens:

..                 numbers = [0,1,2,3,4,5,6,7,8,9,10]
..                 evenList = []
..                 for index in range(0,len(numbers),2):
..                     evenList = evenList + [numbers[index]]
..                 print(evenList)






.. #.

..     .. tabbed:: ch16ex12t

..         .. tab:: Question

..             The following code creates and prints a list of even numbers. Change it and add to it so that it creates a list of all multiples of 5 from 0 to 50, inclusive.

..             .. activecode::  ch16ex12q
..                 :nocodelens:

..                 # initialize the variables
..                 numbers = [0,1,2,3,4,5,6,7,8,9,10]
..                 evens = []

..                 # loop though every other index
..                 for index in range(0,len(numbers),2):

..                     # add the lists
..                     evens = evens + [numbers[index]]

..                 # print the result
..                 print(evens)



.. #.

..     .. tabbed:: ch16ex13t

..         .. tab:: Question

..            Change the following into a procedure. It prints a countdown from 5 to 0.  Have it take the starting number for the countdown as a parameter.  Print each value till it gets to 0.

..            .. activecode::  ch16ex13q
..                 :nocodelens:

..                 for index in range(5, -1, -1):
..                     print(index)






.. #.

..     .. tabbed:: ch16ex14t

..         .. tab:: Question

..             Fix the errors so that the code individually adds each item from ``source`` to ``newList``. Make the range decrement, so it starts from the end, but keep ``newList`` in the same order as ``source``.

..             .. activecode::  ch16ex14q
..                 :nocodelens:

..                 # initialize the variables
..                 source = ["This","is","a","list"]
..                 newList = []

..                 # loop from the last index to the first (0)
..                 for index in range(len(source), 1, -1):

..                 # append the lists
..                 newList = newList + [source[index]]

..                 # print the current value of the list
..                 print(newList)



.. #.

..     .. tabbed:: ch16ex15t

..         .. tab:: Question

..            Write a function that returns the values at the odd indices in a list.  The function should take the number list as a parameter.  If it is passed [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] for example, it should return [1, 3, 5, 7, 9].

..            .. activecode::  ch16ex15q
..                 :nocodelens:




.. #.

..     .. tabbed:: ch16ex16t

..         .. tab:: Question

..             Write a function that takes a list of numbers as a parameter and adds 5 to each number and returns the list.

..             .. activecode::  ch16ex16q
..                 :nocodelens:




.. #.

..     .. tabbed:: ch16ex17t

..         .. tab:: Question

..            Write a function that takes a list of numbers and returns the sum of the positive numbers in the list.

..            .. activecode::  ch16ex17q
..                 :nocodelens:



.. #.

..     .. tabbed:: ch16ex18t

..         .. tab:: Question

..             Write a function that takes in a list of numbers as a parameter. The function should calculate the sum of all the positive numbers in the list, the absolute value of the sum of the negative numbers, and return the average of the two sums.

..             .. activecode::  ch16ex18q
..                 :nocodelens:



.. #.

..     .. tabbed:: ch16ex19t

..         .. tab:: Question

..            Write a function to return the reverse of a list, but with only every other item from the original list starting at the end of the list.  So, if it is passed the list [0,1,2,3,4,5] for example, it should return the list [5, 3, 1].

..            .. activecode::  ch16ex19q
..                :nocodelens:



.. #.

..     .. tabbed:: ch16ex20t

..         .. tab:: Question

..             Write a procedure that takes an int as a parameter. The procedure should add every other odd number from 1 to the int parameter (inclusive) into a new list. The procedure should print the new list and the sum of the new list.

..             .. activecode::  ch16ex20q
..                 :nocodelens:


