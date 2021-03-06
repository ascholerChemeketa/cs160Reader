.. include:: ../global.rst

.. index:: ! byte


Bytes
============================

One bit of information is so little that usually computer memory is organized into groups of eight bits. Each eight-bit group is called a byte. Because it has 8 bits, it can store :math:`2^8` or 256 different values. This make it appropriate for storing things like a single character of text - with 256 different values we can assign a different 8-bit pattern to each letter, digit, punctuation mark, etc...

When more than eight bits are required for some data, several bytes are used. For example, typically:

* An integer is represented with a group of 4 bytes (32 bits)
* A decimal number is represented with a group of 8 bytes (64 bits)
* A color is repented by a group of 3 bytes (24 bits)

When we are talking about much larger chunks of information, like the information that makes up an entire image or music file, we describe it in terms of kilobytes, megabytes, gigabytes or even larger quantities. These are all names for different powers of 2:


.. rst-class:: maintable

    ==============      ==================  ==================
    Name                Number of Bytes     Power of 2
    ==============      ==================  ==================
    byte	            1	                :math:`2^0`
    kilobyte (KB)       1024	            :math:`2^{10}`
    megabyte (MB)       1,048,576	        :math:`2^{20}`
    gigabyte (GB)       1,073,741,824	    :math:`2^{30}`
    terabyte (TB)       1,099,511,627,776	:math:`2^{40}`
    ==============      ==================  ==================



.. pseudo_h4:: Self Check
    :class: underlined


.. fillintheblank:: bytes_1

    How many bits are in 3 bytes?

    - :24: Correct!
      :[^\d]+: Your answer should be a number
      :.{1}: That is not enough digits
      :.{3,}: That is too many digits
      :x: Hint: each byte is 8 bits


.. fillintheblank:: bytes_2

    How many bytes are in 4KB ?

    - :4096: Correct!
      :[^\d]+: Your answer should be a number
      :.{1,3}: That is not enough digits
      :.{5,}: That is too many digits
      :x: Hint: each KB is 1024 bytes



.. quick_attribution:: ICSJava
