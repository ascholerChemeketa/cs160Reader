..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../csp_global.rst

Complex Conditional Dangers
==================================================

A common mistake when trying to use ``and`` or ``or`` is to write things in the way we would
in English or in math class.

In natural (human) languages, if I want to say that the color of a car can be blue or green,
I would only mention the car once: "The car can be blue or green." If you try to do that in Python
your program will not work as expected:

.. activecode:: bad_compound_or

    color = "red"
    if color == "blue" or "green":
        print("That is a valid color.")
    print("Done")

.. mchoice:: 12_5_bad_or
    :answer_a: Produces an error message
    :answer_b: Prints "That is a valid color." then "Done"
    :answer_c: Prints "Done"
    :correct: b
    :feedback_a: Try running it!
    :feedback_b: Correct
    :feedback_c: Try running it!

    What does the code sample above do?

Why does that happen? In English, we would think of "color equals" as talking about
"blue or green". But in Python, the ``or`` splits ``color == "blue"`` from ``"green"``. Each
of those is evaluated on their own. Does ``color == "blue"``? No that is False. How about
``"green"``. Is that True or False??? 

It turns out that any value that is not the number 0 or the empty string ``""`` is considered
True in Python. So ``green`` counts as ``True``. Since the value on the left of ``or`` is ``False``,
and the value on the right is ``True`` (according to Python), the final value of the expression
is ``True``.

.. raw:: html

    <table class="table center">
        <tr>
            <td width="33%">color == "blue"</td>
            <td width="33%">or</td>
            <td width="33%">green</td>
        </tr>
        <tr>
            <td>False</td>
            <td>or</td>
            <td>True</td>
        </tr>
        <tr>
            <td colspan="3">True</td>
        </tr>
    </table>

The only way to get the logic we want, is to make sure both the left and right side of the ``or``
are expressions that make sense on their own as logical expressions. We have to repeat the
``color == `` part so that ``"green"`` is not evaluated on its own:

.. activecode:: good_compound_or

    color = "red"
    if color == "blue" or color == "green":
        print("That is a valid color.")
    print("Done")

.. warning::

    The items on both side of an ``and`` or ``or`` MUST be logical expressions (True/False).
    You can't have something that looks like ``... or "blue"`` or ``... and 10`` or that part
    will just count as True.
