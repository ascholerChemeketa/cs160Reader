.. qnum::
	 :prefix: csp-13-7-
   :start: 1

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block that isn't needed in the correct solution.


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



.. #.

..     .. tabbed:: ch13ex18t

..         .. tab:: Question

..             Write a function that takes in a list of grades and returns the letter grade of the average (A is 90+, B is 80-89, C is 70-79, D is 60-69, F is 59 and below). Call the function and print the result.

..             .. activecode::  ch13ex18q
..                 :nocodelens:




.. #.

..     .. tabbed:: ch13ex8t

..         .. tab:: Question

..             Complete the code so that it iterates through the list of numbers and prints positive, negative, or neither based off the integer.

..             .. activecode::  ch13ex8q
..                 :nocodelens:

..                 numbers = [-1,0,1]
..                 for x in numbers:
..                     if
..                         print("positive")
..                     elif
..                         print(
..                     else:
..                         print(
