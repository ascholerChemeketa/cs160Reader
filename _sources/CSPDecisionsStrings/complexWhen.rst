..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../CSP/csp_global.rst

When to use And and Or
==================================================

The keywords ``and``, ``or``, and ``not`` give us lots of flexibility in how we express conditions.
Our goal should always be to make our code as easy as possible to understand and to avoid repeating
ourselves.

One sign that you may want to use an ``and`` to simplify things, is if you have a nested if:

.. activecode:: nested_if_vs_and

    x = 8
    if x <= 10:
        if x >= 1:
            print("x is between 1 and 10")
    print("Done")

The inner print statement will only run if ``x >= 1`` is true. But the if statement that checks that
for that is inside ``if x <= 10``. So it only runs if x is 10 or less. Thus to reach the message about
``x``, it must be both 10 or less and 1 or more. So why not just write it like this?

.. activecode:: nested_if_vs_and2

    x = 8
    if x <= 10 and  x >= 1:
        print("x is between 1 and 10")
    print("Done")

Similarly, we could write the back check logic from the last page using multiple ``if`` statements:

.. activecode:: multiple_ors

    answer = input("Do you have a bag to check? (yes/no)")
    if answer == "yes":
        print("That will be an extra fee.")
    if answer =="y":
        print("That will be an extra fee.")
    print ("All done")

But that means repeating the print statement multiple times. So the version that used ``or``
is better than this.

.. mchoice:: 12_5_1_or3
    :practice: T
    :answer_a: if age > 12 and age < 20:
    :answer_b: if age > 12 or age < 20:
    :answer_c: if age > 12 not age < 20:
    :correct: a
    :feedback_a: Correct
    :feedback_b: To reach the print in that sample, both if's must be True
    :feedback_c: That does not make sense. "not" cannot combine multiple true false values

    What logic is equivalent to the logic shown below?

    :: 

        if age > 12:
            if age < 20:
                print("Teenager")

It is fine to chain a bunch or and or or's together to make one large expression as shown below.
This program accepts four different answers - because all four expressions are combined with or,
only one part needs to be true to make the whole thing true.

.. activecode:: Example_With_MultipleOr

    answer = input("Do you have a bag to check? (yes/no)")
    if answer == "yes" or answer =="y" or answer == "Y" or answer == "YES":
        print("That will be an extra fee.")
    print ("All done")

.. note::

    We could simplify the example above by using the string ``lower`` function to turn the answer
    into lower case: ``answer = answer.lower()``. Once we did that, we would not have to worry about
    the answer being "Y" or "YES", we would know it only had lower case letters.

We will generally stay away from more complex expressions that mix and's and or's, they can
get confusing to write and read. If you really feel the need to write something super complex,
you can use parentheses to make sure that the logic is evaluated in the right order:

.. code::

    # True if the type is checking or savings AND the balance is over 10000
    if (balance > 10000) and (type == "checking" or type == "savings")
