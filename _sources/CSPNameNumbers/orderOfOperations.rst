..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: includes.rst

How Expressions are Evaluated
===============================

The order that expressions are executed is the same as it is in math. You probably learned this
ordering as **PEMDAS** (Parentheses, Exponents, Multiply/Divide, Add/Subtract) and is shown in the table
below from highest precedence to lowest. If two symbols have the same precedence they are evaluated from left to right.   

.. list-table::
    :widths: 30 70 
    :header-rows: 1
    :align: left

    * - Operator
      - Name
    * - -x
      - Negation
    * - x ** y
      - Exponentiation
    * - x * y
    
        x / y
        
        x % y
      - Multiplication, Division, and Modulo 
    * - x + y
    
        x - y
      - Addition and Subtraction


.. fillintheblank:: cspnamenumbers_orderofoperations1

   What is printed when you click on the Run button in the code below? 
   Try evaluating it by hand before running the program to check yourself.

   -    :^13$: Correct!
        :.*: Did you actually run the program?

.. activecode:: cspnamenumbers_orderofoperations2
    :nocodelens:
    
    result = 4 ** 2 + -1 * 3
    print(result)
   
You can change the default order by adding parentheses around part of an expression. Whatever
math is inside the parentheses is done (using the same order of operations) before any operations
outside the parentheses are done.

.. fillintheblank:: cspnamenumbers_orderofoperations3

   What is printed when you click on the Run button in the code below? 
   Try evaluating it by hand before running the program to check yourself.

   -    :^-12$: Correct!
        :.*: Did you actually run the program

.. activecode:: cspnamenumbers_orderofoperations4
    :nocodelens:
    
    result = 4 ** (2 + -1) * -3
    print(result)

