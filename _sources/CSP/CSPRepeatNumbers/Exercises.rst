..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


.. setup for automatic question numbering.

.. 	qnum::
	:start: 1
	:prefix: 7-8-

Chapter 7 Exercises
--------------------

#.

    .. tabbed:: ch7ex1t

        .. tab:: Question

            Complete lines 1 and 2 below to create the code to add up all the numbers from 1 to 5 and print the sum.

            .. activecode:: ch7ex1q
                :nocodelens:

                sum =
                thingsToAdd =
                for number in thingsToAdd:
    	            sum = sum + number
                print(sum)



#.

    .. tabbed:: ch7ex2t

        .. tab:: Question

            Fix the errors in the code so that it prints the sum of all the numbers 1 to 10.

            .. activecode::  ch7ex2q
                :nocodelens:

                sum = 0
                numList = range(1,10)
                for number in numList:
                    sum = number
                print(sum)



#.

    .. tabbed:: ch7ex3t

        .. tab:: Question

           Change the code below into a function that returns the sum of a list of numbers.  Pass the list of numbers as a parameter and print the result of calling the function.

           .. activecode::  ch7ex3q
                :nocodelens:

                sum = 0  # Start out with nothing
                thingsToAdd = [1,2,3,4,5]
                for number in thingsToAdd:
    	            sum = sum + number
                print(sum)




#.

    .. tabbed:: ch7ex4t

        .. tab:: Question

            Fix the errors in the code so that it prints the product of every 5th number between 5 and 25, inclusive. So, the product of 5, 10, 15, ..., 25.

            .. activecode::  ch7ex4q
                :nocodelens:

                product = 0
                numbers = len(4,25,5)
                for number in numbers:
                	product = product + number
                print(product)



#.

    .. tabbed:: ch7ex5t

        .. tab:: Question

           Fill in the missing code on lines 3 and 4 to loop through the list of numbers and calculate the product.  Add a line at the end to print the value in ``product``.

           .. activecode::  ch7ex5q
                :nocodelens:

                product = 1  # Start out with nothing
                numbers = [1,2,3,4,5]
                for in numbers:
    	            product = product *




#.

    .. tabbed:: ch7ex6t

        .. tab:: Question

            Fix the errors in the code so that it prints the sum of all the odd numbers 1 through 20.

            .. activecode::  ch7ex6q
                :nocodelens:

                sum = 1
                numbers = range(1,21,1)
                for numbers in number:
                sum = sum + number
                print(sum)



#.

    .. tabbed:: ch7ex7t

        .. tab:: Question

           Modify the code below to create a function that calculates the product of a list of numbers and returns it. Have the function take a list of numbers as a parameter.  Call the function to test it and print the result of calling the function.

           .. activecode::  ch7ex7q
                :nocodelens:

                product = 1  # Start out with 1
                numbers = [1,2,3,4,5]
                for number in numbers:
    	            product = product * number
                print(product)



#.

    .. tabbed:: ch7ex8t

        .. tab:: Question

            Fix the error in the code so that it takes each string in the list and prints out the sentence "I like to eat pizza".

            .. activecode::  ch7ex8q
                :nocodelens:

                aString = ""
                aList = ["I", "like", "to", "eat", "pizza"]
                for word in aList:
                	aString = word
                	print(aString)



#.

    .. tabbed:: ch7ex9t

        .. tab:: Question

           Fill in the code below on lines 2, 4, and 6 to correctly add up and print the sum of all the even numbers from 0 to 10 (inclusive).

           .. activecode::  ch7ex9q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATOR
                sum =   # Start out with nothing
                # STEP 2: GET DATA
                numbers = range()
                # STEP 3: LOOP THROUGH THE DATA
                for number in numbers:
    	            # STEP 4: ACCUMULATE
    	           sum = sum +
                # STEP 5: PROCESS RESULT
                print(sum)



#.

    .. tabbed:: ch7ex10t

        .. tab:: Question

            Write code that prints the square of each number 1 through 10 in the format "1 * 1 = 1", etc.

            .. activecode::  ch7ex10q
                :nocodelens:



#.

    .. tabbed:: ch7ex11t

        .. tab:: Question

           Define a function to calculate the sum of the even numbers from 0 to the passed number.  Return the sum from the function.  Call the function and print the result.

           .. activecode::  ch7ex11q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATOR
                sum = 0  # Start out with nothing
                # STEP 2: GET DATA
                numbers = range(0,21,2)
                # STEP 3: LOOP THROUGH THE DATA
                for number in numbers:
    	            # STEP 4: ACCUMULATE
    	           sum = sum + number
                # STEP 5: PROCESS RESULT
                print(sum)



#.

    .. tabbed:: ch7ex12t

        .. tab:: Question

            Create a function that returns the factorial of a passed number and call the function and print the result.

            .. activecode::  ch7ex12q
                :nocodelens:



#.

    .. tabbed:: ch7ex13t

        .. tab:: Question

           Fix the code below to correctly calculate and return the product of all of the even numbers from 10 to 20.

           .. activecode::  ch7ex13q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATOR
                product = 0  # init product
                # STEP 2: GET DATA
                numbers = range(10,20,2)
                # STEP 3: LOOP THROUGH THE DATA
                for number in numbers:
    	            # STEP 4: ACCUMULATE
    	           product = product + number
                # STEP 5: PROCESS RESULT
                print(product)



#.

    .. tabbed:: ch7ex14t

        .. tab:: Question

            Create a list of all odd numbers from 1 to 20 and find the average. Then create a list of numbers from 1 to 100 using the average as the increment and print the product of those numbers.

            .. activecode::  ch7ex14q
                :nocodelens:



#.

    .. tabbed:: ch7ex15t

        .. tab:: Question

           Create a procedure to calculate and return the sum of all of the odd numbers from 1 to a passed last number (inclusive).  Call the function to test and it print the result.

           .. activecode::  ch7ex15q
                :nocodelens:



#.

    .. tabbed:: ch7ex16t

        .. tab:: Question

            Complete the code for a function that takes a list of letters and combines them into a word. It should print "Hi".

            .. activecode::  ch7ex16q
                :nocodelens:

                def letterCombiner( ):
                	tempString =
                	for  in letterList:
                		tempString = tempString + letter
                	return

                aList = ["H", "i"]
                print(letterCombiner( ))



#.

    .. tabbed:: ch7ex17t

        .. tab:: Question

           Create a function to calculate and return the product of all of the even numbers from 2 to the passed end number (inclusive).  Be sure to call the function to test it and print the result.

           .. activecode::  ch7ex17q
                :nocodelens:



#.

    .. tabbed:: ch7ex18t

        .. tab:: Question

            Write a function that takes two inputs, a start and stop for a range (inclusive). Find the product and the sum of all the numbers and return the average between those two numbers. make a call to the function where you print the result

            .. activecode::  ch7ex18q
                :nocodelens:



#.

    .. tabbed:: ch7ex19t

        .. tab:: Question

           Write a function that will take a list of numbers and return the average.  Remember that the average is the sum of all of the numbers in the list divided by the number of items in the list.  You can get the length of a list using the ``len(list)`` function.

           .. activecode::  ch7ex19q
               :nocodelens:



#.

    .. tabbed:: ch7ex20t

        .. tab:: Question

            Create a function that takes one integer parameter and gets a list of all the odd numbers in that range and all the even numbers in that range. Find the product of all the even numbers, the sum of all the odd numbers, and then return the difference of the product by the sum and divide by the average of the two. Call the function and print the result.

            .. activecode::  ch7ex20q
                :nocodelens:

    
