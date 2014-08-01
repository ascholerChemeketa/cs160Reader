.. include:: ../global.rst

Remembering Things
============================

Circuits can even be built to feed the current output back into the circuit as an input. This is one of the main ways computer memory is implemented. Using the circuit shown below (known as an SR Flip Flop), try the following experiments

* Turn on Input 1 - this **Sets** the memory to 1.
* Turn off Input 1. Notice that the memory stays on even though both switches are off.
* Turn on Input 2 - this **Resets** the memory to 0.
* Turn off Input 2. Now the circuit remembers the value 0 while both switches are off.

.. raw:: html

        <iframe src="../_static/simcir/simcir.html?circuits/SRFlipFlop.xml" style="border: 0px; width: 600px; height: 325px;"></iframe>
        
Essentially, the circuit remembers which input, Set or Reset, was most recently on. It does this by sending the current output back into an NOR gate with each of the inputs. There are of course many other ways to store a value in a circuit, but they all use this same basic idea of feeding outputs back in as inputs.

Much like chaining full adders to add multi-digit numbers, the secret to remembering large binary values is to simply repeat this basic building block. By using 32 of these SR flip flops, we could remember a 32 digit binary value.
 