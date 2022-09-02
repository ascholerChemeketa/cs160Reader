..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

What's the average pollution?
======================================

This section uses the same data file that we have been using, but if you want to see
**all** of the data click on the *Show* button below.  Once it appears, you can hide
it again by clicking on the *Hide* button.

.. include:: ./usPollData.rst

This time, we would like to get the average pollution level. To do that, we need
to take every PM2.5 value and add them all together. As we do this, we need to keep
a count of how many values we have seen, so we can compute an average.

.. parsonsprob:: 18_6_1_avg25
    :numbered: left
    :adaptive:

    This program will calculate the average PM2.5 pollution level in the US data.
    Arrange the blocks in the right order and indent them correctly.  
    You will use all of them.
    -----
    # read all the lines 
    inFile = open("uspoll.txt")
    data = inFile.read().splitlines()
    inFile.close()

    # initialize the variables
    total25 = 0
    count = 0
    =====
    # loop through the lines
    for line in data:
    =====
        # split at :
        values = line.split(":")
    =====    
        # get the PM 2.5 pollution
        new25 = int(values[2])
    =====   
        # add to the total and count
        total25 = total25 + new25
        count = count + 1
    ===== 
    # print the average PM 2.5 value
    print("Average PM 2.5 value is ", total25 / count)

Now let's do the same thing for the PM10 values. This program is mostly done. 
There are a few lines that need to still be written,
they are all marked with a ``TODO`` comment. Finish up the program so you can
find the average PM10 level. 

.. activecode:: average10
    :nocodelens:

    inFile = open("uspoll.txt")
    data = inFile.read().splitlines()
    inFile.close()
    
    # TODO - add a variable to store the total PM10

    count = 0  # Will store the number of records

    for line in data:
        values = line.split(":")
        
        # TODO - get the current PM10 value and turn it into an int
        
        # TODO - add curPM10 value to the total variable

        count = count + 1   #add one to the number of records

    average = # TODO - calculate average
    print("Average PM 10 value is", average)




