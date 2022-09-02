..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: includes.rst

Rules for Names
==================

.. index::
    single: variable names
    single: identifier
    single: syntax

The name we give a variable, also called its **identifier**, is subject to some important rules.
Some of these rules are strict - Python will not accept names that do not follow these rules.
These rules are part of the **syntax** of Python. The syntax of any language are the rules for
what are valid ways to write things in the language. Other rules for variable names are human
conventions. Python will not enforce these rules, but you and other programmers reading your code
may get confused. 

Naming Syntax
----------------------

There are restrictions on what you can use as a variable name. 

* It must start with a letter (uppercase like ``A`` or lowercase like ``a``) or an underscore ``_``
* It can also contain digits, like ``1`` or ``9``, just not as the first character
* It can't have spaces, or special symbols other than ``_``
* It can't be a Python **keyword**. Keywords are words that have special meaning in the language
    (see below for examples).
* Case matters.  A variable named ``result`` is not the same as one named ``Result``.

Python has a few dozen keywords that you can't use as variable names. Here is a list of the most
common ones. If you ever have an error based on one of your variable names and do not know why,
compare your name to this list to make sure you are not using a keyword as your name.

======== ======== ======== ======== ======== ========
and      as       assert   break    class    continue
def      del      elif     else     except   exec
finally  for      from     global   if       import
in       is       lambda   nonlocal not      or
pass     raise    return   try      while    with
yield    True     False    None
======== ======== ======== ======== ======== ========

.. mchoice:: 2_2_1_mc
    :practice: T
    :answer_a: _a1
    :answer_b: my_name
    :answer_c: amountOfStuff
    :answer_d: BMP
    :answer_e: 1A
    :correct: e
    :feedback_a: You can use an underscore as the first character in a variable name
    :feedback_b: You can use an underscore between words in a variable name.
    :feedback_c: You can use both uppercase and lowercase letters in a variable name.
    :feedback_d: You can use only uppercase letters in a variable name.
    :feedback_e: You can't use a digit as the first letter in a variable name.

    Which of the following is *not* a legal variable name?
   
.. mchoice:: 2_2_2_mc
    :practice: T
    :answer_a: _my_name
    :answer_b: my name
    :answer_c: myname
    :answer_d: myName
    :answer_e: my_name
    :correct: b
    :feedback_a: This is legal, but you don't usually start a variable name with an
        underscore.
    :feedback_b: You can't have a space in a variable name.  
    :feedback_c: This may be hard to read, but it is legal.  
    :feedback_d: Since you can't have spaces in names, one way to make variable names
        easier to read is to use camel case (uppercase the first letter of each new word).  
    :feedback_e: Since you can't have spaces in names, one way to make variable names easier
        to read is to use an underscore between two words.  

    Which of the following is *not* a legal variable name?


Naming Convention
----------------------

Programmers generally choose names for their variables that are meaningful to the human readers of
the program --- they help the programmer document, or remember, what the variable is used for.
To be meaningful, a name must clearly describe what a piece of information is to anyone reading the
code, not just the author of the code.

Meaningful names are generally full words like ``height``. Abbreviations are generally not
meaningful to anyone other than the original author. If you are reading through code and see a
variable ``h``, that will likely not do anything to help you figure out what information it is
holding. (The exception to this rule is representing values from a mathematical formula like
:math:`a^b + b^c = c^2` where ``a`` has a well defined menaing.)

Oftentimes, you need multiple words to meaningfully describe a variable. Say you have a program
that involves converting a height between inches and centimeters, within that program, the
name ``height`` might be confusing. Is it referring to a value in inches? centimeters?

In cases like this, since you can't have spaces in a variable name, you can either join words
together by uppercasing the first letter of each new word like ``heightInInches`` (called
**mixed-case** or **camel-case** because the capitals look like the humps of a camel) or use
underscores between words like ``height_in_inches`` (called **snake-case**).

.. mchoice:: 2_2_3_mc
    :practice: T
    :answer_a: hireDate
    :answer_b: _hire_date
    :answer_c: hire date
    :answer_d: date
    :answer_e: hd
    :correct: a
    :feedback_a: Correct! This or <code>hire_date</code> would both be reasonable choices for a name.
    :feedback_b: <code>hire_date</code> would be reasonable. But you don't usually start a 
        variable name with an underscore. 
    :feedback_c: You can't have a space in a variable name
    :feedback_d: <code>date</code>  isn't the worst option here, but it might not be clear to other readers
        of the code what date we are referring to. Is it a person's hire date? their birth day?
        today's date?
    :feedback_e: An abbreviation would not be appropriate in this case. <code>hd</code> is not meaningful.

    Say you have a variable that represents the date someone was hired. Which of these would
    be the most appropriate name?

.. caution::

    Beginners sometimes confuse "meaningful to the human readers" with
    "meaningful to the computer".  So they'll wrongly think that because
    they've called some variable ``average`` or ``pi``, it will somehow
    automagically calculate an average, or automagically associate the variable
    ``pi`` with the value 3.14159. 
    
    That is not the case. The computer doesn't attach semantic meaning to your variable
    names. The Python interpreter does not care if you call a variable ``average``,
    ``a``, ``something``, or ``sue`` - to it, all of those names are equally 
    meaningful in that they have no real meaning other than naming a value the programmer
    is working with.

.. quick_attribution:: FOPP