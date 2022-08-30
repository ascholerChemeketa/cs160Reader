..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

Finding the Largest or Smallest Value
==========================================

Another common pattern for working with lists is finding the largest or smallest value. We saw
an example of code to do this earlier, but let's break down the important parts of this recipe.

We need to have a "tracking variable" that will store the largest (or smallest value we have seen).
The easiest way to initialize that variable is to use the first value from the list (index 0).
When we are starting, the first value is the largest (or smallest) we have seen. 

We then loop through the values and compare each to the highest value. If the current value is
higher than the largest we have seen (or smaller than the lowest), we change our tracking variable
to hold that new "best" value.

.. activecode:: find_max_list
    :autograde: unittest
    :practice: T

    This program is designed to find the highest value. It works correctly - you can run watch
    it run in code lab to see step by step how it does its job.
    
    Modify it to find the lowest value:

    * Change the tracking variable's name to ``lowest``
    * Change the comparison used in the if. If the current score is lower then the ``lowest``, we have
      found a new lowest value.

    ~~~~
    scores = [82, 95, 92, 76, 98, 84, 89, 92]

    # Pick a starting value - the first value in the list
    highest = scores[0]

    # Loop through all the values
    for score in scores:
        # If the value is larger than the highest value, change the highest to match it
        if score > highest:
            highest = score
    
    print(highest)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(lowest, 76, "Testing that lowest was set to the right value.")
            self.assertNotIn("76", "".join(self.getEditorText().split("\n")[1:]), "Testing that you didn't hardcode the answer.")

    myTests().main()


.. note::

    If we are not sure that the list has any items, we can't start with the first item. In that case 
    we can start with some value that is so low (or high as appropriate) we are confident the first item
    we do look at will be "better" and replace the starting one. 
    
    The program above could use 0 as the initial value for ``highest`` - the first value we see would
    be sure to be higher. But once we change the program to look for the lowest, we would have to
    change the starting value to 101 or something large to guarantee that any real values we looked at
    would be lower.
    
    This is trickier to get right than just starting with the first value, so we won't need it unless
    we have to.


Sometimes the max or min pattern might need to be modified to work with values calculated
from each item. Here is an example of adapting the basic recipe to find the longest name
in a list of names:

.. activecode:: find_longest_name

    names = ["Ray", "Jessie", "Brittany", "Flora", "David"]

    # Assume first name is longest
    longestName = names[0]

    # Loop through all the values
    for name in names:
        # If current name is longer than the 
        if len(name) > len(longestName):
            longestName = name

    print(longestName)