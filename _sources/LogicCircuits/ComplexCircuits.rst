.. include:: ../global.rst

Complex Circuits
============================

As mentioned before, complex circuits are built by wiring the output of some logic gates as the input to other ones. Say we want to make a circuit with this truth table:

.. rst-class:: truth-table
    
        =============   =============   =============     
        Input 1         Input 2         Output 
        =============   =============   =============  
        0               0               0
        0               1               0
        1               0               1
        1               1               0
        =============   =============   =============  
        
In other words, we want the output to be on only if the first input is on and the second is not. We could make this happen using the circuit shown below. Try clicking the Input switches to test each of the four possible combinations - verify the circuit does what it is supposed to.

.. raw:: html

        <iframe src="../_static/simcir/simcir.html?circuits/OnlyFirst.xml" style="border: 0px; width: 600px; height: 325px;"></iframe>

.. hint:: 
    
    * A switch is ON when the lighter part is at the bottom.
    * A red circle at the output or input to a gate indicates it is on. Black is off.
    * The final Output light turns bright red when it is on.
    * DC means "Direct Current" - think of it as the battery.
    
    
More complex circuits can have more than 2 inputs, or more than one output. Here is a three input circuit - see if you can figure out what state the input switches need to be in to produce an "ON" for output.

.. raw:: html

        <iframe src="../_static/simcir/simcir.html?circuits/ThreeInputAND.xml" style="border: 0px; width: 600px; height: 325px;"></iframe>
        
To write the truth table for that circuit, we need to have very possible state for the three inputs. For 3 inputs, each with 2 possible states, there are :math:`2^3 = 8` possible combinations (000, 001, 010, 011, 100, 101, 110, 111). Thus, the truth table needs eight rows to show the possibilities:

.. rst-class:: truth-table
    
        =============   =============   =============   =============     
        Input 1         Input 2         Input 3         Output 
        =============   =============   =============   =============  
        0               0               0               0
        0               0               1               0
        0               1               0               0
        0               1               1               0
        1               0               0               0
        1               0               1               0
        1               1               0               0
        1               1               1               1
        =============   =============   =============   =============  

The truth table claims that the output is only ON if all three switches are ON (test the circuit to confirm!).