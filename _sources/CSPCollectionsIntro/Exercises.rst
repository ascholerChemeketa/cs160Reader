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

.. parsonsprob:: cspcollectionsintro_exercises1
   :numbered: left
   :practice: T

   The following program segment should iterate through the list ``terms`` and then add each item
   to the list ``vocab`` if it is not already in ``vocab``. If the word is already in ``vocab``,
   then the program should add 1 to the variable ``duplicates``.

   Arrange and indent the blocks correctly. You will not use them all.
   -----
   terms = ["accent", "vertigo", 
            "libra", "illusion"]
   vocab = ["hereditary", "illusion", 
            "vertigo", "velocity", "fallacy"]
   duplicates = 0
   =====
   for word in terms:
   =====
       if word not in vocab:
   =====
       if word not in terms: #distractor
   =====
           vocab.append(word)
   =====
           word.append(vocab) #distractor
   =====
       elif word in vocab:
   =====
           duplicates = duplicates + 1
   =====
           duplicates + 1 #distractor


.. activecode:: cspcollectionsintro_exercises2
    :autograde: unittest
    :practice: T

    Write code to change the first item to "February", to add "April" between
    "March" and "May", and to remove "August".

    ~~~~
    months = ["asdf", "March", "May", "June", "August"] #do not change

    # your code here

    print(months)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(months, ["February", "March", "April", "May", "June"], "Testing that you have the right list")
            self.assertEqual(self.getEditorText().split("\n")[0], 'months = ["asdf", "March", "May", "June", "August"] #do not change', "Testing that you did not change the first line")
            self.assertNotRegex("".join(self.getEditorText().split("\n")[1:]), r"\[.*\".*\]", "Testing that you did not hard code the answer.")

    myTests().main()



.. activecode:: cspcollectionsintro_exercises3
    :autograde: unittest
    :practice: T

    Write code for the function ``getRange``. It should take a list of numbers and
    return the range (the maximum value minus the minimum value). If we have the
    list [10, 8, 13, 20, 15], the range would be calculated as 20 - 8 and would
    be 12.

    Hint: First just worry about finding the maximum and minimum values. Once that
    is working, getting the range will be easy.

    Feel free to comment out some of the tests or add your own while you work on your code.

    Use codelens and print statements for debugging!

    ~~~~
    def getRange(numbers):
        # your code here
        # return the range

    print( "Should be 12:", getRange([10, 8, 13, 20, 15]) )
    print( "Should be 11:", getRange([6, -5, 4, 0]) )
    print( "Should be 2:", getRange([-2, -1, -2, -3]) )
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(getRange([10, 8, 13, 20, 15]), 12, 'Testing [10, 8, 13, 20, 15]')
            self.assertEqual(getRange([6, -5, 4, 0]), 11, 'Testing [6, -5, 4, 0]')
            self.assertEqual(getRange([-2, -1, -2, -3]), 2, 'Testing [-2, -1, -2, -3]')

    myTests().main()


.. activecode:: cspcollectionsintro_exercises4
    :autograde: unittest
    :practice: T

    Write code for the function ``freezeDays``. It should take a list of temperatures
    ``temps`` (in degrees F) and return the number of days that were below 32 degrees.

    Hint: You may want to start by printing out each temperature and a "freeze" or "no"
    message to make sure you can identify the right temperatures. Then worry about
    counting how many there were.

    Feel free to comment out some of the tests or add your own while you work on your code.

    ~~~~
    def freezeDays(temps):
        # your code here
        # return the final value

    print( "Should be 3:", freezeDays([42, 31, 30, 33, 27, 32]) )
    print( "Should be 2:", freezeDays([18, 50, 72, 31, 60]) )
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(freezeDays([42, 31, 30, 33, 27, 32]), 3, 'Testing [42, 31, 30, 33, 27, 32]')
            self.assertEqual(freezeDays([18, 50, 72, 31, 60]), 2, 'Testing [18, 50, 72, 31, 60]')

    myTests().main()


