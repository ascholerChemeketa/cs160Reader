.. include:: ../global.rst

.. index:: memory management

Memory Management
=================================

Modern PC processors often have memory addresses `given by 48 bits <http://en.wikipedia.org/wiki/X86-64#Virtual_address_space_details>`__. That means they can store address :math:`2^{48}` (256TB - over 200 trillion) different byte location. On the other hand, a nice personal computer may only have 8 GB (or ~8 billion bytes) of actual main memory (RAM). In other words, a program may think it can store information in 200 trillion different locations but there are only 8 billion actual places where a byte can go in memory.

Not only are there significantly more addresses that a program is allowed to use than actually exist, every program that is running thinks it gets to use nearly the entire memory space. Two programs may both decide to store a piece of information at byte address #100000 - the operating system needs to make sure that neither program destroys the other's information and that they can both get to what they stored.

Operating systems can address both of these issues through memory address visualization. The basic idea is that the operating system takes any memory reference from a program (a **virtual address**) and remaps it to a location in main memory. What a program thinks is address #100000 may actually be at address #203434. When a second program asks to store information at address #100000, that is mapped to a completely different location, say #834255.

If main memory is full, the operating system moves information to secondary memory (like the hard drive) but pretends it is still in main memory (this trick is known as **virtual memory**). Although this allows the computer to pretend there is more RAM available, it also means that any access of that memory involves retrieving it from the hard drive, which is tens of thousands of times slower. When needed, it will be swapped into memory and something else will be moved to the hard drive. If multiple programs are fighting over a limited memory and keep kicking each other to the hard drive. If you have ever started up too many programs at once and had your computer grind to a crawl, you have seen this in practice.
  
.. figure:: Images/Virtual_memory.png
    :figwidth: 90%
    :width: 300

    `Image via Wikipedia Commons <http://en.wikipedia.org/wiki/Virtual_memory#mediaviewer/File:Virtual_memory.svg>`__ - `Creative Commons CC BY SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>`__
    
    The 15 memory addresses a program is using and how they might be stored in hardware. When the program asks for address 1 it actually makes use of physical address 2, when it asks for 2 it gets address 0. 
    
    Some parts of main memory area (3-6 and 10) in use by other programs and not available to the "yellow" program. 
    
    Because the program is using more memory than is actually available in RAM, its memory address3-7 and 11-15 are currently actually being stored on the hard drive.
   
However, all this juggling is compltely invsible to running programs. The operating system provides the abstraction of a nice clean sequential set of memory addresses for each program to use while doing complicated tricks in the background to allocate the physical hardware among all the different running processes.