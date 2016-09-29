.. include:: ../../global.rst


General Recursion Continued
==============================

This video continues exploring using recursion to implement mathematical recipes.

.. youtube:: zV1JMjAQnh8
    :height: 315
    :width: 560


.. pseudo_h3:: Checkpoint Exercises
    :class: underlined


.. tabbed:: exercise1

    .. tab:: Checkpoint A

        **Power by Hand**

        Here is a mathematical recipe (assumes y is a positive integer) to raise x to the power of y:

        .. image:: Images/CP43a.png

        Below is shown the start of evaluating 2 to the 5th power: Power(2, 5). **By hand**, finish the evaluation -
        each line should be a copy of the previous, but with the Power( ) statement on the previous line evaluated according to the recipe above.

        .. code::

          Power(2, 5) = 2 * Power(2, 4)
                      = 2 * 2 * Power(2, 3)
          ...


        We start with Power(2, 5) - x = 2 and y = 5. The recipe says that since y > 0, Power(2, 5) is really x * Power(x, y - 1) or 2 * Power(2, 4)

        On the next line, we remove the Power(2, 4) and replace it with what it equals. The recipe says that if x = 2 and y = 4, then since y is > 0, the value is x * Power(x, y - 1) or 2 * Power(2, 3)

        At some point, the exponent (y) should become 0. At that point, the value you replace Power( ) with will not have any more Power( )'s in it.

        Since we are calculating 2 to the 5th power, your final expression better equal 32.

    .. tab:: Sample Answer

        .. code::

          Power(2, 5) = 2 * Power(2, 4)
                      = 2 * 2 * Power(2, 3)
                      = 2 * 2 * 2 * Power(2, 2)
                      = 2 * 2 * 2 * 2 * Power(2, 1)
                      = 2 * 2 * 2 * 2 * 2 * Power(2, 0)
                      = 2 * 2 * 2 * 2 * 2 * 1
                      = 32


.. tabbed:: exercise2

    .. tab:: Checkpoint B

        **Power with BYOB:**

        Make a ``(x) to the (y) power`` block in BYOB using the recipe above.

        **You should NOT use any repeats for this task.**

    .. tab:: Sample Answer

        .. image:: Images/CP43b_key.gif
