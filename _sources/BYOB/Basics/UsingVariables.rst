.. include:: ../../global.rst


Using Variables
==============================

V\ **ariables** allow us to represent values in our program in a more conceptual way.
Instead of just telling a sprite to ``move 100`` - a hard coded value, we can
give a name to the value 100 like "boxSize" and then tell a sprite to ``move boxSize``.

Our code becomes:

* Easier to read. "boxSize" is more meaningful than the number "100".
* Easier to modify. If we change the definition of boxSize to 150, than any "move boxSize" commands
  will automatically move the new distance.
* More flexible. As the program is running we can modify the value of boxSize to make multiple boxes
  of different sizes using the same code.


.. youtube:: NMOtKmeHgPg
    :height: 315
    :width: 560



.. pseudo_h3:: Checkpoint Exercises
    :class: underlined

Try these exercises to test your understanding and build your programming skills.

Note that there is a variable called ``Pen Size`` that we can use to control how thick lines are and another called ``Pen Color`` that controls the color we see. (They do not have checkmarks, so you can't see their values, but they do have set and change instructions). These checkpoints use these blocks:


.. container:: inlinegroup

  .. image:: Images/CP13a.png

  .. image:: Images/CP13b.png



.. tabbed:: exercise1

    .. tab:: Checkpoint A

        .. image:: Images/CP14a.png
          :class: align-right

        Make a script that draws a square with different color sides. You should *NOT*
        have more than one Move block - use a repeat to draw the square.

        You will need to use ``change pen color by [ ]``

        .. rst-class:: clear

        \

    .. tab:: Sample Answer

        .. image:: Images/CP14a_key.gif


.. tabbed:: exercise2

    .. tab:: Checkpoint B

        .. image:: Images/CP14b.png
          :class: align-right

        Make 5 squares, with each bigger than the last:

        You will need to make your own variable that controls the size of the square currently being drawn.

        Done well, you should use repeat to draw the 5 squares, not make 5 copies of the square code!

        .. rst-class:: clear

        \

    .. tab:: Sample Answer

        .. image:: Images/CP14b_key.gif


.. tabbed:: exercise3

    .. tab:: Checkpoint C

        .. image:: Images/CP14c.png
          :class: align-right

        Make the pen get thicker with each square you draw.

        You will need to use the ``change pen size by ()`` block.

        .. rst-class:: clear

        \

    .. tab:: Sample Answer

        .. image:: Images/CP14c_key.gif
