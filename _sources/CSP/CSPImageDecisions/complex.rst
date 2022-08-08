..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../csp_global.rst

Complex Conditionals
==================================================

.. index::
    single: and
    single: or
    single: not
    pair: logical operators; and
    pair: logical operators; or
    pair: logical operators; not

Sometimes we want to express more complex logic - like "you get a B grade if your score is at least
80, but is less than 90". We can use the keywords ``and``, ``or``, and ``not`` to build up more
complex logical expressions.

An ``or`` joining two logical expressions means that if *either or both* of the expressions is true, the whole
expression is true.  An ``and`` used to join two expressions is only true if *both* expressions are
true. A ``not`` negates the logical value that follows it.  If it was true, then a ``not``
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

And
-------------------------------------------

``and`` is what we use when we want to verify that two things are BOTH true.
A common use of ``and`` is to check that a value is in a range between a minimum value and a maximum
value. For example, to determine if a grade is a "B", we need to make sure it is at least 80 but
is also less than 90. We can use ``and`` to combine ``grade >= 80`` and ``grade < 90`` so that
both must be true for the overall condition to be true. Try changing grade to different values
as you run this program: 

.. activecode:: Example_With_And

    grade = 83
    if grade >= 80 and grade < 90:
        print ("You got a B")
    print ("All done")

.. mchoice:: 12_5_1_and1
    :practice: T
    :answer_a: 1 to 10
    :answer_b: 0 to 9
    :answer_c: 1 to 9
    :correct: c
    :feedback_a: This would be true if the second expression was x <= 10. 
    :feedback_b: This would be true if the first logical expression was x >= 0.
    :feedback_c: The "condition true" will only be printed when x is greater than 0 and less than 10 so this is the range from 1 to 9.

    Given the code below, what describes the values of x that will cause the code to print "condition true"?

    :: 

        if x > 0 and x < 10:
            print ("condition true")
        print ("All done")
    
Or
-------------------------------------------

``or`` is a way to give multiple ways to satisfy some criteria. 
For example, maybe our program is going to ask the user if they have a bag to check.
We want them to be able to answer either "yes" or just "y". If you input either answer when
asked for an input by this program, it will tell you there will be an extra fee.

.. activecode:: Example_With_Or

    answer = input("Do you have a bag to check? (yes/no)")
    if answer == "yes" or answer =="y":
        print("That will be an extra fee.")
    print ("All done")


.. mchoice:: 12_5_1_or2
    :practice: T
    :answer_a: 0 to 10
    :answer_b: 1 to 10
    :answer_c: negative values
    :answer_d: negative values or 2+ digits
    :correct: d
    :feedback_a: If x was 5, but ``x < 0`` and ``x >= 10`` are false.
    :feedback_b: If x was 5, but ``x < 0`` and ``x >= 10`` are false.
    :feedback_c: That is partially correct. But what values would be true because they made ``x >= 10`` true?
    :feedback_d: Correct

    Given the code below, what describes the values of x that will cause the code to print "condition true"?

    :: 

        if x < 0 or x >= 10:
            print ("condition true")
        print ("All done")

Not
-------------------------------------------

Finally, ``not`` is primarily used with functions that return a Boolean value. For instance,
``isalnum`` is a string function that checks to see if all of the characters are alphanumeric
(letters or digits). This program wants to know the opposite of that - if there is at least
one special symbol, it wants to make the use pick a new username. So ``not``
is used to reverse the result of ``isalnum``. If the user gives input that includes a symbol,
``isalnum`` will return ``False``, but the ``not`` will turn that into ``True`` which means
that we will execute the line of code that asks them to try again.

.. activecode:: Example_With_Not

    name = input("Please enter a username, make sure not to include special characters.")
    if not name.isalnum():
        name = input("Try again, make sure not to include special characters.")

    print ("Welcome", name)

Notice that the program currently only will ask you to try again once. If we want it to keep
asking the user to try again until they get it right, we would need a loop. Try changing the
``if`` into a ``while`` - the program will keep asking you to try again until you get it right.
