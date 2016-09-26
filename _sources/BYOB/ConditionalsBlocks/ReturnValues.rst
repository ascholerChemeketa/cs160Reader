.. include:: ../../global.rst


Blocks that Return Values
==============================

Sometimes what we want a block to do does not result in something visible (like drawing on the screen),
but the calculation of some piece of data that the rest of the program needs.

When a block needs to come up with an answer and pass that back to the location it was in, we call the
block a **Reporter**. The special **Report** block is what we use to say *"here is the answer produced by the block"*
(in other programming languages the keyword **return** is often used instead of report).

The video below introduces reporters:

.. youtube:: YLXdJ9JfA6w
    :height: 315
    :width: 560


.. pseudo_h3:: Checkpoint Exercise
    :class: underlined



.. tabbed:: exercise1

    .. tab:: Checkpoint A

        **Add three values:**

        Make a block that takes in three numbers and report their sum (a 3 input + block)

        .. image:: Images/CP24a.gif


        .. note::

          You should NOT use ``Ask [ ] and wait`` block inside the ``add [ ], [ ] and [ ]`` block. The input to the
          block should come from the parameters (holes where a value can be placed).


          You should NOT use ``Say [ ]`` block inside the ``add [ ], [ ] and [ ]`` block. Give the output with ``report [ ]``


    .. tab:: Sample Answer

        .. image:: Images/CP24a_key.gif


.. tabbed:: exercise2

    .. tab:: Checkpoint B

        **Negate:**

        Make a block that takes in a number and negates it (report 0 - the input).

        The picture below shows it being used by itself, with the result of a ``[ ] + [ ]`` as its input,
        and with its reported value being used in another block. The correct outputs from top to bottom are: -5, -6, -30.

        .. image:: Images/CP24b.gif

        .. note::

          You should NOT use ``Ask [ ] and wait`` or ``Say [ ]`` blocks inside your block.

          Input should come from parameters, output should be handled with ``report [ ]``


    .. tab:: Hint

      You should not have to worry about HOW the block is being used as you write your code inside of it - your job inside the
      block is always the same: take the parameter (input value), subtract that from 0, report back your answer.


    .. tab:: Sample Answer

        .. image:: Images/CP24b_key.gif


.. tabbed:: exercise3

    .. tab:: Checkpoint C

        **Pythagorean:**

        Make a block that takes in two inputs a and b. It should treat them as the legs of a right triangle and calculate the length of the hypotenuse c using c = :math:`\sqrt{(a^2+b^2)}`.

        .. image:: Images/CP24c.gif

        |br|
        There is a square root block you can use to help do the math that looks like:

        .. image:: Images/CP24c2.png

        .. note::

          You should NOT use ``Ask [ ] and wait`` block inside the ``draw triangles`` block. The input to the
          block should come from the parameter (hole where a value can be placed).


    .. tab:: Sample Answer

        This version uses two variables: ``aSquared`` and ``bSquared`` to store work as we go. You could do all the work in one set of nested blocks, but that makes it harder to debug when something goes wrong.

        .. image:: Images/CP24c_key.png
