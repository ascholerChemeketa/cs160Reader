.. include:: ../global.rst

.. index:: binary addition

Binary Addition
======================================================

With slight modifications can use our normal algorithms for doing binary math. Take addition for example. We are familiar with adding base ten numbers column by column, carrying to the next column any time we get a value of 10 or more in the present column. In base two, each column can only store a 0 or a 1. So any value over 1 means we have to carry. 2 (:math:`{10}_2`) means "zero in this column, carry a 1", 3 (:math:`{11}_2`) means "one in this column, carry a 1", 4 (:math:`{100}_2`) means "carry a 1 two columns over", etc...

.. raw:: html

          <table width="360" border="0" bordercolorlight="#FFFFFF" bordercolordark="#666666" bgcolor="#dff0d8" cellpadding="2" cellspacing="0">
        <tbody>
        <tr>
          <td width="60">
            <pre><b>

    0
 <u>+  0</u>
    0</font></b></pre>
          </td>
          <td width="60">
            <pre><b>

    0
 <u>+  1</u>
    1</font></b></pre>
          </td>
          <td width="60">
            <pre><b>

    1
 <u>+  0</u>
    1</font></b></pre>
          </td>
          <td width="60">
            <pre><b>

    1
 <u>+  1</u>
   10</font></b></pre>
          </td>
          <td width="60">
            <pre><b>
    1
    1
 <u>+  1</u>
   11</font></b></pre>
          </td>
          <td width="60">
            <pre><b>   1
    1
    1
 <u>+  1</u>
  100</font></b></pre>
          </td>
        </tr>
      </tbody></table>

For multi-digit numbers, simple work from right to left, adding each column and carrying as necessary:

.. figure:: Images/binaryaddition.swf
   :alt: Binary Addition Animation
   :figwidth: 100%
   :width: 550
   :height: 350

   `Animation used by permission of Virgnia Tech <http://courses.cs.vt.edu/csonline/>`_


.. index:: ! overflow

.. pseudo_h3:: Overflow
    :class: underlined


.. sidebar:: Real world overflow

    Real software can have bugs when the developers do not use enough bits to represent numbers. Youtube engineers had to `add more bits to the storage <https://www.wired.com/2014/12/gangnam-style-youtube-math/>`_ for view counts of the video Gangnam Style when the view counter for the video was threatening to overflow the 32 bits they had originally used.

    You can see the same kind of bug `at work in the game Hearthstone. <http://www.codeproject.com/Articles/802368/Integer-Overflow-in-Hearthstone>`_.




One thing we do have to watch out for any time we have a fixed number of bits to represent numbers is **overflow**. That is when a value becomes too large to store in the bits we have. When we are doing math on paper, we can add as many digits as we need. But when an electric circuit is doing math, there are a fixed number of digits that can be represented. For example, say we are using 4-bit numbers and we try to add 9 + 9 (:math:`{1001}_2` + :math:`{1001}_2`) - any bits past 4 need to be discarded.

.. faux_code::

    \ :red:`1  1`    (Carries)
    \  1001   (9)
    \ :underlined:`+1001`   (9)
    \ 10010   (18)
    \ Keep only the last 4 bits:
    \  0010   (2 !?!)

9 + 9 gave us just 2 because we can not store the bit that should represent 16. This is an overflow error. Circuits in computers have to detect when there is a carry out of the last digit so it can signal an error and software developers have to be careful to watch for these errors. Computers use many more than 4-bits to store each number, but any fixed representation will have limits to how big a value can be stored.

.. rst-class:: clear

.. pseudo_h4:: Self Check
    :class: underlined


.. mchoice:: binarymath_1
    :answer_a: 1102
    :answer_b: 1010
    :answer_c: 1000
    :answer_d: 1100
    :correct: d
    :feedback_a: There are no 2's in binary!
    :feedback_b: Forget to carry?
    :feedback_c: Forget to carry?
    :feedback_d:

    What is binary 1011 + 0001?


.. mchoice:: binarymath_2
    :answer_a: 1011
    :answer_b: 0111
    :answer_c: 1111
    :answer_d: 1001
    :correct: a
    :feedback_a:
    :feedback_b:
    :feedback_c:
    :feedback_d:

    What is binary 0110 + 0101?
