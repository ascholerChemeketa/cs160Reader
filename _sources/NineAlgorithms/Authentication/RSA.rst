.. include:: ../../global.rst

.. index:: RSA algorithm

RSA
=========================================

.. sidebar:: Making your own keys

  Want to try generating your own RSA key pair?  `This application <http://faculty.chemeketa.edu/ascholer/cs160/webapps/RSAExponentKeys.html>`__ will walk you through generating a public/private key pair for use with the RSA algorithm.


The algorithm used to select these numbers is known as the **RSA** algorithm (after its creators Rivest, Shamir and Adleman). The details algorithm is based on some interesting mathematics we will not cover here, but a few of the high level details are important:

* You pick two prime numbers to start the algorithm with. They are multiplied to form the C value that will be part of the both mathematical keys.
* You then pick the A number that will be the second half of the first key.
* You use your prime numbers and A to calculate B.
* As soon as you figure out B, you can forget the original prime numbers and use the numbers {A,C} as one key and {B,C} as the other key.

To calculate B you need both A and the two prime numbers. Normally those are destroyed as soon as you make the key. But because C is the product of those numbers (and because the product of two primes only has two prime factors), if you can factor C you can find the exact prime numbers used to calculate B. Fortunately, factoring large prime numbers is a difficult task even for computers. As long as you select really large prime numbers (in the real world you use numbers that are hundreds to thousands of digits long), you can be pretty confident no one will be able to factor your C to figure out what numbers you used.
