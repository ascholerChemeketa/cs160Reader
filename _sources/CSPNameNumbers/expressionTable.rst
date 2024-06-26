..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: includes.rst

Summary of Expression Types
============================

Here is a table summarizing the basic arithmetic operations:

.. list-table::
    :widths: 10 90
    :header-rows: 1
    :align: left

    * - Expression
      - Arithmetic meaning
    * - 1 + 2
      - Addition, the result is 3  
    * - 3 * 4
      - Multiplication, the result is 12 
    * - 4 / 3 
      - Division, the result is 1.333333333333
    * - 4 // 3 
      - Integer Division, the result is 1
    * - 16 % 3 
      - Modulo (remainder), the result is 1  
    * - 2 ** 3 
      - Power, 2 to the 3rd power - result is 8
    * - -1
      - Negation, the result is -1 

.. mchoice:: cspnamenumbers_expressiontable1
   :practice: T
   :answer_a: 0
   :answer_b: 1
   :answer_c: 0.75
   :answer_d: 0.25
   :correct: c
   :feedback_a: In some languages, this would be correct. But, this book is using Python 3 so you get a decimal result.
   :feedback_b: No, try again.
   :feedback_c: Correct.
   :feedback_d: This would be correct if it was <code>1 / 4</code>, <code>1.0 / 4</code>, or <code>1 / 4.0</code>

   What is the result of ``3 / 4``?


.. mchoice:: cspnamenumbers_expressiontable2
   :practice: T
   :answer_a: 2
   :answer_b: 1
   :answer_c: 1.6
   :answer_d: 0.25
   :correct: b
   :feedback_a: You will get an integer answer, but that is not it.
   :feedback_b: Correct. // does integer division.
   :feedback_c: Remember that // does <em>integer division</em>
   :feedback_d: This would be correct if it was <code>1 / 4</code>, <code>1.0 / 4</code>, or <code>1 / 4.0</code>
   
   What is the result of ``8 // 5``?


.. mchoice:: cspnamenumbers_expressiontable3
   :practice: T
   :answer_a: 0
   :answer_b: 1
   :answer_c: 2
   :answer_d: 3
   :correct: d
   :feedback_a: This would be correct if it was <code>18 % 2</code>, but what is the remainder of 18 divided by 5? 
   :feedback_b: This would be correct if it was <code>18 % 17</code>, since 17 goes into 18 one time and the remainder is 18 - 17 = 1.  
   :feedback_c: What is the highest multiple of 5 that is less than or equal to 18? The remainder is 18 - that number.
   :feedback_d: The reminder is 3 since 5 goes into 18 three times (15) and 18 - 15 = 3.  

   What is the result of ``18 % 5``?
   
.. mchoice:: cspnamenumbers_expressiontable4
   :practice: T
   :answer_a: 0
   :answer_b: 1
   :answer_c: 2
   :answer_d: 6
   :correct: c
   :feedback_a: This would be correct if it was <code>6 % 2</code>.  
   :feedback_b: This would be correct if it was some odd number divided by 2, but it is not.
   :feedback_c: 6 goes into 2 zero times with 2 left over.  
   :feedback_d: If you have a smaller number divided by a larger number the remainder is always the smaller number. 

   What is the result of ``2 % 6``?

