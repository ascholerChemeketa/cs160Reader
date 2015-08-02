.. include:: ../global.rst

.. index:: fractional values
 
Fractional Values
=======================================

We have learned to interpret binary numbers using place values based on powers of two. The value 1011 means 8 + 2 + 1 or 11 as we can see in this table:

.. rst-class:: place-values

    =============   =============   =============   =============     
    Eights          Fours           Twos            Ones 
    :math:`2^3`     :math:`2^2`     :math:`2^1`     :math:`2^0`
    =============   =============   =============   =============  
    1               0               1               1
    =============   =============   =============   ============= 

Normally we think of this table as starting from the ones and extending to the left, with each new column representing one larger power of two than the preceding column - making each column twice as large as the column to its right. If we want to move from left to right, we must divide the current column's value by 2 to calculate the next column. If we do this to the Ones column, we would get :math:`1/2` (:math:`2^{-1}`), then :math:`1/4` (:math:`2^{-2}`), then :math:`1/8` (:math:`2^{-3}`), etc...

.. rst-class:: place-values

    ==============  ==============  ==============  ==============  ==============  ==============  ==============   
    1s              1/2s            1/4s            1/8s            1/16s           1/32s           ...
    :math:`2^0`     :math:`2^{-1}`  :math:`2^{-2}`  :math:`2{^-3}`  :math:`2^{-4}`  :math:`2^{-5}`  ...
    ==============  ==============  ==============  ==============  ==============  ==============  ==============   
    |               
    ==============  ==============  ==============  ==============  ==============  ==============  ==============   

These are the binary columns smaller than 1 that we have to work with: :math:`1/2`, :math:`1/4`, :math:`1/8`,... Any fractional value we want to represent, we must build using these fractions. Much like the decimal number :math:`{0.34}_{10}` means 3 tenths and 4 one-hundredths, the binary number :math:`{0.11}_2` means :math:`1/2 + 1/4 = {0.75}_10`

Say I want to represent the value 0.3125 as a binary number. I can use the "table" method to convert the fractional value just like I would whole numbers.  I don't need a 0.5 so the 1/2s is a 0, but I can use a 0.25 so the 1/4s gets a 1. That leaves 0.0625 I need to make. I don't need an 1/8, but I do need a 1/16 so that column gets a 1. That is exactly the 0.0625 I had left, so now I am done. If I wanted, I could add extra 0's to the end of the answer, they will not change the value being represented. Below is the table that shows that :math:`{0.0101}_2 = {0.3125}_{10}`

.. rst-class:: place-values

    ==============  ==============  ==============  ==============  ==============  ==============  ==============   
    1s              1/2s            1/4s            1/8s            1/16s           1/32s           ...
    :math:`2^0`     :math:`2^{-1}`  :math:`2^{-2}`  :math:`2{^-3}`  :math:`2^{-4}`  :math:`2^{-5}`  ...
    ==============  ==============  ==============  ==============  ==============  ==============  ==============   
    0               0               1               0               1               0               0               
    ==============  ==============  ==============  ==============  ==============  ==============  ==============   

.. pseudo_h2:: Limits of Fractional Representation

Say I ask you to make 0.6 using just 4 places to the right of the binary point (In base 10 we call . the **decimal point**. In base 2 it is the **binary point**. The generic term for it is **radix point**.) Try using this table and a calculator or some scratch paper and see what you come up with for a value for 0.6:

.. rst-class:: place-values

    ==============  ==============  ==============  ==============  ==============  
    1s              1/2s            1/4s            1/8s            1/16s          
    :math:`2^0`     :math:`2^{-1}`  :math:`2^{-2}`  :math:`2{^-3}`  :math:`2^{-4}` 
    ==============  ==============  ==============  ==============  ============== 
    |                  
    ==============  ==============  ==============  ==============  ============== 

There is no way to exactly represent the answer, you can just come close. (The closest you can come is 0.625). This is not a problem unique to binary, this is just a fact of trying to represent a value using a limited number of digits. Say I ask you to represent 2/3 as a decimal with only 2 decimal places... you could use 0.66, or 0.67, but could not accurately represent the simple value 2/3. The only difference with the 0.6 example is that some values that are easy to represent in decimal, like 6/10\ :superscript:`ths` are harder to represent in binary. 


.. important:: 

    Often times when computers represent decimal fractions as binary numbers, the value stored is only an approximation of the true value. On the line below I have inserted code to have your web browser calculate the answer to 3 + .01 + .01:
    
    .. raw:: html 
    
        <p><script>document.writeln(3 + 0.01 + 0.01);</script></p>
    
    Notice any issues?
    
    Computers can be programmed to store numbers as decimal values (encoding each decimal digit as 4 binary ones), but that is much less efficient and is not necessarily more accurate (as the decimal system still has that it has trouble representing - like 1/3). But, if you are writing say financial software that needs to get exactly $3.02 when it adds two pennies to $3, you probably would be willing to use the less efficient representation!
    
    
.. pseudo_h4:: Self Check 
    :class: underlined
 
.. fillintheblank:: fractions_1

    .. blank:: fractions_1_ans1 
        :correct: ^0?\\.875\\b
        :feedback1: ('[^0-9\\.]+', 'Your answer should be a number')
        :feedback2: ('\\b1.*\\b', 'Your answer should start with 0.')
        :feedback3: ('.*', 'Use the blank table above. The 0 goes in the ones column.')

        What decimal value does the binary number 0.111 represent? 

   
.. mchoice:: fractions_2 
    :answer_a: 0.00011
    :answer_b: 0.01010
    :answer_c: 0.00111
    :answer_d: 0.01101
    :answer_e: 0.11001
    :correct: d
    :feedback_a: That is 0.09375
    :feedback_b: That is 0.3125
    :feedback_c: That is 0.21875
    :feedback_d: 
    :feedback_e: That is 0.78125
    
    What of the following is the binary representation of the decimal value 0.40625
