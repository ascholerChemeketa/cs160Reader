.. include:: ../global.rst

.. index:: Huffman encoding

Data Compression (Ch 7) 
=========================================

.. pseudo_h3:: Huffman Tutorial
    :class: underlined

This expands on the Shortest Symbol trick from Nine Algorithms and introduces a concrete algorithm for coming up with a shortest symbol code called Huffman encoding.

.. |text1| replace:: We want to compress messages that only consist of the characters: a, b, c, d, and e. They are used in the proportions: 3 a's, 1 b, 2 c's, 1 d and 3 e's. First, **write them down in order from most common to least common.**
.. |text2| replace:: We take the least common pair and join them. The new circle has a value of 2 because it represents the combined d and b (1 of each).
.. |text3| replace:: Now we do it again to join the smallest two ungrouped circles together. The new circle has a 4 because it represents 2 c's, and the group of 2 d's and b's.
.. |text4| replace:: Again, join the smallest two remaining circles. The two smallest circles are the a and e (3 instances of each). So we will join them into a group of 6. |br| |br| **You always merge the smallest circles. Do not just work from right to left!**
.. |text5| replace:: Finally, we can merge the two remaining circles into one final circle. Once we are left with just one group, we are ready to make the code.
.. |text6| replace:: Think of each circle as choosing between two branches. Put a 0 on the left branch and a 1 on the right. |br| |br| To get the code for a letter, read off the 0's and 1's along the branches you take to get from the top circle to the given letter. |br| 'a' would be coded as 00 |br|'d' would be coded as  110

========================================================================    ===========================
|text1|                                                                     .. image:: Images/he6.png
|text2|                                                                     .. image:: Images/he5.png
|text3|                                                                     .. image:: Images/he4.png
|text4|                                                                     .. image:: Images/he3.png
|text5|                                                                     .. image:: Images/he2.png
|text6|                                                                     .. image:: Images/he1.png
========================================================================    ===========================

The full table of codes is shown in the table below. Note that the process of building the code resulted in two important features: 1) The most common symbols have the shortest codes. 2) No code is a **prefix** of another code.

.. table::
    :class: place-values
    
    === ===
    a	00
    e	01
    c	10
    d	110
    b	111
    === ===

Using the code, the sequence **aabcea** is encoded as *"00 00 111 10 01 00"*. But because of the way we designed the code, we don't even need the spaces. We could decode *"0000111100100"* by working our way from left to right. as shown below:

========================================    ================    ================================================================================
Code                                        Decoded                                     Notes
========================================    ================    ================================================================================
0000111100100                                                   Start
:red:`0`\ 000111100100                                          Is 0 a code? No, continue...
:red:`00`\ 00111100100                      a                   Is 00 a code? Yes, it represents **a**. We have used up the 00.
:gray:`00`\ :red:`0`\ 0111100100            a                   Is 0 a code? No, continue...
:gray:`00`\ :red:`00`\ 111100100            aa                  Is 00 a code? Yes, it is another **a**. We have used up that 00.
:gray:`0000`\ :red:`1`\ 11100100            aa                  Is 1 a code? No, continue...
:gray:`0000`\ :red:`11`\ 1100100            aa                  Is 11 a code? No, continue...
:gray:`0000`\ :red:`111`\ 100100            aab                 Is 111 a code? Yes, it represents **b**. We have used up the 111.
:gray:`0000111`\ :red:`1`\ 00100            aab                 Is 1 a code? No, continue...
:gray:`0000111`\ :red:`10`\ 0100            aabc                Is 10 a code? Yes, it represents **c**. We have used up the 10.
:gray:`000011110`\ :red:`0`\ 100            aabc                Is 0 a code? No, continue...
:gray:`000011110`\ :red:`01`\ 00            aabce               Is 01 a code? Yes, it represents **e**. We have used up the 01.
:gray:`00001111001`\ :red:`0`\ 0            aabce               Is 0 a code? No, continue...
:gray:`00001111001`\ :red:`00`\             aabcea              Is 00 a code? Yes, it represents **a**. We have used up the 00.
:gray:`0000111100100`\ :red:``\             aabcea              We have consumed all the bits, the message was **aabcea**
========================================    ================    ================================================================================


.. pseudo_h3:: Optional: Related Readings
    :class: underlined
    
Here are three articles related to data compression you might find interesting:

* Curious about what kind of algorithm can do the "Same as Earlier" trick (especially on complex patterns)? Check out `this page about LZW compression <https://www.cs.duke.edu/csed/curious/compression/lzw.html>`__.
* `How JPEG compression works <http://www.ams.org/samplings/feature-column/fcarc-image-compression>`__. Demonstrates how JPEG image compression really works. The full details of the math might be a bit daunting, but interesting to at least skim through. 
* `Compressing a Voxel World <http://hbfs.wordpress.com/2011/03/22/compressing-voxel-worlds/>`__. Interesting discussion of someone exploring run length encoding and other techniques for compressing the data in a Minecraft like program.