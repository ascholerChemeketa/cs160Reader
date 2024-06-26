..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Chapter Exercises
---------------------

The problems in these exercises use a new data set. The file ``"stocks.txt"`` has data from
the Dow Jones Industrial Average which tracks the average performance of a collection of
large stocks. Each line of the file represents the opening day of trading (not always the
first of the month as the market is not open every day).These lines look like:

.. code::

    3-Dec-01,9848.93,10220.78,9651.87,10021.57

The values on the line are separated by commas and are the following (in order):

* Date
* Opening value
* High value for month
* Low value for month
* Close value for month
* Volume - number of shares traded

To see all of the data, you can use a loop to print out each line.

.. |STOCK_DATA| raw:: html

      <pre id="stocks.txt" style="display: none">
      3-Dec-01,9848.93,10220.78,9651.87,10021.57
      1-Nov-01,9087.45,10054.58,8987.61,9851.56
      1-Oct-01,8845.97,9626.54,8659.9,9075.14
      4-Sep-01,9946.98,10238.5,7926.93,8847.56
      1-Aug-01,10527.38,10663.07,9829.35,9949.75
      2-Jul-01,10504.95,10758.14,10049.38,10522.81
      1-Jun-01,10913.57,11236.68,10313.4,10502.4
      1-May-01,10734.05,11436.42,10638.48,10911.94
      2-Apr-01,9877.16,10973.15,9303.48,10734.97
      1-Mar-01,10493.25,10940.45,9047.56,9878.78
      1-Feb-01,10884.82,11140.09,10225.14,10495.28
      2-Jan-01,10790.92,11224.41,10325.71,10887.36
      1-Dec-00,10416.76,11044.7,10158.16,10787.99
      1-Nov-00,10966.21,11152.02,10204.8,10414.49
      2-Oct-00,10659.06,11108.79,9571.4,10971.14
      1-Sep-00,11219.54,11518.83,10439.31,10650.92
      1-Aug-00,10523.81,11415.99,10428.58,11215.1
      3-Jul-00,10450.36,10980.34,10303.28,10521.98
      1-Jun-00,10532.27,11013.05,10161.51,10447.89
      1-May-00,10749.42,11086.72,10163.2,10522.33
      3-Apr-00,10863.28,11600.43,10128.62,10733.91
      1-Mar-00,10128.11,11311.28,9611.75,10921.92
      1-Feb-00,10937.74,11228.44,9760.36,10128.31
      3-Jan-00,11501.85,11908.5,10610.43,10940.53
      1-Dec-99,10876.47,11658.68,10798.07,11497.12
      1-Nov-99,10730.78,11195.34,10449.42,10877.81
      1-Oct-99,10335.69,10883.1,9884.2,10729.86
      1-Sep-99,10828.44,11218.39,10055.17,10336.95
      2-Aug-99,10654.83,11428.94,10487.34,10829.28
      1-Jul-99,10972.39,11321.61,10594.99,10655.15
      1-Jun-99,10549.08,11120.24,10334.42,10970.8
      3-May-99,10788.75,11244.36,10372.96,10559.74
      1-Apr-99,9825.29,11072.25,9707.91,10789.04
      1-Mar-99,9315.27,10158.57,9163.41,9786.16
      1-Feb-99,9405.43,9662.77,9025.41,9306.58
      4-Jan-99,9212.84,9759.44,8994.26,9358.83
      1-Dec-98,9039.57,9390.75,8610.63,9181.43
      2-Nov-98,8645.65,9457.95,8573.56,9116.55
      1-Oct-98,7749.42,8718.25,7399.78,8592.1
      1-Sep-98,7583.09,8253.79,7379.7,7842.62
      3-Aug-98,8868.1,8948.17,7517.7,7539.07
      1-Jul-98,9011.56,9412.64,8786.48,8883.29
      1-Jun-98,8907.93,9155.04,8524.55,8952.02
      1-May-98,9106.47,9311.98,8760.95,8899.95
      1-Apr-98,8818.5,9287.32,8715.61,9063.37
      2-Mar-98,8528.78,8997.11,8377.32,8799.81
      2-Feb-98,7987.46,8616.72,7987.46,8545.72
      2-Jan-98,7908.25,8072.91,7391.59,7906.5
      1-Dec-97,7823.62,8209.56,7563.23,7908.25
      3-Nov-97,7443.07,7934.53,7334.77,7823.13
      1-Oct-97,7945.26,8218.34,6936.45,7442.08
      2-Sep-97,7650.99,8078.36,7556.23,7945.26
      1-Aug-97,8222.61,8340.14,7580.85,7622.42
      1-Jul-97,7672.79,8328.99,7613.53,8222.61
      2-Jun-97,7331.04,7868.44,7214.29,7672.79
      1-May-97,7008.99,7430.2,6891.39,7331.04
      1-Apr-97,6583.48,7081.23,6315.84,7008.99
      3-Mar-97,6877.74,7158.28,6532.49,6583.48
      3-Feb-97,6813.09,7112.87,6683.4,6877.74
      2-Jan-97,6448.27,6953.55,6318.96,6813.09
      2-Dec-96,6521.7,6623.96,6206.83,6448.27
      1-Nov-96,6029.38,6606.3,5975.34,6521.7
      1-Oct-96,5882.17,6162.8,5833.72,6029.38
      3-Sep-96,5616.21,5952.08,5550.37,5882.17
      1-Aug-96,5528.91,5761.95,5507.83,5616.21
      1-Jul-96,5654.63,5769.88,5170.11,5528.91
      3-Jun-96,5643.18,5770.61,5559.69,5654.63
      1-May-96,5569.08,5833.04,5327.74,5643.18
      1-Apr-96,5587.14,5737.07,5382.66,5569.08
      1-Mar-96,5485.62,5755.86,5395.3,5587.14
      1-Feb-96,5395.3,5693.36,5319.43,5485.62
      2-Jan-96,5117.12,5433.24,5000.07,5395.3
      1-Dec-95,5074.49,5266.69,5016.68,5117.12
      1-Nov-95,4755.48,5143.13,4719.72,5074.49
      2-Oct-95,4789.08,4845.08,4638.43,4755.48
      1-Sep-95,4610.56,4839.48,4594.71,4789.08
      1-Aug-95,4708.47,4772.56,4552.8,4610.56
      3-Jul-95,4556.1,4767.99,4530.26,4708.47
      1-Jun-95,4465.14,4614.2,4394.59,4556.1
      1-May-95,4321.27,4480.7,4278.73,4465.14
      3-Apr-95,4157.69,4348.94,4129.68,4321.27
      1-Mar-95,4011.05,4213.71,3935.31,4157.69
      1-Feb-95,3843.86,4034.62,3809.21,4011.05
      3-Jan-95,3834.44,3955.56,3794.4,3843.86
      1-Dec-94,3739.23,3882.21,3638.97,3834.44
      1-Nov-94,3908.12,3919.9,3612.05,3739.23
      3-Oct-94,3843.19,3958.25,3736.2,3908.12
      1-Sep-94,3913.42,3972.72,3804.5,3843.19
      1-Aug-94,3764.5,3954.54,3722.41,3913.42
      1-Jul-94,3624.96,3782.63,3611.04,3764.5
      1-Jun-94,3758.37,3839.88,3603.92,3624.96
      2-May-94,3681.69,3788.76,3609.71,3758.37
      4-Apr-94,3633.08,3733.15,3520.8,3681.69
      1-Mar-94,3832.02,3911.78,3544.12,3635.96
      1-Feb-94,3978.36,3998.06,3811.76,3832.02
      3-Jan-94,3754.09,4002.84,3715.24,3978.36
      1-Dec-93,3683.95,3818.92,3673.33,3754.09
      1-Nov-93,3680.59,3749.9,3585.86,3683.95
      1-Oct-93,3555.12,3713.57,3541.71,3680.59
      1-Sep-93,3651.25,3665.5,3501.47,3555.12
      2-Aug-93,3539.47,3681.71,3523.54,3651.25
      1-Jul-93,3516.08,3604.86,3443.28,3539.47
      1-Jun-93,3527.43,3577.25,3445.77,3516.08
      3-May-93,3427.55,3582.23,3402.42,3527.43
      1-Apr-93,3435.11,3499.41,3338.39,3427.55
      1-Mar-93,3370.81,3497.25,3334.07,3435.11
      1-Feb-93,3310.03,3472.94,3262.48,3370.81
      4-Jan-93,3301.11,3338.12,3219.25,3310.03
      1-Dec-92,3305.16,3364.87,3229.79,3301.11
      2-Nov-92,3226.28,3326.51,3176.84,3305.16
      1-Oct-92,3271.66,3291.39,3087.41,3226.28
      1-Sep-92,3257.35,3391.35,3226.55,3271.66
      3-Aug-92,3393.78,3413.23,3200.86,3257.35
      1-Jul-92,3318.52,3414.85,3255.43,3393.78
      1-Jun-92,3396.88,3435.27,3242.32,3318.52
      1-May-92,3359.12,3433.98,3316.64,3396.88
      1-Apr-92,3235.47,3387.97,3141.77,3359.12
      2-Mar-92,3267.67,3318.42,3176.21,3235.47
      3-Feb-92,3223.39,3307.47,3193.42,3267.67
      2-Jan-92,3168.83,3313.51,3119.86,3223.39
      2-Dec-91,2894.68,3204.61,2832.29,3168.83
      1-Nov-91,3069.1,3091.91,2861.14,2894.68
      1-Oct-91,3016.77,3091.01,2925.54,3069.1
      3-Sep-91,3043.6,3066.64,2963.1,3016.77
      1-Aug-91,3024.82,3068.65,2836.31,3043.6
      1-Jul-91,2911.67,3039.58,2897.36,3024.82
      3-Jun-91,3027.5,3057.47,2879.25,2906.75
      1-May-91,2887.87,3044.5,2834.53,3027.5
      1-Apr-91,2913.86,3030.45,2848.51,2887.87
      1-Mar-91,2882.18,3017.82,2829.21,2913.86
      1-Feb-91,2736.39,2955.2,2694.31,2882.18
      2-Jan-91,2633.66,2747.28,2447.03,2736.39
      3-Dec-90,2559.65,2662.62,2534.65,2633.66
      1-Nov-90,2442.33,2581.19,2415.59,2559.65
      1-Oct-90,2452.48,2565.35,2344.31,2442.33
      4-Sep-90,2614.36,2665.35,2367.82,2452.48
      1-Aug-90,2905.2,2931.19,2459.41,2614.36
      2-Jul-90,2880.69,3024.26,2833.17,2905.2
      1-Jun-90,2876.66,2956.93,2821.53,2880.69
      1-May-90,2656.76,2908.21,2651.35,2876.66
      2-Apr-90,2707.21,2793.47,2627.7,2656.76
      1-Mar-90,2627.25,2775,2607.88,2707.21
      1-Feb-90,2590.54,2674.32,2540.99,2627.25
      2-Jan-90,2753.2,2834.04,2513.06,2590.54
      1-Dec-89,2706.27,2784.77,2658.7,2753.2
      1-Nov-89,2645.08,2718.22,2563.11,2706.27
      2-Oct-89,2692.82,2809.08,2496.93,2645.08
      1-Sep-89,2737.27,2768.24,2636.78,2692.82
      1-Aug-89,2660.66,2758.73,2619.71,2737.27
      3-Jul-89,2440.06,2668.25,2431.53,2660.66
      1-Jun-89,2480.15,2544.95,2412.94,2440.06
      1-May-89,2418.8,2521.63,2356.3,2480.15
      3-Apr-89,2293.62,2433.1,2282.07,2418.8
      1-Mar-89,2258.39,2351.07,2234.46,2293.62
      1-Feb-89,2342.32,2369.29,2232.14,2258.39
      3-Jan-89,2168.39,2350.18,2127.14,2342.32
      </pre>