.. activecode:: cspcollectionsintro_exercises5
    :autograde: unittest
    :practice: T

    Write code for the function ``getGPA``. It should figure out the GPA for a list
    of ``grades`` that looks like ["A", "A", "C"].

    To calculate the GPA, you need to add up the values of all the grades.
    An A is 4, a B is 3, a C is 2, a D is 1, and an F is 0. Then divide by the number
    of grades in the list.

    Hint: Work on part of the problem at a time. First write some if logic that just
    prints the correct value for each grade (4, 4, 2 for ["A", "A", "C"]). Then worry about
    getting the total of them. Once that is working, worry about dividing by
    the number of items.

    Feel free to comment out some of the tests or add your own while you work on your code.

    ~~~~
    def getGPA(grades):
        # your code here
        # return the final value

    print( "Should be 3.75:", getGPA(["A", "A", "A", "B"]) )
    print( "Should be ~2.667:", getGPA(["B", "D", "A"]) )
    print( "Should be 2.00:", getGPA(["F", "D", "C", "B", "A"]) )
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertAlmostEqual(getGPA(["A", "A", "A", "B"]), 3.75, 2, 'Testing ["A", "A", "A", "B"]')
            self.assertAlmostEqual(getGPA(["B", "D", "A"]), 2.67, 1, 'Testing ["B", "D", "A"]')
            self.assertAlmostEqual(getGPA(["F", "D", "C", "B", "A"]), 2.0, 1, 'Testing ["F", "D", "C", "B", "A"]')

    myTests().main()



 .. parsonsprob:: cspcollectionsintro_exercises6
..     :numbered: left
..     :practice: T
..     :adaptive:
..     :noindent:

..     The following program segment should swap the first and last values of the list "numbers"
..     using indexing. But, the blocks have been mixed up and include an extra block that isn't
..     needed in the solution.
..     -----
..     numbers = [3, 2, 1, 4]
..     =====
..     first = numbers[0]
..     last = numbers[3]
..     =====
..     numbers[0] = last
..     numbers[-1] = first
..     =====
..     first = numbers[1]
..     last = numbers[4] #distractor

 .. parsonsprob:: cspcollectionsintro_exercises7
..    :numbered: left
..    :practice: T
..    :adaptive:

..    The following program segment should iterate through the strings in <i>list</i> and append them to <i>long_list</i> if the length is greater than 4. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>

..    -----
..    list = ["four", "Michigan", "yellow", "at", "blue"]
..    long_list = []
..    =====
..    for each item in list:
..    =====
..        if len(item) > 4:
..    =====
..            long_list.append(item)
..    =====
..            item.append(long_list) #distractor

 .. parsonsprob:: cspcollectionsintro_exercises8
..    :numbered: left
..    :practice: T
..    :adaptive:

..    The following program segment should first replace the last item of the list <i>months</i> with "November" then append "December" to the end of the list. But, the blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
..    -----
..    months = ["January", "March", "June", "August", "October"]
..    new_month = "November"
..    =====
..    months[4] = new_month
..    =====
..    months.append("December")
..    =====
..    months[5] = new_month #distractor
..    =====
..    months[-1] = "December" #distractor

 .. parsonsprob:: cspcollectionsintro_exercises9
..    :numbered: left
..    :practice: T
..    :adaptive:


 .. parsonsprob:: cspcollectionsintro_exercises10
..    :numbered: left
..    :practice: T
..    :adaptive:

..    The following program segment should reverse the order of the list <i>oldList</i>, by storing it in the list <i>soFar</i>. Print the result at the end. The blocks have been mixed up and include extra blocks that aren't needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right. Click the <i/>Check Me</i> button to check your solution.</p>
..    -----
..    oldList= [“this”, “is”, “a”, “list”]
..    newList=[]
..    =====
..    for x in range(0, len(oldList)):
..    =====
..    for x in range(0, list(oldList)): #distractor
..    =====
..        newList = oldList[x] + newList
..    =====
..        newList = x[oldList] + newList #distractor
..    =====
..    print(newList)

 .. parsonsprob:: cspcollectionsintro_exercises11
