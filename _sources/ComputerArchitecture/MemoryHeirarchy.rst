.. include:: ../global.rst


Memory Hierarchy
=================================

In an ideal, simple computer there would only be one memory - the main memory. That memory would be instantaneously accessible, allow permanent storage, require minimal energy, be compact and cheap . Unfortunately, there is no technology that offers all those features. Real world constraints force computer engineers to use multiple different technologies, using each for the kind of thing it is best suited for. These different technologies form the **memory hierarchy** - a series of layers from small and fast to large and slow.


.. figure:: Images/Memory-Hierarchy.jpg
    :alt: Memory Heirarchy
    
    `Image via teachbook.com.au <http://blog.teachbook.com.au/index.php/2012/02/memory-hierarchy/>`__
    


.. pseudo_h4:: Registers

A register is a memory location within the CPU itself. Because the memory is right on the CPU and because of the way it is built, it provides instant access to the information it contains. But because the space on the CPU is limited, the real estate there is very valuable and there is generally not much room for registers. Only the most immediate set of information being worked on is in the registers.

.. pseudo_h4:: Cache

This is special memory that is smaller and faster than the normal RAM in main memory. It provides quicker access to a portion of main memory by maintaining a copy of parts of what is in main memory. Lots of engineering goes into figuring out how the computer should decide what is important enough to get cached.

.. pseudo_h4:: RAM - "Physical Memory"

    
The "normal" main memory. It runs significantly slower then the CPU - each time the CPU has to access main memory, it can represent a significant slow down. RAM generally needs to have power to maintain its state. When the power is turned off, it forgets the information it is storing. This is the memory that is **addressable** by the processor - that can be directly requested.

.. pseudo_h4:: Secondary Memory

Because main memory is generally built with circuits that need power, it can not do the job of storing information while the computer is off. Secondary memory is the general term for things like hard drives, CD drives, flash drives, etc... These technologies can store information even when the power is off. They also generally provide better density - you can store more information in less space and with less cost. Information stored in secondary memory must be loaded into main memory (RAM) before the processor can access it.

    