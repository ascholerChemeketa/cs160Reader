.. qnum::
	 :prefix: csp-13-7-
   :start: 1

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block that isn't needed in the correct solution.

.. parsonsprob:: ch13ex1muc
   :numbered: left
   :practice: T
   :adaptive:

   The following pseudocode program segment should print the number of temperatures that are above freezing (greater than 32 degrees). But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   temperatures <- [42,30,32,19,35,39,38]
   above_freezing <- 0
   =====
   for EACH item IN temperatures
   =====
       IF item > 32
   =====
           above_freezing <- above_freezing + 1
   =====
   DISPLAY(above_freezing)
   =====
           above_freezing <- item #distractor


.. parsonsprob:: ch13ex2muc
   :numbered: left
   :practice: T
   :adaptive:

   The following pseudocode program segment should find the maximum value of a list and display the value. But the blocks have been mixed up and include an extra block that isn't needed in the solution. But, the blocks have been mixed up and include an extra block that isn't needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   max <- list[0]
   =====
   for EACH item IN list
   =====
       IF item > max
   =====
           max <- item
   =====
   DISPLAY(max)
   =====
       IF item < max #distractor


.. parsonsprob:: ch13ex3muc
   :numbered: left
   :practice: T
   :adaptive:

   The following pseudocode program segment should increase the value of every item in the list by 1 if the original value is less than 3.  The shorts are originally $39.99 each. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   list <- [0,1,2,3,4]
   =====
   for EACH item IN list
   =====
       IF item < 3
   =====
           item <- item + 1
   =====
       IF item > 3 #distractor


.. parsonsprob:: ch13ex4muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following pseudocode program segment should print the average value of a list. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   avg <- 0
   sum <- 0
   =====
   for EACH item IN list
   =====
   sum <- item + sum
   =====
   if (length of list) >= 1
   =====
   avg <- sum / (length of list)
   =====
   DISPLAY(avg)
   =====
   avg <- sum / item #distractor


.. parsonsprob:: ch13ex5muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should display who won the game based on the two players' scores. Arrange the code so that the first IF statement is for a Player 1 win, the second for a Player 2 win and the third for a tie.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   player1 <- 10
   player2 <- 10
   =====
   if player1 > player2
   =====
       DISPLAY("Player 1 wins!")
   =====
   if player1 < player2
   =====
       DISPLAY("Player 2 wins!")
   =====
   if player1 = player2
   =====
       DISPLAY("It's a tie!")


.. parsonsprob:: ch13ex6muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should find and display the minimum value of a list. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   min <- list[0]
   =====
   for EACH item IN list
   =====
       IF item < min
   =====
       min <- item
   =====
   DISPLAY(min)
   =====
   IF item > min #distractor

.. parsonsprob:: ch13ex7muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should create a grading rubric that assigns a letter grade based on a score. Start with the highest score and work your way down to the lowest score. The blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   if x >= 90:
   =====
       print("You got an A")
   =====
   elif x < 90 and x >= 80:
   =====
       print("You got a B")
   =====
   elif x < 80 and x >= 70:
   =====
       print("You got a C")
   =====
   elif x < 70 and x >= 60:
   =====
       print("You got a D")
   =====
   else:
   =====
       print("You failed")
   =====
   elif x < 90 and x > 80: #distractor

.. parsonsprob:: ch13ex8muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment contains code from a movie theater kiosk that asks for your age to determine whether you are old enough to watch a PG-13 rated movie and then prints the appropriate statement. The blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   age = input("Please enter your age:")
   =====
   if age > 12:
   =====
   if age < 12: #paired
   =====
       print("Enjoy the film!")
   =====
   elif age < 13:
   =====
   elif age > 13: #paired
   =====
       print("You must be 13 years old to watch this film")

.. parsonsprob:: ch13ex9muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should ask whether the user wants to terminate the program and print out the appropriate statement based on the user's response. The blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   response = input("Would you like to terminate the program? (Y/N)")
   =====
   if response == "Y":
   =====
   if input = "Y": #paired
   =====
       print("The program is now ending.")
   =====
   elif response == "N":
   =====
   elif input = "N": #paired
   =====
       print("The program will continue to run.")

.. parsonsprob:: ch13ex10muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should ask the user to first input two numbers which will serve as parameters, then ask for a third number and determine whether it falls within the range of the first two numbers. The blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   first = input("Enter the first number parameter: ")
   second = input("Enter the second number parameter: ")
   =====
   num = input("Enter a number: ")
   =====
   if num > first and num < second or num < first and num > second:
   =====
   if num > first or num < second and num < first or num > second: #distractor
   =====
       print("Your number falls in the given range")
   =====
   else:
   =====
       print("Your number does not fall in the given range")