.. activecode:: csppythondata_exercises1
    :nocodelens:
    :autograde: unittest

    Below is the start of a program to read in the ``"stocks.txt"`` file and run code
    on each line in the file.

    Add code to split the line into a list of values and print out the date value. 
    (The date should be the first value in the list that you create with split.)

    Your final output should be a long list of dates and nothing else.

    You can't use codelens with file reading problems, but you can use print statements to check
    what your code is doing. Feel free to use extra ones while writing your code and Then
    remove them or comment them out when everything is working.

    |STOCK_DATA|

    ~~~~
    inFile = open("stocks.txt")
    data = inFile.read().splitlines()
    inFile.close()

    for line in data:
        #Your code here
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(self.getOutput().split("\n")[0], "3-Dec-01", "Testing the first line.")
            self.assertEqual(self.getOutput().split("\n")[9], "1-Mar-01", "Testing the tenth line.")
            self.assertEqual(self.getOutput().split("\n")[66], "3-Jun-96", "Testing a mystery line.")

    myTests().main()


.. activecode:: csppythondata_exercises2
    :nocodelens:
    :autograde: unittest

    Modify your program to print out the highest value the Dow Jones reached. (This should be the
    largest of the monthly high values.) 

    Tip: When you get the high value, you will need to convert it from a string to a float to work
    with it as a decimal number. This should look like: ``float(values[??])``.

    The final version of your program should only print out the one highest value, but you should
    work your way up to that. Start by printing out all of the monthly high values, then worry
    about finding the highest one.

    You can't use codelens with file reading problems, but you can use print statements to check
    what your code is doing.

    |STOCK_DATA|

    
    ~~~~
    inFile = open("stocks.txt")
    data = inFile.read().splitlines()
    inFile.close()

    #Your code here
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(self.getOutput().strip(), "11908.5", "Testing for right answer.")
            self.assertNotIn(self.getEditorText(), "11908.5", "Testing that you did not hard code answer.")

    myTests().main()


