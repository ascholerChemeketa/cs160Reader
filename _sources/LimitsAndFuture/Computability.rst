.. include:: ../global.rst

.. index:: computable, uncomputable

Computability
=========================================

Before the first modern computer was even built, **Alan Turing** had proven that there are some problems that are unsolvable with any conceivable mechanical calculation device - these functions are said to be **uncomputable** as opposed to **computable** problems that can be solved by an algorithm in some finite number of steps. 

.. note:: 

    Chapter 10 of *Nine Algorithms that Changed the Future* describes the basic idea of the proof.

But even in the realm of functions that are theoretically computable, there are problems that are so complex to solve via computation that they are **practically uncomputable**. We may be able to solve simple versions of the problem, but as the input size grows, the time it takes to find a solution grows so fast that it rapidly becomes unusable. 

.. sidebar:: P = NP?

    One of the greatest problems in theoretical computer science is to prove that the class of polynomial problems (P) is distinct from those that can be solved only only in non-polynomial (NP). (Or to prove that they are actually the same.) 
    
    There is a `million dollar prize <http://www.claymath.org/millenium-problems/p-vs-np-problem>`__ on offer for a mathematical proof of this idea.
    
    Writers of the Simpsons and Futurama have even `snuck the debate into their shows <https://www.youtube.com/watch?v=dJUEkjxylBw>`__.
    

.. index:: non-polynomial

Problems that have this characteristic are described as **non-polynomial** problems. This is a way of saying that the Big-O function that governs their behavior is something that can not be written as a polynomial (a function where ever term consists of a constant power of **n**). Instead, the Big-O is something like :math:`O(2^n)` where **n** is the exponent or :math:`O(n! \times)` (n! = 1 × 2 × 3 × ... × n). The relative growth of some polynomial functions (:math:`n` and :math:`n^2`) and non-polynomial ones (:math:`2^n` and :math:`n!`) can be seen below.

.. table::
    :class: width-auto 

    =========================   =========================   =========================   =========================
    :math:`n`                   :math:`n^2`                 :math:`2^n`                 :math:`n!`
    =========================   =========================   =========================   =========================
    1                           1                           2                           1
    10                          100                         1,024                       3,628,800
    100                         10,000                      1.27 x :math:`{10}^{30}`    9.33 x :math:`{10}^{157}`
    =========================   =========================   =========================   =========================

If we are solving a problem with a list of 100 items, a :math:`O(n^2)` algorithm like Insertion Sort is doable. ~10,000 units of work will take a fraction of a second for a computer to process. On the other hand, assuming the computer can do 10 billion units of work per second, solving a problem using an algorithm that is :math:`O(n!)` will take ~4,000,000,000,000 years - you probably will not have the patience to wait around to find out the answer.

So what kinds of problems are non-polynomial? Many very practical problems have no known polynomial time algorithm. **Prime Factorization** is one example - there is no known algorithm for standard computers for taking a large number and finding its prime factors in polynomial time. Much of modern cryptography and web security is based on the fact that this particular problem is so hard to solve. Should a polynomial time algorithm be found, codes that are considered uncrackable would become easy to defeat. This is one of the reasons for interest in quantum computing... there are quantum prime factorization algorithms that run in polynomial time.

Many optimization problems are also non-polynomial. The traveling salesman problem is to find the most efficient route to visit every city on a map. The brute force approach to solving this problem (try every possible route) is :math:`O(n!)`. The knapsack problem involves selecting the best subset of items from a list to maximize the value of items placed into a backpack with a limited capacity - it too has no polynomial time solution. Both of these problems relate closely to all kinds of optimization problems we would like to use computers to solve.

.. container:: inlinegroup

    .. figure:: Images/TSP2.jpg
        :figwidth: 45%
        
        `Image by Jeremy Kubica <http://computationaltales.blogspot.com/2011/08/traveling-salesmans-problem-part-6-of.html>`__ |br| `Creative Commons CC BY SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>`__
    
        Traveling Salesman: Is this the best possible route?

    .. figure:: Images/Knapsack.png
        :figwidth: 45%
        
        `Image via Wikipedia Commons <http://en.wikipedia.org/wiki/Knapsack_problem#mediaviewer/File:Knapsack.svg>`__ |br| `Creative Commons CC BY SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>`__
    
        Knapsack Problem: What collection of items is optimal?
        
|br|

Faced with a problem that is non-polynomial, instead of looking for a perfect answer that will take too long to find, we must instead develop algorithms that look for a "pretty good" answer in a tractable amount of time.


.. youtube::

