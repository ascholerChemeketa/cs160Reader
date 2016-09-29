.. include:: ../../global.rst


Find Smallest in List
==============================

This video introduces an algorithm for looking through a list for a particular value. In this case, we want to find the smallest number in a list.


.. youtube:: HkodIO55zFc
    :height: 315
    :width: 560


Make your own version of the final ``location of smallest`` block (15:30 mark of the video). You will need it for your assignment.

.. note::

  We made a "Location of Smallest in list" block instead of "Smallest Value in list" block because the location is more important than the value. If I know the location of the smallest value, I can do any of these things that need the location:

  .. image:: Images/CP33a.png

  If all I know is the value of the smallest thing, I can't easily delete it or replace it.

  And if I want the value, I can easily get it with ``item (smallestLocation) of (list)``



.. pseudo_h3:: Checkpoint Exercise
    :class: underlined


.. tabbed:: exercise1

    .. tab:: Checkpoint A

        **Largest in List:**

        Turn the ``Location of Smallest in list`` block into a ``Location of Largest in list``. Instead of asking "is this smaller than the smallest thing I have seen" as we look at each value, we need to ask "is this larger than the largest thing I have seen"?

    .. tab:: Sample Answer

        .. image:: Images/CP33c_key.png