.. activecode:: csppythondata_exercises3
    :nocodelens:
    :autograde: unittest

    Modify your program from question 1 to only print the dates from a specific year specified by
    a variable ``desiredYear``. If ``desiredYear`` is 96, you would only print out values where
    the year (last part of the date value) is "96".

    You should try changing desired year to different values to make sure your program works for
    any year for which there is data (89-01), but to pass the tests, you must set ``desiredYear``
    to "92".

    You can't use codelens with file reading problems, but you can use print statements to check
    what your code is doing.

    |STOCK_DATA|

    
    ~~~~
    inFile = open("stocks.txt")
    data = inFile.read().splitlines()
    inFile.close()

    desiredYear = "92"

    #Your code here
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(self.getOutput().split("\n")[0], "1-Dec-92", "Testing the first line.")
            self.assertEqual(self.getOutput().split("\n")[9], "2-Mar-92", "Testing the tenth line.")

    myTests().main()


.. activecode:: csppythondata_exercises4
    :nocodelens:
    :autograde: unittest

    Combine your solutions from problems 2 and 3 and make your program find the largest highest value
    from the records indicated by the variable ``desiredYear``. I.e. if ``desiredYear`` is "96",
    your program should only consider the records where the date value ends in "96", and from those,
    should find the largest "highest value for month" seen in those records.
    
    You should try changing desired year to different values to make sure your program works for
    any year for which there is data (89-01), but to pass the tests, you must set ``desiredYear``
    to "96".

    You can't use codelens with file reading problems, but you can use print statements to check
    what your code is doing.

    |STOCK_DATA|

    
    ~~~~
    inFile = open("stocks.txt")
    data = inFile.read().splitlines()
    inFile.close()

    desiredYear = "96"

    #Your code here
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(self.getOutput().strip(), "6623.96", "Testing for right answer.")
            self.assertNotIn(self.getEditorText(), "6623.96", "Testing that you did not hard code answer.")

    myTests().main()


