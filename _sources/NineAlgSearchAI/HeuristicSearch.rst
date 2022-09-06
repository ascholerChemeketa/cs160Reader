.. include:: ../../global.rst

.. index:: artificial intelligence, heuristic*

Heuristic Search
=========================================

There is another problem with the breadth-first search strategy we started with - all the effort involved in checking every possible path. Consider a situation in which each move leads to 20 new moves. In one step we have 20 options to worry about. After 2 steps, we have 20 x 20 = 400 options we need to consider. By seven moves we have over a billion possibilities!

===================  ==============  ==============  ==============  ==============  ==============  ==============
Step #               1               2               3               4               5               6
===================  ==============  ==============  ==============  ==============  ==============  ==============
# of Options         20              400             8,000           160,000         3,200,000       64,000,000
===================  ==============  ==============  ==============  ==============  ==============  ==============

What we need is a way to constrain the search - to explore the "good" possibilities before we worry about the crazy looking ones. Imagine you were doing the *cat → dog* word ladder. You would probably say something like "hmmm, I could turn *cat* into *cot* and that looks like it is closer to *dog*". You then would look at where *cot* could take you before backtracking and trying something like cat → bat or any other possible moves that seemed to take you further away from *dog*. If at some point you got stuck, you would then go back and try some of those moves that you initially ignored.

Searching in this manner, where we use some kind of intuition about which direction looks most promising to guide our exploration, gives us a **heuristic search** algorithm. A **heuristic** is simply a rule of thumb - a shortcut that hopefully allows us to solve a problem more rapidly. For the word ladder, our mental heuristic would be something like *"first try words that have more letters that match the target"*. Because *cot* is only 2 letters off from *dog* we would explore it before we worried about *bat* which is 3 letters off from *dog*.

To experiment with using heuristic search, try the Search Playground again. This time, check the box that says "**Allow Intuition**". Now you will get to see where the destination is, and you are not forced to explore unpromising looking routes. Try searching through a few different maps. Can you successfully find the shortest path without exploring everything?

`Search Playground <../../_static/searchApp/search.html>`__


How would you describe the heuristic (intuition or rule of thumb) you used while exploring maps? It was probably something like "pick the location that is closest to the destination". Did it always work? Or did you sometimes get greedy and skip over options you should have explored? (Try typing in 3142 for the **Map Number** and then press **Reload Map** for an example of one that is easy to get fooled on).