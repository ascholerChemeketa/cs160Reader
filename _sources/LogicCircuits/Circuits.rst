.. include:: ../global.rst

.. index:: circuits

Circuits
============================

The circuits that make up the hardware of a computer are no more than combinations of the basic gates made by connecting the output of gates to the input of other gates to build up complex logic. These circuits are often drawn as diagrams where each gate is represented by a symbol and lines connect inputs to outputs. In these diagrams, the gates are drawn using the symbols shown below.

.. figure:: Images/BasicGates.png

    ..
    
    Key features:
    
    * AND has a flat left side and is rounder, OR bends in on the left and is pointier
    * XOR looks just like OR but with an extra line behind it
    * NOT has a little circle at the tip of a triangle

The negated gates are the same as the basic gates, but with the little NOT circle at the output. This helps make clear that the behavior of something like NAND is really the same as an AND gate with a NOT after it.
    
.. figure:: Images/NegatedGates.png

If we add symbols representing inputs (as switches) and outputs (as light bulbs), we would draw a simple circuit just containing an OR gate something like this:

.. figure:: Images/SimpleCircuit.png

    ..
    
    An OR gate connected to two inputs. The output is on Because the top input is on.