.. activecode:: csppythondata_exercises5
    :nocodelens:
    :autograde: unittest

    Turn your code from question 4 into a function so we can easily check the max value in
    multiple years. The function should be called ``maxHighForYear``. It should take the
    ``desiredYear`` and the ``data`` as parameters and return the max "highest value for month"
    found in the records that match the desired year.
    
    The starter code has a simple test of your function followed by a more complex test that
    tests all the valid years. If you need to debug your code, it might be easier if you comment
    out the complex test and just run the simple one.

    You can't use codelens with file reading problems, but you can use print statements to check
    what your code is doing.

    |STOCK_DATA|

    
    ~~~~
    def maxHighForYear(desiredYear, data):
        # your code here
        # make sure to return the answer 

    # Main part of program
    inFile = open("stocks.txt")
    data = inFile.read().splitlines()
    inFile.close()

    # Simple test
    print(maxHighForYear("95", data))

    # Test all years - feel free to comment out while working on code
    for yearNum in range(1989, 2002):
        yearNum = yearNum % 100     # keep just last two digits

        #Now format year into a string. Make sure to add a "0" if one digit
        if yearNum > 10:
            year = str(yearNum)
        else:
            year = "0" + str(yearNum)
        
        yearsMax = maxHighForYear(year, data)
        print("Max value for", year, "was", yearsMax)

    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(maxHighForYear("95", data), 5266.69, "Testing answer returned for \"95\".")
            self.assertEqual(maxHighForYear("00", data), 11908.5, "Testing answer returned for \"00\".")

    myTests().main()


