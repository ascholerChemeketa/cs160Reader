
Shuffle A List
================================

Imagine we want to program a card game. We will need the ability to simulate a deck of
cards and select a hand of cards for the player.
If we store the deck as a list: ``["Ace", "2", "3",...]``
we can think of the start of the list as the "top" of the deck and the end of the
list as the "bottom". Dealing a player cards could be as simple as slicing the deck -
make one slice that has the first 5 cards, that is the player hand, and a second
slice with everything else that is the leftover cards. 

However, we don't always want to give the player the cards Ace-4. We need to shuffle
the deck before trying to deal. We will explore two different algorithms for doing a
shuffle before dealing cards.

To reduce the complexity, we will only deal with a deck with 13 cards. However, we will
write the code so that it could work for any size deck. A good practice when problem
solving is to whenever possible, solve a smaller version of the problem before scaling
up to tackle the full version.

Shuffle By Cuts
------------------------

Our first algorithm will be to try shuffling by doing a series of "cuts", where we split
the deck in half and put the "bottom" (second) half "on top of" (in front of) the
"top" (first) half.

The exercises below will guide you through writing the algorithm. In the first part,
we will just make one cut and reassemble the deck so the "top" and "bottom" halves are
reversed.

.. activecode:: list_shuffle_1
    :autograde: unittest

    1. Make a variable called ``cutPoint`` and set it to a random value between 1 and
       the one less than the length of the deck.
    2. Print out ``cutPoint``. Run your program a number of times and make sure it
       gives you values in the range 1-11. You can remove the print once you see
       this is working.
    3. Once you are confident that you are picking a valid cut point, use it to make
       two slices: ``top`` which contains list items 0 up to (but not including) the
       ``cutPoint`` and ``bottom`` that contains from ``cutPoint`` on.
    4. Print out both halves. Again, run your program multiple times to make sure it
       works. You can remove the prints once you see this is working.
    5. Set ``deck`` to be ``bottom`` plus ``top`` and print what deck becomes. 
       That should reverse the order of the two halves. (Doing ``+`` will merge two
       lists into one big list.)
    
    Check here for a review of :ref:`Random Numbers <random-numbers>`. 

    The checks for this program can't verify it works because it is doing something
    random. They will just make sure you have some of the basic elements that are
    needed. Make sure to test your program until you are sure it is working.
    The checks do depend on you using the specified variable names in your code.
    ~~~~
    import random
    deck = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    # Your code here
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertRegex(self.getEditorText(), r"random.randrange\([^,]*,[^\)]*\)", "Testing that use random.randrange")
            self.assertRegex(self.getEditorText(), r"cutPoint.*=.*", "Testing that have cutPoint and initialize it")
            self.assertRegex(self.getEditorText(), r"top.*=.*", 'Testing that you have a "top" variable')
            self.assertRegex(self.getEditorText(), r"deck\[\s*0\s*:\s*cutPoint\s*\]", 'Testing that make the "top" cut correctly')
            self.assertRegex(self.getEditorText(), r"bottom.*=.*", 'Testing that you have a "bottom" variable')
            self.assertRegex(self.getEditorText(), r"deck\[\s*cutPoint\s*:.*\]", 'Testing that make the "bottom" cut')

    myTests().main()

At this point, your program should print out a deck where part of the back has been moved
to the front. So hopefully, if we repeat that process a bunch of times, the deck will keep
getting chopped up differently and become more and more jumbled.

Let's test that.

.. activecode:: list_shuffle_2
    :autograde: unittest

    1. Put your existing code in a loop that repeats the whole process 10 times.
    
    ~~~~
    import random
    deck = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    # Your code here
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertRegex(self.getEditorText(), r"for\s+.*\s+in\s+range", "Testing that you added a range based loop.")

    myTests().main()


.. mchoice:: shuffle_mc_1
    :answer_a: Poorly. New cuts seem to "fix" previous cuts and not compound on each other.
    :answer_b: OK. Neighbor values like 4/5 or 7/8 tend to stay next to each other, but the deck is getting more mixed up.
    :answer_c: Really well.
    :correct: a
    :feedback_a: Correct. This is actually a really bad way to shuffle cards. Cutting the deck 10 times (or a million) is no more random than cutting it just once!
    :feedback_b: Really???
    :feedback_c: Really???

    How does the method seem to work?


