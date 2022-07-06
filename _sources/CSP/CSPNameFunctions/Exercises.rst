..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


.. setup for automatic question numbering.



Chapter 6 Exercises
--------------------

#.

    .. tabbed:: ch7ex1t

        .. tab:: Question

            There are errors in the indention in the following code.  Fix it to work correctly without errors.

            .. activecode:: ch7ex1q
                :nocodelens:

                def square(turtle):
                turtle.forward(100)
                turtle.right(90)
                turtle.forward(100)
                turtle.right(90)
                turtle.forward(100)
                turtle.right(90)
                turtle.forward(100)
                turtle.right(90)

                from turtle import * 	# use the turtle library
                space = Screen()     	# create a turtle screen
                malik = Turtle()    	# create a turtle named malik
                square(malik)       	# draw a square with malik



#.

    .. tabbed:: ch7ex2t

        .. tab:: Question

            Fix the errors so it runs and returns the perimeter of a rectangle.

            .. activecode::  ch7ex2q
                :nocodelens:

                def recPerimeter(length, width)
                perimeter = 2 * (length + width)
                Return recPerimeter

                print(recPerimeter(2,4))



#.

    .. tabbed:: ch7ex3t

        .. tab:: Question

           There are 2 syntax errors in the following code.  Fix the errors so that it runs.

           .. activecode::  ch7ex3q
                :nocodelens:

                def square(turtle)
                    turtle.forward(100)
                    turtle.right(90)
                    turtle.forward(100)
                    turtle.right(90)
                    turtle.forward(100)
                    turtle.right(90)
                    turtle.forward(100)
                    turtle.right(90)

                from turtle import * 	# use the turtle library
                space = Screen()     	# create a turtle screen
                malik = Turtle()    	# create a turtle named malik
                square()       	        # draw a square with malik




#.

    .. tabbed:: ch7ex4t

        .. tab:: Question

            Fix the errors so the code runs and returns the area of a square.

            .. activecode::  ch7ex4q
                :nocodelens:

                x = squareArea(5)

                Def squareArea(sideLength):
                	area = length * length
                	return area
                print(x)



#.

    .. tabbed:: ch7ex5t

        .. tab:: Question

           The following code has 4 syntax errors.  Fix the errors so that the code runs.

           .. activecode::  ch7ex5q
                :nocodelens:

                def square(turtle,size):
                    turtle.forward(size)
                    turtle.right(90)
                    turtle.forward(size)
                    turtle.right(90)
                    turtle.forward(size)
                    turtle.right(90)
                    turtle.forward(size)
                    turtle.right(90)


                from turtle import *	# use the turtle library
                space = Screen()    	# create a turtle screen (space)
                malik = Turtle()    	# create a turtle named malik
                square(Malik, 100) 	# draw a square of size 100
                square(Malik, 75)   	# draw a square of size 75
                square(Malik, 50)    	# draw a square of size 50
                square(Malik, 25)   	# draw a square of size 25



#.

    .. tabbed:: ch7ex6t

        .. tab:: Question

            Change the code to take 3 parameters, a turtle, a size that tells it how far to go, and an angle it tells the turtle to turn.

            .. activecode::  ch7ex6q
                :nocodelens:

                def move(turtle):
                    turtle.forward(100)
                    turtle.right(90)
                    turtle.forward(100)
                    turtle.right(90)
                    turtle.forward(100)
                    turtle.right(90)
                    turtle.forward(100)
                    turtle.right(90)

                from turtle import *
                space = Screen()
                t = Turtle()
                move(t, 100, 90)



#.

    .. tabbed:: ch7ex7t

        .. tab:: Question

           The following code has three lines that need to be changed.  Fix the code to run correctly.

           .. activecode::  ch7ex7q
                :nocodelens:

                def square(turtle,size):
                    turtle.forward(size)
                    turtle.right(90)
                    turtle.forward(size)
                    turtle.right(90)
                    turtle.forward(size)
                    turtle.right(90)
                    turtle.forward(size)
                    turtle.right(90)


                from turtle import *	# use the turtle library
                space = Screen()    	# create a turtle screen (space)
                malik = Turtle()    	# create a turtle named malik
                square(100, malik) 	# draw a square of size 100
                square(malik)   	    # draw a square of size 75
                square(50)    	    # draw a square of size 50
                square(malik, 25)   	# draw a square of size 25



#.

    .. tabbed:: ch7ex8t

        .. tab:: Question

            Fix the errors so it prints ``"My name is John and I am 18 years old"``.

            .. activecode::  ch7ex8q
                :nocodelens:

                def nameAndAge(nameString, ageInt):
                	print(My name is "nameString" and I am + "str(ageInt)" + years old)

                print(nameAndAge(18, "John"))



