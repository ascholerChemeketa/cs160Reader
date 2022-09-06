..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. setup for automatic question numbering.

Slicing a List
================================

Now that we know how to iterate through parts of a list, we could use that technique
to copy just part of a list. Say we have a list with the 12 months, and from it we
want to copy out just the summer months (June-August). We know those are months 6-8
(human numbering), which means in computer counting, they will be index 5-7. That
means we need to use ``range(5, 8, 1)`` to loop through them. As we access each one,
we will append it to the ``summerMonths`` list that starts out empty.

.. codelens:: build_months_loop

    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    # Empty list we will build up
    summerMonths = []
    
    # loop though every other index starting from 0
    for i in range(5, 8, 1):
        summerMonths.append( months[i] )
        
    print(summerMonths)

.. index::
    single: list; slice

But, rather than do that work ourselves, there is syntax in Python for asking for part of a list.
Part of a list is known as a **slice**. We ask for a slice in a similar way to asking for a single
item. To get a single item from a list, say the item at index 4, we say ``list[4]``. To ask for
a slice of ``list`` we would say something like: ``list[4:10]`` which says "I want a copy of items
number 4 through 9". Notice that the second value, which is the stopping point, is not included
in the slice.

That means a much easier way to get a list of the summer months would be:

.. codelens:: build_months_slice

    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    # Use a slice to get summerMonths
    summerMonths = months[5:8]
        
    print(summerMonths)

.. note::

    Remember that the slice always stops just before the second index given. ``[5:8]`` only
    slices indexes 5-7.

There are some handy shortcuts we can use when specifying a slice. If you don't give a
second index, like ``[5:]``, it means "to the end of the list". If you use a negative value,
it is counted from the end of the list. ``[-3:-1]`` means "the slice from the third to the
last item up to but not including the last item". ``[-2:]`` would mean "the last two items".

.. activecode:: slice_shortcuts

    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    summerMonths = months[5:8]
    print(summerMonths)

    lastSix = months[6:]
    print(lastSix)

    lastThree = months[-3:]
    print(lastThree)

.. mchoice:: slice_mc
    :multiple_answers:
    :answer_a: [9:]
    :answer_b: [8:12]
    :answer_c: [-4:]
    :answer_d: [-4:-1]
    :correct: b,c
    :feedback_a: Index 9 is for the 10th item, which is "Oct".
    :feedback_b: Correct.
    :feedback_c: Correct.
    :feedback_d: -1 as the stop value will stop before the last item.

    Check all the valid ways to specify the slice that includes "Sep", "Oct", "Nov", "Dec"

.. warning::

    If the end index you give in the slice is less than the start one, like ``[5:2]``,
    you will always get an empty list as a result. Same if you specify a starting index
    past the end of the list by doing something like ``months[15:]``.