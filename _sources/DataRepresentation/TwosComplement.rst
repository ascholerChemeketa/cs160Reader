.. include:: ../global.rst

.. index:: number systems, binary numbers, two's complement

.. _twos-complement:

Negative Values - Two's Complement
=======================================

To represent negative numbers, we must use the same tool we do for everything else: 0s and 1s. The most simple possible scheme would be to use one bit to represent the sign - say 0 for positive and 1 for negative. If we did that, then the number 0100 and 1010 would mean +4 (0 = positive, 100 = 4) and -2 (1 = negative, 010 = 2). But if we tried to add those numbers using the normal process. we would get 0100 + 1010 = 1110. That says +4 + -2 = -6 (1 = negative, 110 = 6)! The normal addition rules do not work with this simple scheme.

Rather than design new rules for doing math, early computer designers figured out a slightly different way to represent signed numbers called **two's complement notation**. In this scheme, the first bit indicates sign - 0 for positive and 1 for negative. Positive numbers are treated as normal. So 0100 still means 4. A number that starts with 1 is negative. Its value is defined by the following rule: take the other bits and flip them (0s become 1s and 1s become 0s) then add one to the value they represent. Thus 1011 would be interpreted as negative because of the leading 1, then we would take the other bits 011 and flip each one to get 100, 100 is 4, we add one to that to get 5, so 1011 means -5.

.. topic:: Two's Complement Interpretation
    
    * A leading 0 means positive - read the number normally.

    * A leading 1 means negative - flip the remaining bits, read their value and one to the value. Make that value negative.
    

Try reading these values:

.. tabbed:: exercise1

    .. tab:: Practice 1

        What decimal number does the two's complement number 0010 represent?

    .. tab:: Answer

        +2. A leading 0 means everything is normal.


.. tabbed:: exercise2

    .. tab:: Practice 2 

        What decimal number does the two's complement number 1010 represent?

    .. tab:: Answer

        -6. Leading 1 says "negative" and requires us to flip last three bits to 101. That means 5. Add one to get 6.
        
        
.. tabbed:: exercise3

    .. tab:: Practice 3 

        What decimal number does the two's complement number 1110 represent?

    .. tab:: Answer

        -2. Leading 1 says "negative" and requires us to flip last three bits to 001. That means 1. Add one to get 2. 

        
We can use this same idea with more than 4 bits. We always just use the first bit as the sign and the rest of the bits as the value and use the same rules for negative numbers. Thus the 8-bit two's complement number 11011000 would mean: first bit is 1, so negative, flip the last seven bits to 0100111, that is 39 (32 + 4 + 2 + 1), add one to get 40, so the value is -40.


        
.. pseudo_h3:: Advantages of Two's Complement
    :class: underlined

The main advantage of two's complement is that the normal rules for addition work with it as long as we ignore extra bits. Say we have:


.. faux_code::

    \  0110 
    \ +1110

That means 6 + (-2). If we add them using the normal rules we would get:


.. faux_code:: 

    \ :red:`111`     (Carries)
    \  0110   (6)
    \ :underlined:`+1110`   (-2)
    \ 10100

Since we started with 4 bits, we should only keep the last four bits of the answer: 0100 or 4. That means 6 + (-2) = 4.

It also works for two negative numbers. Here is -2 + (-2):

.. faux_code::

    \ :red:`111`     (Carries)
    \  1110   (-2)
    \ :underlined:`+1110`   (-2)
    \ 11100
 
Take only the last 4 bits and we get 1100. The leading 1 means negative. So flip the last three bits from 100 to 011. That means 3. Add one and get 4. So -2 + (-2) = -4.

It is also easy to find the inverse of a number. To turn a negative into a positive or vice verse, invert all the bits and add one. If there is a carry past the last digit, ignore it.

.. topic:: Two's Complement Conversion
    
    To change the sign of a number, flip all the bits and add one. Ignore any carry past last original digit.

For example, here is converting 5 to -5:

