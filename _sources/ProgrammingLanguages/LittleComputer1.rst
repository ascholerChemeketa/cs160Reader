.. include:: ../global.rst


.. index:: ! little computer



.. _little-computer:

The Little Computer
================================= 

The Little Computer (sometimes called the Little Man Computer) is designed to explore how machine level languages work. At a low level, all computers do is move around pieces of data and do basic math and logic operations on that dat. 

The Little Computer has memory for 100 pieces of information and a simple CPU. The CPU has three :ref:`registers <registers>`: a program counter, an instruction register, and an accumulator. The CPU supports a very basic set of operations: it can get input and output, it can store data to memory and load it from memory, it can do addition and subtraction, and it can branch (or jump) to a different instruction if certain conditions are met. 

Rather than use binary to encode instructions, it uses decimal numbers to represent data and instructions. This makes it a little easier for a human to see what is going on. But other than that, it is a relatively accurate, if very simple, simulation of a computer.  A real processor will have more registers to work with, and will support dozens of instructions instead of the handful that the Little Computer does. But for the most part, everything they do is just as simple: they load/store data from memory, they do basic math and logic operations on data, and they use branches to make decisions and repeat operations. Whatever code a programmer writes in a :ref:`high level language <high-level-languages>` like javascript or C++ gets turned into these basic :ref:`machine instructions <machine-languages>`.

This video introduces how the Little Computer works:

.. youtube:: x7RMi6fA0jg
    :height: 315
    :width: 560

You can run the Little Computer be run in a web page using the link below. The interface looks a little different than the video, but it functions the same way. It will launch with the program shown in the video. To try out a different program, simply edit the values that are in memory, and then press the reset button.

`Launch the Little Computer <../_static/littleComputer/littleComputer.html?program=901/310/901/110/902/000>`__  *(Control or Command click to open in a new window)*

.. note:: As you experiment with the little computer, notice that the memory is storing both the instructions and the data. An "instruction" is simply
	some data in memory that the computer tries to decode as a machine instruction and run.


