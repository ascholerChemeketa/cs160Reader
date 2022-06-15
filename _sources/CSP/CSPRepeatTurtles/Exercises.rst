..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


.. setup for automatic question numbering.



Chapter 10 Exercises
---------------------

#.

    .. tabbed:: ch10ex1t

        .. tab:: Question

            Fix 4 syntax errors in the code below to correctly draw a square

            .. activecode:: ch10ex1q
                :nocodelens:

                from turtle import 	    # use the turtle library
                space = screen()   		# create a turtle space
                alisha = Turtle  		# create a turtle named alisha
                alisha.setheading(90)  	# point due north
                for sides in [1,2,3]:	# repeat the indented lines 4 times
    	            alisha.forward(100)        	# move forward by 100 units
      	            alisha.right(90)           	# turn by 90 degrees



#.

    .. tabbed:: ch10ex2t

        .. tab:: Question

            The code currently draws a square. Change it so that it draws a triangle.

            .. activecode::  ch10ex2q
                :nocodelens:

                from turtle import *      # use the turtle library
                space = Screen()          # create a turtle space
                alisha = Turtle()         # create a turtle named alisha
                alisha.setheading(90)     # point due north
                for sides in [1,2,3,4]:   # repeat the indented lines 4 times
                    alisha.forward(100)
                    alisha.right(90)



#.

    .. tabbed:: ch10ex3t

        .. tab:: Question

           Fix the code below to draw a rectangle. You will need to fix the indention on 3 lines.

           .. activecode::  ch10ex3q
                :nocodelens:

                from turtle import *
                    space = Screen()
                carlos = Turtle()

                # repeat 2 times
                for i in [1,2]:
                    carlos.forward(175)
                    carlos.right(90)
                carlos.forward(150)
                carlos.right(90)



#.

    .. tabbed:: ch10ex4t

        .. tab:: Question

            Fix the errors in the code so that it draws an octagon.

            .. activecode::  ch10ex4q
                :nocodelens:

                from turtle import *
                space = Screen()
                liz = Turtle()
                liz.setheading(90)
                for sides in range(9)
                    liz.forward(45)
                liz.right(50)



#.

    .. tabbed:: ch10ex5t

        .. tab:: Question

           Fill in values for ``x`` on line 5 and ``y`` on line 7 to allow the code below to correctly draw a pentagon.

           .. activecode::  ch10ex5q
                :nocodelens:

                from turtle import *   	# use the turtle library
                space = Screen()    	# create a turtle space
                will = Turtle()   		# create a turtle named will
                will.setheading(90)    	# point due north
                for sides in range(x):	# repeat the indented lines
      	            will.forward(100)      	# move forward by 100 units
      	            will.right(y)




#.

    .. tabbed:: ch10ex6t

        .. tab:: Question

            Complete the code on lines 5 and 7 to draw a hexagon.

            .. activecode::  ch10ex6q
                :nocodelens:

                from turtle import *
                space = Screen()
                mia = Turtle()
                mia.setheading(90)
                for sides in
                    mia.forward(40)
                    mia.



#.

    .. tabbed:: ch10ex7t

        .. tab:: Question

           Finish the code on lines 1, 2, 3, 6 and 8 below to correctly draw a triangle.

           .. activecode::  ch10ex7q
                :nocodelens:

                from
                space =
                marie =

                # repeat
                for i in range():
                    marie.forward(100)
                    marie.left()



#.

    .. tabbed:: ch10ex8t

        .. tab:: Question

            Finish the code to draw a 15 sided figure with each side having a length of 40.

            .. activecode::  ch10ex8q
                :nocodelens:

                from turtle import *
                space = Screen()
                hi = Turtle()




#.

    .. tabbed:: ch10ex9t

        .. tab:: Question

           Fix the indention in the code below to correctly draw 20 pentagons.

           .. activecode::  ch10ex9q
                :nocodelens:

                from turtle import *     # use the turtle library
                from sys import *        # use the system library
                setExecutionLimit(50000) # let this take up to 50 seconds
                space = Screen()         # create a turtle space
                zoe = Turtle()           # create a turtle named zoe
                zoe.setheading(90)       # point due north

                for repeats in range(20):   # draw the pattern 20 times
      	            zoe.forward(10)         	# Offset the shapes a bit
      	            zoe.right(18)             	# And turn each one a bit

      	        # This part makes a pentagon
      	        for sides in range(5):    # repeat 5 times
      	            zoe.forward(50)         # move forward by 50 unit
      	            zoe.right(72)           # turn by 72 degrees



