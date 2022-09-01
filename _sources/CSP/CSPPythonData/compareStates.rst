..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".



Comparing States
===================================

This section uses the same data file that we have been using, but if you want to see **all**
of the data click on the *Show* button below.  Once it appears, you can hide it again by clicking
on the *Hide* button.

.. include:: ./usPollData.rst

We now can calculate the pollution for a particular state. To compare a number of states, we can
run the program once for each state. But it would be nice to run the program just once and have
it repeat the calculations for each state that we are concerned about.

To do this, we need to be able to easily repeat the "find average pollution" logic. If we have
a large amount of code that we want to repeat, it makes sense to turn it into a function. The
function ``getAvgPM25`` will take in a ``targetState`` and the ``data`` collection. It will
then do the work to calculate the average and return it. There are some ``print`` calls in the
function just to show us what data is being worked on to help confirm the code is working.
In the main part of the program, we call the function twice - once for "OR" and once for "TX".

.. activecode:: getAvgPM25_function
    :nocodelens:

    def getAvgPM25(targetState, data):
        print("Working on", targetState)
        total25 = 0
        count = 0

        for line in data:
            values = line.split(":")
            cityState = values[0].split(",")
            
            if targetState in cityState[1]:
                print(cityState[0]) 
                print(" PM2.5:", values[2])

                # add the current PM2.5 value to the total
                new25 = int(values[2])
                total25 = total25 + new25

                # increment the count
                count = count + 1

        average = total25 / count
        return average

    # Main part of program
    inFile = open("uspoll.txt")
    data = inFile.read().splitlines()
    inFile.close()
    
    state = "OR"
    pollution = getAvgPM25(state, data)
    print("Average Pollution in", state, "is", pollution)

    state = "TX"
    pollution = getAvgPM25(state, data)
    print("Average Pollution in", state, "is", pollution)

If we have a large list of states we want to process, it would be silly to keep copy/pasting
the last three lines of code for different state codes. Repeating those three lines over and
over is the perfect job for a loop. Let's write a loop that can iterate through a list of
states:


.. activecode:: loopStates
    :autograde: unittest

    Write a loop to print out each state in ``stateList`` on its own line. Do not
    print anything other than the state codes.

    ~~~~
    stateList = ["MD", "AK", "NJ", "AR", "WV", "MI"]

    # Your code here
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(self.getOutput().strip(), "\n".join(["MD", "AK", "NJ", "AR", "WV", "MS"]), "Testing that your output is correct")

    myTests().main()

Now we can use your code to help find the average pollution for a large number of
different states. Add your loop to the main part of the program below and make sure
your loop runs the two lines shown in comments (you may have to adjust the variable
name ``state`` so it matches your loop). ``stateList`` has a list of the three richest
(MD, AK, NJ) and poorest states (AK, WV, MS) by per capita income.

.. activecode:: final_pollution_compare
    :nocodelens:

    def getAvgPM25(targetState, data):
        total25 = 0
        count = 0

        for line in data:
            values = line.split(":")
            cityState = values[0].split(",")
            
            if targetState in cityState[1]:
                # add the current PM2.5 value to the total
                new25 = int(values[2])
                total25 = total25 + new25

                # increment the count
                count = count + 1

        average = total25 / count
        return average

    # Main part of program
    inFile = open("uspoll.txt")
    data = inFile.read().splitlines()
    inFile.close()
    
    stateList = ["MD", "AK", "NJ", "AR", "WV", "MS"]

    # Your loop here
        # Repeat these two lines:
        #pollution = getAvgPM25(state, data)
        #print("Average Pollution in", state, "is", pollution)

.. mchoice:: final_pollution_compare_mc
    :answer_a: The richer states seem to be more polluted.
    :answer_b: The poorer states seem to be more polluted.
    :answer_c: There does not seem to be a pattern to the results.
    :correct: a
    :feedback_a: Correct
    :feedback_b: The poorer states are AR, WV, and MS
    :feedback_c: The poorer states are AR, WV, and MS

    What does the program reveal?
