Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check* button to check each solution. 
You will be told if your solution is too short, has a block in the wrong order, or you
are using the wrong block.  Some of the problems have an extra block that isn't needed
in the correct solution.

.. parsonsprob:: cspnameturtles_mixedupturtles1
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:
  
   The following program segment should draw a red line.  The blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   from turtle import *
   space = Screen()
   =====
   from turtle import *
   space = screen() #paired
   =====
   ani = Turtle()
   =====
   ani.color("red")
   =====
   ani.color(red) #distractor
   =====
   ani.forward(100)

.. parsonsprob:: cspnameturtles_mixedupturtles2
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:
  
   The following program segment should draw an equilateral triangle.  The blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   from turtle import *
   =====
   from Turtle import * #distractor
   =====
   space = Screen()
   mik = Turtle()
   =====
   mik.left(120)
   mik.forward(100)
   mik.left(120)
   mik.forward(100)
   mik.left(120)
   mik.forward(100)
   =====
   mik.left(60)
   mik.forward(100)
   mik.left(60)
   mik.forward(100)
   mik.left(60)
   mik.forward(100) #paired



.. parsonsprob:: cspnameturtles_mixedupturtles3
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:
  
   The following program segment should create two turtles, Ari and Chris. Ari should have a pensize of 20 and draw a line to the west, while Chris will have the standard pensize and draw a line to the east.  The blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.

   Note that we could do the ari commands either before or after the chris commands. Assume we want to more ari first.
   -----
   from turtle import *
   =====
   space = Screen()
   ari = Turtle()
   chris = Turtle()
   =====
   ari.pensize(20)
   ari.left(180)
   ari.forward(100)
   =====
   ari.pensize(20)
   ari.forward(100) #paired
   =====
   chris.forward(100)
   =====
   chris.left(90)
   chris.forward(100) #paired   


.. parsonsprob:: cspnameturtles_mixedupturtles4
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:
  
   The following program segment should draw a red line, starting from postion (10, 30).  The blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   from turtle import *
   =====
   space = Screen()
   nic = Turtle()
   =====
   nic.color("red")
   =====
   nic.penup()
   =====
   nic.goto(10,30)
   =====
   nic.goto("10,30") #paired
   =====
   nic.pendown()
   =====
   nic.forward(100)


.. parsonsprob:: cspnameturtles_mixedupturtles5
    :numbered: left
    :practice: T
    :adaptive:
    :noindent:

    The following program segment should turn turtle Bri south, then draw a green line.  The blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
    -----
    from turtle import *
    =====
    space = Screen()
    bri = Turtle()
    =====
    bri.color("green")
    bri.setheading(270)
    =====
    bri.color("green")
    bri.setheading(90) #distractor
    =====
    bri.forward(100)




.. .. parsonsprob:: cspnameturtles_mixedupturtles6
..    :numbered: left
..    :practice: T
..    :adaptive:
..    :noindent:
  
..    The following program segment should draw a rectangle.  The blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
..    -----
..    from turtle import *
..    =====
..    space = Screen()
..    =====
..    mindy = Turtle()
..    =====
..    mindy.left(90)
..    =====
..    mindy.forward(100)
..    mindy.left(90)
..    mindy.forward(50)
..    mindy.left(90)
..    mindy.forward(100)
..    mindy.left(90)
..    mindy.forward(50)
..    mindy.left(90)


 .. parsonsprob:: cspnameturtles_mixedupturtles7
..    :numbered: left
..    :practice: T
..    :adaptive:
..    :noindent:
  
..    The following program segment should contain the correct steps to create a turtle.  The blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
..    -----
..    from turtle import *
..    =====
..    from Turtle import * #paired
..    =====
..    From Turtle Import * #paired
..    =====
..    space = Screen()
..    =====
..    space = screen() #paired
..    =====
..    turt = Turtle() 
..    =====
..    turt = turtle() #paired