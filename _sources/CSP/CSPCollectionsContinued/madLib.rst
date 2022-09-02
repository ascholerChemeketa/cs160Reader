..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".
    


Making a MadLib Story
===================================

Let's use the ranged based loop of a list to create a MadLib program. MadLibs are stories where
the "player" is asked to provide some words that are then incorporated into the story in
the hopes of creating something amusingly silly.

Our program will start with a story where some placeholder words are in ALL_CAPS. Those are
ones we will ask the user to fill in.

It is much easier to start with our story as one big string. But to loop through the words, looking
for the ones in ALL_CAPS, it will be easier to have it stored as a list where each word is an item
in the list. To turn the string into a list, we will use a new string function: ``split(pattern)``. You
don't have to worry about using it on your own, just recognize that it chops up a string into a list
by making cuts everywhere ``pattern`` is. So ``split(" ")`` breaks up a string at each space.

Code is written to set up the list, add code to loop through the list using a range based loop
and print each item from the list. Your output should have the full story, but with only one word appearing
on each line.

.. activecode:: madlib1
    :autograde: unittest

    Add the loop to output each word of the story.
    ~~~~
    # This string is our story
    story = "We just got back from a pizza party in TOWN where everyone got to choose their own toppings. NAME made FOOD and THING_PLURAL pizza. Kind of weird if you ask me."

    # Chop the string into a list by cutting it at each " "
    storyList = story.split(" ")

    # Your code here to print out each item from storyList
    # Make sure to use a range based loop
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(self.getOutput().strip().split("\n")[0], "We", "Testing first line of output")
            self.assertEqual(self.getOutput().strip().split("\n")[-1], "me.", "Testing last line of output")

    myTests().main()

Now let's identify which words are in ALL_CAPS. To do that, we need to call the ``isupper()`` function on each
word. It returns ``True`` if the word is all upper case and ``False`` if it is not.

.. activecode:: madlib2
    :autograde: unittest

    Modify your program, so instead of printing each word, you print True or False depending on if it is
    ALL_CAPS. Do so by calling ``isupper()`` on each list item and printing out the result. Because each
    item in the list is a string, you can call isupper on it by doing something like:
    ``storyList[index].isupper()``. Your output will look like a long list of FALSE, FALSE, FALSE, TRUE, etc...

    ~~~~
    # Your code here
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(self.getOutput().strip().split("\n")[2], "False", "Testing 3rd line of output")
            self.assertEqual(self.getOutput().strip().split("\n")[9], "True", "Testing 10th line of output")
            self.assertEqual(self.getOutput().strip().split("\n")[11], "False", "Testing 12th line of output")

    myTests().main()

Now we are ready to do something special each time we find an all caps word. We want to replace
those with user input. Because user input is slow to test, we will start by just replacing all
of the upper case words with the text ``"INPUT"``. If we get that working, it will be one more
simple step to use actual user input instead of ``"INPUT"``.

.. activecode:: madlib3
    :autograde: unittest

    Modify your program to use the ``storyList[index].isupper()`` call in the condition of an if.
    If ``isupper()`` results in True, change storyList[index] ``"INPUT"``. (If ``isupper()`` results
    in False, no change is needed.)

    If you get stuck changing the item, look back at the mixed up code problem on the first page of this
    chapter. It uses an if statement to decide which items to change.

    ~~~~
    # Your code here
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(storyList[2], "got", "Testing storyList[2] - should not have changed")
            self.assertEqual(storyList[9], "INPUT", "Testing storyList[9] - should change to INPUT")
            self.assertEqual(storyList[18], "INPUT", "Testing storyList[18] - should change to INPUT")

    myTests().main()

Now you should be ready to actually make your program interactive! This version
is not automatically checked, so make sure to run it and test it by entering
information. This starter code adds two lines that need to  go after your code.
They will turn the list back into a string using ``string.join(list)`` and print it out.
Don't worry about remembering ``join()`` - just recognize that it does the opposite
of split - it turns a list into a string by joining together the items using the
string as "glue" between each item.

.. activecode:: madlib4

    Modify your program so that instead of setting the all caps items to ``= "INPUT"``, you set
    them to ``= input("Please enter " + storyList[index])``. You may need to change ``index`` to
    ``i`` or something else to match the variable you are using in your loop.

    ~~~~
    # Your code here

    # Add these lines below your code
    # Combine all the list items into one string with " " between each item
    story = " ".join(storyList)
    # Print the result
    print(story)