.. activecode:: csppythondata_exercises6
    :nocodelens:
    :autograde: unittest

    Write the function ``avgVolumeForYear``. It should take the ``desiredYear`` and the ``data``
    as parameters and return the average of the "volume" value
    found in the records that match the desired year. (The "volume" is the last value in
    each record.)
    
    The starter code has a simple test of your function followed by a more complex test that
    tests all the valid years. If you need to debug your code, it might be easier if you comment
    out the complex test and just run the simple one.

    You can't use codelens with file reading problems, but you can use print statements to check
    what your code is doing.

    |STOCK_DATA|

    
    ~~~~
    def avgVolumeForYear(desiredYear, data):
        # your code here
        # make sure to return the answer 

    # Main part of program
    inFile = open("stocks.txt")
    data = inFile.read().splitlines()
    inFile.close()

    # Simple test
    print(avgVolumeForYear("95", data))

    # Test all years - feel free to comment out while working on code
    for yearNum in range(1989, 2002):
        yearNum = yearNum % 100     # keep just last two digits

        #Now format year into a string. Make sure to add a "0" if one digit
        if yearNum > 10:
            year = str(yearNum)
        else:
            year = "0" + str(yearNum)
        
        yearsMax = avgVolumeForYear(year, data)
        print("Max value for", year, "was", yearsMax)

    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertAlmostEqual(avgVolumeForYear("91", data), 2964.3625, 3, "Testing answer returned for \"91\".")
            self.assertAlmostEqual(avgVolumeForYear("00", data), 10688.0425, 3, "Testing answer returned for \"00\".")

    myTests().main()


.. #.

..     .. tabbed:: ch18ex1t

..         .. tab:: Question

..             Fix 5 errors in the code below so that the code runs correctly and prints the pollution for all cities that start with the letter A.

             .. activecode:: csppythondata_exercises7
..                 :nocodelens:

