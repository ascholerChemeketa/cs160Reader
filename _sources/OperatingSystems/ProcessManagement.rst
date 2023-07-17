.. include:: ../global.rst

.. index:: memory management, process

Process Management
=================================

.. sidebar:: What's Happening?

    You can check what processes are currently running on your computer (and manage them) by pressing *ctrl-shift-esc* (Windows) or *command + option + escape* (OSX). On Windows then click "More details".

    You will see not just the processes associated with programs you have intentionally started, but also all the little extra programs that started automatically when you booted the computer.

A computer program is just a static collection of code and data. Once we start running a program, there is dynamic information associated with that particular run of the program - things like the current instruction, the values that are stored in memory and the input the user has given. The word **process** refers to a computer program and the dynamic state associated with a particular execution of that program.

Most modern operating systems are capable of **multi-tasking**, that is to say running more than one process at a time. Multiple programs can be running at the same time (including multiple copies of the same program). On a computer with a single processor core, only one of these processes can be running at any given time. The other processes all have to sit in a "ready queue" waiting their turn to run. Processes that are waiting for a slow event (like reading or writing a file to a hard drive) to complete and have no work to do until that finishes are put in a "waiting" state until the event completes.

Hundreds of times a second, the hardware interrupts the running program and gives the operating system a chance to run. It also gets swapped into the processor to handle messages from the hardware (\ *"Hey, the mouse was clicked"*). Each time the OS is being run it processes any events that need to be handled and then restarts the program that was running. After one program has been running for a certain period of time, the OS sends it back to the ready queue and picks a new program to run for a while. By switching tasks every few milliseconds, the processor makes it look like it is doing multiple things at once.


.. youtube:: GcMdsN4emwk
   :height: 315
   :width: 560

*Animation used by permission of Virginia Tech*


Many modern CPUs feature multiple processing "cores" and can be running instructions from two or more processes at once. But the basic model still holds - each processing core is constantly switching between different processes, giving each a brief chance to run some instructions before switching to the next.

