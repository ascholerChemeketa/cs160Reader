.. include:: ../global.rst


Databases And Concurrency (Ch 8) 
=========================================

.. pseudo_h3:: An introduction to Databases
    :class: underlined
    
Although the Nine Algorithms chapter covers most of this material as it goes, watching these two videos will help you understand how databases work and make the chapter a much easier read.

This first video introduces what databases are and what they are used for:

.. youtube:: t8jgX1f8kc?list=PLCnMet96WqvNkJ0SzRF0HHmnBiGFydmqe&index=1
    :height: 315
    :width: 560

This video introduces the idea of relational data:

.. youtube:: ia4eCxPPc_o?list=PLCnMet96WqvNkJ0SzRF0HHmnBiGFydmqe&index=3
    :height: 315
    :width: 560
    
.. pseudo_h3:: Transactions and CS 
    :class: underlined

    
The common thread for this week is managing concurrent use of resources. We have seen that hardware developments are increasingly focused on multicore processors and how operating systems manage all the processes running on a computer.

In this environment, databases are particularly interesting. The programmers of database servers have been dealing with problems of concurrency for decades; the rest of us are just starting to face some of the problems they have been struggling with for years. One currently popular area of research in computer science is `Transactional Memory <http://en.wikipedia.org/wiki/Transactional_memory>`__ - implementing the idea of transactions as a feature of either hardware or software to make programming for parallel processing easier.


