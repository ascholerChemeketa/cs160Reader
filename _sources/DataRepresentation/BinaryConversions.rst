.. include:: ../global.rst

Binary Conversions
============================

    
This chapter details two methods we can use for conversion between Binary numbers and Decimal ones: **use of a table of powers of 2** and **repeated multiplication/division by 2**. Although the table method is the most straightforward method, the division/multiplication method is important to understand because it is easier to express as an algorithm that a computer can execute.

Table Method
---------------------------

.. pseudo_h4:: Binary to Decimal
    :class: underlined
    
To convert a binary value to a decimal one, start with a table of binary column values. The rightmost digits of the number should be in the "ones" column, each additional column to the left should be twice the value of the previous column. Write your number in the columns - its decimal value is the sum of each of the columns with a 1.

For example, I want to convert :math:`11010_{2}` to decimal - I will need at least five columns and they will be 1s, 2s, 4s, 8s, 16s. If I make those columns and write my number it looks like:

.. rst-class:: place-values

    =============   =============   =============   =============   =============     
    16s             8s              4s              2s                 1s 
    =============   =============   =============   =============   =============     
    1               1               0               1               0
    =============   =============   =============   =============   =============     

That tells me I need to add 16, 8 and 2. So :math:`{11010}_{2} = 16 + 8 + 2 = {26}_{10}`
  
.. pseudo_h4:: Decimal to Binary
    :class: underlined

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

Or written without a table: :math:`10011011_{2}`. 

Just like with decimal numbers, leading zeros do not modify the value of a number. So :math:`00000101_{2}` is the same as :math:`101_{2}`.


Multiplication/Division Method
------------------------------------

.. pseudo_h4:: Decimal to Binary
    :class: underlined

The following algorithm converts a decimal number to a binary one:

.. faux_code::

     Step 1: Start with a blank ``answer`` and the ``number`` your are converting
     Step 2: Divide your ``number`` by 2 to make a ``quotient`` and a ``remainder``
     Step 3: Place your ``remainder`` on the **left** side of your ``answer``
     Step 4: If your ``quotient`` is 0, you are done
     \         Otherwise, make the ``quotient`` your new ``number`` and go back to step 2

      
Here is an example of running the algorithm to convert 45 to binary:

.. faux_code::

    Step 1: ``number`` is 45 and ``answer`` is "" (empty)   
    Step 2: 45 / 2 gives ``quotient`` of 22 and ``remainder`` 1
    Step 3: Place ``remainder`` on left side of ``answer``. ``answer`` is now "1"
    Step 4: ``quotient`` is 22, we are not done; ``number`` is now 22
    Step 2: 22 / 2 gives ``quotient`` of 11 and ``remainder`` 0
    Step 3: Place ``remainder`` on left side of ``answer``. ``answer`` is now "01"
    Step 4: ``quotient`` is 11, we are not done; ``number`` is now 11
    Step 2: 11 / 2 gives ``quotient`` of 5 and ``remainder`` 1
    Step 3: ``answer`` is now "101"
    Step 4: ``quotient`` is 5, we are not done; ``number`` is now 5
    Step 2: 5 / 2 gives ``quotient`` of 2 and ``remainder`` 1
    Step 3: ``answer`` is now "1101"
    Step 4: ``quotient`` is 2, we are not done; ``number`` is now 2
    Step 2: 2 / 2 gives ``quotient`` of 1 and ``remainder`` 0
    Step 3: ``answer`` is now "01101"
    Step 4: ``quotient`` is 1, we are not done; ``number`` is now 1
    Step 2: 1 / 2 gives ``quotient`` of 0 and ``remainder`` 1
    Step 3: ``answer`` is now "101101"
    Step 4: ``quotient`` is 0, we are done


So 45 in binary is :math:`101101_{2}`.


.. pseudo_h4:: Binary to Decimal
    :class: underlined

To convert a binary number to its decimal value, we can use almost the same trick, but in reverse:

.. faux_code::

     Step 1: Start with the ``number`` your are converting and the ``answer`` of 0
     Step 2: Multiply your ``answer`` by 2
     Step 3: Remove the rightmost digit of ``number`` and add it to your ``answer``
     Step 4: If ``number`` has no more digits, you are done
     \         Otherwise, go back to step 2

     
     

.. codelens:: codelens_question

    tot = 0
    prod = 1
    for i in range(10):
       tot = tot + i
       prod = prod * i
       
       

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

.. rst-class:: placevalues

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
