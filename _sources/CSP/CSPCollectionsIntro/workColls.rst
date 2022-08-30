..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. setup for automatic question numbering.
    

Working with Collections of Data
=================================

.. index:: 
    single: arrays; lists; indexing; collections;

Up until now, most of the data we have worked with we have thought about as single values:
The number 34.2, or the word "Hello", or a Turtle, or an Image. We have used multiple pieces of
data in programs - we might work with a first and last name, or an hours_worked and pay_rate - 
but those pieces of data were usually given separate names.

Often times however, we want to work with a group of values that are all related. Say I want to
work with the scores a student has gotten on a series of eight quizzes. If I name each score
separately (``quiz1``, ``quiz2``, ...) it will be hard to write code that does something like
find the highest score. I would end up having to do like this:

.. code::

    highest_score = quiz1
    if quiz2 > highest_score:
        highest_score = quiz2
    if quiz3 > highest_score:
        highest_score = quiz3
    if quiz4 > highest_score:
        highest_score = quiz4
    ...

Remember that in programming, we want to avoid writing the same code over and over. And that
is what this is... I am doing the same steps over and over, just with the different variables.
What I need is a way to lump all the quizzes together so I can talk about them all at once
and more easily write code to work with all the individual scores.