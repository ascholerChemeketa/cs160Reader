.. include:: ../global.rst

.. index::
    pair: Logic Gate; NAND
    pair: Logic Gate; NOR
    pair: Logic Gate; XNOR

Negated Gates
============================

Finally, it is useful sometimes to think about the opposites of the three basic logical rules (AND, OR and XOR). These opposite, or "Not" rules, do the exact opposite of the regular versions. For instance, AND gives an output of 1 only if both inputs are 1. NAND (Not AND) gives an output of 0 only if both inputs are 1.

Below are the truth tables for the negated gates shown next to the gate they negate.

.. pseudo_h3:: OR vs NOR Gates
    :class: underlined

.. container:: inlinegroup

    .. rst-class:: truth-table

        .. table:: Truth table for OR

            =============   =============   =============
            Input 1         Input 2         Output
            =============   =============   =============
            0               0               0
            0               1               1
            1               0               1
            1               1               1
            =============   =============   =============

    .. rst-class:: truth-table

        .. table:: Truth table for NOR

            =============   =============   =============
            Input 1         Input 2         Output
            =============   =============   =============
            0               0               1
            0               1               0
            1               0               0
            1               1               0
            =============   =============   =============

OR reports 1 if either input is 1. NOR is the exact opposite - it reports 0 if either input is 1 (and only gives 1 if both inputs are 0).

.. pseudo_h3:: AND vs NAND Gates
    :class: underlined

.. container:: inlinegroup

    .. rst-class:: truth-table

        .. table:: Truth table for AND

            =============   =============   =============
            Input 1         Input 2         Output
            =============   =============   =============
            0               0               0
            0               1               0
            1               0               0
            1               1               1
            =============   =============   =============

    .. rst-class:: truth-table

        .. table:: Truth table for NAND

            =============   =============   =============
            Input 1         Input 2         Output
            =============   =============   =============
            0               0               1
            0               1               1
            1               0               1
            1               1               0
            =============   =============   =============

AND gives a 1 only if both inputs are 1. NAND does the opposite - that is the only time it gives a 0.

.. pseudo_h3:: XOR vs XNOR Gates (Also known as ENOR)
    :class: underlined

.. container:: inlinegroup

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

    .. rst-class:: truth-table

        .. table:: Truth table for XNOR

            =============   =============   =============
            Input 1         Input 2         Output
            =============   =============   =============
            0               0               1
            0               1               0
            1               0               0
            1               1               1
            =============   =============   =============

XOR gives a 1 if the two inputs are different (0 1 or 1 0). XNOR gives a 1 only if they are the same!

.. pseudo_h4:: Self Check
    :class: underlined


.. fillintheblank:: nor_1

    .. blank:: nor_1_ans1
       :correct: \\b0010\\b
       :feedback1: ('[^01]+', 'Your answer should be just 1s and 0s',)
       :feedback2: ('\\b.{1,3}\\b', 'That is not enough digits')
       :feedback3: ('\\b.{5,}\\b', 'That is too many digits')
       :feedback4: ('.*', 'Hint: NOR only gives 1 if BOTH inputs are 0. Where does that happen?')

       What is the result of applying **NOR** to: |br|
       1101 |br|
       1001? |br|


.. fillintheblank:: xnor_1

    .. blank:: xnor_1_ans1
        :correct: \\b1011\\b
        :feedback1: ('[^01]+', 'Your answer should be just 1s and 0s',)
        :feedback2: ('\\b.{1,3}\\b', 'That is not enough digits')
        :feedback3: ('\\b.{5,}\\b', 'That is too many digits')
        :feedback4: ('.*', 'Hint: XNOR gives a 1 if the two input digits match. In what columns do the input digits match?')

        What is the result of applying **XNOR** to: |br|
        1101 |br|
        1001? |br|
