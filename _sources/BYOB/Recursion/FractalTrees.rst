.. include:: ../../global.rst


Fractal Trees
==============================

Watch this video about using recursion to draw fractal trees.

**Don't worry about building each version of the tree block!** The first couple of ``draw tree blocks`` are just showing off what
we want to happen and why solving the problem without recursion is going to be hard. Just watch the first 15 minutes or so of the video.

You will want to make your own copy of the ``tree of ( ) levels with ( ) size`` that is near the end of the video.

.. youtube:: DxppW7tF8pk
    :height: 315
    :width: 560


.. warning::

  Any time you modify the recursive tree block, make sure your turns cancel each other out. If you do not cancel out the turns, the sprite will go all over the place.

  This is good:

  .. faux_code::

    Left 15
    Left 15
    Right 30 (30 total left, 30 total right)

  So is this:

  .. faux_code::

    Left 40
    Right 60
    Left 20 (60 total left, 60 total right)

  This is not:

  .. faux_code::

    Left 20
    Right 40 (end up turning right 20 more than left!)

.. pseudo_h3:: Checkpoint Exercises
    :class: underlined


.. tabbed:: exercise1

    .. tab:: Checkpoint A

        **Quad Branch:**

        Modify the recursive tree recipe to make something with 4 short branches.

        .. image:: Images/CP41a.png

    .. tab:: Sample Answer

        .. image:: Images/CP41a_key.gif


.. tabbed:: exercise2

    .. tab:: Checkpoint B

        **Leaning Tree:**

        Modify the recursive tree recipe to make something that leans to the side.

        .. image:: Images/CP41b.jpg

    .. tab:: Sample Answer

        .. image:: Images/CP41b_key.gif