..    :numbered: left
..    :practice: T
..    :adaptive:

..    The following program segment should first print out the program's instructions. Next it should continuously ask the user if it wants to add a word to a list <i>vocabulary</i> and then append it to the end the list IF the word is not already in the list. The blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
..    -----
..    print("Enter a word to add it to the vocabulary list or type in 'quit' to end the program.")
..    response = 0
..    vocabulary = []
..    =====
..    while response != "quit":
..    =====
..    while response == "quit": #distractor
..    =====
..        response = input("Enter a vocabulary word:")
..    =====
..        if response not in vocabulary:
..    =====
..            vocabulary.append(response)


 .. parsonsprob:: cspcollectionsintro_exercises12
..    :numbered: left
..    :practice: T
..    :adaptive:

..    The following pseudocode program segment should print the number of temperatures that are above freezing (greater than 32 degrees). But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
..    -----
..    temperatures <- [42, 30, 32, 19, 35, 39, 38]
..    above_freezing <- 0
..    =====
..    for EACH item IN temperatures
..    =====
..        IF item > 32
..    =====
..            above_freezing <- above_freezing + 1
..    =====
..    DISPLAY(above_freezing)
..    =====
..            above_freezing <- item #distractor




.. #.

..     .. tabbed:: ch16ex5t

..         .. tab:: Question

..            Fix 5 syntax errors in the code below so that it runs and prints the contents of ``items``.

            .. activecode:: cspcollectionsintro_exercises13
..                 :nocodelens:

..                def itemLister(items):
..                    items[0] = "First item'
..                    items[1] = items0]
..                    items[2] = items[2] + 1
..                    print items

..                 itemLister([2, 4, 6 8])



.. #.

..     .. tabbed:: ch16ex6t

..         .. tab:: Question

..             Complete the code on lines 4 and 5 so that the function returns the average of a list of integers.

             .. activecode:: cspcollectionsintro_exercises14
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

            .. activecode:: cspcollectionsintro_exercises15
..                 :nocodelens:

..                 source = ["This", "is", "a", "list"]
..                 soFar = []
..                 for index in range(0, len(source)):
..                 soFar = [source[index]] + soFar
..                 print(soFar)



.. #.

..     .. tabbed:: ch16ex8t

..         .. tab:: Question

..             Fix the code so that the code prints "['hihi', 0, 0, 4]" .

             .. activecode:: cspcollectionsintro_exercises16
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

            .. activecode:: cspcollectionsintro_exercises17
..                 :nocodelens:

..                 # setup the source list
..                 source = ["This", "is" "a", "list"]

