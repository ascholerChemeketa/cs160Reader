..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. setup for automatic question numbering.
    

Iterating with Indexes
================================

We have seen that it is easy to loop through every item in a list using the ``for value in list:``
syntax. But there are limitation to that approach. What if we want to iterate through only
part of the list? What if we want to iterate through the list in reverse order? What
if we want to change items in the list? The ``for value in list:`` can't do any of these.

Perhaps most surprising is that the ``for value in list:`` can't change values in a list.
This is because when ``value`` is naming a value in the list, making a change just changes
what ``value`` is naming - it does not change the list itself. Watch this codelens program
that attempts to set each item in a list to 0 to see how it does not work:

.. codelens:: cspcollectionscontinued_rangeloop1

    list = [5, 10, 15]
    for value in list:
        value = 0

    print(list)

``value`` takes on the value of each item in ``list``, but it is essentially working with
a copy of the data. Changing ``value`` does nothing to the actual list!

To make this work, or to change the order we iterate through the list. We could try to 
do that with something like:

.. code::

    index[0] = 0 <- first item
    index[1] = 0 <- second item
    index[2] = 0 <- third item

But we don't want to type out each line separately and we want to make sure we do not
use too many or too few indexes. We want to use a counting loop that will automatically
generate all the needed indexes. This can be created by using the ``range`` function and
asking it to generate ``range( len(list) )``. That syntax says: "Get the length of the
list. Then generate the range of numbers from 0 to one less than the length." Which is
exactly what we need. For the example above, ``range( len(list) )`` would generate
``0, 1, 2``, which are the indexes of the three values.

Here is the final version of the more complex loop. 

.. codelens:: cspcollectionscontinued_rangeloop2

    list = [5, 10, 15]
    for index in range( len(list) ):
        print("index is", index)
        print("item in list is", list[index])

Notice that the variable from the ``for`` loop, ``index``, is holding the **index** of
the current item. To work with the "current item", we need to index into the list using
that index: ``list[index]`` will give us the current value.

A common habit among programmer is to use the variable name ``i`` to stand for "index".
Although this seems to violate the general rule of "use meaningful names", because all
programmers know that ``i`` probably means "index" when used in a loop, ``i`` does in
fact have meaning.

This program uses ``i`` as the index variable. In it, we have a list of names that
need to be capitalized. To do this, we loop through the indexes 0-3, access the
value at that index (``names[i]``), call ``capitalize()`` on it, and then store it
back to the same location in the list ``names[i] = ...``:

.. codelens:: cspcollectionscontinued_rangeloop3

    names = ["vu", "reggie", "dana", "serena"]
    for i in range( len(names) ):
        names[i] = names[i].capitalize()

    print(names)


.. activecode:: cspcollectionscontinued_rangeloop4
    :autograde: unittest

    Write an indexed based loop and use it to double each item in the list called ``numbers``.
    You will need to get the existing value, multiply it by two, and store that value back
    into the list.

    ~~~~
    numbers = [3, 5, 7, 12, 3, 5, 0, 5, 8, 9, 10, 8, 7, 7, 2, 6]

    # Your code here
    =====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(numbers[0], 6, "Testing numbers[0]")
            self.assertEqual(numbers[5], 10, "Testing numbers[5]")
            self.assertEqual(numbers[9], 18, "Testing numbers[9]")

    myTests().main()


.. parsonsprob:: cspcollectionscontinued_rangeloop5
    :numbered: left
    :adaptive:
    :practice: T

    The following program should loop through all the items in ``list``. Any values
    that are negative should be changed to be 0. After the negative items have been
    replaced, we want to print the list.

    Arrange and indent the blocks correctly. You will not use them all.
    -----
    list = [-2, 5, 3, -6, 4, 1]
    =====
    for i in range( len(list) ):
    =====
    for i in list: #paired
    =====
        if list[i] < 0:
    =====
        if i < 0: #paired
    =====
            list[i] = 0
    =====
            i = 0 #paired
    =====
    print(list)