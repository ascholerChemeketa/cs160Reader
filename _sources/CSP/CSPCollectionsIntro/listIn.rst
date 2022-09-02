..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

In and Not In
=================

.. index::
    pair: list; in 
    pair: list; not in 

To check if an item is in a list, we can use the ``in`` operator. To check if something is
not in a list, we can use ``not in``:

.. activecode:: list_in

    inviteList = ["Dora", "Rex", "Humberto", "Devon"]

    if "Dora" in inviteList:
        print("We invited Dora")

    if "Joe" not in inviteList:
        print("We forgot to invite Joe")

Because ``in`` and ``not in`` are opposites, we can often use just one or the other and
handle the other case with else:

.. activecode:: list_in_input

    inviteList = ["Dora", "Rex", "Humberto", "Devon"]
    name = input("Enter a name to check against the list:")

    if name in inviteList:
        print("We invited", name)
    else:
        print("We forgot", name)