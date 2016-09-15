.. include:: ../../global.rst

.. index:: RSA algorithm

RSA
=========================================

.. sidebar:: Making your own keys

  Want to try generating your own RSA key pair?  `This application <http://faculty.chemeketa.edu/ascholer/cs160/webapps/RSAExponentKeys.html>`__ will walk you through generating a public/private key pair for use with the RSA algorithm.


The particulat algorithm shown on the previous page for asymmetric encryption is known as the **RSA** algorithm (after its creators Rivest, Shamir and Adleman). The details algorithm is based on some interesting mathematics we will not cover here, but a few of the high level details are important:

* You pick two prime numbers to start the algorithm with. They are multiplied to form the C value that will be part of the both mathematical keys. (Everyone will see C)
* You then pick the A number that will be the second half of the first key. (This will be your secret private key)
* You use your prime numbers and A to calculate B. (This will be public)
* As soon as you figure out B, you can forget the original prime numbers and use the numbers {A,C} as one key and {B,C} as the other key.

Why is this process important? To calculate B given A or A given B you need the two prime numbers you started with. Normally those are destroyed as soon as you make the key. Since no one has the numbers, they cannot use the public number B to figure out your secret number A.

However, because C is the product of those two prime numbers (and because the product of two primes only has two prime factors), if you can factor C you can find the exact prime numbers used in the calculations and work backwards from the public B to the secret number A. Fortunately, factoring large prime numbers is a difficult task even for computers. As long as you select really large prime numbers (in the real world you use numbers that are hundreds to thousands of digits long), you can be pretty confident no one will be able to factor your C and use that information to reveal your private key. We will come back to this possible weakness in the final week of the course - for now just keep in mind that what keeps the keys secure is the fact that factoring large numbers is really hard. 