..                 # Set the accumulator to the empty list
..                 soFar = [

..                 # Loop through all the items in the source list
..                 for index in range(0, len(source))

..                     # Add the current item in the source and print the current items in soFar
..                     soFar = [source[index]] + sofar
..                     print(soFar)




.. #.

..     .. tabbed:: ch16ex10t

..         .. tab:: Question

..             The code below currently prints the reverse of a list. Change it so that it prints a mirrored version of the list. It should print "['list', 'a', 'is', 'This', 'This', 'is', 'a', 'list']".

             .. activecode:: cspcollectionsintro_exercises18
..                 :nocodelens:

..                 # setup the source list
..                 source = ["This", "is", "a", "list"]

..                 # Set the accumulator to the empty list
..                 soFar = []

..                 # Loop through all the items in the source list
..                 for index in range(0, len(source)):

..                     # Add a list with the current item from source to soFar
..                     soFar =  [source[index]] + soFar
..                 print(soFar)



.. #.

..     .. tabbed:: ch16ex11t

..         .. tab:: Question

..            Change the following code into a function.  It should take the list and return a list of the values at the even indicies.

            .. activecode:: cspcollectionsintro_exercises19
..                 :nocodelens:

..                 numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
..                 evenList = []
..                 for index in range(0, len(numbers), 2):
..                     evenList = evenList + [numbers[index]]
..                 print(evenList)






.. #.

..     .. tabbed:: ch16ex12t

..         .. tab:: Question

..             The following code creates and prints a list of even numbers. Change it and add to it so that it creates a list of all multiples of 5 from 0 to 50, inclusive.

             .. activecode:: cspcollectionsintro_exercises20
..                 :nocodelens:

..                 # initialize the variables
..                 numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
..                 evens = []

..                 # loop though every other index
..                 for index in range(0, len(numbers), 2):

..                     # add the lists
..                     evens = evens + [numbers[index]]

..                 # print the result
..                 print(evens)



.. #.

..     .. tabbed:: ch16ex13t

..         .. tab:: Question

..            Change the following into a procedure. It prints a countdown from 5 to 0.  Have it take the starting number for the countdown as a parameter.  Print each value till it gets to 0.

            .. activecode:: cspcollectionsintro_exercises21
..                 :nocodelens:

..                 for index in range(5, -1, -1):
..                     print(index)






.. #.

..     .. tabbed:: ch16ex14t

..         .. tab:: Question

..             Fix the errors so that the code individually adds each item from ``source`` to ``newList``. Make the range decrement, so it starts from the end, but keep ``newList`` in the same order as ``source``.

             .. activecode:: cspcollectionsintro_exercises22
..                 :nocodelens:

..                 # initialize the variables
..                 source = ["This", "is", "a", "list"]
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

            .. activecode:: cspcollectionsintro_exercises23
..                 :nocodelens:




.. #.

..     .. tabbed:: ch16ex16t

..         .. tab:: Question

..             Write a function that takes a list of numbers as a parameter and adds 5 to each number and returns the list.

             .. activecode:: cspcollectionsintro_exercises24
..                 :nocodelens:




.. #.

..     .. tabbed:: ch16ex17t

..         .. tab:: Question

..            Write a function that takes a list of numbers and returns the sum of the positive numbers in the list.

            .. activecode:: cspcollectionsintro_exercises25
..                 :nocodelens:



.. #.

..     .. tabbed:: ch16ex18t

..         .. tab:: Question

..             Write a function that takes in a list of numbers as a parameter. The function should calculate the sum of all the positive numbers in the list, the absolute value of the sum of the negative numbers, and return the average of the two sums.

             .. activecode:: cspcollectionsintro_exercises26
..                 :nocodelens:



.. #.

..     .. tabbed:: ch16ex19t

..         .. tab:: Question

..            Write a function to return the reverse of a list, but with only every other item from the original list starting at the end of the list.  So, if it is passed the list [0, 1, 2, 3, 4, 5] for example, it should return the list [5, 3, 1].

            .. activecode:: cspcollectionsintro_exercises27
..                :nocodelens:



.. #.

..     .. tabbed:: ch16ex20t

..         .. tab:: Question

..             Write a procedure that takes an int as a parameter. The procedure should add every other odd number from 1 to the int parameter (inclusive) into a new list. The procedure should print the new list and the sum of the new list.

             .. activecode:: cspcollectionsintro_exercises28
..                 :nocodelens:




.. #.

..     .. tabbed:: ch13ex18t

..         .. tab:: Question

..             Write a function that takes in a list of grades and returns the letter grade of the average (A is 90+, B is 80-89, C is 70-79, D is 60-69, F is 59 and below). Call the function and print the result.

             .. activecode:: cspcollectionsintro_exercises29
..                 :nocodelens:




.. #.

..     .. tabbed:: ch13ex8t

..         .. tab:: Question

..             Complete the code so that it iterates through the list of numbers and prints positive, negative, or neither based off the integer.

             .. activecode:: cspcollectionsintro_exercises30
..                 :nocodelens:

..                 numbers = [-1, 0, 1]
..                 for x in numbers:
..                     if
..                         print("positive")
..                     elif
..                         print(
..                     else:
..                         print(
