..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst

Defining Procedures - How
===========================

.. index::
    single: def
    pair: procedure; definition

How does Python know what to do when we call functions like ``abs`` or procedures like
``alex.forward(50)``? Someone had to **define** them. **Defining** a new procedures or
function, associates a name with a name with a sequence of steps.

In Python, we define a new procedure or function with the keyword ``def``. To use def, we also need
to specify: a name for the procedure, a list of its inputs, and the instructions the procedure will
perform in this format:

.. code::

    def ProcedureName(Input1, Input2, Input3, ...):
        Instruction1
        Instruction2
        ...

.. index::
    pair: procedure; body
    pair: function; body

Key things to pay attention to:

* The procedure name should obey the same rules as other names. Both syntax rules (no spaces or
  odd characters) and style conventions (camelCase or snake_case). Like other names, it should
  be meaningful - it should describe what task it performs. 
* The inputs (called parameters) are always inside ()
* There may be multiple inputs - if there are, they are separated by commas. There may also
  be just one input or even no inputs.
* There is a : after the input list.
* The instructions that are part of the procedure or function are indented. These instructions
  are known as the function's **body**.

Here is a definition for the ``square`` procedure we tried to use on the last page. The square
procedure takes one input (called ``turtleName``). It has 8 instructions in its body. Try running
this code sample:

.. activecode:: Square_Def
    :nocodelens:

    def square(turtleName):
        turtleName.forward(100)
        turtleName.right(90)
        turtleName.forward(100)
        turtleName.right(90)
        turtleName.forward(100)
        turtleName.right(90)
        turtleName.forward(100)
        turtleName.right(90)

If you are wondering why the *Run* button didn't seem to do anything, all that the program did
was define the procedure ``square`` which takes a ``turtleName`` as input. The code never actually
told Python to actually do the square procedure!

.. warning::

    Remember - defining a procedure or function tells Python **HOW** to do a particular job. It
    does NOT tell Python to actually do the job. To **do** the procdeure or function, we must call
    the procedure.

.. index::
    pair: procedure; call

We call a procedure by using its name, and then giving it the right number of inputs. Our ``square``
function requires one input - the name of the turtle that should make a square - so when we call ``sqaure``
we must provide the name of a turtle.

This code sample defines our function, creates a turtle, and then calls the square function and gives
it our turtle as input:

.. activecode:: Square_Call
    :nocodelens:

    # define HOW to do a square
    def square(turtleName):
        turtleName.forward(100)
        turtleName.right(90)
        turtleName.forward(100)
        turtleName.right(90)
        turtleName.forward(100)
        turtleName.right(90)
        turtleName.forward(100)
        turtleName.right(90)

    # make a turtle and do the square procedure with it
    from turtle import *
    space = Screen()
    malik = Turtle()
    square(malik)           # call the square procdure, use malik as the input



.. mchoice:: 5_3_1_Functions_Q1
   :answer_a: square(lilly)
   :answer_b: lilly.square(turtleName)
   :answer_c: lilly.square()
   :answer_d: square(turtleName)
   :correct: a
   :feedback_a: Correct.
   :feedback_b: Square is a standalone function. We do not call it using dot notation.
   :feedback_c: Square is a standalone function. We do not call it using dot notation.
   :feedback_d: When we call this function, we need to give it a particular turtle as its
        input. lilly is the name of the turtle we want to use. 

   Given the definition of the ``square`` function above, which is the correct way to make
   a square using a turtle ``lilly``?