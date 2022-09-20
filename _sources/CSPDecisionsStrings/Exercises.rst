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

.. parsonsprob:: cspdecisionsstrings_exercises1
   :numbered: left
   :practice: T

   The following program segment should ask whether the user wants to terminate the program and print out the appropriate statement based on the user's response. The blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right. 
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



.. parsonsprob:: cspdecisionsstrings_exercises2
    :numbered: left
    :practice: T

    The following program segment should ask the user to first input two numbers which will serve
    as boundaries, then ask for a third number and determine whether it falls within the range of
    the first two numbers. 
    
    The blocks have been mixed up and include extra blocks that aren't needed in the solution. 
    Drag the needed blocks from the left and put them in the correct order on the right.  
    -----
    first = int( input("Enter the first number parameter: ") )
    second = int( input("Enter the second number parameter: ") )
    num = input("Enter a number: ")
    =====
    if (num > first and num < second) or (num < first and num > second):
    =====
    if (num > first or num < second) and (num < first or num > second): #distractor
    =====
        print("Your number falls in the given range")
    =====
    else:
    =====
        print("Your number does not fall in the given range")


.. activecode:: cspdecisionsstrings_exercises3
    :autograde: unittest
    :practice: T

    The program below is supposed to calculate the final bill for a meal at a fast food resteraunt 
    in a state where meals taken to go are not taxed, but meals eaten in the resteraunt are.

    Your job is to write the ``getTotalCost`` function. It should use the initial meal ``price``
    and the ``location`` it is being eaten to calculate the final cost. If ``location`` has the
    string ``"to go"`` anywhere in it, the total cost should be just the meal price. Otherwise,
    it should be the price + 8% (1.08 times the meal price).

    ~~~~
    def getTotalCost(price, location):
        # your code here - make sure to return an answer!
        

    # main program
    mealPrice = int(input("What is the base meal price?"))
    mealLocation = input("Are you dining in or taking it to go?")
    cost = getTotalCost(mealPrice, mealLocation)

    print(cost)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertAlmostEqual(getTotalCost(10.00, "dining in"), 10.80, 2, "Testing $10.00, 'dining in'")
            self.assertAlmostEqual(getTotalCost(20.00, "to go"), 20.00, 2, "Testing $20.00, 'to go'")
            self.assertAlmostEqual(getTotalCost(10.00, "I'll take it to go"), 10.00, 2, "Testing $10.00, 'I'll take it to go'")
            self.assertAlmostEqual(getTotalCost(20.00, "I'll eat in"), 21.60, 2, "Testing $20.00, 'I'll eat in'")

    myTests().main()


.. activecode:: cspdecisionsstrings_exercises4
    :autograde: unittest
    :practice: T

    The program below is supposed to calculate the final bill for a meal at a fast food resteraunt 
    in a state where meals taken to go are not taxed, but meals eaten in the resteraunt are.

    Your job is to write the ``getTotalCost`` function. It should use the initial meal ``price``
    and the ``location`` it is being eaten to calculate the final cost. If ``location`` has the
    string ``"to go"`` anywhere in it, the total cost should be just the meal price. Otherwise,
    it should be the price + 8% (1.08 times the meal price).

    ~~~~
    def getTotalCost(price, location):
        # your code here - make sure to return an answer!
        

    # main program
    mealPrice = int(input("What is the base meal price?"))
    mealLocation = input("Are you dining in or taking it to go?")

    # For easier testing of your function, comment out the inputs above
    # and uncomment these lines so you don't have to type inputs while running:
    #mealPrice = 10.00
    #mealLocation = "eat here"

    cost = getTotalCost(mealPrice, mealLocation)
    print(cost)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertAlmostEqual(getTotalCost(10.00, "dining in"), 10.80, 2, "Testing $10.00, 'dining in'")
            self.assertAlmostEqual(getTotalCost(20.00, "to go"), 20.00, 2, "Testing $20.00, 'to go'")
            self.assertAlmostEqual(getTotalCost(10.00, "I'll take it to go"), 10.00, 2, "Testing $10.00, 'I'll take it to go'")
            self.assertAlmostEqual(getTotalCost(20.00, "I'll eat in"), 21.60, 2, "Testing $20.00, 'I'll eat in'")

    myTests().main()


