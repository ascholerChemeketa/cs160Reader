.. include:: ../global.rst

.. index:: 
    pair: conversion; binary

Binary Conversions - Multiplication/Division Method
======================================================

The biggest issue with the "table method" shown on the previous page is that it is hard to translate into an algorithm that a machine could run. The multiplication/division methods shown on this page are much easier to express in simple terms as they rely on mathematics more than things like "look at the table for _______". 

Decimal to Binary
--------------------------------

The following algorithm converts a decimal number to a binary one:

.. faux_code::

     Step 1: Start with a blank ``answer`` and the ``number`` your are converting
     Step 2: Divide your ``number`` by 2 to make a ``quotient`` and a ``remainder``
     Step 3: Place your ``remainder`` on the **left** side of your ``answer``
     Step 4: If your ``quotient`` is 0, you are done
     \         Otherwise, make the ``quotient`` your new ``number`` and go back to step 2

      
Here is an example of running the algorithm to convert :math:`{11}_{10}` to binary:

.. figure:: Images/decimaltobinary.swf
   :alt: Decimal to Binary Animation
   :figwidth: 100%
   :width: 550
   :height: 350

   `Animation used by permission of Virgnia Tech <http://courses.cs.vt.edu/csonline/>`_
   
..  Static example commented out...
    .. faux_code::

        Step 1: ``number`` is 11 and ``answer`` is "" (empty)   
        Step 2: 11 / 2 gives ``quotient`` of 5 and ``remainder`` 1
        Step 3: Place ``remainder`` on left side of ``answer``. ``answer`` is now "1"
        Step 4: ``quotient`` is 5, we are not done; ``number`` is now 5
        Step 2: 5 / 2 gives ``quotient`` of 2 and ``remainder`` 1
        Step 3: Place ``remainder`` on left side of ``answer``. ``answer`` is now "11"
        Step 4: ``quotient`` is 2, we are not done; ``number`` is now 2
        Step 2: 2 / 2 gives ``quotient`` of 1 and ``remainder`` 0
        Step 3: ``answer`` is now "011"
        Step 4: ``quotient`` is 1, we are not done; ``number`` is now 1
        Step 2: 1 / 2 gives ``quotient`` of 0 and ``remainder`` 1
        Step 3: ``answer`` is now "1011"
        Step 4: ``quotient`` is 0, we are done

So the decimal number 11 in binary is :math:`{1011}_{2}`.


Binary to Decimal
--------------------------------

To convert a binary number to its decimal value, we can use almost the same trick, but in reverse:

.. faux_code::

     Step 1: Start with the ``number`` your are converting and the ``answer`` of 0
     Step 2: Multiply your ``answer`` by 2
     Step 3: Remove the leftmost digit of ``number`` and add it to your ``answer``
     Step 4: If ``number`` has no more digits, you are done
     \         Otherwise, go back to step 2

If we follow this algorithm to convert :math:`{1101}_{2}` into to a decimal value, it would look like:  

.. faux_code::

    Step 1: ``number`` is 1101 and ``answer`` is 0  
    Step 2: ``answer`` is multiplied by 2 - it becomes 0
    Step 3: Remove leftmost digit of ``number`` and add to ``answer``
    \          ``number`` is now 101 and ``answer`` is 1 
    Step 4: ``number`` still has digits, go back to step 2
    Step 2: ``answer`` is multiplied by 2 - it becomes 2
    Step 3: Remove leftmost digit of ``number`` and add to ``answer``
    \          ``number`` is now 01 and ``answer`` is 3 
    Step 4: ``number`` still has digits, go back to step 2
    Step 2: ``answer`` is multiplied by 2 - it becomes 6 
    Step 3: Remove leftmost digit of ``number`` and add to ``answer``
    \          ``number`` is now 1 and ``answer`` is 6 
    Step 4: ``number`` still has digits, go back to step 2
    Step 2: ``answer`` is multiplied by 2 - it becomes 12
    Step 3: Remove leftmost digit of ``number`` and add to ``answer``
    \          ``number`` is now "" (empty) and ``answer`` is 13 
    Step 4: ``number`` is empty. We are done, the answer is 13.
    
As mentioned earlier, the advantage of this algorithm is that it very easily converts into relatively simple computer code. To demonstrate that, the algorithm is implemented in Python in the *codelens* below. You DO NOT need to worry about exactly how the Python language works. You will notice that turning the English algorithm above into code requires some changes, but the code shown follows the same process described above. See the "tips" box below the code lens for helping running the program.
    
.. codelens:: Binary_Conversion
    :caption: Convert "1101" to decimal
    
    number = "1101"           
    answer = 0
    while len(number) > 0:                  #do next 3 lines until length of number is 0              
        answer = answer * 2                 #multiply answer by 2                     
        answer = answer + int(number[0])    #add leftmost digit to answer    
        number = number[1:]                 #remove leftmost digit                   
 
 
.. tip:: 

    **How to use the "codelens"**

    * You can click the "forward" button to watch the code run line by line. 
    * The blue area that appears below the buttons will show you the current values of ``number`` and ``answer``.
    * Use can use the large scroll bar to scroll the code to the right - at the end of each line of code is an explanation of what that line "says"
          


.. pseudo_h4:: Self Check 
    :class: underlined
 
 
.. mchoicemf:: binaryconversions2_1 
    :answer_a: 5
    :answer_b: 4
    :answer_c: 6
    :answer_d: 49
    :correct: c
    :feedback_a: You are dividing by 2 until you reach 0. 5 divisions won't get you there
    :feedback_b: You are dividing by 2 until you reach 0. 4 divisions won't get you there
    :feedback_c: 
    :feedback_d: You are dividing by 2 until you reach 0. don't need that many divisions
    
    If you use the division method to convert 49 to binary, how many times do you have to do step 2? 
