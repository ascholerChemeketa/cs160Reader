.. include:: ../global.rst
 
 
.. index:: little computer

The Little Computer - Branching  
=================================    
  
Normally, a computer works its way through the instructions in memory in order. After instruction 1, it runs instruction 2, then 3, etc... A **branch** instruction can change that. A branch might tell the computer *"skip ahead to memory location number 20 and execute that"* or *"go back and execute the instruction at location 1 again"*.       
  
.. pseudo_h3:: Decisions   
    :class: underlined     
   
Branch instructions are how a computer can make decisions. In high level languages, we generally use "if" statements to make decisions about which instructions to execute. At a low level, those decisions are usually implemented as branches to skip certain instructions.

In the Little Computer, an instruction that starts with 6, 7, or 8 is a branch. 

* A 6XX instruction says to always branch (jump) to the instruction at memory location XX instead of advancing to the next one. 
* The 7XX and 8XX instructions tell the computer to look at the accumulator value - if it is 0 (for 7XX) or greater than or equal to 0 (8XX), then the computer will take the branch. If the accumulator does not have the right value, the branch is ignored and the computer moves to the next instruction.    

This video demonstrates a Little Computer program that makes a decision based on the input it gets:

.. youtube:: povKvhOyif0
    :height: 315 
    :width: 560

You can test that program using the link below. Since it behaves differently if you enter a positive or negative number, make sure to test it with both:

`Launch the Little Computer branch program <../_static/littleComputer/littleComputer.html?program=901/310/806/511/210/310/902/000>`__  *(Control or Command click to open in a new window)*


.. pseudo_h3:: Looping
    :class: underlined
	
The target of a branch does not need to be later in the program - it is perfectly legal to branch to an earlier instruction. This is how we make a computer "loop" or repeat a series of instructions. This video demonstrates a Little Computer program that uses a branch instruction to loop through a series of instructions.
 
.. youtube:: bLSVhz3j5xQ
    :height: 315
    :width: 560

You can test that program using the link below. As you do, pay attention to each output - the program outputs more than one value, so the behavior is best described by the pattern of the output, *"It counts down from 1 to 0"*, than its final output. We would not say that this program just *"outputs 0"*. 

`Launch the Little Computer loop program <../_static/littleComputer/littleComputer.html?program=510/902/211/801/000//////004/001>`__  *(Control or Command click to open in a new window)*