.. activecode:: cspdecisionsstrings_exercises5
    :autograde: unittest
    :practice: T

    The program below is supposed to figure out the cost of a ticket for a customer to a
    museum. Anyone who is over 65 or younger than 12 gets in free. Anyone who is 12 to 17
    gets in for $8. Everyone else is $15.

    Your job is to write the ``getTicketCost`` function. It should use ``age`` parameter
    to decide on the right cost and then return that value. (Just return a number like
    0, 8, or 15, don't include $).

    ~~~~
    def getTicketCost(age):
        # your code here - make sure to return an answer!
        

    # main program
    customerAge = int(input("How old are you?"))

    # For easier testing of your function, comment out the input above
    # and uncomment this line so you don't have to type input while running:
    #customerAge = 11

    cost = getTicketCost(customerAge)
    print("Ticket costs", cost)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(getTicketCost(6), 0, "Testing age 6")
            self.assertEqual(getTicketCost(11), 0, "Testing age 11")
            self.assertEqual(getTicketCost(13), 8, "Testing age 13")
            self.assertEqual(getTicketCost(17), 8, "Testing age 17")
            self.assertEqual(getTicketCost(32), 15, "Testing age 32")
            self.assertEqual(getTicketCost(65), 0, "Testing age 65")
            self.assertEqual(getTicketCost(80), 0, "Testing age 80")

    myTests().main()

.. #.

..     .. tabbed:: ch13ex2t

..         .. tab:: Question

..             Fix the errors in the code so that it prints "Less than 5" when a number is less than 5 and "Greater than or equal to 5" when it is greater than or equal to 5.

             .. activecode:: cspdecisionsstrings_exercises6
..                 :nocodelens:

..                 x = 4
..                 if x > 5
..                 print("Less than 5")
..                     if x =< 5
..                     print("Greater than or equal to 5")



.. #.

..     .. tabbed:: ch13ex3t

..         .. tab:: Question

..            Fix 6 errors in the code below so that it works correctly.

            .. activecode:: cspdecisionsstrings_exercises7
..                 :nocodelens:

..                 print(You are in front of a creepy door in a hallway.")
..                 prin("What do you want to do?")
..                 action = input ("Type: in, left, or right. Then click OK or press enter)
..                 if action == "in"
..                     print("You choose to go in.")
..                     print("The room is pitch black.")
..                 if action == "left":
..                 print("You choose to turn left.")
..                     print("A ghost appears at the end of the hall.")
..                 if action == "right":
..                     print("You choose to turn right.")
..                 print("A greenish light is visible in the distance.")



.. #.

..     .. tabbed:: ch13ex4t

..         .. tab:: Question

..             Complete the code to get user input, and make choices based off the input. The input should either be "in", "left", or "right"; make sure the user knows that.

             .. activecode:: cspdecisionsstrings_exercises8
..                 :nocodelens:

..                 print("You are in front of a creepy door in a hallway.")
..                 print("What do you want to do?")
..                 userInput =
..                 if
..                     print("You choose to go in.")
..                     print("The room is pitch black.")
..                 if
..                     print("You choose to turn left.")
..                     print("A ghost appears at the end of the hall.")
..                 if
..                     print("You choose to turn right.")
..                     print("A greenish light is visible in the distance.")



.. #.

..     .. tabbed:: ch13ex5t

..         .. tab:: Question

..            Fix the code below to assign grades correctly using elif and else. You can assume the numbers are all correct.

            .. activecode:: cspdecisionsstrings_exercises9
..                 :nocodelens:

..                 score = 80
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

..     .. tabbed:: ch13ex6t

..         .. tab:: Question

..             The following code prints both statements, change it so that it only prints the first one when the age is less than 6.

             .. activecode:: cspdecisionsstrings_exercises10
..                 :nocodelens:

..                 age = 4
..                 if age < 6:
..                     print("You're in kindergarten")
..                 if age < 11:
..                     print("You're in elementary school")



.. #.

..     .. tabbed:: ch13ex7t

..         .. tab:: Question

..            Change the code below to use elif and else rather than several ifs.  Also fix it to print "Good job!" if the score is greater than 10 and less than or equal to 20 and "Amazing" if the score is over 20.

            .. activecode:: cspdecisionsstrings_exercises11
..                 :nocodelens:

..                 score = 22
..                 if score < 10:
..                     print("You can do better.")
..                 if score > 10:
..                     print("Good job!")
..                 if score > 20:
..                     print("Amazing")




.. #.

..     .. tabbed:: ch13ex9t

..         .. tab:: Question

..            Change the code below to use ``elif`` and ``else``.

            .. activecode:: cspdecisionsstrings_exercises12
..                 :nocodelens:

..                 num = input ("Type a number from 1 to 5. Then click OK or press enter")
..                 if num == "1":
..                     print("You will get a treat.")
..                 if num == "2":
..                     print("You will lose something.")
..                 if num == "3":
..                     print("You will meet a new friend.")
..                 if num == "4":
..                     print("You will catch a cold.")
..                 if num == "5":
..                     print("You will ace a test.")



.. #.

..     .. tabbed:: ch13ex10t

..         .. tab:: Question

..             Fix the errors in the code and change it to use elif's and else so that if the user's score is greater than the high score, it prints "Good job!", if it's lower, print "Try again.", and if it's the same print "You tied the high score".

             .. activecode:: cspdecisionsstrings_exercises13
..                 :nocodelens:

..                 highScore = 10
..                 userInput = Input("What's your score? (Give a number 1 - 20)")
..                 userInput = int(userInput)
..                 if userInput < 10
..                     print(Good job!)
..                     if userInput > 10
..                     print("Try again.")
..                         if userInput = 10
..                             print("You tied the high score.")



.. #.

..     .. tabbed:: ch13ex11t

..         .. tab:: Question

..            Change the following code to use ``elif`` and ``else`` instead.

            .. activecode:: cspdecisionsstrings_exercises14
..                 :nocodelens:

..                 team1 = 20
..                 team2 = 20
..                 if (team1 < team2):
..                     print("team1 won")
..                 if (team2 > team1):
..                     print("team2 won")
..                 if (team2 == team1):
..                     print("team1 and team2 tied")



.. #.

..     .. tabbed:: ch13ex12t

..         .. tab:: Question

..             Add statements to the code, so that if the user gives a number less than 5, you ask for the input again, and have another set of decision statements based off if the number is greater than, less than, or equal to 3.

             .. activecode:: cspdecisionsstrings_exercises15
..                 :nocodelens:

..                 user = input("Give me a number")
..                 number = int(user)
..                 if number < 5:
..                     user2 =
..                     number2 = int(user2)
..                     if
..                         print("I love CS")
..                     elif
..                         print("CS is the best")
..                     else:
..                         print("I like CS better than food")
..                 else:
..                     print("Who else loves CS?")



.. #.

..     .. tabbed:: ch13ex13t

..         .. tab:: Question

..            Change the code below to use only 1 ``if``, 1 ``elif``, and 1 ``else``.

            .. activecode:: cspdecisionsstrings_exercises16
..                 :nocodelens:

..                 state = "Georgia"
..                 if state == "Georgia":
..                     print("It's hot")
..                 if state == "Florida":
..                     print("It's hot")
..                 if state == "Alaska":
..                     print("It's cold")
..                 else:
..                     print("I don't know the weather")



.. #.

..     .. tabbed:: ch13ex14t

..         .. tab:: Question

..             Fix the code and change the statements so there are three sets of if and else and 2 elifs.

             .. activecode:: cspdecisionsstrings_exercises17
..                 :nocodelens:

..                 if bikes > people:
..                 print("We should take the bikes.")
..                 if bikes < people:
..                 print("We should not take the bikes.")
..                 if bikes == people:
..                 print("We can't decide.")

..                 if vans > bikes:
..                 print("That's too many vans.")
..                 if vans < bikes:
..                 print("Maybe we could take the vans.")
..                 if vans == bikes:
..                 print("We still can't decide.")

..                 if people > vans:
..                 print("Alright, let's just take the vans.")
..                 if people <= vans:
..                 print("Fine, let's stay home then.")



.. #.

..     .. tabbed:: ch13ex15t

..         .. tab:: Question

..            Change the code below into a procedure that takes a number as a parameter and prints the quartile.  Be sure to test each quartile.

            .. activecode:: cspdecisionsstrings_exercises18
..                 :nocodelens:

..                 x = .25
..                 if x <= .25:
..                     print("x is in the first quartile - x <= .25")
..                 if x <= .5 and x > .25:
..                     print("x is in the second quartile - .25 < x <= .5")
..                 if x <= .75 and x > .5:
..                     print("x is in the third quartile - .5 < x <= .75")
..                 if x > .75:
..                     print("x is in the fourth quartile - .75 < x <= 1")



.. #.

..     .. tabbed:: ch13ex16t

..         .. tab:: Question

..             Fix the code so that it prints only 1 thing for each age group and uses elif and else.

             .. activecode:: cspdecisionsstrings_exercises19
..                 :nocodelens:

..                 age = 10
..                 if age >= 18:
..                     print("adult")
..                 if age < 18:
..                     print("teen")
..                 if age < 13:
..                     print("pre-teen")
..                 if age < 10:
..                     print("kid")
..                 if age < 5:
..                     print("toddler")
..                 if age < 2:
..                     print("baby")



.. #.

..     .. tabbed:: ch13ex17t

..         .. tab:: Question

..            Write a function that will take a number as input and return a fortune as a string.  Ask the user to pick a number to get the fortune before you call the function.  Have at least 5 different fortunes.  Use ``if``, ``elif``, and ``else``.

            .. activecode:: cspdecisionsstrings_exercises20
..                 :nocodelens:




.. #.

..     .. tabbed:: ch13ex19t

..         .. tab:: Question

..            Write a procedure to tell an interactive story and let the user choose one of at least 3 options.

            .. activecode:: cspdecisionsstrings_exercises21
..                :nocodelens:



.. #.

..     .. tabbed:: ch13ex20t

..         .. tab:: Question

..             Write code that iterates through number 1 - 20 and prints "Fizz" if it's a multiple of 3, "Buzz" if it's a multiple of 5, "FizzBuzz" if it's a multiple of 3 and 5, and the number if it's not a multiple of 3 or 5. It should only print one statement per number.

             .. activecode:: cspdecisionsstrings_exercises22
..                 :nocodelens:


