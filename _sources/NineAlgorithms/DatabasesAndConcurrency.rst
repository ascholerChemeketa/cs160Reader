.. include:: ../global.rst


Databases And Concurrency (Ch 8) 
=========================================

The common thread for this week is managing concurrent use of resources. We have seen that hardware developments are increasingly focused on multicore processors and how operating systems manage all the processes running in a computer.

In this environment, databases are particularly interesting. The programmers of database servers that manage central records for companies have been dealing with problems of concurrency for decades; the rest of us are just learning to deal with the problems that they have been fighting with for years. One currently popular area of research in computer science is `Software Transactional Memory <http://en.wikipedia.org/wiki/Software_transactional_memory>`__ - trying to adapt the idea of transactions to general programming.


