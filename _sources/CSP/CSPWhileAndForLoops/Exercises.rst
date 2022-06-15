..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


.. setup for automatic question numbering.



Chapter 8 Exercises
--------------------

#.

    .. tabbed:: ch8ex1t

        .. tab:: Question

            Fix the 5 syntax errors in the code below to print a countdown of the numbers from 10 to 0.

            .. activecode:: ch8ex1q
                :nocodelens:

                counter = 10
                while Counter > 0:
                    Print(counter)
                    counter = Counter + 1



#.

    .. tabbed:: ch8ex2t

        .. tab:: Question

            The following code will loop infinitely. Make one change that will make it loop only 5 times.

            .. activecode::  ch8ex2q
                :nocodelens:

                x = 5
                while x > 0:
                    print(x)
                    x = x + 1



#.

    .. tabbed:: ch8ex3t

        .. tab:: Question

           Make 5 changes to the code below to correctly print a count up from -10 to 0.

           .. activecode::  ch8ex3q
                :nocodelens:

                output = ""
                x = -10
                while x < 0
                    x = x - 1
                output = output + str(x) + " "
                print(output)




#.

    .. tabbed:: ch8ex4t


        .. tab:: Question

            Fix the errors in the code below so that it uses 2 loops to print 8 lines of ``*``.

            .. activecode::  ch8ex4q
                :nocodelens:

                for x in range(1,2)
                y = 0
                while y < 4:
                print("*")
                y += 1



#.

    .. tabbed:: ch8ex5t

        .. tab:: Question

           Finish lines 1 and 5 so that the following code correct prints all the values from -5 to -1.

           .. activecode::  ch8ex5q
                :nocodelens:

                output =
                x = -5
                while x < 0:
                    output = output + str(x) + " "
                    x =
                print(output)




#.

    .. tabbed:: ch8ex6t

        .. tab:: Question

            Complete the code on lines 4 and 6 so that it prints the number 6.

            .. activecode::  ch8ex6q
                :nocodelens:

                x = 3
                i = 0
                while i < 3:
                    x =
                    i = i + 1
                print()



#.

    .. tabbed:: ch8ex7t

        .. tab:: Question

           The code below is supposed to print an estimate of the square root.  But, the indention is wrong on 4 lines.  Fix it.

           .. activecode::  ch8ex7q
                :nocodelens:

                target = 6
                    guess = 2
                guessSquared = guess * guess
                while abs(target-guessSquared) > 0.01:
                    closer = target / guess
                guess = (guess + closer) / 2.0
                        guessSquared = guess * guess
                    print("Square root of", target,"is", guess)



#.

    .. tabbed:: ch8ex8t

        .. tab:: Question

            The function currently takes a start and stop argument and uses a for loop to find the sum of all the numbers between them (inclusive). Change the for loop to a while loop while still using the parameters.

            .. activecode::  ch8ex8q
                :nocodelens:

                def sumFunc(start, stop):
                    sum = 0
                    for num in range(start, stop + 1):
                        sum = sum + num
                    return sum

                print(sumFunc(1,10))



#.

    .. tabbed:: ch8ex9t

        .. tab:: Question

           The program below is supposed to print the times tables for 1 to 3, but there are 5 errors.  Fix the errors.

           .. activecode::  ch8ex9q
                :nocodelens:

                for x in range(1,3):
                    for y in range(1,10)
                        print(str(x) + " * " str(y) + " = " x*y)



#.

    .. tabbed:: ch8ex10t

        .. tab:: Question

           Rewrite the code that prints the times tables for 1 to 3 using a while loop and a for loop instead of two for loops.

            .. activecode::  ch8ex10q
                :nocodelens:

                for x in range(1,4):
                     for y in range(1,11):
                         print(str(x) + " * " + str(y) + " = " + str(x*y))



#.

    .. tabbed:: ch8ex11t

        .. tab:: Question

           Rewrite the following code to use a while loop instead of a for loop.

           .. activecode::  ch8ex11q
                :nocodelens:

                product = 1  # Start out with nothing
                numbers = range(1,11)
                for number in numbers:
                    product = product * number
                print(product)



#.

    .. tabbed:: ch8ex12t

        .. tab:: Question

            Fix the errors so that the code gets the average of the numbers from 1 to 10.

            .. activecode::  ch8ex12q
                :nocodelens:

                sum = 10
                x = 0
                while x < 11:
                sum =  x
                x = x + 1
                average = sum / 2
                print(average)



#.

    .. tabbed:: ch8ex13t

        .. tab:: Question

           Rewrite the following code to use a while loop instead of a for loop.

           .. activecode::  ch8ex13q
                :nocodelens:

                # STEP 1: INITIALIZE ACCUMULATOR
                product = 1  # init product to 1
                # STEP 2: GET DATA
                numbers = range(10,21,2)
                # STEP 3: LOOP THROUGH THE DATA
                for number in numbers:
    	            # STEP 4: ACCUMULATE
    	           product = product * number
                # STEP 5: PROCESS RESULT
                print(product)



#.

    .. tabbed:: ch8ex14t

        .. tab:: Question

 	    The code below currently enters a loop where it keeps printing "Even". Fix the code so that it prints "Even" and "Odd" for numbers 0 to 9.

            .. activecode::  ch8ex14q
                :nocodelens:

		number = 0
		while number < 10:
		    while number % 2 == 0:
		        print("Even")
		    while number % 2 != 0:
		        print("Odd")
		    number += 1



#.

    .. tabbed:: ch8ex15t

        .. tab:: Question

           Modify the code below to create a function that will take numbers as input until you enter a negative number and then will return the average of the numbers.

           .. activecode::  ch8ex15q
                :nocodelens:

                sum = 0
                count = 0
                message = "Enter an integer or a negative number to stop"
                value = input(message)
                while int(value) > 0:
                    print("You entered " + value)
                    sum = sum + int(value)
                    count = count + 1
                    value = input(message)
                print("The sum is: " + str(sum) +
                      " the average is: " + str(sum / count))



#.

    .. tabbed:: ch8ex16t

        .. tab:: Question

            Fix and change the code so it prints a table of division instead of multiplication for -10 to -1.

            .. activecode::  ch8ex16q
                :nocodelens:

                for x in range(0,11)
                for y in range(1,11):
                print(str(x) + " * " + str(y) + " = " + str(x*y))



#.

    .. tabbed:: ch8ex17t

        .. tab:: Question

           Create a function to calculate and return the sum of all of the even numbers from 0 to the passed number (inclusive) using a while loop.

           .. activecode::  ch8ex17q
                :nocodelens:



#.

    .. tabbed:: ch8ex18t

        .. tab:: Question

           Write a procedure that takes a user input and keeps asking for a user input until the input is "Hello". If the input is not "Hello", it should print "This is your n wrong try." where n is the number of times they have put an input in. If they type "Hello", the procedure should print "Success!". Hint: ``!=`` means does not equal

            .. activecode::  ch8ex18q
                :nocodelens:




#.

    .. tabbed:: ch8ex19t

        .. tab:: Question

           Create a procedure to print stars and spaces in a roughly square pattern and have it take as input the number of stars on a side.  Use a nested loop to do this.

           .. activecode::  ch8ex19q
               :nocodelens:



#.

    .. tabbed:: ch8ex20t

        .. tab:: Question

            Write a procedure that takes an int argument and uses a while loop to create a right-triangle like shape out of ``*``. The first row should have 1 star and the last should have n stars where n is the argument passed.

            .. activecode::  ch8ex20q
                :nocodelens:


