.. include:: ../../global.rst


List Basics & Swap Block
==============================

This video introduces the basics of working with lists in BYOB:

.. youtube:: FnOe7EJYEYU
    :height: 315
    :width: 560

.. note::

  **SNAP (online BYOB) Users:**

  SNAP does not have a "Make a List" button. Instead, you make a normal variable:

  .. image:: Images/CP31SNAP1.png

  Then you use the set block to set it to a list:

  .. image:: Images/CP31SNAP2.png

  |br|

  .. image:: Images/CP31SNAP3.png

  |br|

  .. image:: Images/CP31SNAP4.png


.. pseudo_h3:: Checkpoint Exercises
    :class: underlined


.. tabbed:: exercise1

    .. tab:: Checkpoint A

        **List Shuffle:**

        Make a copy of the ``swap`` block shown in the video (the 14:07 mark of the video has the final version of the code).

        Test your swap block by making a shuffle program. Make a list called ``mylist`` containing five values (A, B, C, D, E will work) and two variables: ``randomIndexA`` and ``randomIndexB``.

        .. image:: Images/CP31a.png

        Then make a script (block or just plain code) to mix up the values. Then implement this shuffle algorithm:

        .. faux_code::

        	Set ``randomIndexA`` to (pick random (1) to (length of ``mylist``)
        	Set ``randomIndexB`` to (pick random (1) to (length of ``mylist``)
        	Swap (``randomIndexA``) and (``randomIndexB``) in (``mylist``)

        Every time you run the script, two items in ``mylist`` should switch places. Once it is working, add a ``repeat`` block to make the
        process repeat 20 times. That should do a pretty good job of shuffling the list every time you run the algorithm.

        .. note::

          This algorithm should be using the ``swap`` block you already wrote. Do not reimplement the logic of swap, that defeats the purpose of having a block!!

    .. tab:: Sample Answer

        .. image:: Images/CP31a_key.gif


.. tabbed:: exercise2

    .. tab:: Checkpoint B

        **Middle Item:**

        Make a reporter block that reports the middle value of a list.

        Setup:

        .. image:: Images/CP31b3.png
          :class: align-right

        #. Make a list ``scores`` that looks like the picture to the right.

        #. Make a block |CP31b1|. The inside should look like |CP31b2|.

        #. Setup a call to middle item of ``scores`` so you can test the block as you make it: |CP31b4|.

        .. note::
          :class: clear

          Although you are testing with ``scores`` we want this to work on any list.
          Do NOT use scores inside the block. Inside the block use |CP31b5| anywhere you want to talk about "the list".

        .. |CP31b1| image:: Images/CP31b1.png
        .. |CP31b2| image:: Images/CP31b2.png
        .. |CP31b3| image:: Images/CP31b3.png
        .. |CP31b4| image:: Images/CP31b4.png
        .. |CP31b5| image:: Images/CP31b5.png

        Algorithm:

        *(Step 4 is the final goal, steps 1-3 work towards the final solution in a way that allows you to test out what you are building)*

        #. Have the block report the length of list … try changing the number of scores in the list and make sure your block always reports the correct length.

        #. Have the block report the length divided by 2. Test it.

        #. We don't want values like 2.5 - we need to round those. So make the block report round(length / 2). ``Round`` is a green reporter block that is already built into BYOB. For a list of length 5, you should get 3. For a list of length 4, you should get 2. This is the ``middleLocation`` - you might want to make a variable to store it in.

        #. Now, instead of reporting that ``middleLocation``, report the ``item at the (middleLocation) in (list)``. Once again, try changing the number of items in the list and make sure the block always reports the middle one.


    .. tab:: Answer #1

      .. image:: Images/CP31b3_key.png


    .. tab:: Answer #2

      .. image:: Images/CP31b4_key.png

    .. tab:: Answer #3

        .. figure:: Images/CP31b5a_key.png

          ..

          No variable

        .. figure:: Images/CP31b5b_key.png

          ..

          Using variable


    .. tab:: Answer #4

        .. figure:: Images/CP31b6a_key.png

          ..

          No variable

        .. figure:: Images/CP31b6b_key.png

          ..

          Using variable
