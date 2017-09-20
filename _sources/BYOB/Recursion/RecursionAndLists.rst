.. include:: ../../global.rst


Recursion and Lists
==============================

Recursion can provide powerful ways of thinking about processing data structures like lists.

Mergesort is an example of an algorithm that is naturally recursive: How do you sort a list? Sort the first half and the second half, then merge them. How do you sort the first half? Split into two halves and sort those, then merge them. How do you sort those halves? Split them into halves...

This video demonstrates using recursion to build a ``add all numbers in (list)`` block.

.. youtube:: 8zpwg8W780E
    :height: 315
    :width: 560

The link below has a starter file you can use with ``first half of (list)`` and ``second half of (list)`` already built (look under the Variables section for these two blocks).

`http://faculty.chemeketa.edu/ascholer/CS160Old/Files/BYOB/DivideConquerStarter.zip <http://faculty.chemeketa.edu/ascholer/CS160Old/Files/BYOB/DivideConquerStarter.zip>`_

Download the .zip file, then copy the DivideConquerStarter.ypr file that is inside it to your desktop or somewhere. Open it from BYOB (File->Open). If you are using the online SNAP version of BYOB, do the same, but use the Import command in SNAP and then select the DivideConquerStarter.ypr file.

.. figure:: Images/SNAPImport.png
  :figwidth: 60%

  ..

  Importing a file from SNAP


.. pseudo_h3:: Checkpoint Exercises
    :class: underlined


.. tabbed:: exercise1

    .. tab:: Checkpoint A

        **Recursive Product**

        Make a block that does ``multiply all numbers in (list)``. Do NOT use any repeat blocks.


    .. tab:: Hint

        This should only be a minor change to the ``add numbers in (list)`` block.

    .. tab:: Sample Answer

        .. image:: Images/CP44a_key.gif


.. tabbed:: exercise2

    .. tab:: Checkpoint B

        **No Negative Checker:**

        Make a block that reports true if all values in a list are positive or zero. You should NOT use any repeat blocks.

        .. image:: Images/CP44b.gif

        Use the same basic strategy as the ``(list) contains (thing)`` block.


    .. tab:: Hint

        Here is a strategy outline:

        * If there is one item in the list, report true or false based on whether that one thing is > -1 (or greater than or equal to 0 if you want to worry about decimal values). Test this part on one item lists.

        * All numbers are positive in a list if all the numbers in the first half are positive **AND** all the numbers in the second half are positive.



    .. tab:: Sample Answer

        .. image:: Images/CP44b_key.gif
