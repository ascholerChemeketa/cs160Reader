.. include:: ../global.rst

.. index:: halting problem, turing machine

Computability (Ch 10) 
=========================================

The idea of proving that CanCrash.exe can't exist is pretty mind-bending. This video might be helpful - it walks through the logic on why we can't write a program that detects if a program Halts (stops running at some point):
    
.. youtube:: macM_MtS_w4


Also, this `Wired article <http://www.wired.com/2014/02/halting-problem/>`__ has a nice overview of the problem and argument. It also has a fun Dr. Seuss style poem explaining the Halting Problem:

    No general procedure for bug checks will do. |br|
    Now, I won’t just assert that, I’ll prove it to you. |br|
    I will prove that although you might work till you drop, |br|
    you cannot tell if computation will stop.

    For imagine we have a procedure called P |br|
    that for specified input permits you to see |br|
    whether specified source code, with all of its faults, |br|
    defines a routine that eventually halts. |br|
    
    `...see article for the rest <http://www.wired.com/2014/02/halting-problem/>`__

.. pseudo_h3:: Optional: Turing Machines
    :class: underlined
    
The most amazing feature of Turing's Proof that the Halting Problem and similar **decision problems** are uncomputable is that he did his work before modern computers existed. He had to invent a theoretical universal computer to make his argument. This machine, known as a **Turing Machine** is a fundamental model for computation - anything that can be computed with any conceivable computer algorithm can be computed on a Turing machine. This video has a nice introduction to this idea of a Turing Machine:

.. youtube:: dNRDvLACg5Q

