.. include:: ../global.rst


Other Gates
============================

We can combine two inputs to produce an output using many rules other than **AND** or **OR**. We won't worry about what the switches would look like for the new rules below... we would have to make our simplified model of an electric circuit more complex to see how they work. Instead, we will do what computer scientists normally do - abstract away from the actual electronics and focus on the logical rules they describe.

.. index::
    pair: Logic Gate; XOR
    
.. pseudo_h3:: XOR Gates
    :class: underlined

The exclusive or gate, known as **XOR** (or sometimes **EOR**) describes a gate that only outputs a 1 only if one input is on and the other off. It is the rule we can use to determine if the result of a multiplication is positive or negative. If we think of the inputs as "is the first number negative?" and "is the second number negative?" and the output as "the result is negative", we can see that the truth table below gives us the correct answer for each of the four possible situations. The only way to get a negative product is to have exactly one negative input (01 or 10), if both inputs are negative (11), the result is positive:

.. rst-class:: truth-table

    .. table:: Truth table for XOR

        =============   =============   =============     
        Input 1         Input 2         Output 
        =============   =============   =============  
        0               0               0
        0               1               1
        1               0               1
        1               1               0
        =============   =============   ============= 
    
Watch out for **XOR** and **OR** - in English we often use the word "or" to mean both things. The statement "Entrées come with fries *or* a salad" probably means you can get one or the other, but not both. In that statement, *or* means the **XOR** rule. On the other hand, imagine a class syllabus that states: "If you turn in copied work, *or* the wrong assignment, you will get a 0". You would certainly get a 0 if you turned in a plagiarized copy of the wrong assignment (both parts true). In this case, *or* means logical **OR** - if either part is true, the answer is true.

.. index::
    pair: Logic Gate; NOT
    
.. pseudo_h3:: NOT Gates
    :class: underlined

The **NOT** gate is special in that it only has one input. The output is always the opposite of the input: 

.. rst-class:: truth-table

    .. table:: Truth table for NOT

        =============   =============     
        Input 1         Output      
        =============   =============  
        0               1
        1               0
        =============   ============= 

It is the kind of logic we need if we know the answer to "is a certain number greater than 0?" but want to answer the question 
"is the number less than or equal to 0?". The answer to the second question is always the opposite of the first question. 

For example, if the number in question is -3, the answer to the first question is NO (0) and the answer to the second is YES (1). Even if I do not tell you the number in question, but I do tell you the answer to "is the number greater than 0?" is YES (1), you could determine that the answer to "is it less than or equal to 0" by applying the **NOT** rule.

Because the NOT rule applies to only one input, it can be applied to a single bit pattern like 0101. To figure out the answer, simply "flip" every bit from 1 to 0 or vice verse:

.. rst-class:: result-table

    .. table:: NOT of 0101
    
        =============	=============   =============   =============	=============
        Input pattern   1               0               1				0
        NOT             0               1               0				1
        =============   =============   ============= 	=============	=============

   
.. pseudo_h4:: Self Check 
    :class: underlined
 
.. fillintheblank:: not_1

    .. blank:: not_1_ans1
        :correct: \\b0001\\b
        :feedback1: ('[^01]+', 'Your answer should be just 1s and 0s',)
        :feedback2: ('\\b.{1,3}\\b', 'That is not enough digits')
        :feedback3: ('\\b.{5,}\\b', 'That is too many digits')
        :feedback4: ('.*', 'Hint: flip each bit in the input pattern to its opposite.')

        What is the result of applying **NOT** to: |br| 
        1110? |br| 
            

    
.. fillintheblank:: xor_1

    .. blank:: xor_1_ans1
        :correct: \\b0110\\b
        :feedback1: ('[^01]+', 'Your answer should be just 1s and 0s',)
        :feedback2: ('\\b.{1,3}\\b', 'That is not enough digits')
        :feedback3: ('\\b.{5,}\\b', 'That is too many digits')
        :feedback4: ('.*', 'Hint: apply XOR to each column of bits. XOR reports 1 if one (and only one) of the bits is 1.')

        What is the result of applying **XOR** to: |br| 
        0101 |br| 
        0011? |br| 