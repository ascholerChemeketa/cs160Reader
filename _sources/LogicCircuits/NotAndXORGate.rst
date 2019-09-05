.. include:: ../global.rst


XOR and NOT Gates
============================

We can combine two inputs to produce an output using many rules other than **AND** or **OR**. We won't worry about what the switches would look like for the new rules below... we would have to make our simplified model of an electric circuit more complex to see how they work. Instead, we will do what computer scientists normally do - abstract away from the actual electronics and focus on the logical rules they describe.

.. index::
    pair: Logic Gate; XOR

.. pseudo_h3:: XOR Gates
    :class: underlined

The exclusive or gate, known as **XOR** describes a gate that only outputs a 1 only if one of the inputs is 1 and the other is 0. In other words, we can have either input on, but not both on.

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

It is the logical rule we need if we want to decide the sign of a multiplication problem. If input 1 represents "the first number negative" and input 2 represents "the second number is negative", then **XOR**'s output would tell us "is the answer negative". If either one of the two numbers, but not both of them, were negative, then the answer will be negative.

Watch out for **XOR** and **OR** - in English we often use the word "or" to mean both things. The statement "Entrées come with fries *or* a salad" probably means you can get one or the other, but not both. In that statement, *or* means the **XOR** rule. On the other hand, imagine a class syllabus that states: "If you turn in copied work, *or* the wrong assignment, you will get a 0". You would certainly get a 0 if you turned in a plagiarized copy of the wrong assignment (both parts true). In this case, *or* means logical **OR** - if either part is true, the answer is true.

|br|

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

The NOT operation is what we use if we have a truth value like "it is raining" but want to have the value for "it is not raining". Anytime we want to say "we do not have X" we can say "NOT X".

Because the NOT rule applies to only one input, it can be applied to a single bit pattern like 0101. To figure out the answer, simply "flip" every bit from 1 to 0 or vice verse:

.. rst-class:: result-table

    .. table:: NOT of 0101

        =============	=============   =============   =============	=============
        Input pattern   1               0               1				0
        NOT             0               1               0				1
        =============   =============   ============= 	=============	=============

.. note::

    People refer to a AND gate followed by a NOT as a NAND (Not-AND). That combination negates what the AND gate produces, producing the exact opposite - a NAND combo will produce an answer of 0 when both inputs are on and 1 in every other case. Similarly, a NOR is an OR followed by a NOT and an XNOR (or ENOR) is a NOT after an XOR. You are not responsible for memorizing the truth tables for these gates, but if you happen to see them, now you know what they are.


.. pseudo_h4:: Self Check
    :class: underlined


.. fillintheblank:: not_1

    What is the result of applying **NOT** to: |br|
    1110? |br|

    - :0001: Correct!
      :[^01]+: Your answer should be just 1s and 0s
      :.{1,3}: Not enough digits
      :.{5,}: Too many digits
      :x: Hint: flip each bit in the input pattern to its opposite.


.. fillintheblank:: xor_1

    What is the result of applying **XOR** to: |br|
    0101 |br|
    0011? |br|


    - :0110: Correct!
      :[^01]+: Your answer should be just 1s and 0s
      :.{1,3}: Not enough digits
      :.{5,}: Too many digits
      :x: Hint: apply XOR to each column of bits. XOR reports 1 if one (and only one) of the bits is 1.
