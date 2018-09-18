.. include:: ../global.rst


.. index:: 
    pair: sort; selection

Selection Sort
=================================

S\ **election sort** works by splitting a list into two portions - a sorted part and an unsorted part. Initially, everything is in the unsorted part, but one card at a time, we select the smallest remaining unsorted item and move it to the beginning of the unsorted portion, thereby making it sorted. 

Put into an algorithm for a human to sort a hand of playing cards, it might look like this:

.. faux_code::

    1   Get a hand of unsorted cards
    2   Set a marker for the unsorted section at the front of the hand
    3   Repeat 4-7 until one card remains in the unsorted section
    4       Compare all unsorted cards
    5       Select the smallest unsorted card
    6       Swap this number with the first card in the unsorted section
    7       Advance the marker to the right one card
    8   Stop

To see how the Selection Card Sort Algorithm works, watch the video below. As the sort progresses, the appropriate step of the algorithm will be highlighted in the bottom left panel of the animation. To divide the sorted and unsorted sections of our hand, we use a black vertical bar. On each loop through steps 4-7 we will keep track of the current cards we are comparing by pointing to them with a pair of human hands. The left hand will point to the smallest card seen far, and the right hand will point to the card currently being considered.

.. youtube:: TfOBNNNZPbM
   :height: 315
   :width: 560

*Animation used by permission of Virginia Tech*

    
.. quick_attribution:: VT