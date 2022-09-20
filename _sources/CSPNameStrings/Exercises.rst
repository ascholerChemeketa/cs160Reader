..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. include:: ../CSP/csp_global.rst

Chapter 3 Exercises
--------------------


.. activecode:: cspnamestrings_exercises1
    :autograde: unittest
    :nocodelens:
    :practice: T

    There are 3 syntax errors in the following code.  Fix it to print correctly without errors.
    It will print, "Your name is Carly and your favorite color is red.".
    ~~~~
    color = "red'
    name = 'Carly'
    print("Your name is " + name + and your favorite color is" + color + ".")
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(color, "red", "Testing that color has the correct value." )
            self.assertEqual(name, "Carly", "Testing that name has the correct value." )
            self.assertEqual(self.getOutput().strip(), "Your name is Carly and your favorite color is red.", "Testing output. Make sure you have spaces in all the right places!")

    myTests().main()


.. activecode:: cspnamestrings_exercises2
    :autograde: unittest
    :nocodelens:
    :practice: T

    You will get an error if you try to run the following code.  Fix the code to print correctly
    without errors.  It should print, "Your name is Carly and your age is 19."
    ~~~~
    age = 14 + 5
    name = 'Carly'
    print("Your name is" + name + "and your age is" + age + ".")
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(age, 19, "Testing that age has the correct value." )
            self.assertEqual(name, "Carly", "Testing that name has the correct value." )
            self.assertEqual(self.getOutput().strip(), "Your name is Carly and your age is 19.", "Testing that you have the right output - make sure your spaces are correct!")
            self.assertNotIn("19", self.getEditorText(), "Testing that you didn't hardcode the answer.")

    myTests().main()



.. activecode:: cspnamestrings_exercises3
    :autograde: unittest
    :nocodelens:
    :practice: T

    Use string slicing to set s1 to "giant alligator". The print will put \|'s around your output to
    make it clear if you have a space at the start or end of s1.
    ~~~~
    sentence = "There is a giant alligator over there."
    s1 = 
    print("|" + s1 + "|")
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(s1, "giant alligator", "Testing that s1 has the correct value. Make sure you don't have an extra space at the start or end!" )
            self.assertNotIn("alligator", self.getEditorText().split("\n")[1], "Testing that you didn't hardcode the answer.")

    myTests().main()


.. activecode:: cspnamestrings_exercises4
    :autograde: unittest
    :nocodelens:
    :practice: T

    Using the variables given, modify the print statement to print
    ``"A car travelling at 70 mph takes 2.0 hours to go 140 miles."``  
    Make sure to print the variables, not the values you know they contain.
    If we changed ``milesPerHour`` and ``distanceTravelled`` your program should still print a correct message.
    ~~~~
    milesPerHour = 70
    distanceTravelled = 140
    timeTaken = distanceTravelled / milesPerHour
    print("A car travelling at...")
    ====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(self.getOutput().strip(), "A car travelling at 70 mph takes 2.0 hours to go 140 miles.", "Testing your output. Make sure you have spaces in the right places!" )
            self.assertRegex("".join(self.getEditorText().split("\n")[2:]), r"\D*", "Testing that you used the variables and did not just type numbers.")

    myTests().main()


.. activecode:: cspnamestrings_exercises5
    :nocodelens:
    :practice: T

    Write code below to get at least 3 values from the user using the ``input`` function and output
    a mad lib (which will use the input to tell a silly story).

    This problem is not automatically checked. Make sure you are using variables to build your output
    and that the story uses the values you type in as input. Try giving different inputs and make sure
    that the story uses them.
    ~~~~


.. #.

..     .. tabbed:: ch3ex11t

..         .. tab:: Question

..            Combine lines 4 and 5 in the code below to print: "270 is 4.0 hours and 30 minutes."

            .. activecode:: cspnamestrings_exercises6
                
..                 totalMinutes = 270
..                 numMinutes = totalMinutes % 60
..                 numHours = (totalMinutes - numMinutes) / 60
..                 print(numHours)
..                 print(numMinutes)

.. #.

..     .. tabbed:: ch3ex5t

..         .. tab:: Question

..            There are 3 syntax errors in the following code.  Fix it to print correctly without errors.  It will print your name and age.

            .. activecode:: cspnamestrings_exercises7
               
..                age = input("How old are you?")
..                name = input ("What is your first name?")
..                print ("Your name is " + Name
..                       " and you are "  age "years old.")



.. #.

..     .. tabbed:: ch3ex6t

..         .. tab:: Question

..             Fix the syntax errors so that the code prints "The apple costs $5".

             .. activecode:: cspnamestrings_exercises8
                
..                 fruit = apple
..                 price = 5
..                 print("The" fruit "costs $" + "price")




.. #.

..     .. tabbed:: ch3ex2t

..         .. tab:: Question

..             Fix the syntax errors so it prints "My name is Sam and I am 12 years old."

             .. activecode:: cspnamestrings_exercises9
                
..                 name = Sam
..                 age = 12
..                 print("My name is name and I am" + age + "years old".)




.. #.

..     .. tabbed:: ch3ex7t

..         .. tab:: Question

..            Modify line 6 to print: "The number of miles you can drive on 25 dollars is 273.97260274."

            .. activecode:: cspnamestrings_exercises10
               
..                funds = 25
..                milesPerGallon = 40
..                pricePerGallon = 3.65
..                numGallons = funds / pricePerGallon
..                numMiles = milesPerGallon * numGallons
..                print(numMiles)


               



.. #.

..     .. tabbed:: ch3ex9t

..         .. tab:: Question

..            Modify line 6 to print: "You can order 40.0 wings when you have 5 people who can each spend 4 dollars and wings cost 0.5 each."

            .. activecode:: cspnamestrings_exercises11
                
..                 numPeople = 5
..                 amountPerPerson = 4
..                 price = 0.5
..                 total = numPeople * amountPerPerson
..                 numWings =  total / price
..                 print(numWings)



.. #.

..     .. tabbed:: ch3ex10t

..         .. tab:: Question

..             Fix the code so that only "meow" is printed.

             .. activecode:: cspnamestrings_exercises12
                
..                 sentence = "The cat goes meow."
..                 s2 = [16:13]sentence
..                 print(s2)



.. #.

..     .. tabbed:: ch3ex12t

..         .. tab:: Question

..             Complete the code on lines 3 and 4 so that it prints "2" and then "22".

             .. activecode:: cspnamestrings_exercises13
                
..                 sentence = "This is his wish."
..                 sentence2 = "His only wish is this."
..                 pos =  .find("is")
..                 length = len( )
..                 print(length)



.. #.

..     .. tabbed:: ch3ex13t

..         .. tab:: Question

..            Complete the calculations on lines 2 and 4 and enter the items to be printed on line 5 to print the number of miles you can drive if you have a 10 gallon gas tank and are down to a quarter of a tank of gas and your car gets 32 miles per gallon.  It should print: "You can go 80.0 miles."

            .. activecode:: cspnamestrings_exercises14
                
..                 tankCapacity = 10
..                 numGallons =
..                 milesPerGallon = 32
..                 numMiles =
..                 print()




.. #.

..     .. tabbed:: ch3ex14t

..         .. tab:: Question

..             Fix line 2 so that it prints "Hi" instead of "hi".

             .. activecode:: cspnamestrings_exercises15
                
..                 s1 = "hi"
..                 s1.capitalize()
..                 print(s1)



.. #.

..     .. tabbed:: ch3ex15t

..         .. tab:: Question

..            Write code to get the name of a color from the user using the ``input`` function. Next convert the name of the color to all lowercase letters and print it.

            .. activecode:: cspnamestrings_exercises16
                


.. #.

..     .. tabbed:: ch3ex16t

..         .. tab:: Question

..             Write code to get the input of a user’s first name, then get only the first letter of their name, and print that letter lowercase.

             .. activecode:: cspnamestrings_exercises17
                


.. #.

..     .. tabbed:: ch3ex17t

..         .. tab:: Question

..            Write the code below to calculate and print how many months it will take to save $200 if you earn $20 a week.  It should print: "It will take 2.5 months to earn 200 if you make 20 dollars a week."

            .. activecode:: cspnamestrings_exercises18
                


.. #.

..     .. tabbed:: ch3ex18t

..         .. tab:: Question

..             Write code to print out the statement "Hi my name is Bob and I am 2" using only string methods or string slicing. You must get every part of the new string from the given strings.

             .. activecode:: cspnamestrings_exercises19
                
..                 s1 = "hi"
..                 s2 = "My namesake is Bob, and he and I love to eat ham."



.. #.

..     .. tabbed:: ch3ex20t

..         .. tab:: Question

..             Write code that gets user input and print a string that states their input in all lowercase and gives the length of their string.

             .. activecode:: cspnamestrings_exercises20
                

