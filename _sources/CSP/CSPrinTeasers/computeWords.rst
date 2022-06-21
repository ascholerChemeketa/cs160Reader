..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

..  shortname:: Chapter: What You Can Do with a Computer
..  description:: Some tidbits of what you can do with a computer

.. setup for automatic question numbering.

.. include:: includes.rst

Compute with Words
===================

..	index::
	single: string
	pair: programming; string

The computer can also compute with words, or more accurately, with **strings** which are sequences of characters.  We can create a **string** by typing characters between a pair of single (``'Hi'``), double (``"Hi"``), or triple quotes ('''Hi'''). We can "compute" with strings using some of the same basic arithmetic operators -- they just mean something different here.  Here we generate silly song lyrics by using ``+`` to combine (append) two strings and ``*`` to repeat strings.

.. activecode:: String_Operators
  
  basic = "da"
  print(basic)
  basic3 = basic + "-" + basic + "-" + basic
  print(basic3)
  next = "dum"
  next3 = next * 3
  print(next3)
  together = (basic + "-") * 3 + next
  print(together)
  print(together + " " + together)

.. index::
    single: object
    single: dot-notation

Strings are different than numbers in that they are **objects**. Objects are complex entities in code that combine data (like the text that is part of a string) with behaviors - things the object can do. To access the behaviors of an object, we use **dot-notation**. In dot notation, we use a ``.`` (or dot) to describe which behavior of an object we want to make use of.

For example, the program below uses ``sentence.lower()`` to tell the string **sentence** that we want it to give us a copy of itself that has been changed to all lower case letters. We then ask the new string, called **better** to make a copy of itself where just the first letter is capitalized.

.. activecode:: String_Methods

    sentence = "THIS IS A TEST"
    better = sentence.lower()
    print("The string better is :", better)
    print("sentence is still    :", sentence)
    betterStill = better.capitalize() + "."
    print("betterStill is       :", betterStill)
   
.. mchoice:: 1_4_1_String_Methods_Q1
   :answer_a: Hi There
   :answer_b: HiThere
   :answer_c: Hi There Hi There
   :answer_d: HiThereHiThere
   :answer_e: HiThere2
   :correct: d
   :feedback_a: When you add strings together you copy the second string right after the first, without any added space
   :feedback_b: Remember that * 2 repeats two copies of the same string
   :feedback_c: Adding strings together and repeating them doesn't add spaces between the strings
   :feedback_d: Strings are added together without adding any space and they are repeated without adding a space
   :feedback_e: The * 2 repeats the string two times

   What would the following code print?
   
   :: 
       
      first = "Hi"
      next = "There"
      print ((first + next) * 2)

