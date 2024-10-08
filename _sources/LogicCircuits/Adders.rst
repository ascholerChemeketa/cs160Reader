.. include:: ../global.rst

Adding Numbers with Logic
============================

To do mathematics, a computer needs to think of the problem as a set of Boolean outputs and inputs. For example, if a computer is adding two 1-bit binary numbers, there are two inputs (each of the bits). The answer in binary can be 0, 1, or :math:`10_2` (two) - it will thus take two bits to represent. The circuit below "adds" the two inputs and produces either 00, 01, or 10 as appropriate:

.. simcir:: 
    
    {
    "width":600,
    "height":250,
    "showToolbox":false,
    "devices":[
    {"type":"DC","id":"dev0","x":120,"y":120,"label":"DC"},
    {"type":"Toggle","id":"dev1","x":200,"y":80,"label":"InputA","state":{"on":false}},
    {"type":"XOR","id":"dev2","x":280,"y":136,"label":"XOR"},
    {"type":"AND","id":"dev3","x":280,"y":88,"label":"AND"},
    {"type":"LED","id":"dev4","x":432,"y":48,"label":"1s bit"},
    {"type":"LED","id":"dev5","x":368,"y":48,"label":"2s bit"},
    {"type":"Toggle","id":"dev6","x":200,"y":144,"label":"InputB","state":{"on":false}}
    ],
    "connectors":[
    {"from":"dev1.in0","to":"dev0.out0"},
    {"from":"dev2.in0","to":"dev1.out0"},
    {"from":"dev2.in1","to":"dev6.out0"},
    {"from":"dev3.in0","to":"dev1.out0"},
    {"from":"dev3.in1","to":"dev6.out0"},
    {"from":"dev4.in0","to":"dev2.out0"},
    {"from":"dev5.in0","to":"dev3.out0"},
    {"from":"dev6.in0","to":"dev0.out0"}
        ]
    }

Notice that each output (the 2s column and the 1s column) functions independently. The 2s output answers the logical question "Are both the inputs ON?" (AND gate) - if so, we should have indicated that the answer has a 2 in it. The 1s output answers the question "Is only one of the inputs ON?" (EOR gate - remember EOR is another name for XOR) - if so, the binary answer has a 1. The answer to those logical questions does the same work as counting the number of inputs that are on and expressing the answer as a binary number!

The truth table for this circuit would have two output columns and look like the one shown below. Notice that there are two ways to get an output 01 (the number 1) - either have the first input on and second input off or vice versa.

.. raw:: html
    
        <table border="0" class="truth-table table">
        <colgroup>
        <col width="25%">
        <col width="25%">
        <col width="25%">
        <col width="25%">
        </colgroup>
        <thead valign="bottom">
        <tr class="row-odd"><th class="head">Input 1</th>
        <th class="head">Input 2</th>
        <th class="head">2s</th>
        <th class="head">1s</th>
        </tr>
        </thead>
        <tbody valign="top">
        <tr class="row-even"><td>0</td>
        <td>0</td>
        <td class="output">0</td>
        <td>0</td>
        </tr>
        <tr class="row-odd"><td>0</td>
        <td>1</td>
        <td class="output">0</td>
        <td>1</td>
        </tr>
        <tr class="row-even"><td>1</td>
        <td>0</td>
        <td class="output">0</td>
        <td>1</td>
        </tr>
        <tr class="row-odd"><td>1</td>
        <td>1</td>
        <td class="output">1</td>
        <td>0</td>
        </tr>
        </tbody>
        </table>
        
    
.. important:: 

    Everything a computer does is in terms of answering logical questions. Doing math, modifying an image, recognizing speech, playing music, etc... all at some level are represented as logical questions the computer can process using logic gates.
    
The circuit shown above is known as a **half adder**. To add larger numbers, we need a **full adder** - a full adder is two half adders merged together with an OR gate. The circuit takes three inputs - two of the inputs are current values being added (A and B); the third input indicates whether or not there is a carry coming in from the previous column. The two outputs indicate the answers to the questions "Does this column have a 1 in the answer?" and "Do we need to carry a 1 to the next column?". 

.. simcir::

    {
        "width":600,
        "height":250,
        "showToolbox":false,
        "devices":[
        {"type":"DC","id":"dev0","x":24,"y":80,"label":"DC"},
        {"type":"XOR","id":"dev1","x":184,"y":96,"label":"XOR"},
        {"type":"AND","id":"dev2","x":184,"y":48,"label":"AND"},
        {"type":"AND","id":"dev3","x":296,"y":128,"label":"AND"},
        {"type":"Toggle","id":"dev4","x":104,"y":40,"label":"InputA","state":{"on":false}},
        {"type":"Toggle","id":"dev5","x":104,"y":104,"label":"InputB","state":{"on":false}},
        {"type":"Toggle","id":"dev6","x":104,"y":184,"label":"Carry In","state":{"on":false}},
        {"type":"XOR","id":"dev7","x":296,"y":176,"label":"XOR"},
        {"type":"OR","id":"dev8","x":352,"y":64,"label":"OR"},
        {"type":"LED","id":"dev9","x":464,"y":32,"label":"Carry Out"},
        {"type":"LED","id":"dev10","x":552,"y":32,"label":"Sum"},
        {"type":"Joint","id":"dev11","x":528,"y":40,"label":"Joint","state":{"direction":0}},
        {"type":"Joint","id":"dev12","x":512,"y":184,"label":"Joint","state":{"direction":0}},
        {"type":"Joint","id":"dev13","x":440,"y":40,"label":"Joint","state":{"direction":0}},
        {"type":"Joint","id":"dev14","x":424,"y":72,"label":"Joint","state":{"direction":0}}
        ],
        "connectors":[
        {"from":"dev1.in0","to":"dev4.out0"},
        {"from":"dev1.in1","to":"dev5.out0"},
        {"from":"dev2.in0","to":"dev4.out0"},
        {"from":"dev2.in1","to":"dev5.out0"},
        {"from":"dev3.in0","to":"dev1.out0"},
        {"from":"dev3.in1","to":"dev6.out0"},
        {"from":"dev4.in0","to":"dev0.out0"},
        {"from":"dev5.in0","to":"dev0.out0"},
        {"from":"dev6.in0","to":"dev0.out0"},
        {"from":"dev7.in0","to":"dev1.out0"},
        {"from":"dev7.in1","to":"dev6.out0"},
        {"from":"dev8.in0","to":"dev2.out0"},
        {"from":"dev8.in1","to":"dev3.out0"},
        {"from":"dev9.in0","to":"dev13.out0"},
        {"from":"dev10.in0","to":"dev11.out0"},
        {"from":"dev11.in0","to":"dev12.out0"},
        {"from":"dev12.in0","to":"dev7.out0"},
        {"from":"dev13.in0","to":"dev14.out0"},
        {"from":"dev14.in0","to":"dev8.out0"}
        ]
    }
        
To add large numbers, multiple full adders are chained together - one full adder is used for each binary digit in the number. An abstracted view of adding two 3-digit binary numbers using three full adders is shown below.

Each full adder box is one of the circuits from above. It is responsible for adding the bits in one column of the inputs - one adder handles A1 & B1, another adder handles A2 & B2, etc... It inputs representing the two digits in the numbers being added (A and B) as well as the carry from the previous adder(Cin). Each full outputs two answers: "What is the sum in this column?" (the S output) and "Do we carry a 1 into the next column's full adder?" (the Cout output). 

Try adding 3 to 2 by setting the A inputs to 101 and the B inputs to 010.

.. simcir::

    {
        "width":600,
        "height":450,
        "showToolbox":false,
        "devices":[
        {"type":"AltFullAdder","id":"dev0","x":408,"y":240,"label":"AltFullAdder"},
        {"type":"AltFullAdder","id":"dev1","x":184,"y":240,"label":"AltFullAdder"},
        {"type":"AltFullAdder","id":"dev2","x":296,"y":240,"label":"AltFullAdder"},
        {"type":"Toggle","id":"dev3","x":200,"y":64,"label":"A3","state":{"on":false}},
        {"type":"Toggle","id":"dev4","x":312,"y":64,"label":"A2","state":{"on":false}},
        {"type":"Toggle","id":"dev5","x":424,"y":64,"label":"A1","state":{"on":false}},
        {"type":"Toggle","id":"dev6","x":168,"y":120,"label":"B3","state":{"on":false}},
        {"type":"Toggle","id":"dev7","x":280,"y":120,"label":"B2","state":{"on":false}},
        {"type":"Toggle","id":"dev8","x":392,"y":120,"label":"B1","state":{"on":false}},
        {"type":"DC","id":"dev9","x":88,"y":16,"label":"DC"},
        {"type":"Joint","id":"dev10","x":152,"y":24,"label":"Joint","state":{"direction":0}},
        {"type":"Joint","id":"dev11","x":184,"y":24,"label":"Joint","state":{"direction":0}},
        {"type":"Joint","id":"dev12","x":296,"y":24,"label":"Joint","state":{"direction":0}},
        {"type":"Joint","id":"dev13","x":264,"y":24,"label":"Joint","state":{"direction":0}},
        {"type":"Joint","id":"dev14","x":408,"y":24,"label":"Joint","state":{"direction":0}},
        {"type":"Joint","id":"dev15","x":376,"y":24,"label":"Joint","state":{"direction":0}},
        {"type":"LED","id":"dev16","x":120,"y":368,"label":"Sum4"},
        {"type":"LED","id":"dev17","x":216,"y":368,"label":"Sum3"},
        {"type":"LED","id":"dev18","x":328,"y":368,"label":"Sum2"},
        {"type":"LED","id":"dev19","x":440,"y":368,"label":"Sum1"},
        {"type":"Joint","id":"dev20","x":120,"y":264,"label":"Joint","state":{"direction":2}}
        ],
        "connectors":[
        {"from":"dev0.in1","to":"dev8.out0"},
        {"from":"dev0.in2","to":"dev5.out0"},
        {"from":"dev1.in0","to":"dev2.out0"},
        {"from":"dev1.in1","to":"dev6.out0"},
        {"from":"dev1.in2","to":"dev3.out0"},
        {"from":"dev2.in0","to":"dev0.out0"},
        {"from":"dev2.in1","to":"dev7.out0"},
        {"from":"dev2.in2","to":"dev4.out0"},
        {"from":"dev3.in0","to":"dev11.out0"},
        {"from":"dev4.in0","to":"dev12.out0"},
        {"from":"dev5.in0","to":"dev14.out0"},
        {"from":"dev6.in0","to":"dev10.out0"},
        {"from":"dev7.in0","to":"dev13.out0"},
        {"from":"dev8.in0","to":"dev15.out0"},
        {"from":"dev10.in0","to":"dev9.out0"},
        {"from":"dev11.in0","to":"dev10.out0"},
        {"from":"dev12.in0","to":"dev13.out0"},
        {"from":"dev13.in0","to":"dev11.out0"},
        {"from":"dev14.in0","to":"dev15.out0"},
        {"from":"dev15.in0","to":"dev12.out0"},
        {"from":"dev16.in0","to":"dev20.out0"},
        {"from":"dev17.in0","to":"dev1.out1"},
        {"from":"dev18.in0","to":"dev2.out1"},
        {"from":"dev19.in0","to":"dev0.out1"},
        {"from":"dev20.in0","to":"dev1.out0"}
        ]
    }
