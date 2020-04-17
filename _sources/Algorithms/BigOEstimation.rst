.. include:: ../global.rst


.. index:: Big-O

Estimating With Big-O
=================================

We can use Big-O categories to do an estimation of how long a problem will take to solve based on a smaller version of the problem. We simply need to set up a proportion like the one below and solve it:

.. rst-class:: center

    :math:`\frac{\textrm{work for job 1}}{\textrm{work for job 2}} = \frac{\textrm{time for job 1}}{\textrm{time for job 2}}`

The key is to remember that the work does not necessarily equal the size of the problem. Instead, we have to use the size of the problem and the Big-O of the algorithm we are applying to calculate the approximate amount of work.

For example, say we have a list of 1000 things...

* If we want to do a Binary Search, the Big-O is :math:`O(log_2(n))`. That means the estimated work would be :math:`log_2(1000)` or ~9.9657 units of work.
* If we want to do a Linear Search, the Big-O is :math:`O(n)`. That means the estimated work would just be 1,000 units of work.
* If we want to do a Selection Sort, the Big-O is :math:`O(n^2)`. That means the estimated work would be :math:`{1000}^2` or 1,000,000 units of work.


.. sidebar:: Wolfram Alpha
    
    You can use `Wolfram Alpha website <http://www.wolframalpha.com/>`__ to calculate log base 2 by typing something like "log2(1024)". Try it below.
    
    .. raw:: html
    
        <div style="text-align: center;"><form action="https://www.wolframalpha.com/input/"><input type="text" id="input" style="width:100%" name="i"></input></form></div>
        

.. pseudo_h4:: Sample Problem 1

I have timed selection sort on 10,000 items and it takes 0.243 seconds. I want to estimate the time it will take to sort 50,000 items. Because selection sort is an :math:`O(n^2)` algorithm, I know I need to square the problem sizes to estimate the amount of work required for each of the two jobs. So I can set up the proportion like this:
    
:math:`\frac{{10000}^2}{{50000}^2} = \frac{0.243\textrm{ seconds}}{\textrm{time for job 2}}`

So...

:math:`\frac{100000000}{2500000000} = \frac{0.243\textrm{ seconds}}{\textrm{time for job 2}}`

Cross multiplying gives:

:math:`100000000(\textrm{time for job 2}) = 0.243\textrm{ seconds} \cdot {2500000000}`

Solving for **time for job 2** gives:

:math:`\textrm{time for job 2} = 6.075\textrm{ seconds}`


.. pseudo_h4:: Sample Problem 2
    :class: underlined

I have timed linear search on 10,000,000 items and it takes 8.12 seconds (call this job 1). I want to estimate the time it will take to use binary search instead (job 2). The problem sizes are the same for both jobs: 10,000,000 items. However, the algorithms will require different amounts of work. Linear search is a :math:`O(n)` algorithm, so the work for job 1 will be 10,000,000. For job 2, we are using a :math:`O(log_2(n))` algorithm so the work will be :math:`log_2(10000000)`
    
:math:`\frac{10000000}{log_2(10000000)} = \frac{8.12\textrm{ seconds}}{\textrm{time for job 2}}`

So...

:math:`\frac{10000000}{23.25} = \frac{8.12\textrm{ seconds}}{\textrm{time for job 2}}`

Cross multiplying gives:

:math:`10000000(\textrm{time for job 2}) = 8.12\textrm{ seconds} \cdot 23.25`

Solving for **time for job 2** gives:

:math:`\textrm{time for job 2} = 0.000019\textrm{ seconds}`