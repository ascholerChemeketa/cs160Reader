..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


Reading the data
=================

This section uses the same data file that we just saw. If you want to see it, click
the *Show* button below.  Once it appears, you can hide it again by clicking
on the *Hide* button.

.. include:: ./usPollData.rst

.. index::
    single: file; text
    single: file; binary

This data is contained in a file called ``"uspoll.txt"``. A **text file** is of course
actually binary - everything a computer stores is stored as binary data. But in a 
**text file**, all of the information is stored as a series of ASCII encoded characters.
Thus in the file, the number 250 would be stored as "250" which would be stored by the
8-bit values for "2", "5", and "0". Because everything is stored as text, we can open
**text files** in a program like Notepad to read or edit them.

In a **binary file**, data is stored in its natural binary form. Thus the number 250
could be stored as as the 8-bit binary value 11111010. A **binary file** only makes sense
if we know how to read it. If you see a 256-bit chunk of 1's and 0's, there is no
way to know just by looking at the data if it is supposed to be eight 32-bit values, 
or thirty-two 8-bit ones. And you can't know if those 8-bit values are supposed to be
numbers or ASCII characters. 

Text files tend to be more wasteful of bits and slower for a computer to process - the
computer needs to turn the text ``"250"`` into the number ``250`` before it can compute
with it. But they are easier for people to read and write. Thus, if we have data that people need to
interact with, and the amount of information is not too great, it is common to store it
in text format. If there is a tremendous amount of information, or no need for people
to interact with it, we are more likely to store it in binary form.

In Python, we must **open** files before we can read from them or write to them
and **close** them when we are done with them. Opening a file returns a
Python object that has predefined functions and procedures, just like the turtle, string, or
image objects we have seen before. Here are the functions and procedures that can be used to
open and close files.

.. _filemethods1a:

.. list-table::
    :widths: 20 30 50
    :header-rows: 1
    :align: left

    * - Name
      - Use
      - Explanation
    * - open
      - ``fileReference = open("filename")``
      - Open a file called filename and use it for reading.
        This will return a reference to a file object. We can use
        that reference to ask for data to be read, or to close the file.
    * - read().splitlines()
      - ``data = fileReference.read().splitlines()``
      - This is actually two commands, but we will always use them together like this.
        ``read`` will read in the entire file of
        data into one big string. ``splitlines`` takes that and splits it into a 
        list - each item in the list is a string that has the text of one line
        from the file.
    * - close
      - ``fileReference.close()``
      - Close a file.

Here is a sample of using those commands to open our file, read in all the data into a list
called ``data``, and close the file. Once we have all the data, we can use a ``for in`` loop
to iterate through all the lines in the file. Here we just print them out:

.. activecode:: csppythondata_readdata1
    :nocodelens:

    # Open the file for reading. The reference we will use to work with it will be inFile
    inFile = open("uspoll.txt")

    # get all the lines of data
    data = inFile.read().splitlines()

    # Print out the full array of data
    print(data)
    print("-------------------------------------------")

    # close the file
    inFile.close()

    # Now process all the data by looping through the lines
    for line in data:
        print(line)

To do any real work with the lines of the file, we need to break up the lines into
their three parts. We want to turn ``"Aberdeen, SD :13 :8"`` into a list that looks
like ``["Aberdeen, SD", "13", "8"]``. That will make it easier to get the location - ``values[0]``,
or the PM10 value - ``values[1]``, or the PM2.5 value - ``values[2]``.

In this version, the first thing we do with each line is to split it up at the ":"
marks. The ``split`` function will turn a string into a list by splitting it at the
value you give it. ``values = line.split(":")`` says to take the string called line,
split it at the ":" and to call the resulting list ``values``. We can then use that
to get just the city name, or the PM 10 value, or the PM2.5 value.

.. activecode:: csppythondata_readdata2
    :autograde: unittest

    Currently, this program prints each city followed by its PM2.5 value.
    After you run it, try modifying it so it prints out the PM10 values
    instead of the PM2.5. Your output should look like this:

    .. faux_code::

        Aberdeen, SD 
        \  PM10: 8 
        Adrian, MI 
        \  PM10: 9 
        ...

    Make sure not to print out extra lines. The test will assume that you have just that output.

    ~~~~
    # open the file for reading
    inFile = open("uspoll.txt")

    # get all the lines of data
    data = inFile.read().splitlines()

    # close the file
    inFile.close()

    # Now process all the data by looping through the lines
    for line in data:

        # create a list by splitting at the :
        values = line.split(":")

        # get the city from the list
        city = values[0]

        print(city)
        print("  PM2.5:", values[2])
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertIn("PM10: 13", self.getOutput().split("\n")[1], "Testing that you printed the right value for Aberdeen")
            self.assertIn("PM10: 19", self.getOutput().split("\n")[21], "Testing that you printed the right value for Altoona")

    myTests().main()


.. parsonsprob:: csppythondata_readdata3
    :numbered: left
    :adaptive:

    The following program prints the pollution information for all cities that start with a ``D``,
    but the code is mixed up.  Arrange the blocks and indent them to make a working program.
    -----
    inFile = open("uspoll.txt")
    =====
    data = inFile.read().splitlines()
    inFile.close()
    =====
    for line in data:
    =====
        values = line.split(":")
    =====
        city = values[0]
    =====
        if city[0] == "D":
    =====
            print("City:", city)
            print("PM10:", values[1])
            print("PM2.5:", values[2])


.. note::

    If we were reading in a tremendously large file, reading it all at once might take up too
    much memory. In that case we would have to read it one line at a time, then discard that
    line before getting the next. That way, we would only need memory to store one line of
    data instead of all of them at once.

    In the interest of simplicity, we will stick with the "read it all at once" strategy since
    our files are relatively small.
