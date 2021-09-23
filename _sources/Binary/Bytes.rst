.. include:: ../global.rst

.. index:: ! byte


Bytes
============================

One bit of information is so little that usually computer memory is organized into groups of eight bits. Each eight-bit group is called a byte. Because it has 8 bits, it can store :math:`2^8` or 256 different values. This make it appropriate for storing things like a single character of text - with 256 different values we can assign a different 8-bit pattern to each letter, digit, punctuation mark, etc...

When more than eight bits are required for some data, several bytes are used. For example, typically:

* An integer is represented with a group of 4 bytes (32 bits)
* A decimal number is represented with a group of 8 bytes (64 bits)
* A color is repented by a group of 3 bytes (24 bits)

When we are talking about much larger chunks of information, like the information that makes up an entire image or music file, we describe it in terms of **Kibibytes**, **Mebibytes**, **Gibibytes** or even larger quantities. These are all names for different powers of 2:

.. rst-class:: maintable

    ===============      ==================  ==================
    Name                 Number of Bytes     Power of 2
    ===============      ==================  ==================
    Byte                 1                   :math:`2^0`
    Kibibyes (KiB)       1024                :math:`2^{10}`
    Mebibytes (MiB)      1,048,576           :math:`2^{20}`
    Gibibytes (GiB)      1,073,741,824       :math:`2^{30}`
    Tebibyte  (TiB)      1,099,511,627,776   :math:`2^{40}`
    ===============      ==================  ==================


Powers of 2 vs 10
-------------------------

In the metric system, Kilo, Mega, Giga, etc... refer to different powers of 10. So a **Kilobyte**, or **KB**, is :math:`10^{3}` bytes. Using that system gives us the following units:

.. rst-class:: maintable

    ==============      ==================  ==================
    Name                Number of Bytes     Power of 10
    ==============      ==================  ==================
    Byte	            1	                :math:`10^{0}`
    Kilobytes (KB)      1000	            :math:`10^{3}`
    Megabytes (MB)      1,000,000	        :math:`10^{6}`
    Gigabytes (GB)      1,000,000,000	    :math:`10^{9}`
    Terabyte  (TB)      1,000,000,000,000	:math:`10^{12}`
    ==============      ==================  ==================

Unfortunately, this distinction between units like **KB** and **KiB** is a relative recent one and is not used consistently. If someone specifies one of the **KiB**, **MiB**, etc... values, you can be sure that they mean a power of 2. However, when someone specifies a value without the little **i**, like **KB** or **MB** they may be specifying a power of 2 or 10. *"256 MB"* can either mean :math:`256 \times 10^{6}` or :math:`256 \times 2^{20}` bytes. The same source may even use the **MB**, **GB**, etc... notation to mean both base 10 and base 2 when describing different measurements. For example, if you buy a computer advertized with *"16 GB"* of main memory (RAM) and a *"500 GB"* hard drive, the 16 GB means :math:`16 \times 2^{30}` while the 500 GB means :math:`500 \times 10^{9}`!

Fortunately, the values of the base 2 and base 10 systems are close enough that a value like *"32 GB"* gives you a good idea of how big the value is even if you aren't sure how to interpret the **GB**. But if you desire an exact value, you need to figure out whether you should be using :math:`10^{9}` or :math:`2^{30}` for each **GB**.

.. note::

    Traditionally, people describe processor speeds, network speeds, and hard drive space using the power of 10's system. They describe main memory (RAM) and the size of files and data using the power of 2's system. Which gets a bit confusing when you are calculating something like how long it will take to send a *"200 MB"* file over a *"100 MB/s"* network connection - the two **MB**'s are actually different units! 

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

    How many bytes are in 4KiB ?

    - :4096: Correct!
      :[^\d]+: Your answer should be a number
      :.{1,3}: That is not enough digits
      :.{5,}: That is too many digits
      :x: Hint: each KB is 1024 bytes



.. quick_attribution:: ICSJava
