..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".
 
..  shortname:: Chapter: What You Can Do with a Computer
..  description:: Some tidbits of what you can do with a computer

.. include:: includes.rst

Compute with Numbers
===================== 

.. index::
    single: variable
    pair: programming; variable

Computers were first used for numeric calculations. You may be used to doing calculations with a
calculator, but calculations are often easier if you can *name* the numbers you are working with.
When you name a number, or the result of a calculation, you are creating a **variable**.  A
**variable** is a name associated with computer memory that can hold a value and that value can
change or vary.  One example of a **variable** is the score in a game.  The score starts off at 0
and increases as you play the game.

.. figure:: Figures/angry_birds.jpg
    :width: 400px
    :align: center
    :alt: A game with a score
    :figclass: align-center
    
    Both the **score** and **high score** in the game Angry Birds would be represented by a variable.

One thing that you might want to calculate is the monthly payment on a loan for a car. To do so,
you can use this mathematical formula:

.. rst-class:: center

    :math:`A = P \frac{r(1 + r)^n}{(1 + r)^n - 1}`

That formula uses the following variables:

- **P** : The **principle** - the amount of the original loan
- **r** : The monthly interest **rate** expressed as a decimal value. Loans are often described in
    terms of an *APR* or Annual Percentage Rate that must be divided by 1200 to produce the right
    value for r.
- **n** : The **number** of monthly payments

It calculates the value **A** which is the payment **amount**. 

The Python program below sets some values for these variables and then does the calculations needed
to produce the payment.

Press the |runbutton| button below to make the computer execute these steps. The output from this
program will be displayed to the right of the program.

You can only use the *Save* and *Load* buttons if you are logged in. The *Save* button will save
the current program and the *Load* button will load a saved program.

.. activecode:: cspteasers_computenumbers1
    :nocodelens:
    
    P = 10000       # $10,000 - notice we don't use ,'s in numbers
    APR = 4.9       # annual percentage interest rate - we also don't use % symbols
    n = 60          # 60 payments (5 years of monthly payments)

    r = APR / 1200  # convert the APR into a monthly interest rate as a decimal

    amount = P * (r * (1 + r) ** n) / ((1 + r) ** n - 1)
    print("Monthly payment amount:")
    print(amount)

Currently the code is calculating the payment for a $10,000 loan at an APR of 4.9% over 60 months.
Try changing the numeric values for P, APR, and n in the program above, and press the *Run* button
to calculate the payment for a different loan. Note that some of the symbols used in Python are
different than those we normally use for math: ``*`` means "multiply" and ``**`` means "to the
power of".

.. index::
    single: comment
    pair: programming; comment
    pair: program; comment

Also visible in the code are some **comments**. Comments are pieces of text that come after a ``#``
symbol, like ``# $10,000 - notice we don't use ,'s in numbers``. Python will ignore these comments
and they are colored differently than the code to indicate that they are not actual code. Comments
are used by programmers to leave notes to themselves and others about the code. Try deleting a
``#`` in the program above and then running it. You will get an error message because now Python is
trying to run the note as if it was code.

.. Note::

    Notice how naming the values (using variables) for things like **n** makes it easier to see which
    values to change to make the program calculate a different loan.

.. mchoice:: cspteasers_computenumbers2
    :answer_a: 134.48
    :answer_b: 134.4794369902589
    :answer_c: 134
    :answer_d: 135
    :correct: b
    :feedback_a: That would be the right dollar amount, but the computer will give you more digits than that.
    :feedback_b: Yes!
    :feedback_c: No, the computer does not round the result.
    :feedback_d: No, the computer does not round the result.
    
    Try calculating the payment for an $8,000 loan at 6.5% interest over 72 months. What is the monthly payment?


.. fillintheblank:: cspteasers_computenumbers3

    Try calculating the payment for a $20,000 loan at 7% interest over 48 months. What is the monthly payment?

    - :478.9248932488566: Correct!
      :\d+: You should have a decimal
      :478\.\d{0,12}: Make sure to use the full decimal value
      :478\.\d{13}: That looks close, check all your digits carefully
      :x: No - make sure that you are giving a numeric answer and do not include a $



