..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Strings are Immutable
======================

.. index::
    pair: string; immutable

Even though you can manipulate a string to create a new string the original string is
**immutable** which means that they never change.  Notice that after you execute the
code below the string stored in the variable ``sentence`` hasn't changed.
  
.. activecode:: String_Immutable
      
   sentence = "THIS IS A TEST"
   better = sentence.lower()
   print(better)
   short = sentence[0:4]
   print(short)
   print(sentence)          # Still what it was on line 1
   
While the strings themselves can't be changed you can change the value of a variable.
This throws away the original string and sets the variable's value to the new string.

.. activecode:: String_Reassign

    sentence = "THIS IS A TEST"
    print(sentence)
    sentence = "Hi there"
    print(sentence)


We can reassign a variable to hold the result of calling a function on a string. On line
3 of the example below, we make the new value of ``sentence`` be the result of changing
the old value of ``sentance`` after it was changed to lower case.


.. activecode:: String_Reassign_2

    sentence = "THIS IS A TEST"
    print(sentence)
    sentence = sentence.lower()     # Changes the value of sentence
    print(sentence)

.. note::

    We always do all the work on the right side of ``=`` and then store the result into
    the variable listed on the left side.

.. mchoice:: 3_3_4_s1
    :practice: T
    :answer_a: xyz
    :answer_b: xyxyz
    :answer_c: xy xy z
    :answer_d: xy z
    :answer_e: z
    :correct: b
    :feedback_a: s1 will equal "xy" plus another "xy" then z at the end.
    :feedback_b: s1 contains the original value, plus itself, plus "z"  
    :feedback_c: No spaces are added during concatenation.
    :feedback_d: No spaces are added during concatenation, and an additional "xy" should be included at the beginning.
    :feedback_e: s1 was set to "xy" initially, so the final answer will be "xyxyz"

    Given the following code segment, what is the value of the string s1 after these are executed?

    ::

        s1 = "xy"
        s2 = s1
        s1 = s1 + s2 + "z"

.. mchoice:: 3_3_5_s2
    :practice: T
    :answer_a: Hey
    :answer_b: hey
    :answer_c: HEY
    :correct: c
    :feedback_a: This would be correct if we had asked what the value of s3 was. What is the value of s1?
    :feedback_b: This would be true if we asked what the value of s2 was after the code executes.  What is the value of s1?
    :feedback_c: Strings are immutable, meaning they don't change.  Any function that changes a string returns a new string.  So s1 never changes unless you set it to a different string. 

    What is the value of s1 after the following code executes?

    :: 

        s1 = "HEY"
        s2 = s1.lower()
        s3 = s2.capitalize()