..                 inFile = open("uspoll.txt","r)
..                 line = inFile.readLine()
..                 while line
..                     values = line.split(":")
..                     city = values[0]
..                     if (city.find("A") == 0):
..                         print('City: ' city)
..                         print("Pollution values:",values[1],values[2])
..                     line = infile.readline()

..                 inFile.close()



.. #.

..     .. tabbed:: ch18ex2t

..         .. tab:: Question

..             Fix the errors in the code below so that it prints the average PM values of only the cities that start with "A".

             .. activecode:: csppythondata_exercises8
..                 :nocodelens:

..                 inFile = open("uspoll.txt","r")
..                 lines = inFile.readlines()
..                 inFile.close()

..                 total25 = 0
..                 count = 1.0
..                 for line in lines:
..                     values = line.split(":")
..                     new25 = float(values[2])
..                     city = values[1]
..                     if (city.find("A") == -1):
..                         total25 = total25 + new25
..                     count = count + 1

..                 print("Average PM 2.5 value for cities that start with 'A' is ", total25/count)



.. #.

..     .. tabbed:: ch18ex3t

..         .. tab:: Question

..            Fix the 5 errors in the code below so that it runs and prints the largest PM 2.5 value and the city that has that value.

            .. activecode:: csppythondata_exercises9
..                 :nocodelens:

..                 inFile = open("uspoll.txt","r"
..                 lines = inFile.readlines()
..                 inFile.Close()

..                 maxCity = ''
..                 max25 =   # initialize max25
..                 for line  lines:
..                     values = line.split(":")
..                     new25 = float(values[2]) # get the current value
..                     if new25 > max25
..                         maxCity = values[0]
..                         max25 = new25 # save the new maximum
..                 print("Largest PM 2.5 value is ",max25," in ",maxCity)




.. #.

..     .. tabbed:: ch18ex4t

..         .. tab:: Question

..             The code below prints all the lines that have a city that starts with an "A". Change it so that it prints out all lines that have a city that starts with "A" or "B".

             .. activecode:: csppythondata_exercises10
..                 :nocodelens:

..                 # read all the lines
..                 inFile = open("uspoll.txt","r")
..                 lines = inFile.readlines()
..                 inFile.close()

..                 # loop through the lines
..                 for line in lines:
..                     if line[0] == "A":
..                         print(line)




.. #.

..     .. tabbed:: ch18ex5t

..         .. tab:: Question

..            Fix the indention below for the code to correctly find and print the lowest 2.5 value and city.

            .. activecode:: csppythondata_exercises11
..                 :nocodelens:

..                 inFile = open("uspoll.txt","r")
..                 lines = inFile.readlines()
..                 inFile.close()

..                 minCity = ''
..                 min25 = 500
..                 for line in lines:
..                 values = line.split(":")
..                 new25 = float(values[2]) # set the value for new25 to be the current PM 2.5 value
..                 if new25 < min25:
..                 minCity = values[0] # Save the minimum city and state
..                 min25 = new25 # save the minimum PM 2.5 value
..                 print("Smallest PM 2.5 ",min25," in ",minCity)



.. #.

..     .. tabbed:: ch18ex6t

..         .. tab:: Question

..             Fix the code so that it prints out the min value and the cities only when the min value is even.

             .. activecode:: csppythondata_exercises12
..                 :nocodelens:

..                 # read all the lines
..                 inFile = open("uspoll.txt", r)
..                 lines = inFile.readline
..                 inFile.close()

..                 # loop through the lines
..                 for line in lines:

..                     # split at :
..                     values = line.split(" ")

..                     # get the min PM 2.5 pollution and the city
..                     num = str(values[2])
..                     city = values[0]

..                     # check if even
..                     if num % 2 == 0:

..                     # print the values
..                     print("Even min PM 2.5 ", num ," in ", city)



.. #.

..     .. tabbed:: ch18ex7t

..         .. tab:: Question

..            Fix the indention on the lines below so that it correctly prints the average PM 2.5 value.

            .. activecode:: csppythondata_exercises13
..                 :nocodelens:

..                 inFile = open("uspoll.txt","r")
..                 lines = inFile.readlines()
..                 inFile.close()

..                 total25 = 0
..                 count = 1.0
..                 for line in lines:
..                 values = line.split(":")
..                 new25 = float(values[2])
..                 total25 = total25 + new25
..                 count = count + 1

..                 print("Average PM 2.5 value is ",total25/count)



.. #.

..     .. tabbed:: ch18ex8t

..         .. tab:: Question

..             Write a procedure that takes in the file name as a parameter and prints out all the cities that start with a vowel (a,e,i,o, or u) and their associated pollution values.

             .. activecode:: csppythondata_exercises14
..                 :nocodelens:



.. #.

..     .. tabbed:: ch18ex9t

..         .. tab:: Question

..            Turn the following code into a procedure.  Pass the input file and the amount of PM 10 to the procedure. It will print the city name and the pollution values for all cities that have that much PM 10 pollution or more.

            .. activecode:: csppythondata_exercises15
..                 :nocodelens:

..                 inFile = open("uspoll.txt","r")
..                 line = inFile.readline()
..                 while line:
..                     values = line.split(":")
..                     pollution = float(values[1])
..                     if (pollution > 25):
..                         print('City: ', values[0])
..                         print("Pollution values:",values[1],values[2])
..                     line = inFile.readline()

..                 inFile.close()




.. #.

..     .. tabbed:: ch18ex10t

..         .. tab:: Question

..            Write a function that returns the average PM 2.5 of cities that start with "L".

            .. activecode:: csppythondata_exercises16
..                 :nocodelens:



.. #.

..     .. tabbed:: ch18ex11t

..         .. tab:: Question

..            Change the following code into a procedure that prints the city name and pollution values for all cities that have a PM 2.5 of less than some passed value.  Pass in the input file and the amount of pollution.

            .. activecode:: csppythondata_exercises17
..                 :nocodelens:

..                 inFile = open("uspoll.txt","r")
..                 line = inFile.readline()
..                 while line:
..                     values = line.split(":")
..                     pollution = float(values[2])
..                     if (pollution < 5):
..                         print('City: ', values[0])
..                         print("Pollution values:",values[1],values[2])
..                     line = inFile.readline()

..                 inFile.close()




.. #.

..     .. tabbed:: ch18ex12t

..         .. tab:: Question

..            Write a procedure that takes the name of a city and prints the pollution values for that city if it is found.

            .. activecode:: csppythondata_exercises18
..                 :nocodelens:



.. #.

..     .. tabbed:: ch18ex13t

..         .. tab:: Question

..             Complete the code at the ``#`` so that it prints out the date with the biggest loss from open to close.

             .. activecode:: csppythondata_exercises19
..                 :nocodelens:

..                 def biggestLoss(file):
..                     maxLoss = 0
..                     lines = file.readlines()
..                     for # in lines:
..                         values = line.split(#)
..                         open = float(values[#])
..                         close = float(values[4])
..                         dailyLoss = open # close
..                         if (dailyLoss # maxLoss):
..                             maxLoss = dailyLoss
..                             date = values[#]
..                     print(date + " loss " + str(maxLoss))

..                 file = open("stocks.txt", "r")
..                 biggestLoss(file)



.. #.

..     .. tabbed:: ch18ex14t

..         .. tab:: Question

..             Fix the errors below so that the procedure prints all the dates where the Dow Jones gained more than 300 points from open to close.

             .. activecode:: csppythondata_exercises20
..                 :nocodelens:

..                 def pointGain(file):
..                     lines = file.readlines()
..                     for lines in lines:
..                     values = line.split()
..                     open = str(values[2])
..                     close = float(values[4])
..                     if (close - open) < 300:
..                         print(values[0])
..                 file = open("stocks.txt", "r")
..                 pointGain(file)



.. #.

..     .. tabbed:: ch18ex15t

..         .. tab:: Question

..             The code currently prints the date that the Dow Jones had the biggest percent loss. Change 2 lines so that it prints the date with the biggest percent gain.

             .. activecode:: csppythondata_exercises21
..                 :nocodelens:

..                 file = open("stocks.txt", "r")
..                 lines = file.readlines()
..                 maxGain = 100000
..                 for line in lines:
..                     values = line.split(",")
..                     open = float(values[1])
..                     close = float(values[4])
..                     perChange = ((close - open) / open) * 100
..                     if perChange < maxGain:
..                         maxGain = perChange
..                         date = values[0]
..                 print(date)



.. #.

..     .. tabbed:: ch18ex16t

..         .. tab:: Question

..             The code below prints all the dates and high price for dates that occur on the first day of the month (i.e. January 1, February 1...). Change it so that it prints the date and low price for all the dates that occur in June.

             .. activecode:: csppythondata_exercises22
..                 :nocodelens:

..                 file = open("stocks.txt", "r")
..                 lines = file.readlines()
..                 for line in lines:
..                     values = line.split(",")
..                     date = values[0]
..                     if date[0] == "1":
..                         print(date + " had a high value of " + values[2])



.. #.

..     .. tabbed:: ch18ex17t

..         .. tab:: Question

..             Write a procedure that takes in the stocks file and a string of the last two digits from the years 1989 - 2001 (i.e. "89") and prints the difference between the highest and lowest points of that year.

             .. activecode:: csppythondata_exercises23
..                 :nocodelens:



.. #.

..     .. tabbed:: ch18ex18t

..         .. tab:: Question

..             Write a function that takes the stocks file and the abbreviation for a month (i.e. Jan, Feb) as parameters and returns the average value of all the closing prices during that month from all the years given (Hint: Use a counter variable).

             .. activecode:: csppythondata_exercises24
..                 :nocodelens:



.. #.

..     .. tabbed:: ch18ex19t

..         .. tab:: Question

..             Write a function that returns the difference between the average of all the gains or breakevens (0 change) and the absolute value of the average of all the losses from open to close.

            .. activecode:: csppythondata_exercises25
..                :nocodelens:



.. #.

..     .. tabbed:: ch18ex20t

..         .. tab:: Question

..             Write a procedure that takes the stock file as a parameter and prints the date, and high to low change price only for the date that had the highest high to low change out of the dates that fall on the first day of the month.

             .. activecode:: csppythondata_exercises26
..                 :nocodelens:


