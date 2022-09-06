..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Using Multiple if statements
====================================

You can use more than one ``if`` statement in your code.  Here's an example of a calculation
that uses two ``if`` statements.  Let's compute the total cost of an item where the price
is based on the weight of the item.  If the item weighs less than 1 pound then the price is
1.45 a pound.  If the item weighs 1 pound or more the price is 1.15 a pound.

The program below is an attempt to do that. But it is broken in a subtle way.  
For one value of ``weight``, the ``price`` will not be set to any value, so the calculation
of ``total`` will fail with an error that something
``is not defined``.  Edit the code and change the first line so that ``weight`` has a different value.
Run it again and see what changes.  Try it in the codelens as well to see how the different
values for weight changes the lines of code that are executed. Can you figure out the value
of ``weight`` that will result in an error? 

.. activeCode:: Price_If_Bugged

    weight = 0.5
    if weight < 1:
        price = 1.45
    if weight > 1: 
        price = 1.15
    total = weight * price
    print(weight)
    print(price)
    print(total)

.. fillintheblank:: 11_6_1_brokenrange_fb

    In the program above, what value for weight will result in an error complaining that price
    is not defined?

    - :^1$|1\.[0]*$: Correct!
      :.*: Which value is not tested currently?

So how can we fix the bug? One way would be to change the second if to use ``>=`` so that there
the program handles every situation correctly.

Another way we could solve the problem would be to set a ``price`` as a *default*, to assume
that the weight if 1 or more. Then, we use an ``if`` to change change it only if the weight
turns out to be less than 1.

.. activecode:: Price_If_Default

    weight = 0.5
    price = 1.45

    if weight >= 1:
        price = 1.15

    total = weight * price
    print(weight)
    print(price)
    print(total)

.. mchoice:: 11_3_1_Price_If_Equivalent
    :answer_a: No, they're always the same.
    :answer_b: Yes, they're different if the weight is exactly 1 pound.
    :answer_c: Yes, they're different if the weight is under 1 pound.
    :answer_d: Yes, they're different if the weight is over 1 pound.
    :correct: a
    :feedback_a: The end result is the same.
    :feedback_b: If the weight is exactly 1 pound the price will be 1.15 in both programs.
    :feedback_c: If the weight is under 1 pound the price will be 1.45 in both programs.
    :feedback_d: If the weight is over 1 pound the price will be 1.15 in both programs.

    Modify the top program to use ``>=`` in its second if. Then try both programs for weights
    of less than 1, 1, and more than 1. Are there values for weight that make the two programs
    above print different results when the same weight is used in both programs?

**Check your understanding**

.. parsonsprob:: 11_3_2_Price_By_Weight
    :practice: T
    :numbered: left
    :adaptive:

    The following program should calculate the total price, but the lines are mixed up. The
    price is based on the weight.  Items that weigh less than 2 pounds should cost 1.5. Items
    that weigh more than 2 pounds should cost 1.3. Drag the blocks from the left and place
    them in the correct order on the right.  Be sure to also indent correctly!
    -----
    weight = 0.5
    numItems = 5
    if weight < 2:
    =====
        price = 1.50
    =====
    if weight >= 2:
    =====
        price = 1.30
    =====
    total = weight * price
    =====
    print(weight)
    print(price)
    print(total)

.. mchoice:: 11_6_4_Logic_Ifs
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

        if (x > 2): 
            x = x * 2
        if (x > 4): 
            x = 0
        print(x)