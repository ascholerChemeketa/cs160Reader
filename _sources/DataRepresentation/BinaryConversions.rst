.. include:: ../global.rst


.. index:: 
    pair: conversion; binary

Binary Conversions - Table Method
===================================
 
Almost always, there is more than one possible algorithm to solve a problem; converting numbers from Binary to Decimal and back is no exception. We are going to look at two different approaches: **use of a table of powers of 2** and **repeated multiplication/division by 2**. Although the table method shown on this page is the most straightforward method, the division/multiplication method shown on the next page is important to understand because it is easier to express as an algorithm that a computer can execute.

Binary to Decimal
---------------------

To convert a binary value to a decimal one, start with a table of binary column values. The rightmost digits of the number should be in the "ones" column, each additional column to the left should be twice the value of the previous column. Write your number in the columns - its decimal value is the sum of each of the columns with a 1.

For example, I want to convert :math:`{11010}_{2}` to decimal - I will need at least five columns and they will be 1s, 2s, 4s, 8s, 16s. If I make those columns and write my number it looks like:

.. rst-class:: place-values

    =============   =============   =============   =============   =============     
    16s             8s              4s              2s                 1s 
    =============   =============   =============   =============   =============     
    1               1               0               1               0
    =============   =============   =============   =============   =============     

That tells me I need to add 16, 8 and 2. So :math:`{11010}_{2} = 16 + 8 + 2 = {26}_{10}`
  
Decimal to Binary
---------------------

The first way to convert a decimal number to a binary one is with a table like the on below (if needed you can add more columns - each new column to the left should be twice the value of the preceding one). Then, working from left to right, decide if you need that columns value to make your number. The value for any column you use should be subtracted from the value you are trying to make.

.. rst-class:: place-values

    =============   =============   =============   =============   =============   =============   =============   =============     
    128s            64s             32s             16s             8s              4s              2s                 1s 
    =============   =============   =============   =============   =============   =============   =============   =============    
    |
    =============   =============   =============   =============   =============   =============   =============   =============   
    
For example, I want to write 155 as a binary number: ::

    Do I need 128? Yes, that is less than 155. 
        155 - 128 = 27: that is what we have left to make
    Do I need 64? No - I only have 27 left
    Do I need 32? No - I only have 27 left
    Do I need 16? Yes, that is less than 27. 
        27 - 16 = 11: that is now what we have left
    Do I need 8? Yes, that is less than 11. 
        11 - 8 = 3
    Do I need 4? No - I only have 3 left
    Do I need 2? Yes. 
        3 - 2 = 1
    Do I need 1? Yes. 
        1 - 1 = 0
    
If we think of each column we used as representing a 1 and each column we didn't as a 0, we get this:

.. rst-class:: place-values

    =============   =============   =============   =============   =============   =============   =============   =============     
    128s            64s             32s             16s             8s              4s              2s                 1s 
    =============   =============   =============   =============   =============   =============   =============   =============    
    1               0               0               1               1               0               1               1
    =============   =============   =============   =============   =============   =============   =============   =============   

Or written without a table: :math:`{10011011}_{2}`. 

Just like with decimal numbers, leading zeros do not modify the value of a number. So :math:`{00000101}_{2}` is the same as :math:`{101}_{2}`.



.. pseudo_h4:: Self Check 
    :class: underlined
 
 
.. fillintheblank:: binaryconversions_1
   :correct: \\b60\\b
   :feedback1: ('[^\\d]+', 'Your answer should be a number')
   :feedback2: ('\\b.{1}\\b', 'That is not enough digits')
   :feedback3: ('\\b.{3,}\\b', 'That is too many digits')
   :feedback4: ('\\d{4}', 'Hint: With 6 binary digits the largest column you should use is 32')
   :blankid: binaryconversions_1_ans1

   What decimal value does the binary number 111100 represent? :textfield:`binaryconversions_1_ans1::mini`

   
.. mchoicemf:: binaryconversions_2 
    :answer_a: 7
    :answer_b: 8
    :answer_c: 32
    :answer_d: 128
    :correct: a
    :feedback_a:  
    :feedback_b: The 8th column would be 128... we don't need that
    :feedback_c: 32 bits can represent over 4 billion
    :feedback_d: 
    
    How many columns do you need to represent 125?
