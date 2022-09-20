..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Booleans and Logical Expressions
=================================

.. index::
    single: Boolean

When writing a while loop, the logical expression can be anything that has a 
**Boolean** value. A **Boolean**, or **bool** is a value that is either ``True``
or ``False``. Those are the only two **Boolean** values.

Much like how Python considers the string ``"12"`` to be a different type than
the number ``12``, ``True`` is something different than the string ``"True"``

We can see that Python considers a **bool** to be different than a string (str)
or integer (int) by using the ``type`` function to ask about the values stored
in x, y, and z in the program below:

.. activecode:: csprepeatnumbers_logicalexpressions1

    x = True
    y = "True"
    z = 1
    print( "x is a ", type(x) )
    print( "y is a ", type(y) )
    print( "z is a ", type(z) )


.. index::
    single: logical expression
    single: comparison operators

The usual way to produce **Boolean** values is with a **logical expression**. Much
like a numeric expression like :math:`4 * (3 - 2)` evaluates to a number, a logical expression
evaluates to a logical or True/False value. Logical expressions are built with
**comparison operators** that compare values to produce a True/False answer.

**Comparison Operators**

+------------+---------------------------------------------------------+
| Expression | Logical meaning                                         |
+------------+---------------------------------------------------------+
| a < b      | True if a is less than b                                |
+------------+---------------------------------------------------------+
| a <= b     | True if a is less than or equal to b                    |
+------------+---------------------------------------------------------+
| a > b      | True if a is greater than b                             |
+------------+---------------------------------------------------------+
| a >= b     | True if a is greater than or equal to b                 |
+------------+---------------------------------------------------------+
| a == b     | True if a is equal to b.                                | 
|            | (Two equals signs, to distinguish it from assignment)   |
+------------+---------------------------------------------------------+
| a != b     | True if a is *not* equal to b.                          | 
+------------+---------------------------------------------------------+

The best way to think about an expression like ``a > b`` is that it asks the question,
*"is a greater than b"*. The value we get by evaluating the expression is the answer
to that question: either True or False. 

Here is a sample of them in use:

.. activecode:: csprepeatnumbers_logicalexpressions2

    age = 20

    canVote = age >= 18
    canDrink = age >= 21
    isTwenty = age == 20

    print( "canVote is ", canVote )
    print( "canDrink is ", canDrink )
    print( "isTwenty is ", isTwenty )

Something like ``isTwenty = age == 20`` may look odd. But remember that ``=`` does not mean
"equals" it is an **assignment**. And assignment always happens after all expressions are
evaluated. A good translation for that line of code would be *"isTwenty gets assigned the value
that we get by evaluating 'is age equal to 20?'"*

As the line of code actually runs, the first thing that happens is the evaluation of ``age == 20``.
Since age is 20, the result is True. That value replaces the logical expression and we end up with
``isTwenty = True`` and so that is the value that gets used for ``isTwenty``.

.. mchoice:: csprepeatnumbers_logicalexpressions3
    :correct: c
    :answer_a: x <= 50
    :answer_b: 10 > y
    :answer_c: 30 > x
    :answer_d: y != 5
    :feedback_a: 30 is less than or equal to 50
    :feedback_b: 10 is greater than 2
    :feedback_c: Correct. 30 is not greater than x, they are the same. So this is false.
    :feedback_d: 2 is not equal to 5, so this is true

    Given these values, which is the only logical expression that would evaluate to False?

    .. code::

        x = 30
        y = 2
