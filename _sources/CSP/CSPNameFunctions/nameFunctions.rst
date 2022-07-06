..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst

Defining Procedures
========================




Defining a Function
--------------------

You define a function just like you define a procedure, but it will also ``return`` a value as shown below.  

.. activecode:: def_function
  :nocodelens:

  def bmi(height, weight):
      heightSquared = height * height
      BMI = weight / heightSquared
      BMImetric = BMI * 703
      return BMImetric
      
  print(bmi(60,110))
  
.. note::
   To return a value from a function use the Python keyword ``return`` followed by the value to return.  
  
**Check Your Understanding**

.. mchoice:: 7_3_1_Functions_Q2
   :answer_a: Procedure
   :answer_b: Function
   :correct: b
   :feedback_a: It returns a value so it is a function
   :feedback_b: It returns a value so it can't be a procedure

   Is ``abs`` a procedure or a function?
   
.. mchoice:: 7_3_2_Functions_Q3
   :answer_a: Procedure
   :answer_b: Function
   :correct: a
   :feedback_a: It doesn't return a value so it is a procedure
   :feedback_b: It doesn't return a value so it can't be a function

   Is ``square`` a procedure or a function?
