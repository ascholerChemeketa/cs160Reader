.. include:: ../../global.rst

.. index:: asymmetric cryptography

Asymmetric Cryptography Math
=========================================

Before we continue with our story of how Alice can make sure she is really talking to Bob, let us convince ourselves that we can convert this hypothetical box into a mathematical algorithm. (Recall that we can represent anything with binary numbers - so if we can encrypt numbers we can encrypt any information we want by first representing that information as a number.) To do so, we need to identify two functions such that either one undoes the work of the other one - these functions will be the mathematical equivalent of keys that lock or unlock a box.

A simple pair of functions that undo each other might be "multiply by two" and "divide by two". If you wanted to encrypt a message represented by the number 6, you would multiply it by two and get 12. To decrypt that message you would take the encrypted version - 12 - and divide by two to get back to 6. You could also use the keys in reverse order: if you start with the message 6 and "lock" it by dividing by two, you get 3; if you then multiply that by two you get back to 6.

However, those functions are too simple to be good for encryption. It is too easy to work the math backwards - if I tell you "I encrypted a number by multiplying it by 2 and the encrypted version is 10", you do not need me to tell you the special function used to decrypt the number. The way to reverse "multiply by 2" is obvious. We need more complex mathematical functions that are not so easy to reverse. For this we will turn to the same tools that are used in Diffie-Hellman: raise numbers to a power and then interpret the answer using clock arithmetic (mod). Like with Diffie-Hellman, this will give us a mathematical function that when reversed has many possible answers. Figuring out which one of these answers is correct by trying them all will require doing so much mathematical work we would expect it to take thousands or even millions of years.

It turns out that there is a way to select three numbers A, B and C such that:

.. |text1| replace:: If you calculate: |br| :math:`encryptedMessage = message^A \textrm{ mod }  C`

.. |text2| replace:: Then you can do: |br| :math:`message = (encryptedMessage )^B \textrm{ mod }  C`

.. |desc1| replace:: *Raise the message (a number) to the Ath power and mod by C to get the encrypted message (a new number)*

.. |desc2| replace:: *Raise the encrypted number to the Bth power and mod by C to get back the original number*

===================    ======================================
|text1|                |desc1|
|text2|                |desc2|
===================    ======================================

.. note::

    Remember that "mod" is the formal name for clock arithmetic - in this case we need to divide by C and keep only the remainder.


And also:


.. |text3| replace:: If you calculate: |br| :math:`otherEncryptedMessage = message^B \textrm{ mod }  C`

.. |text4| replace:: Then you can do: |br| :math:`message = (otherEncryptedMessage)^A \textrm{ mod }  C`

.. |desc3| replace:: *Raise the message to the Bth power and mod by C to get a different encrypted version*

.. |desc4| replace:: *Raise this differently encrypted number to the Ath power and mod by C to get back the original number*


===================    ======================================
|text3|                |desc3|
|text4|                |desc4|
===================    ======================================


It looks complex, but what it simply means is we have a pair of mathematical keys based on three numbers A, B and C. One of the keys is *"raise to the power of A and mod by C"* while they other is *"raise to the power of B and mod by C"*. You can use either key to encrypt a number and the other key to then restore the original number.

An example of such numbers A, B and C is A = 3, B = 7, C = 22. Say we want to encrypt the numeric message 4. Plugging in 4 as the message and 3 for A and 22 for C we get:

:math:`4^3 \textrm{ mod }  22 = encryptedmessage = 20`
(4 to the 3rd power is 64; on a clock of 22 that is 20)

If we use B = 7 and C = 22 to decrypt the 20, we get:

:math:`20^7 \textrm{ mod }  22 = message = 4`
(20 to the 7th power is 1,280,000,000; on a clock of 22 that is 4)

The table below shows that other messages work the same way - encrypting with A produces a message B can decrypt:

========  =============================  ==========  =================================  ========
Message   Use key A                      Encrypted   Use key B                          Message
========  =============================  ==========  =================================  ========
4         raise to 3rd power, mod by 22  20          raise to the 7th power, mod by 22  4
8         raise to 3rd power, mod by 22  6           raise to the 7th power, mod by 22  8
17        raise to 3rd power, mod by 22  7           raise to the 7th power, mod by 22  17
========  =============================  ==========  =================================  ========

If you wish verify those, I recommend using `Wolfram Alpha website <http://www.wolframalpha.com/>`__. Type something in the format '4^3 mod 22':

.. raw:: html

    <div style="text-align: center;"><script id="WolframAlphaScript" src="http://www.wolframalpha.com/input/embed/?type=large" type="text/javascript"></script></div>

If you try encoding other messages, note that the message number must be smaller than C; since C is 22, 21 is the largest message you can encrypt with this key.


.. pseudo_h3:: Other properties
    :class: underlined


It is important to note two other facts.

The first is that A cannot decrypt a number it encrypted. Say we use the key A = 3, C = 22 to encrypt the message 4 we get 20:

:math:`4^3 \textrm{ mod }  22 = encryptedmessage = 20`

If we use A and C to try to decrypt the 20, we get:

:math:`20^3 \textrm{ mod }  22 = message = 14`???
20 to the 3rd power is 8,000; on a clock of 22 that is 14. We did not get back to 4 - the decryption did not work!

Second, using B to encrypt a message produces an encrypted message (different than the one encrypting with A would produce) that only A can decrypt:

========  =============================  ==========  =================================  ========
Message   Use key B                      Encrypted   Use key A                          Message
========  =============================  ==========  =================================  ========
4         raise to 7th power, mod by 22  16          raise to the 3rd power, mod by 22  4
8         raise to 7th power, mod by 22  2           raise to the 3rd power, mod by 22  8
17        raise to 7th power, mod by 22  19          raise to the 3rd power, mod by 22  17
========  =============================  ==========  =================================  ========

This completely satisfies our need for a mathematical system of asymmetric keys: they each unlock what the other locks and they cannot unlock their own work.
