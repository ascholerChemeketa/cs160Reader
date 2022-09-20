..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst

Defining Procedures - Why
===========================

.. index::
    pair: function; definition

How does Python know what to do when we call functions like ``abs`` or procedures like
``alex.forward(50)``? Someone had to **define** them. **Defining** a new procedures or
function, associates a name with a name with a sequence of steps.

Why do we make new procedures or functions? There are two primary reasons:

* **Code reuse** -
  A golden rule in programming is **DRY - don't repeat yourself**. If you find yourself
  typing the same code over and over (or copy/pasting), there is probably a better way
  to solve the problem. By defining a function or procedure, we can easily reuse a
  sequence of instructions without typing the entire sequence over and over again.

* **Forming abstractions** - By defining a function or procedure, we can hide the messy details
  of solving a particular problem. We can then use the function or procedure to do the job
  without stopping to worry about all of the details. If someone else defined the function,
  we may not even know how all of the details work. But we can still use the function to do
  a job. The function is an **abstraction** - something that allows us to think about our
  problem at a higher level and get more done with each line of code we write.

Examine the program below. Can you easily tell what it does? Click *Run* and see what happens. 

.. activecode:: cspnameprocedures_definingwhy1
    :nocodelens:

    from turtle import *
    space = Screen()
    malik = Turtle()
    malik.forward(20)
    malik.right(90)
    malik.forward(20)
    malik.right(90)
    malik.forward(20)
    malik.right(90)
    malik.forward(20)
    malik.right(90)
    malik.forward(20)
    malik.forward(20)
    malik.right(90)
    malik.forward(20)
    malik.right(90)
    malik.forward(20)
    malik.right(90)
    malik.forward(20)
    malik.right(90)
    malik.forward(20)
    malik.forward(20)
    malik.right(90)
    malik.forward(20)
    malik.right(90)
    malik.forward(20)
    malik.right(90)
    malik.forward(20)
    malik.right(90)

It is not easy to glance at that program and easily tell that it will draw three squares in a row.
We could make it easier to understand by adding some comments, and some blank lines to break it
into logical sections, but it would still not be fun to read. It also represents a lot of typing.

Now compare that program to this one.

.. activecode:: cspnameprocedures_definingwhy2
    :nocodelens:

    from turtle import *
    space = Screen()
    yessenia = Turtle()

    square(yessenia)            # draws a square with yessenia
    yessenia.forward(20)

    square(yessenia)            # draws a square with yessenia
    yessenia.forward(20)
    
    square(yessenia)            # draws a square with yessenia
    yessenia.forward(20)

It is much easier to read this program and quickly understand what it is doing. It requires
less typing (or copy/pasting) to make this program. And you could modify this program to draw a
fourth square without even understanding how the squares are drawn - ``square`` is an abstraction
that lets you draw a square without worrying about how to actually accomplish that task.

However, this new program doesn't work yet. Try running it if you have not already. You will get
an error message that *"'square' is not defined on line 5"*. Python has no idea what is meant
by ``square``. Before we can run this code, we need to **define** how the ``square`` procedure
works.
