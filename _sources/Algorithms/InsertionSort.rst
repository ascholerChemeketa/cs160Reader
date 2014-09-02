.. include:: ../global.rst


.. index:: 
    pair: sort; insertion

Insertion Sort
=================================

While **Selection sort** gets the job done, it is not the only algorithm that can be used for sorting a list. **Insertion sort** is another relatively straightforward algorithm. It too divides the list into a sorted and unsorted portion, but it sorts cards by shifting each one to the left until it is larger than its neighbor - "inserting" one card at a time into the correct location. Here is a "human algorithm" for using it to sort cards:

.. faux_code::

    1   Get a hand of unsorted cards
    2   Set a marker for the sorted section after the first card of the hand
    3   Repeat steps 4 through 6 until the unsorted section is empty
    4       Select the first unsorted card
    5       Swap this card to the left until it arrives at the correct sorted position
    6       Advance the marker to the right one card
    7   Stop

To see how the Insertion Card Sort Algorithm works, click on the animation below. Pay attention to how the sorted portion is built up. Cards keep swapping until they "find" their resting spot - they do not jump directly to it. Also, note that the sorted portion in this algorithm does not always have the smallest values, just the values that are known to be sorted relative to each other.

.. figure:: Images/insertioncardsort.swf
   :width: 550
   :height: 450

   `Animation used by permission of Virgnia Tech <http://courses.cs.vt.edu/csonline/>`__
    
.. quick_attribution:: VT