#.

    .. tabbed:: ch7ex9t

        .. tab:: Question

           Change the square procedure below to take a size parameter and have the turtle go forward by the specified size each time.

           .. activecode::  ch7ex9q
                :nocodelens:

                def square(turtle):
                    turtle.forward(100)
                    turtle.right(90)
                    turtle.forward(100)
                    turtle.right(90)
                    turtle.forward(100)
                    turtle.right(90)
                    turtle.forward(100)
                    turtle.right(90)

                from turtle import * 	# use the turtle library
                space = Screen()     	# create a turtle screen
                malik = Turtle()    	# create a turtle named malik
                square(malik)       	# draw a square with malik



#.

    .. tabbed:: ch7ex10t

        .. tab:: Question

            Change the code so the function takes parameters for the base and height of the triangle. Then, write code to call the function and print the result.

            .. activecode::  ch7ex10q
                :nocodelens:

                def areaTriangle():
                    base = 5
                    height = 4
                    return (5 * 4) / 2



#.

    .. tabbed:: ch7ex11t

        .. tab:: Question

           Change the code below to create a function that calculates the cost of a trip.  It should take the ``miles``, ``milesPerGallon``, and ``pricePerGallon`` as parameters and should return the cost of the trip.

           .. activecode::  ch7ex11q
                :nocodelens:

                miles = 500
                milesPerGallon = 26
                numGallons = miles / milesPerGallon
                pricePerGallon = 3.45
                total = numGallons * pricePerGallon
                print(total)



#.

    .. tabbed:: ch7ex12t

        .. tab:: Question

            Fix the errors in the procedure and call it.

            .. activecode::  ch7ex12q
                :nocodelens:

                from turtle import *
                space = Screen()
                t = Turtle()
                t2 = Turtle()
                turtleDrawing(t, t2, 100, 45)

                turtleDrawing def(turtle, turtle2, distance, angle)
                	turtle.left(angle)
                	turtle2.right(angle)
                	turtle.forward(turtle2)
                	turtle2.forward(turtle)
                	return distance



#.

    .. tabbed:: ch7ex13t

        .. tab:: Question

           Change the code below to create a function to return the number of miles you can drive.  It will take as input (parameters) the ``tankCapacity``, ``theAmountLeft``, and the ``milesPerGallon``.

           .. activecode::  ch7ex13q
                :nocodelens:

                tankCapacity = 10
                amountLeft = 0.25
                numGallons = tankCapacity * amountLeft
                milesPerGallon = 32
                numMiles = numGallons * milesPerGallon
                print(numMiles)



#.

    .. tabbed:: ch7ex14t

        .. tab:: Question

            Complete and change the code to be a function with 2 parameters that returns the time taken to travel and call the function

            .. activecode::  ch7ex14q
                :nocodelens:

                speed = 5
                distance = 25
                timeTakenToTravel =
                print(timeTakenToTravel)



#.

    .. tabbed:: ch7ex15t

        .. tab:: Question

           Create a procedure to draw a rectangle and call it.  Be sure to take the ``width`` and ``height`` of the rectangle as input to the procedure.

           .. activecode::  ch7ex15q
                :nocodelens:



#.

    .. tabbed:: ch7ex16t

        .. tab:: Question

            Create a procedure that takes 2 parameters, a string that you get from a user input and an int. Make the procedure print the string the number of times the int parameter gives and call the procedure.

            .. activecode::  ch7ex16q
                :nocodelens:



#.

    .. tabbed:: ch7ex17t

        .. tab:: Question

           Create a procedure to draw a triangle and call it.  Be sure to take the length of each side of the triangle as input to the procedure.

           .. activecode::  ch7ex17q
                :nocodelens:



#.

    .. tabbed:: ch7ex18t

        .. tab:: Question

            Create a procedure that takes 7 paramters (turtle, distance, angle, and 4 color strings) and call the procedure to draw a square in 4 different colors.

            .. activecode::  ch7ex18q
                :nocodelens:



#.

    .. tabbed:: ch7ex19t

        .. tab:: Question

           Write the code below to create a procedure that prints a mad lib.  You can ask the user for input and then pass that input into the procedure.

           .. activecode::  ch7ex19q
               :nocodelens:



#.

    .. tabbed:: ch7ex20t

        .. tab:: Question

            Write a function that takes the current hour, current minute, an int to be added to the current hour, and an int to be added to the current minute, and return a string with the new hour and minute (standard 12 hour time; if minutes exceed 60, it should go to the hour) and call the function.

            .. activecode::  ch7ex20q
                :nocodelens:


