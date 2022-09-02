..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst

.. _random-numbers:

Random Numbers
==========================


When creating a simulation, we need a way to simulate unpredictable events. Is the driver of
a car going to choose to turn at a certain intersection? What will the weather be like in an
hour? We may have some idea of what answers are reasonable for these questions, and how likely
each answer is, but at some point we will have to resort to trying to pick an answer randomly
while obeying what we believe the odds of different outcomes are.

.. index::
    single: random
    single: randrange

In Python, to generate random values, we use the ``random`` library. To pick a random integer, we use 
the ``randrange`` function in the ``random`` library. To use it, we have to import the library,
then call the function. Try running this program a few times to see that it does in fact generate
a random number each time it runs:

.. activecode:: 12_rand_1

     import random

     x = random.randrange(1, 5)  # pick a number from 1-4
     print(x)

As shown above, the ``randrange`` function takes can be called with a starting value (inclusive)
and the ending value for the range (exclusive). So ``randrange(1, 5)`` picks an integer from the
range that starts at 1 and ends before 5. We can also call it with just an end value like
``randrange(5)``

.. mchoice:: 12_rand_recipe
    :answer_a: 0
    :answer_b: 10
    :answer_c: 19
    :answer_d: 20
    :correct: c
    :feedback_a: 12 is the lowest value that will be selected
    :feedback_b: 12 is the lowest value that will be selected
    :feedback_c: Correct.
    :feedback_d: The range is exclusive of the second value. 20 will not be picked

    What is a value that the recipe ``random.randrange(12, 20)`` can produce?

.. fillintheblank:: 12_rand_recipe_2

    We want to make a random whole number between 2 and 4. Fill in the blank in this
    recipe: ``random.randrange(________________)``

    - :^\s*2\s*,\s*5\s*$: Correct!
      :^\s*2\s*,\s*4\s*$: That would not include 4 as a possible option
      :^[^,]+$: Make sure to give two numbers separated by a comma
      :\d+\s*,\s*\d+: Those numbers aren't right
      :.*: Make sure to give two numbers separated by a comma (and nothing else)

.. note::

    Computers can't usually generate truly random numbers without measuring something that is
    random (like static noise on radio frequencies). If they don't have access to something like
    that, they must rely on generating **pseudorandom** numbers - numbers that look random even
    though they are created using some mathematical recipe.
    Python takes the system time as a starting point (since it is always changing) and then
    uses a mathematical recipe to "pick" the next random number each time we ask for one.

    When these **pseudorandom** generators aren't coded well, they can cause issues with
    simulations or cryptography that rely on their results.