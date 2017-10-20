.. include:: ../global.rst

Remembering Things
============================

In previous circuits we have seen, every path has gone strictly left to right. But we can take the output of a gate and feed it back in as the inputs to earlier gates. This is the secret behind building a "memory" circuit: feeding the output back into the circuit produces a loop that "remembers" a value.  The circuit below uses two NOR gates (NOR is short for Not OR, which is a NOT gate that comes right after an OR). Notice how the output of each NOR gate feeds back as an input to the other gate.

.. raw:: html

        <iframe src="../_static/simcir/simcir.html?circuits/SRFlipFlop.xml" style="border: 0px; width: 600px; height: 325px;"></iframe>


With that circuit (known as an SR Flip Flop), try the following experiments

* Turn on Input 1 - this **Sets** the memory to 1.
* Turn off Input 1. Notice that the memory stays on even though both switches are off.
* Turn on Input 2 - this **Resets** the memory to 0.
* Turn off Input 2. Now the circuit remembers the value 0 while both switches are off.

Essentially, the circuit remembers which input, Set or Reset, was most recently on. This is a form of memory: If we want to remember **1**, we flip **Input1** on briefly. To remember **0**, we flip **Input2** on briefly. There are many other circuits that can "remember" a value, but they all use this same basic idea of feeding outputs back in as inputs. To remember more than one bit, we would simply need to make multiple copies of this circuit, one for each bit we need to store.
