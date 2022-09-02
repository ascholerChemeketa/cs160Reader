..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../csp_global.rst


The Accumulator Pattern
=====================================

We have seen the two program below before. They do very different jobs - one turns a decimal number into
a binary one, the other lets the user enter numbers and then prints out their average. However,
there is a common pattern in these programs - the **Accumulator Pattern**. The accumulator
pattern is a common recipe for using a loop to combine a number of values and build up an answer.

In the first program, we *accumulate* the different values that ``value`` holds into
the variable ``sum``:

.. code::
    
    sum = 0
    count = 0
    message = "Enter an integer. Enter 0 or less to stop."
    value = input(message)
    while int(value) > 0:
        sum = sum + int(value)
        count = count + 1
        value = input(message)

    print("The sum is: " + str(sum) + " the average is: " + str(sum / count))

In the second program, we *accumulate* the different values that ``remainder`` holds into
the variable ``binary``:

.. code::

    number = 11
    binary = ""

    while number != 0:
        remainder = number % 2      
        binary = str(remainder) + binary
        number = number // 2

    print(binary)


Here are the five steps in this pattern:
  
#. Set the **accumulator variable** to its initial value. This is the value we want if there 
   is no data to be processed. For the first loop, the ``sum`` is set to 0. For the second
   loop, ``binary`` is set to the empty string ``""``. This happens before the loop.

#. Use a loop to iterate through all the data. There should be a variable that on each value 
   in the data we are trying to accumulate.

#. Combine each *piece* of the data into the accumulator. The first program uses ``+`` to add each
   value to the number ``sum``. The second program uses ``+`` to build up the string ``binary``.

#. Once the loop is done, do something with the result.

What is the sum of all the numbers between 1 and 100?  We can answer that easily using our pattern.

.. activecode:: Numbers_Sum

    # STEP 1: INITIALIZE ACCUMULATOR 
    sum = 0  # Start out with nothing
    # STEP 2: LOOP THROUGH THE DATA
    for number in range(1,101):
        # STEP 3: ACCUMULATE 
        sum = sum + number

    # STEP 4: PROCESS RESULT
    print(sum)

Step 3 does not have to use ``+`` to build up our answer. We could use ``*`` in the accumulator
pattern to build up the value of :math:`7!`. (:math:`7!` means the value you get by calculating
:math:`7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1`)

.. activecode:: Factorial_Accumulator

    # STEP 1: INITIALIZE ACCUMULATOR 
    product = 1  # 0! is defined as 1... that is our starting point
    # STEP 2: LOOP THROUGH THE DATA
    for number in range(7, 0, -1):
        # STEP 3: ACCUMULATE 
        product = product * number

    # STEP 4: PROCESS RESULT
    print(product)

One ingredient that is critical is that we do step 1 before the loop starts. If we try to
initialize the accumulator in the loop we will just keep resetting it. Watch this failed
attempt to add up the numbers from 1 to 5 run line by line to see why:

.. codelens:: BadAcccumulator

    # STEP 2: LOOP THROUGH THE DATA
    for number in range(6):
        # STEP 1: INITIALIZE ACCUMULATOR???
        sum = 0
        # STEP 3: ACCUMULATE 
        sum = sum + number

    # STEP 4: PROCESS RESULT
    print(sum)



.. parsonsprob:: 10_5_3_Sum_100
    :numbered: left
    :adaptive:

    The following is the correct code for printing the sum of all the odd numbers from 1 to 29
    using the accumulator pattern, but it is mixed up. Drag the blocks from the left and put
    them in the correct order and indentation on the right.
    -----
    sum = 0  
    =====
    numbers = range(1, 30, 2)
    =====
    for number in numbers:
    =====
        sum = sum + number
    =====
    print(sum)