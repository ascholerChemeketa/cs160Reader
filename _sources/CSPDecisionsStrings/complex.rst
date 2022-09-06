..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../CSP/csp_global.rst

Complex Conditionals
==================================================

Sometimes, the decisions we need to make in a program are complex - they depend on more than
one piece of information. For instance, the program below is designed to find out how many credits
a student has and if they have picked a major. If the student is in their first year and does
not have a major, we want to recommend a First Year Experience class to them:

.. activecode:: csp_no_or_and

    credits = int(input("How many credits do you have?"))
    madeDecision = input("Have you decided on a major? (Y/N or Yes/No")

    if credits > 0:
        if credits < 45:
            if madeDecision == "N":
                print("You should sign up for a FYE class")
            if madeDecision == "No":
                print("You should sign up for a FYE class")

The code as written works, but is awkward. We repeat statements (like the print message) and
do a lot of nesting of if statements that make it tricky to parse the exact situation the messages
will be displayed in.

What we want to express is something more like this version that avoids duplication and makes
the structure more simple.

.. code::

    if credits is between 0 and 45:
        if madeDecision is "N" or "No":
            print("You should sign up for a FYE class") 

.. index::
    single: and
    single: or
    single: not
    pair: logical operators; and
    pair: logical operators; or
    pair: logical operators; not

To express ideas kind of like those while making decisions, we can use the keywords ``and``, ``or``, and ``not``.
An ``and`` used to join two expressions is only true if *both* expressions are
true. An ``or`` joining two logical expressions means that if *either or both* of the expressions is true, the whole
expression is true.   A ``not`` negates the logical value that follows it.  If it was true, then a ``not``
changes the result to false. If it was false, the ``not`` changes the result to true.

====================        ================
Expression                  Meaning
====================        ================
(a < b) or (c < d)          The whole expression is true if a is less than b or c is less than d (or both parts are true).
--------------------        ----------------
(a < b) and (c < d)         The whole expression is true if a is less than b  and also c is less than d.  
--------------------        ----------------
not a < b                   Only true if a is actually greater than or equal to b. The logical expression ``not a < b`` is the same as ``a >= b``.
====================        ================

Here is the same program written using ``and`` and ``or``. Hopefully you agree that it is more
simple and clear than what we started with. On the following page, we will look more closely at
how ``and``, ``or``, and ``not`` work.

.. activecode:: csp_or_and

    credits = int(input("How many credits do you have?"))
    madeDecision = input("Have you decided on a major? (Y/N or Yes/No")

    if credits > 0 and credits < 45:
        if madeDecision == "N" or madeDecision == "No":
            print("You should sign up for a FYE class")
