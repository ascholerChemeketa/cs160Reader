..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../CSP/csp_global.rst
.. include:: ../global.rst

Program Implementation - 1
=========================================

Now we want to start building and testing the actual code. We will start with the
low-level procedures that do not depend on anything else. Then once we are sure
they are working, we will build higher-level procedures that depend on them. This
strategy is known as **bottom up implementation**.

A critical part of successfully building a program is testing as we go. We need
to make sure that each of our procedures actually does its job before we try
to use it to do something more complicated.

.. warning::

    Remember, debugging code is often harder than writing it in the first place.
    It is much easier to find and fix errors in small blocks of code than in a giant
    program.

My lowest-level procedure was ``rectangle``, so let's start building that. In the sample
below, I have attempted to write the procedure.

.. index::
    single: precondition

I have done a few things to make it easier to use the rectangle procedure. First,
I have it put the pen down and do ``begin_fill`` at the start and pick the pen back up
and ``end_fill`` at the end. This means my procedure does not depend on other code having
already having set up the pen. Second left a comment at the start of the procedure reminding
myself of assumptions I have made - in this case that the turtle is facing East. An
assumption that is made by a procedure is known as a **precondition** to the procedure -
it is something that must already be true when we start for the procedure to work correctly.

I'll also write some code to test it. I will try to use my procedure to draw a few different
rectangles - first a 50x50 rectangle (a square), followed by a 10x100 narrow But
tall rectangle. Try the code:

|turtle_ref|

.. activecode:: program_implementation_1
    :nocodelens:

    def rectangle(turtle, width, height):
        # Assumes turtle faces East to start with
        turtle.pendown()
        turtle.begin_fill()
        turtle.forward(width)
        turtle.right(90)
        turtle.forward(width)
        turtle.right(90)
        turtle.forward(height)
        turtle.right(90)
        turtle.forward(height)
        turtle.right(90)
        turtle.end_fill()
        turtle.penup()

    from turtle import *
    space = Screen()
    steve = Turtle()
    steve.speed(10)
    steve.fillcolor("light blue")
    rectangle(steve, 50, 50)                # try to draw a 50x50 rectangle
    rectangle(steve, 10, 100)               # try to draw a 10x100 rectangle

It looks like there is a bug! The square seemed to work, but not the narrow/tall
rectangle.

See if you can fix the ``rectangle`` code. You might want to comment out or
remove the line that says ``rectangle(steve, 50, 50)`` so you can focus just
on the case that is causing problems - the 10x100 rectangle. If you get stuck,
you can peek ahead at the next page. (Hint: you should need to change two lines.)

.. pseudo_h2:: Discussion

Once you fix my bug, the procedure works just fine. But we could improve it. Here
some ideas that would arguably make it better:

* It could take the color to draw as a parameter and then do ``fill_color`` to set
  the color inside ``rectangle``. This way, the caller could just say
  ``rectangle(steve, 50, 50, "light blue")`` and not worry about doing the
  ``fill_color`` step itself.
* Turtle's have a ``setheading`` command. Instead of assuming a **precondition**
  that the turtle is facing East, we could have ``rectangle`` use to face the
  turtle East at the start of the procedure.

The reason most programmers would see these as improvements is they make the
procedure easier to use correctly (by removing a precondition), or they make it
more powerful (having it take care of the fill color). But, it is possible to
overcomplicate a procedure by trying to make it too general. 

Designing good code is often a balancing act. There is never one right design for a complex
problem. But there are designs that are better and designs that are worse. We
seek designs that are the best possible combination of flexible, simple, and
robust.
