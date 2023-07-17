.. include:: ../global.rst

.. index:: memory management

Memory Management
=================================

Modern PC processors often have memory addresses `given by 48 bits <http://en.wikipedia.org/wiki/X86-64#Virtual_address_space_details>`__. That means they can specify :math:`2^{48}` (256TB - over 200 trillion) different memory locations. On the other hand, a nice personal computer may only have 8 GB (or ~8 billion bytes) of actual main memory (RAM). In other words, a program may think it can store information in 200 trillion different locations but there are only 8 billion actual places where a byte can go in memory.

Not only are there significantly more addresses that a program is allowed to use than actually exist, every program that is running thinks it gets to use nearly the entire memory space. Two programs may both decide to store a piece of information at byte address #100000 - the operating system needs to make sure that neither program destroys the other's information and that they can both get to what they stored.

Operating systems can address both of these issues through memory address virtualization. The basic idea is that the operating system takes any memory reference from a program (a **virtual address**) and remaps it to a location in main memory. What a program thinks is address #100000 may actually be at address #203434. When a second program asks to store information at address #100000, that is mapped to a completely different location, say #834255.

However, all this juggling is completely invisible to running programs. The operating system provides the abstraction of a nice clean sequential set of memory addresses for each program to use while doing complicated tricks in the background to allocate the physical hardware among all the different running processes. The diagram below demonstrates how this works 

If main memory is full, the operating system moves information to secondary memory (like the hard drive) but pretends it is still in main memory (this trick is known as **virtual memory**). Although this allows the computer to pretend there is more RAM available, it also means that any access of that memory involves retrieving it from the hard drive, which is tens of thousands of times slower. When needed, it will be swapped into memory and something else will be moved to the hard drive. If you have ever started up too many programs at once and had your computer grind to a crawl as you switch from one to another, you have seen this in practice - memory is being swapped in/out to the very slow hard drive as you switch from one program to another.

Below is an illustration of how the virtual memory trick works:

.. raw:: html

    <style> .virtual-mem { border: 10px solid white; border-radius: 5px; margin-bottom: 10px; } </style>


.. tabbed:: virtualMemory

    .. tab:: 1

        .. image:: Images/VirtualMemory-Page-1.png
            :class: virtual-mem

        Process A thinks it has 8 addresses to use. So does process B. Orange blocks show memory for process A that is currently actually in the physical RAM, blue blocks show memory for B that is currently in RAM.

        When Process A asks the operating system for "memory location 1" because it wants to access the data **A1**, the operating system looks up where that memory is really stored, finds the data in location 3 and then gives that back to the process. Process A will never know that what it thinks of as "memory location 1" is actually physically stored in location 3.

        If Process B asks for "memory location 1", the operating system will give it the memory that is stored at location 6. If it asked for "memory location 2", it would get the data that is stored in location 1.

    .. tab:: 2

        .. image:: Images/VirtualMemory-Page-2.png
            :class: virtual-mem

        The gray blocks are blocks that are not currently in RAM. They are sitting on the hard drive, which is being used as backup storage for the RAM since there is too much total information to fit in main memory all at the same time.

    .. tab:: 3

        .. image:: Images/VirtualMemory-Page-3.png
            :class: virtual-mem

        Now imaging Process B asks the operating system for "memory location 8". 
        
        That memory block is not currently in RAM, it is on the hard drive. So, the operating system needs to move it back into RAM (the hard drive is too slow to work from directly). 
        
        To do that, the operating system needs to make room by evicting some other memory block. It may choose to do this based on which block has been used the least or used the least recently. We will assume it chooses the block at location 5, "A3".

    .. tab:: 4

        .. image:: Images/VirtualMemory-Page-4.png
            :class: virtual-mem

        The needed block, "B8" has now been placed into location 5. Meanwhile, "A3" has finished moving to the hard drive to be stored until it is needed again.

    .. tab:: 5

        .. image:: Images/VirtualMemory-Page-5.png
            :class: virtual-mem


        Finally, the operating system can complete the request by giving Process B the memory block "B8".

        Process A doesn't know that "A3" is no longer actually in main memory. If it goes to access it, the operating will use the same procedure to restore it from the hard drive by evicting some other block of memory.


.. pseudo_h4:: Self Check
    :class: underlined


.. mchoice:: operatingsystems_virtualmemory1
    :answer_a: 8
    :answer_b: 6
    :answer_c: 3
    :answer_d: It would need to be brought in from the hard drive
    :correct: a
    :feedback_a: 
    :feedback_b: That currently contains "B1", we are looking for "A6"
    :feedback_c: That currently contains "A1", we are looking for "A6"
    :feedback_d: "A6" is currently available in RAM
	
    In the diagram above, at step 5, Program A asks for "memory location 6". Where in physical memory will that be found?
	
	
.. mchoice:: operatingsystems_virtualmemory2
    :answer_a: 0
    :answer_b: 5
    :answer_c: 7
    :answer_d: It would need to be brought in from the hard drive
    :correct: d
    :feedback_a: That currently contains "B2", we are looking for "B5"
    :feedback_b: That currently contains "B8", we are looking for "B5"
    :feedback_c: That currently contains "A5", we are looking for "B5"
    :feedback_d: 
	
    In the diagram above, at step 5, Program B asks for "memory location 5". Where in physical memory will that be found?
