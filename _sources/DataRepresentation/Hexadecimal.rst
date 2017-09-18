.. include:: ../global.rst

.. index:: hexadecimal

Hexadecimal
============================

H\ **exadecimal** is base 16. Much like base 10 uses digits that represent powers of 10 and binary uses digits that represent powers of 2, hexadecimal uses digits that represent powers of 16. Here is how we would interpret :math:`{2047}_{16}`:

.. rst-class:: place-values

    ==============  ==============  ==============  ==============
    4096s           256s            16s             1s
    :math:`{16}^3`  :math:`{16}^2`  :math:`{16}^1`  :math:`{16}^0`
    ==============  ==============  ==============  ==============
    2               0               4               7
    ==============  ==============  ==============  ==============

So :math:`{2047}_{16}` = **2** * 4096 + **0** * 256 + **4** * 16 + **7** * 1 = :math:`{8263}_{10}`.

Using this scheme, :math:`{10}_{16}` = **1** * 16 + **0** * 1 = :math:`{16}_{10}`. Which raises the question "how do we represent ten in hexadecimal?" A 1 in the second column indicates a 16, so we can't use that - we have to fit all the values up to 15 in the first column. We do so by using the letters A-F to indicate 9-15:

.. raw:: html

    <style>
        table.hex1 { width: auto; text-align: center; }
        table.hex1 thead>tr>th, table.hex1 tbody>tr>td { padding: 0px; text-align: center; }
    </style>

.. rst-class:: hex1

    ==============  ==============
    Decimal         Hexadecimal
    ==============  ==============
    10              A
    11              B
    12              C
    13              D
    14              E
    15              F
    ==============  ==============

Thus in the hexadecimal number :math:`{1\textrm{EA}}_{16}` the E means means 14 copies of the second digit (16). The A means 10 copies of the rightmost digit (1):

.. rst-class:: place-values

    ==============  ==============  ==============
    256s            16s             1s
    ==============  ==============  ==============
    1               14 (E)          10 (A)
    ==============  ==============  ==============

So :math:`{1\textrm{EA}}_{16}` = **1** * 256 + **14** * 16 + **10** * 1 = :math:`{490}_{10}`.


.. pseudo_h3:: Conversion To and From Binary
    :class: underlined

In hexadecimal, each digit can represent 16 different values: 0-F (0-15). In binary, we can represent the same number of values using 4 bits: 0000-1111 (0-15). What that means, is that each hex digit represents the same information as four binary digits - there is a direct mapping between a hex digit and a four bit pattern:


.. rst-class:: hex1

    ==============  ==============  ==============  ==============  ==============
    Binary          Hexadecimal                     Binary          Hexadecimal
    ==============  ==============  ==============  ==============  ==============
    0000            0                               1000            8
    0001            1                               1001            9
    0010            2                               1010            A
    0011            3                               1011            B
    0100            4                               1100            C
    0101            5                               1101            D
    0110            6                               1110            E
    0111            7                               1111            F
    ==============  ==============  ==============  ==============  ==============

To convert binary to hex, simply break up the number into groups of 4 digits and convert each group:

.. faux_code::

    011011000011    (1731 in decimal)
    :red:`0110`:blue:`1100`:red:`0011`
    :red:`6`   :blue:`C`   :red:`3`
    6C3             (1731 in decimal)


To convert hex to binary, we can just turn each hex digit into one group of four binary digits:

.. faux_code::

    A1              (161 in decimal)
    :red:`A`   :blue:`1`
    :red:`1010`:blue:`0001`
    10100001        (161 in decimal)


This video reviews how hexadecimal works and provides a few more examples:

.. youtube:: m1JtWKuTLR0
    :height: 315
    :width: 560

|br|

.. pseudo_h3:: Why Hexadecimal
    :class: underlined

Why would we want another base system? Large binary values are hard for people to read accurately and remember. Try it yourself - quickly try to decide if 0011100101110110 and 0011100101100110 are the same. Those two binary strings listed above look like this in hex: :math:`{3976}_{16}` and :math:`{3966}_{16}` - it is a little easier to say the values and to see where the difference is, isn't it? Because changing switching from binary to hex is so easy, hexadecimal is used to display binary values in a more human readable form. You will see an example of where this is used in web page design on the next page.

.. pseudo_h4:: Self Check
    :class: underlined


.. fillintheblank:: hex_1

    What decimal value does the hexadecimal number 2A represent?

    - :42: Correct!
      :[^\d]+: Your answer should be a number
      :.{1}: Not enough digits
      :.{3,}: Too many digits
      :x: Hint: Use the table from the top of the page


.. fillintheblank:: hex_2

    What does hexadecimal 3FC look like in binary?

    - :0011 ?1111 ?1100: Correct!
      :[^0-1 ]+: Your answer should only consist of 1s and 0s
      :.{1,11}: Not enough digits
      :.{15,}: Too many digits
      :x: Hint: Convert each digit separately
