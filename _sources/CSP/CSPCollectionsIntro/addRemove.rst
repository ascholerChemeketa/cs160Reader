..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. setup for automatic question numbering.

.. _list-add-remove:

Adding and Removing Items
================================

.. index:: 
    pair: list; append

Sometimes, we do not know all of the items in a list in advance - we want to build up A
list as the program is running. To do this, we can start with a blank list using ``[]``
as our list. And then we can use ``append`` to add things to the end of the list.

.. activecode:: append_demo
    :autograde: unittest
    :practice: T

    This program adds two strings to the list ``words``. Add code to add the word "Carrot"
    to the list after "Banana" but before "Date"

    ~~~~
    words = []

    words.append("Apple")
    print(words)

    words.append("Banana")
    print(words)

    words.append("Date")
    print(words)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(words, ["Apple", "Banana", "Carrot", "Date"], "Testing that you added Carrot")

    myTests().main()

.. index:: 
    pair: list; insert

It is also possible to add items to locations other than the end of the list by using
the ``insert`` function. To use it, we provide an index of where to insert the new value with
the value we want to insert. Try running this sample with codelens:


.. activecode:: insert_demo

    numbers = [10, 20]

    # Add the value 5 at location 0 (start)
    numbers.insert(0, 5)
    print(numbers)

    # Add the value 15 at location 2 (third place)
    numbers.insert(2, 15)
    print(numbers)

.. mchoice:: list_add_remove_mc1
    :answer_a: The item just does not get added
    :answer_b: There is an error and the program stops
    :answer_c: The item is added to the end of the list
    :answer_d: The list is extended to be long enough that there is an item index 200
    :correct: c
    :feedback_a: Try it!
    :feedback_b: Try it!
    :feedback_c: Correct
    :feedback_d: Try it!

    What happens if you use an index that does not exist to insert at? Change the last insert
    in the sample above to insert at location 200 instead of 2. What happens?

To remove items from a list, there are two main options:

* ``pop()`` removes an item from the end of a list. (It "pops" the item off.)
* ``pop(index)`` removes an item from the specified index.
* ``remove(value)`` removes the first copy of the specified value from the list.

This sample shows all three methods:

.. codelens:: remove_demo

    names = ["Steve", "Charlie", "Naomi", "Darcy", "Charlie"]

    # remove first copy of Charlie
    names.remove("Charlie")

    #remove the last item
    names.pop()

    #remove the first item
    names.pop(0)


.. activecode:: add_and_remove_practice
    :autograde: unittest
    :practice: T

    We want the list called alphabet to contain the letters "A", "B", "C", "D" in that order.
    Use a combination of append, insert, remove, and pop to make it have the right values.

    (Do not use ``letters[index]`` to change the existing items.)

    ~~~~
    letters = ["A", "F", "C", "Q", "C"] #don't change this

    # your code here

    print(letters)
    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):
        def testOne(self):
            self.assertEqual(letters, ["A", "B", "C", "D"], "Testing that you have the right list")
            self.assertNotIn("[", "".join(self.getEditorText().split("\n")[1:]), "Testing that you didn't use [ ].")
            self.assertEqual(self.getEditorText().split("\n")[0], 'letters = ["A", "F", "C", "Q", "C"] #don\'t change this', "Testing that you did not change the first line")

    myTests().main()


.. parsonsprob:: build_discount_list
    :numbered: left
    :practice: T
    :adaptive:

    The following program should make the ``discounts`` list contain the values of all the items
    from ``price_list`` after they have been discounted by 50%. To do so, we need to loop
    through the original prices, calculate the discounted price, then append it to the discount
    list.
    
    Put the blocks in the right order and indent them correctly.
    There are some blocks you will not use.

    -----
    price_list = [21.99, 25.99, 19.99, 10.99, 15.99]
    discounts = []
    =====
    for price in price_list:
    =====
        new_price = price * .50
    =====
        discounts.append(new_price)
    =====
    print(discounts)
    =====
    for price in discounts: #distractor
    =====
        price.append(price_list) #distractor
