..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: includes.rst

Expressions
=============

.. index::
    single: expressions
    single: arithmetic expressions

The *right hand* side of the assignment statement doesn't have to be a value.  It can be *an
arithmetic expression*, like ``2 * 2``. The expression will be evaluated and the result from the
expression will be stored in the variable. 

.. fillintheblank:: 2_3_1_1_Mult_fill

    What will be printed when you click on the Run button in the code below? 

    - :^4$: Correct. 2 times 2 plus 1 is 5
      :.*: Did you actually run the program?
 
.. activecode:: 2_3_1_2_Expression_Mult
    :nocodelens:
    
    result = 2 * 2 + 1
    print(result)
    
Integer Division
-------------------

.. index::
    single: integer division
   
You can use all the standard mathematical operations, you just have to know the right symbols
to use: ``/`` means divsion; ``*`` means times; ``**`` means "to the power of". 

.. fillintheblank:: 2_3_2_1_Div_fill

    What will be printed when you click on the Run button in the code below? 

    - :^0.3333333333333333$: Correct!  The computer can only store a certain number of digits for
        a fractional amount that repeats.
      :^0.3{1,15}$: Close, but that is not the number of digits you will actually get.
      :.*: Did you actually run the program?
   
.. activecode:: 2_3_2_2_Expression_Div
    :nocodelens:
    
    result = 1 / 3
    print(result)

.. note::

    This book is using Python 3.0 which returns a decimal value from an integer calculation like
    ``1 / 3``.  If we had executed ``1 / 3`` in an older Python development environment it would
    have printed ``0`` instead.  In many languages if you are only using integers in calculations
    (whole numbers - like -3,65, -39028, 602939) the result will also be an integer and the
    factional part (part after the decimal point) is thrown away. In those environments it is
    important to use decimal values (like ``1.0 / 2``, ``1 / 2.0``, or ``1.0 / 2.0``) if you want
    a decimal result.
   
Modulo 
---------

.. index::
    single: modulo
    single: remainder
   
There are also some symbols that may be used in ways that you don't expect.  

You may not be familiar with the **modulo** (remainder) operator ``%``.  It returns the remainder
when you divide the first number by the second.  You probably did this long ago when you were
learning long division.  In the case of ``4 % 2``, ``2`` goes into ``4`` two times with a remainder
of ``0``.  The result of ``5 % 2`` would be ``1`` since ``2`` goes into ``5``, two times with a
remainder of ``1``.

.. figure:: Figures/mod-py.png
    :width: 150px
    :align: center
    :figclass: align-center
    
    Long division showing the whole number result and the remainder


.. fillintheblank:: 2_3_3_1_Mod_fill

   What will be printed when you click on the Run button in the code below? 
 
   -    :^0$: Correct!  The 11 is evenly divisible by 3 with a remainder of 2.
        :.*: Did you actually run the program?

.. activecode:: 2_3_3_2_Expression_Mod
    :nocodelens:
    
    result = 11 % 3
    print(result)


.. note::

    The result of ``x % y`` when ``x`` is smaller than ``y`` is always ``x``.  The value ``y``
    can't go into ``x`` at all, since ``x`` is smaller than ``y``, so the result is just ``x``.
    So if you see ``2 % 3`` the result is ``2``.  Edit the code above to try this for yourself.
    Change the code to ``result = 2 % 3`` and see what that prints when it is run.