..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. setup for automatic question numbering.

Iterating Parts of a List
================================

Recall that the ``range`` function has a version that looks like: ``range(start, end, change)``.
It produces a sequence that begins with the ``start`` value, increases by ``change`` at each step,
and stops when it hits ``end`` (but will not include the ``end`` value). 

We can use that to do things like iterating through every other item in a list. This
program does exactly that by starting from 0 and using a change value of 2. This means it visits
indexes 0, 2, 4...

.. activecode:: cspcollectionscontinued_rangechange1

    numbers = [8, 9, 7, 10, 6, 10, 7, 4]

    total = 0
    
    # loop though every other index starting from 0
    for i in range(0, len(numbers), 2):
        print("i is", i, "- Value at i is", numbers[i])
        total = total + numbers[i]
        
    print("Total is", total)

.. mchoice:: cspcollectionscontinued_rangechange2
    :correct: b
    :answer_a: Change the range to range(0, len(numbers), 3)
    :answer_b: Change the range to range(1, len(numbers), 2)
    :answer_c: Change the range to range(0, len(numbers), 1)
    :answer_d: Change the range to range(1, len(numbers), 3)
    :feedback_a: No, that would access indexes 0, 3, 6...
    :feedback_b: Yes, just by starting at 1, then skipping 2 each time, we'd collect the odds
    :feedback_c: No, that would access indexes 1, 2, 3...
    :feedback_d: No, that would access indexes 1, 4, 7...

    Which of these changes to the program would give you just the items at odd indexes
    in a list? (indexes 1, 3, 5... which are for the values 9, 10, 10, 4 in the list above)

Or maybe we want to only iterate through half of the list. We can specify a range that does
not start at 0 and end at ``len(list_name)``.

.. activecode:: cspcollectionscontinued_rangechange3
    :autograde: unittest

    The current code loops through just the first half of the list. It calculates half of
    the length of the list and uses that as the ``end`` value in the range function call.
    If the list length was 5, we would not want to call the halfway point 2.5 There is no
    index 2.5 in a list! So when calculating half the length we will use integer division
    (``//``) to make sure we get a whole number answer.

    Modify the code to loop through just the second half of the list.

    ~~~~
    numbers = [1, 2, 3, 4, 5, 6, 7, 8]

    listLength = len(numbers)
    halfway = listLength // 2   # // is integer division

    for i in range(0, halfway, 1):
        print("i is", i, "- Value at i is", numbers[i])
        
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(self.getOutput().split("\n")[0], "i is 4 - Value at i is 5", "Testing first line of output")
            self.assertEqual(self.getOutput().split("\n")[3], "i is 7 - Value at i is 8", "Testing last line of output")

    myTests().main()