#.

    .. tabbed:: ch10ex10t

        .. tab:: Question

            The procedure below draws a square. Write code that uses the procedure to draw two squares connected by a line 50 units in length.

            .. activecode::  ch10ex10q
                :nocodelens:

                def square(aTurtle):
                    for sides in range(4):
                        aTurtle.forward(100)
                        aTurtle.right(90)



#.

    .. tabbed:: ch10ex11t

        .. tab:: Question

           Fix the following code below to draw a circle of turtles using the ``stamp`` procedure.  You will need to change 3 lines.

           .. activecode::  ch10ex11q
                :nocodelens:

                from turtle import *
                space = Screen()
                jose = Turtle()
                jose.shape("turtle")
                jose.
                for size in range():
                    jose.forward(50)
                    jose.stamp()
                    jose.forward()
                    jose.right(36)



#.

    .. tabbed:: ch10ex12t

        .. tab:: Question

                Complete the code where the ``x's`` are so that the code draws 20 triangles.

            .. activecode::  ch10ex12q
                :nocodelens:

                from turtle import *
                from sys import *              # use the system library
                setExecutionLimit(50000)      # let this take up to 50 seconds
                space = Screen()
                t = x
                t.setheading(90)
                for repeats in range(x):
                    t.color("blue")
                    t.forward(10)
                    t.left(18)
                    for sides in range(x):
                        t.color("green")
                        t.forward(x)
                        t.right(x)



#.

    .. tabbed:: ch10ex13t

        .. tab:: Question

           Rewrite the following code to create a procedure to draw a square with a turtle.  Pass the turtle and the size of the square as input (parameters) to the procedure.

           .. activecode::  ch10ex13q
                :nocodelens:

                from turtle import *	# use the turtle library
                space = Screen()   		# create a turtle space
                alisha = Turtle()  		# create a turtle named alisha
                alisha.setheading(90)  	# point due north
                for sides in [1,2,3,4]:	# repeat the indented lines 4 times
    	            alisha.forward(100)        	# move forward by 100 units
      	            alisha.right(90)           	# turn by 90 degrees




#.

    .. tabbed:: ch10ex14t

        .. tab:: Question

            Currently, the code has a turtle drawing a straight line. Add 2 lines of code (1 before the loop and 1 in the loop) to make the turtle stamp in the line.

            .. activecode::  ch10ex14q
                :nocodelens:

                from turtle import *
                space = Screen()
                tess = Turtle()
                tess.color("blue")
                tess.shape("turtle")


                for size in range(5, 60, 2):

                    tess.forward(size)



#.

    .. tabbed:: ch10ex15t

        .. tab:: Question

           Rewrite the following code to create a procedure to draw a rectangle with a turtle.  Pass the turtle and the length and width of the rectangle as parameters to the procedure.

           .. activecode::  ch10ex15q
                :nocodelens:

                from turtle import *
                space = Screen()
                carlos = Turtle()

                # repeat 2 times
                for i in [1,2]:
                    carlos.forward(175)
                    carlos.right(90)
                    carlos.forward(150)
                    carlos.right(90)



#.

    .. tabbed:: ch10ex16t

        .. tab:: Question

            Complete the code so that the turtle stamps a square pattern 20 times (it should look like a circle enclosing a couple of circles if you use a turn angle of 18)

            .. activecode::  ch10ex16q
                :nocodelens:

                from turtle import *
                from sys import *               # use the system library
                setExecutionLimit(50000)        # let this take up to 50 seconds
                space = Screen()
                zoe = Turtle()



#.

    .. tabbed:: ch10ex17t

        .. tab:: Question

           Create a procedure to draw 4 turtles at the 4 corners of a square using the ``stamp`` procedure.

           .. activecode::  ch10ex17q
                :nocodelens:



#.

    .. tabbed:: ch10ex18t

        .. tab:: Question

            Create a procedure that takes in a turtle and integer parameter. The procedure should stamp a turtle shape into a circle in 20 steps with the forward number being equal to the parameter.

            .. activecode::  ch10ex18q
                :nocodelens:




#.

    .. tabbed:: ch10ex19t

        .. tab:: Question

           Write a procedure that takes a turtle and a number of sides as parameters and draws a polygon with that number of sides.

           .. activecode::  ch10ex19q
               :nocodelens:



#.

    .. tabbed:: ch10ex20t

        .. tab:: Question

            Write a procedure that takes a turtle, an int for the number of sides for a polygon, and an int for the number of times to draw that polygon. The procedure should draw that polygon that number of times in a circular path.

            .. activecode::  ch10ex20q
                :nocodelens:



