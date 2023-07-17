.. include:: ../global.rst

Complex Circuits
============================

To make more complex circuits we can use the output of some logic gates as the input to other ones. Doing this allows us to compute functions not described by the basic logic rules and functions that involve more than two inputs.

Say we want to make a circuit with this truth table:

.. rst-class:: truth-table
    
        =============   =============   =============     
        Input 1         Input 2         Output 
        =============   =============   =============  
        0               0               0
        0               1               0
        1               0               1
        1               1               0
        =============   =============   =============  
        
In other words, we want the output to be on only if the first input is on and the second is not. There is no basic logic rule that matches this function. However, we could implement the desired behavior with the circuit below. Try clicking the Input switches to test each of the four possible combinations - verify the circuit does what it is supposed to.

.. simcir::

    {
        "width":600,
        "height":250,
        "showToolbox":false,
        "devices":[
        {"type":"DC","id":"dev0","x":120,"y":104,"label":"DC"},
        {"type":"Toggle","id":"dev1","x":184,"y":64,"label":"Input1","state":{"on":false}},
        {"type":"Toggle","id":"dev2","x":184,"y":136,"label":"Input2","state":{"on":false}},
        {"type":"NOT","id":"dev3","x":256,"y":136,"label":"NOT"},
        {"type":"AND","id":"dev4","x":336,"y":104,"label":"AND"},
        {"type":"LED","id":"dev5","x":408,"y":104,"label":"Output"}
        ],
        "connectors":[
        {"from":"dev1.in0","to":"dev0.out0"},
        {"from":"dev2.in0","to":"dev0.out0"},
        {"from":"dev3.in0","to":"dev2.out0"},
        {"from":"dev4.in0","to":"dev1.out0"},
        {"from":"dev4.in1","to":"dev3.out0"},
        {"from":"dev5.in0","to":"dev4.out0"}
        ]
    }


.. hint:: 
    
    * A switch is ON when the lighter part is at the bottom.
    * A red circle at the output or input to a gate indicates it is on. Black is off.
    * The final Output light turns bright red when it is on.
    * DC means "Direct Current" - think of it as the battery.
    
    
More complex circuits can have more than 2 inputs or more than one output. Here is a three-input circuit - see if you can figure out what state the input switches need to be in to produce an "ON" for output.

.. simcir::

    {
        "width":600,
        "height":250,
        "showToolbox":false,
        "devices":[
        {"type":"Toggle","id":"dev0","x":200,"y":96,"label":"Input2","state":{"on":false}},
        {"type":"AND","id":"dev1","x":288,"y":128,"label":"AND"},
        {"type":"DC","id":"dev2","x":128,"y":96,"label":"DC"},
        {"type":"AND","id":"dev3","x":344,"y":80,"label":"AND"},
        {"type":"LED","id":"dev4","x":424,"y":80,"label":"Output"},
        {"type":"Toggle","id":"dev5","x":200,"y":32,"label":"Input1","state":{"on":false}},
        {"type":"Toggle","id":"dev6","x":200,"y":160,"label":"Input3","state":{"on":false}}
        ],
        "connectors":[
        {"from":"dev0.in0","to":"dev2.out0"},
        {"from":"dev1.in0","to":"dev0.out0"},
        {"from":"dev1.in1","to":"dev6.out0"},
        {"from":"dev3.in0","to":"dev5.out0"},
        {"from":"dev3.in1","to":"dev1.out0"},
        {"from":"dev4.in0","to":"dev3.out0"},
        {"from":"dev5.in0","to":"dev2.out0"},
        {"from":"dev6.in0","to":"dev2.out0"}
        ]
    }
        
To write the truth table for that circuit, we need to have every possible state for the three inputs. For 3 inputs, each with 2 possible states, there are :math:`2^3 = 8` possible combinations (000, 001, 010, 011, 100, 101, 110, 111). Thus, the truth table needs eight rows to show the possible inputs. If we try out each possibility, we can determine the outputs that go with each of the eight possible inputs:

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

The truth table claims that the output is only ON if all three switches are ON.