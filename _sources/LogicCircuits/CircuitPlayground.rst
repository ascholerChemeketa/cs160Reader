.. include:: ../global.rst

Circuit Playground
============================

Here is a circuit you can edit.

.. simcir::

    {
        "width":600,
        "height":500,
        "showToolbox":true,
        "toolbox":[
        {"type":"DC"},
        {"type":"LED"},
        {"type":"Toggle"},
        {"type":"NOT"},
        {"type":"AND"},
        {"type":"OR"},
        {"type":"XOR"},
        {"type":"Joint"}
        ],
        "devices":[
        {"type":"Toggle","id":"dev0","x":120,"y":96,"label":"Input1","state":{"on":false}},
        {"type":"DC","id":"dev1","x":40,"y":160,"label":"DC"},
        {"type":"Toggle","id":"dev2","x":120,"y":216,"label":"Input2","state":{"on":false}}
        ],
        "connectors":[
        {"from":"dev0.in0","to":"dev1.out0"},
        {"from":"dev2.in0","to":"dev1.out0"}
        ]
    }



Instructions:

* To add a component, drag it into the circuit area.
* To delete a component, drag it from the circuit area back to the component palette.
* To connect two components, click on the yellow (input) circle of one component and drag to the white (output) circle of another component, then release.
* To disconnect two components, click the yellow circle where the connecting line ends and release.
* Double click the label of a component to rename it.
* Make sure to start your circuit with DC - connect it to Toggles to be your inputs.
* Control-Click switches between visual mode and a text version of your circuit. To save a circuit, switch to text mode, then copy the text and save it in a text file on your computer. To load the circuit, make sure the circuit is in text mode, paste in your saved text, then switch back to visual mode.