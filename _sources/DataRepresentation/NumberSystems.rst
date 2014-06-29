.. include:: ../global.rst

.. index:: number systems, binary numbers
 
Number Systems & Binary
============================

You have been using the decimal number system for so long that you probably no longer often stop to think about what the individual digits mean. You see 134 and recognize it as "one hundred thirty-four". 134 has that value because each digit in the number represents a multiple of some power of 10:

.. rst-class:: place-values

    ==============  ==============  ==============     
    100s            10s             1s 
    :math:`{10}^2`  :math:`{10}^1`  :math:`{10}^0`
    ==============  ==============  ==============  
    1               3               4 
    ==============  ==============  ============== 

Or **1** * 100 + **3** * 10 + **4** * 1 = 134

The **binary number** system is the same idea - each digit has a value based on the column it is in. The two differences are:

* Each digit can only be a 1 or a 0
* Each column represents a power of 2 instead of a power of 10

.. rst-class:: place-values

    =============   =============   =============     
    Fours           Twos            Ones 
    :math:`2^2`     :math:`2^1`     :math:`2^0`
    =============   =============   =============  
    1               0               1
    =============   =============   ============= 

**101** in binary means **1** * 4 + **0** * 2 + **1** * 1 = 5

Notice that since each digit can only be a 1 or a 0, we don't actually need to multiply. A 1 indicates we have the value for that column and a 0 indicates we don't. So **101** in binary simply means 4 + 1 = 5 because the first 1 is in the "fours" column and the second 1 is in the "ones" column.

Because things can get confusing when we are talking about different bases (does "101" mean the binary number that represents 5 or the decimal number 101?), we often use a subscript to indicate the base of the number being represented. Thus :math:`101_{10}` indicates the decimal number 101 and :math:`101_{2}` indicates a binary number with the value 5.

If you think about it for a minute, you can probably see that the largest value that we can represent with 3 binary digits is 7. With three decimal digits we can express values up to 999. Binary numbers take more digits to express large numbers. With 8 bits, we can express values up to 255; to decode them, we need to add more column to our table - each new column will be twice the value of the last column. Here is what :math:`10110011_{2}` represents:


.. rst-class:: place-values

    =============   =============   =============   =============   =============   =============   =============   =============     
    128s            64s             32s             16s             Eights          Fours           Twos            Ones 
    :math:`2^7`     :math:`2^6`     :math:`2^5`     :math:`2^4`     :math:`2^3`     :math:`2^2`     :math:`2^1`     :math:`2^0`
    =============   =============   =============   =============   =============   =============   =============   =============    
    1               0               1               1               0               0               1               1
    =============   =============   =============   =============   =============   =============   =============   =============    

:math:`10110011_{2}` means 128 + 32 + 16 + 2 + 1 or 179

Confused by how number systems determine the value of the digits in a number? Check out this video for a more detailed explanation:

.. youtube:: ry1hpm1GXVI
    :height: 315
    :width: 560

    
.. pseudo_h4:: Self Check 
    :class: underlined
 
 
.. fillintheblank:: numbersystems_1
   :correct: \\b10\\b
   :feedback1: ('[^\\d]+', 'Your answer should be a number')
   :feedback2: ('\\b.{1}\\b', 'That is not enough digits')
   :feedback3: ('\\b.{3,}\\b', 'That is too many digits')
   :feedback4: ('\\d{4}', 'Hint: With 4 binary digits what columns will you be using?')
   :blankid: numbersystems_1_ans1

   What decimal value does the binary number 1010 represent? :textfield:`numbersystems_1_ans1::mini`

   
.. mchoicemf:: numbersystems_2 
    :answer_a: 1
    :answer_b: 5
    :answer_c: 6
    :answer_d: 7
    :answer_e: 8
    :correct: c
    :feedback_a: That only gets you 0 or 1!!!
    :feedback_b: With 5 bits you can make up to 11111 base 2 or 31
    :feedback_c: 101101 base 2 = 45
    :feedback_d: The 7th column would represent 2 to the 6th power or 64... we don't need that
    :feedback_e: With 8 bits we can represent up to 255
    
    What is the minimum number of bits required to represent the number 45?