.. faux_code::

    \  0101   (+5)
    \  1010   (flip bits)
    \ |space|
    \  1010   (now add one)
    \ :underlined:`+   1` 
    \  1011   (-5)
 
And from -5 back to 5:

.. faux_code::

    \  1011   (-5)
    \  0100   (flip bits)
    \ |space|
    \  0100   (now add one)   
    \ :underlined:`+   1` 
    \  0101   (+5)


.. index:: overflow
    
.. pseudo_h3:: Overflow
    :class: underlined

.. sidebar:: Real world overflow

    You can see this "feature" of binary representation `at work in the game Hearthstone. <http://www.codeproject.com/Articles/802368/Integer-Overflow-in-Hearthstone>`_. 
    
    Google `"game overflow integer" <https://www.google.com/#q=game+overflow+integer>`_ for more fun examples.
    
Remember that **overflow** is when a value becomes too large to store in the bits we have. With two's complement, an overflow with a large positive value can produce a negative answer. For example, say I am working with 4-bit two's complement numbers. The largest positive number we can write in two's complement with four bits is 0111 or 7. Now say I add 5 + 5 (0101 + 0101):

.. faux_code::

    \  :red:`1 1`   (Carries)
    \  0101   (5)
    \ :underlined:`+0101`   (5)
    \  1010   (-6 in two's complement)

As an unsigned number, 1010 would mean ten. But in two's complement that means -6! The same thing can happen with negative numbers - if a negative number becomes too small it can wrap around to positive numbers! Normally integers are stored as 32-bit values. This gives a range of approximately +2.147 billion to -2.147 billion. But if your math problem involves an answer that is too big you can "wrap around". Below I have added code to make your web browser try to display the answer to some math problems that will suffer from overflow errors:
    
.. raw:: html 

    <p>2,000,000,000 * 2 = <script>document.writeln((2000000000 * 2) | 0);</script></p>
    <p>-2,000,000,000 + -500,000,000 = <script>document.writeln((-2000000000 + -500000000) | 0);</script></p>


    
.. pseudo_h4:: Self Check 
    :class: underlined
 
.. mchoicemf:: twoscomplement_1 
    :answer_a: 00011
    :answer_b: 10011
    :answer_c: 11100
    :answer_d: 11101
    :correct: d
    :feedback_a: A leading 0 makes it positive. That is +3
    :feedback_b: That is -13. For negative numbers remember you have to flip the bits and add one
    :feedback_c: Remember you need to add one after flipping the bits in a negative number.
    :feedback_d:  
    
    Which of these represents -3 as a five bit two's complement number?
 
.. mchoicemf:: twoscomplement_2 
    :answer_a: 5
    :answer_b: 7
    :answer_c: 15
    :answer_d: 31
    :correct: c
    :feedback_a: The first digit is the sign, what is the largest value you can make with the other 4?
    :feedback_b: The first digit is the sign, what is the largest value you can make with the other 4?
    :feedback_c: 01111 = 15.
    :feedback_d: Remember that the first digit is the sign. It must b 0.
    
    Given a 5 bit two's complement number, what is the largest positive value you can represent?
    
    
.. fillintheblank:: twoscomplement_3
   :correct: \\b6\\b
   :feedback1: ('\\b0110\\b', 'That is the correct binary value. What is the decimal value?')
   :feedback2: ('\\b10110\\b', 'You must chop off the first digit to get down to 4 bits and then figure out the decimal value.')
   :feedback3: ('.*', 'Hint: The largest possible positive number you can represent with 4 bit twos complement is 7.')
   :blankid: twoscomplement_3_ans1

   If you add the 4-bit two's complement number 1011 (-5) to itself, the result should be -10. But you can not write -10 as a 4-bit two's complement number - there will be overflow that turns your negative value back into a positive one. Do the math to add 1011 + 1011 (don't forget to only keep the last four digits of the answer) and then give the decimal value your answer represents.  
   
   :textfield:`twoscomplement_3_ans1::mini`

   
