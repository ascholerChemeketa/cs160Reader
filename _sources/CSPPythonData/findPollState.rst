..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".



Finding the Pollution for a State
===================================

This section uses the same data file that we have been using, but if you want to see **all**
of the data click on the *Show* button below.  Once it appears, you can hide it again by clicking
on the *Hide* button.

.. include:: ./usPollData.rst

To get the average for particular states, we need to be able to identify which state a record
belongs to. Currently that is hard because the string that has the state also has the city:
``"Pocatello,ID"``. We need to separate the two. Fortunately, we can easily use ``split`` to do
so. 

We have already been using ``split`` to chop up the entire line of data into a list of the three
values it contains - turning ``"Pocatello,ID:15:9"`` into ``["Pocatello,ID", "15", "9"]``. In the same
way, we can split ``"Pocatello,ID"`` at the "," to turn it into a list like ``["Pocatello", "ID"]``
where the first value is the city and the second the state.

Step 6 is in the sample below is where we do the key work. We grab ``values[0]``, which is the 
city/state string, make a list out of it using ``split``, and call that list ``cityState``.
We can then use ``cityState[0]`` to get the city name and ``cityState[1]`` to get the state.

.. codelens:: csppythondata_findpollstate1

    line = "Pocatello,ID:15:9"
    values = line.split(":")
    print("All the values:")
    print(values)

    cityState = values[0].split(",")

    print("City:", cityState[0])
    print("State:", cityState[1])
    print("PM10:", values[1])
    print("PM2.5:", values[2])

Now that we have the state isolated, we can use that to look for just records that have the
state code that we desire. Let's try that and look for records from Oregon. We will loop
through all of the records, split the line up into values, split the city/state up into a
list, and then test the state value against the state code "OR" and only print out records
that have that code.

.. activecode:: csppythondata_findpollstate2
    :nocodelens:

    inFile = open("uspoll.txt")
    data = inFile.read().splitlines()
    inFile.close()
    
    # State we are looking for
    targetState = "OR"

    for line in data:
        values = line.split(":")
        # isolate city and state in cityState[0] and cityState[1]
        cityState = values[0].split(",")
        
        if targetState == cityState[1]:
            print(cityState[0])
            print("PM2.5:", values[2])

It seems to work. But if you look closely at the records it produces, there is nothing
for Portland, OR. Looking at the data file, we can see why - Portland is listed as part
of a metro area that extends into Washington, so its state code is listed as "OR-WA".
For this program to work correctly, we need to accept any state code that has "OR"
anywhere in it. That is an easy fix, we just need to change the ``==`` operator into
the ``in`` operator to see if the ``targetState`` is anywhere in the state code from
the line we are working with. Try doing that and make sure Portland appears in the
output.

Now, we can merge our average logic into that code. We will only count records that are
in the target state.

.. activecode:: csppythondata_findpollstate3
    :nocodelens:

    inFile = open("uspoll.txt")
    data = inFile.read().splitlines()
    inFile.close()
    
    # initialize the variables
    targetState = "OR"
    total25 = 0
    count = 0

    for line in data:
        values = line.split(":")
        # isolate city and state in cityState[0] and cityState[1]
        cityState = values[0].split(",")
        
        if targetState in cityState[1]:
            # Uncomment these two lines if you want to see which data is included
            #print(cityState[0]) 
            #print(" PM2.5:", values[2])

            # add the current PM2.5 value to the total
            new25 = int(values[2])
            total25 = total25 + new25

            # increment the count
            count = count + 1

    # print the average
    average = total25 / count
    print("Average PM 2.5 value for " , targetState, " is ", average)

.. fillintheblank:: csppythondata_findpollstate4

    Modify the program to calculate the average PM2.5 pollution in Texas (state code "TX"). 
    What is the value?

    - :^\s*10.9\s*$: Correct!
      :^\s*\d+\s*$: That is not the right value.
      :.*: Make sure to give your answer as a number


.. parsonsprob:: csppythondata_findpollstate5
    :numbered: left
    :adaptive:

    The following program finds the highest PM10 value in a particular state.
    Arrange and indent the blocks so it works correctly.

    We only want to check the PM10 values for cities that are located in the target state.
    Make sure to do the state check before worrying about checking the 
    -----
    inFile = open("uspoll.txt")
    data = inFile.read().splitlines()
    inFile.close()
    =====
    targetState = "OR"
    maxCity = ""
    maxPM10 = 0
    =====
    for line in data:
    =====
        values = line.split(":")
        cityState = values[0].split(",")
    =====
        if targetState in cityState[1]:
    =====
            curPollution = int(values[1])
    =====
            if curPollution > maxPM10:
    =====
                maxPM10 = curPollution
                maxCity = cityState[0]
    =====
    print("The most polluted city is" , maxCity)
    print("With PM10 of:" , maxPM10)


