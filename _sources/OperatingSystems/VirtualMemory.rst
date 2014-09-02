.. include:: ../global.rst

.. index:: memory management

Memory Management
=================================

Modern computer processors have memory addresses `given by 48 bits <http://en.wikipedia.org/wiki/X86-64#Virtual_address_space_details>`__. That means they can store address :math:`2^{48}` (256TB - over 200 trillion) different byte location. On the other hand, a nice personal computer may only have 8 GB (or ~8 billion bytes) of actual main memory (RAM). In other words, a program may think it can store information in 200 trillion different locations but there are only 8 billion actual places where a byte can go in memory.

Not only are there significantly more addresses that a program is allowed to use than actually exist, every program that is running thinks it gets to use nearly the entire memory space. Two programs may both decide to store a piece of information at byte address #100000 - the operating system needs to make sure that neither program destroys the other's information and that they can both get to what they stored.

Operating systems can address both of these issues through memory address visualization. The basic idea is that the operating system takes any memory reference from a program and remaps it to a location in main memory. What a program thinks is address #100000 may actually be at address #203434. When a second program asks to store information at address #100000, that is mapped to a completely different location, say #834255.

If main memory is full, the operating system moves information to secondary memory (like the hard drive) but pretends it is still in main memory (this trick is known as **virtual memory**).
  
.. figure:: Images/Virtual_memory.png
    :figwidth: 60%

    `Image via Wikipedia Commons <http://en.wikipedia.org/wiki/Virtual_memory#mediaviewer/File:Virtual_memory.svg>`__ - `Creative Commons CC BY SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>`__
   
The operating system (working with the hardware) must do a lot of extra work to manage this mapping. Each time a program refers to a memory location, the OS must look up the correct address and reroute the memory access. As main memory fills up, information must be moved to the hard drive and then swapped back into main memory again when needed.