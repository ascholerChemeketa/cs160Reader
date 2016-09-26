.. include:: ../../global.rst


Blocks (Functions)
==============================

Functions (also called subprocedures or in BYOB, Blocks) are a powerful tool for
building abstractions and reusing code.

The video below introduces them in BYOB:


.. youtube:: bB4J5pT-I3g
    :height: 315
    :width: 560


.. pseudo_h3:: Checkpoint Exercise
    :class: underlined



.. tabbed:: exercise1

    .. tab:: Checkpoint A

        **Triangle Block:**

        Make a block that draws a triangle. It should look like the picture below and clicking it should result in the sprite drawing a triangle.

        .. image:: Images/CP23a.gif


    .. tab:: Sample Answer

        .. image:: Images/CP23a_key.gif


.. tabbed:: exercise2

    .. tab:: Checkpoint B

        **Flexible Block:**

        Make a block (or modify your last one) that draws a triangle of a specified size.
        It should look like the picture below and clicking it should result in the sprite drawing a triangle
        where each side is the length specified in the parameter (input hole in the block).

        .. image:: Images/CP23b.gif

        .. note::

          You should NOT use ``Ask [ ] and wait`` block inside the ``draw triangle`` block. The input to the
          block should come from the parameter (hole where a value can be placed).


    .. tab:: Sample Answer

        .. image:: Images/CP23b_key.gif


.. tabbed:: exercise3

    .. tab:: Checkpoint C

        **Multiple Triangles:**

        Make a block that draws a number of triangles that you can specify via a parameter.

        .. |cp23c1| image:: Images/CP23c1.png

        .. |cp23c2| image:: Images/CP23c2.png

        This: |cp23c1| should result in |cp23c2|

        .. note::

          You should NOT use ``Ask [ ] and wait`` block inside the ``draw triangles`` block. The input to the
          block should come from the parameter (hole where a value can be placed).


    .. tab:: Sample Answer

        .. image:: Images/CP23c_key.gif
