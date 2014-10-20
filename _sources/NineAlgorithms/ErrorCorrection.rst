.. include:: ../global.rst

.. index:: hamming code

Error Detection & Correction (Ch 5) 
=========================================

.. pseudo_h3:: Hamming Codes
    :class: underlined

One critical thing to understand about Hamming codes is that although a given code may be **x** number of bits, it represents a message that is shorter. For example, a 7-bit Hamming code represents a 4-bit message and 3 "extra bits" of error detection information.

The animation linked below shows how we could start with a 4-bit message and then make 3 check bits by computing the parity (whether there are an even or odd number of 1's) for different groupings of the message bits. These three error detecting bits together with the 4-bit original message make a 7-bit message in which we can detect and correct an error. You do not need to know how this process is done, but going through it might help cement the basic idea behind Hamming codes.

`Hamming Code Simulator <http://www.systems.caltech.edu/EE/Faculty/rjm/SAMPLE_20040708.html>`__

.. hint::

    * Enter the code by clicking boxes. Click multiple times to cycle between 0 and 1. 
    * When you hit the screen that says **Encoder**, click the 3 gray circles to calculate the check bits. The circle shows what message bits are used to compute the parity. Even # of ones is 0, odd is 1.
    * On the **Enter Errors** screen, click one square to cause a "transmission error" in the message. Note that if you make more than one error, you will fool the correction mechanism!
    * On the **Decoder** screen, click the gray circles again to perform the correction. 


.. pseudo_h3:: Optional: Validation 
    :class: underlined

Error detection codes are built into many of the numbering systems we use in daily life to prevent simple mistakes. Things like credit card numbers and book ISBNs are designed so that if someone mistypes a digit the error is easily detected.
    
.. pseudo_h4:: Credit Cards

The basic process for checking a credit card looks like this:

.. figure:: Images/ccvalidate.png

    `Image copyright mint.com <https://www.mint.com/blog/trends/credit-card-code-01202011/>`__
 
You can try it out by hand with your own card or on this spreadsheet:

`Credit Card Validation Spreadsheet <https://docs.google.com/spreadsheets/d/1TXNIsCdceepd48eZWhQZTEYeb9WEsdFZSSvPQNFqtnw/edit?usp=sharing>`__.    
    
Book ISBN numbers are validated with a stair step code. You will build a program to do this later on in the course, but if you are interested you can `read about how the validation works here <http://en.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-10_check_digits>`__.
    