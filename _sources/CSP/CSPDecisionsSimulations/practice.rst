..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../csp_global.rst

Practice with If
======================

One way we could fix it would be to make sure that the two ``if`` statements covered all
of the possible values. However, we could also pick one of the values to be a default price
that we start with and then change if needed. This has the advantage of being simpler:

.. code:: 

    weight = 0.5
    price = 1.15        # Will be value for anything with weight 1+
    if weight < 1:
        price = 1.45
    total = weight * price
    ...


**Check your understanding**

.. activeCode:: Multiple_Ifs

  weight = 0.5
  numItems = 5
  if weight < 1:
      price = 1.45
  if weight >= 1: 
      price = 1.15
  total = weight * price
  if numItems >= 10:
      total = total * 0.9
  print(weight)
  print(price)
  print(total)

.. mchoice:: 12_6_2_Multiple_Ifs
  :answer_a: $3.45
  :answer_b: $3.11
  :answer_c: $3.105
  :answer_d: $3.10
  :correct: c
  :feedback_a: This would be the answer without the 10% discount for buying 10 or more items
  :feedback_b: Python doesn't automatically round up
  :feedback_c: This is the actual result.  But, can you pay $3.105?
  :feedback_d: Python doesn't automatically change $3.105 to $3.10.  

   What is the total for 12 items that weigh 3 pounds?
     
.. mchoice:: 12_6_4_Logic_Ifs
   :practice: T
   :answer_a: x will always equal 0 after this code executes for any value of x
   :answer_b: if x is greater than 2, the value in x will be doubled after this code executes
   :answer_c: if x is greater than 2, x will equal 0 after this code executes
   :correct: c
   :feedback_a: If x was set to 1 originally, then it would still equal 1.
   :feedback_b: What happens in the original when x is greater than 2?  
   :feedback_c: If x is greater than 2, it will be set to 0.  

   Which of the following is true about the code below?  
   
   :: 

     x = 3
     if (x > 2): 
         x = x * 2;
     if (x > 4): 
         x = 0;
     print(x)
     