Shuffle By Move To Back
------------------------

The second algorithm we will try will be to pick one card at random from the deck
(other than the last card) and move it to the end of the deck. On its own that
won't do much, but maybe if we repeat it a bunch of times, it will work.

The exercises below will guide you through writing the algorithm.

.. activecode:: list_shuffle_3
    :autograde: unittest

    1. Make a variable called ``selectIndex`` and set it to a random value between 0
       and 2 less than the length of the deck. (Since the last card is length - 1
       and we do not want to select it).
    2. Print ``selectIndex`` and make sure it gives valid numbers each time you run the program.
    3. Copy the card at that location of ``selectIndex`` to a variable ``removed``.
       Then use the ``.pop()`` function to remove that item from the ``deck``.
       Here is :ref:`a link to the page on using pop on a list <list-add-remove>`
       if you need to review.
    4. Print ``removed`` and ``deck``. Make sure the card you "removed" is no longer in the deck.
    5. Append the removed card to the end of the deck. Print the deck and verify that
       like one random card was moved to the end. Here is 
       :ref:`a link to the page on using append on a list <list-add-remove>`.

    The checks for this program can't verify it works because it is doing something
    random. They will just make sure you have some of the basic elements that are
    needed. Make sure to test your program until you are sure it is working.
    The checks do depend on you using the specified variable names in your code.
    ~~~~
    import random
    deck = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    # Your code here
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertRegex(self.getEditorText(), r"random.randrange\([^,]*,[^\)]*\)", "Testing that use random.randrange")
            self.assertRegex(self.getEditorText(), r"selectIndex.*=.*", "Testing that have selectIndex and initialize it")
            self.assertRegex(self.getEditorText(), r"removed.*=.*", "Testing that have removed and initialize it")
            self.assertRegex(self.getEditorText(), r"\[\s*selectIndex\s*\]", "Testing that you access item selectIndex from the deck")
            self.assertRegex(self.getEditorText(), r"deck.pop\(\s*selectIndex\s*\)", 'Testing that you call remove on the deck and remove selectIndex')
            self.assertRegex(self.getEditorText(), r"deck.append\(\s*removed\s*\)", 'Testing that you call append on the deck and append removed')

    myTests().main()


Now we will repeat the process. Since we are only moving one card at a time, doing 10 repetitions
probably won't be enough. But let's start with that and see if the method looks like it is working
before we scale it up to more repetitions.

.. activecode:: list_shuffle_4
    :autograde: unittest

    1. Put your existing code in a loop that repeats the whole process 10 times.
    
    ~~~~
    import random
    deck = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    # Your code here
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertRegex(self.getEditorText(), r"for\s+.*\s+in\s+range", "Testing that you added a range based loop.")

    myTests().main()

.. mchoice:: shuffle_mc_2
    :answer_a: Poorly. Items seem to drift back to their initial positions after being moved.
    :answer_b: OK. But there are still really long runs of consecutive cards (like 2-6 all in order).
    :answer_c: Really well.
    :correct: c
    :feedback_a: Things should be more jumbled up than that.
    :feedback_b: It's possible you saw this, but only if you got unlucky. Try running the program again.
    :feedback_c: This is pretty effective, though it would help to repeat the process more than 10 times.

    How does this new method seem to work?

Of course if we really wanted to prove which method was the better way to shuffle we would need
to create a measurement of randomness and then test how "random" the results of the different
algorithms are. We might also need to do this to figure out the optimum number of repetitions
for any particular algorithm. 
After a certain point, once the deck is well shuffled, running any shuffle algorithm can't 
make things any more random - it can just make a different random ordering. (The optimal number of
repetitions for the first method we tried is just 1. Multiple cuts will never make the deck more
random than just doing one cut!) But the "eye test" is good enough to identify that our second
algorithm is obviously superior.
