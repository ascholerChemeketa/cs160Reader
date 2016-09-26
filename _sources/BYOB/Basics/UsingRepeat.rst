.. include:: ../../global.rst


Using Repeats
==============================

Good programmers are lazy in a productive way. They do not like saying the same thing over and over in their code.
Doing so tends to make code harder to write, harder to read and harder to change and maintain.

.. note::

  *The Golden Rule of Programming:*

  If you find yourself writing the same code more than one time (using the same squence of blocks), there is
  almost certainly a better way to do things. You may not know the better way yet, but it is probably out there.


You may have noticed that in the program for the square we drew in the last section there was some
repetition: "move, turn, move, turn, ...". The video below introduces how a repeat block can help us eliminate
that repitition and in the process create a program that is much easier to modify:


.. youtube:: LT_Q4cCFV9c
    :height: 315
    :width: 560



.. pseudo_h3:: Checkpoint Exercises
    :class: underlined

Try these exercises to test your understanding and build your programming skills:

.. tabbed:: exercise1

    .. tab:: Checkpoint A

        .. image:: Images/CP12a.png
          :class: align-right

        Make a script that draws a regular octagon - you should try to draw it with just one Move and one Turn block.

        .. rst-class:: clear

        \

    .. tab:: Sample Answer

        .. image:: Images/CP12a_key.gif


.. tabbed:: exercise2

    .. tab:: Checkpoint B

        .. image:: Images/CP12b.png
          :class: align-right

        Make a script that draws a hexagon composed of six triangles.

        .. rst-class:: clear

        \

    .. tab:: Hint

        This is much easier to draw if you focus on just drawing 6 triangles, rotating a little between each one.
        Don't try to draw the hexagon first.


    .. tab:: Sample Answer

        .. image:: Images/CP12b_key.gif
