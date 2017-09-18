.. include:: ../global.rst


.. index:: von Neumann architecture

The Processor, cont.
=================================

.. index:: control unit

.. pseudo_h3:: The Control Unit
    :class: underlined

.. figure:: Images/cpustructuremap-cu.gif
    :figclass: align-right
    :width: 185
    :alt: Control Unit

The control unit is the true "brains" of the CPU and is responsible for controlling much of the operation of the rest of the processor. It does this by issuing control signals to the other areas of the processor, instructing them on what should be performed next. Similarly to the arithmetic and logic unit, the control unit can be broken down further for easier understanding. Two key sub components are the decoder and clock:

.. pseudo_h4:: Decoder

This is used to decode the instructions that make up a program when they are being processed, and to determine in what actions must be taken in order to process them. Instructions in a program, like everything else the computer works with are represented as sequences of 0s and 1s. The control unit must take these sequences and turn them into an appropriate series of messages to the ALU, memory and registers.

.. pseudo_h4:: Timer or clock

The timer or clock ensures that all processes and instructions are carried out and completed at the right time. If one component of the computer tries to read a signal before another component has sent the message it might see an older message or complete gibberish. Pulses are sent to the other areas of the CPU at regular intervals and actions only occur when a pulse is detected.


.. index:: registers

.. pseudo_h3:: Registers
    :class: underlined

.. figure:: Images/cpustructuremap-reg.gif
    :figclass: align-right
    :width: 185
    :alt: Registers

A register is a memory location within the CPU itself, designed to be quickly accessed for purposes of fast data retrieval. These contain instructions, data and other values that are needed by the ALU and control unit. On the timescale processors work at (billionths of a second) the trip to main memory is way to long to wait for during the middle of an instruction. Information being worked with in the processor must generally be in the registers directly within the processor. Although different processors have different types of registers, the ones listed below are common examples found in many different processors.


.. pseudo_h4:: Instruction Register (IR)

This is used to hold the current instruction in the processor while it is being decoded and executed. As each instruction that is to be executed is fetched from memory it is placed here for quick reference.

.. pseudo_h4:: Program Counter (PC)

This register is used to hold the memory address of the next instruction that has to executed in a program. This is how the CPU keeps track of where it is in the program ("I am on instruction 010101"). Normally, each time an instruction is executed, the PC is increased by one to move to the next instruction. Sometimes however, an instruction will modify the PC to change what happens next in a program.

.. pseudo_h4:: Accumulator (ACC)

The accumulator is used to hold the result of operations performed by the ALU. Instead of a single accumulator for storing results, real processors often have dozens of general purpose registers for temporarily storing results of operation.

.. attribution::
    :title_1: Microprocessor Tutorial
    :title_link_1: http://www.eastaughs.fsnet.co.uk/
    :author_1: Matthew Eastaugh
