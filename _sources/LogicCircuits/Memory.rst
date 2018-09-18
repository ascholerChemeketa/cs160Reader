.. include:: ../global.rst

Remembering Things
============================

In previous circuits we have seen, every path has gone strictly left to right. But we can take the output of a gate and feed it back in as the inputs to earlier gates. This is the secret behind building a "memory" circuit: feeding the output back into the circuit produces a loop that "remembers" a value.  The circuit below uses two NOR gates (NOR is short for Not OR, which is a NOT gate that comes right after an OR). Notice how the output of each NOR gate feeds back as an input to the other gate.

.. raw:: html

    <script type="text/javascript" src="../_static/simcir/simcir.js"></script>
    <link rel="stylesheet" type="text/css" href="../_static/simcir/simcir.css" />
    <script type="text/javascript" src="../_static/simcir/simcir-basicset.js"></script>
    <link rel="stylesheet" type="text/css" href="../_static/simcir/simcir-basicset.css" />
	
    <div class="simcir">
	{
	  "width":600,
	  "height":250,
	  "showToolbox":false,
	  "devices":[
	    {"type":"DC","id":"dev0","x":88,"y":96,"label":"DC"},
	    {"type":"Toggle","id":"dev1","x":168,"y":56,"label":"Input1","state":{"on":false}},
	    {"type":"Toggle","id":"dev2","x":168,"y":120,"label":"Input2","state":{"on":false}},
	    {"type":"NOT","id":"dev3","x":336,"y":48,"label":"NOT"},
	    {"type":"OR","id":"dev4","x":256,"y":48,"label":"OR"},
	    {"type":"OR","id":"dev5","x":256,"y":128,"label":"OR"},
	    {"type":"NOT","id":"dev6","x":336,"y":128,"label":"NOT"},
	    {"type":"Joint","id":"dev7","x":384,"y":56,"label":"Joint","state":{"direction":0}},
	    {"type":"LED","id":"dev8","x":456,"y":128,"label":"Memory"},
	    {"type":"Joint","id":"dev9","x":384,"y":104,"label":"Joint","state":{"direction":2}},
	    {"type":"Joint","id":"dev10","x":384,"y":136,"label":"Joint","state":{"direction":0}},
	    {"type":"Joint","id":"dev11","x":384,"y":176,"label":"Joint","state":{"direction":2}},
	    {"type":"Joint","id":"dev12","x":224,"y":48,"label":"Joint","state":{"direction":0}},
	    {"type":"Joint","id":"dev13","x":240,"y":104,"label":"Joint","state":{"direction":2}},
	    {"type":"Joint","id":"dev14","x":240,"y":144,"label":"Joint","state":{"direction":0}},
	    {"type":"Joint","id":"dev15","x":224,"y":176,"label":"Joint","state":{"direction":2}}
	  ],
	  "connectors":[
	    {"from":"dev1.in0","to":"dev0.out0"},
	    {"from":"dev2.in0","to":"dev0.out0"},
	    {"from":"dev3.in0","to":"dev4.out0"},
	    {"from":"dev4.in0","to":"dev12.out0"},
	    {"from":"dev4.in1","to":"dev1.out0"},
	    {"from":"dev5.in0","to":"dev2.out0"},
	    {"from":"dev5.in1","to":"dev14.out0"},
	    {"from":"dev6.in0","to":"dev5.out0"},
	    {"from":"dev7.in0","to":"dev3.out0"},
	    {"from":"dev8.in0","to":"dev10.out0"},
	    {"from":"dev9.in0","to":"dev7.out0"},
	    {"from":"dev10.in0","to":"dev6.out0"},
	    {"from":"dev11.in0","to":"dev10.out0"},
	    {"from":"dev12.in0","to":"dev15.out0"},
	    {"from":"dev13.in0","to":"dev9.out0"},
	    {"from":"dev14.in0","to":"dev13.out0"},
	    {"from":"dev15.in0","to":"dev11.out0"}
	  ]
	}
    </div>
	

With that circuit (known as an SR Flip Flop), try the following experiments

* Turn on Input 1 - this **Sets** the memory to 1.
* Turn off Input 1. Notice that the memory stays on even though both switches are off.
* Turn on Input 2 - this **Resets** the memory to 0.
* Turn off Input 2. Now the circuit remembers the value 0 while both switches are off.

Essentially, the circuit remembers which input, Set or Reset, was most recently on. This is a form of memory: If we want to remember **1**, we flip **Input1** on briefly. To remember **0**, we flip **Input2** on briefly. There are many other circuits that can "remember" a value, but they all use this same basic idea of feeding outputs back in as inputs. To remember more than one bit, we would simply need to make multiple copies of this circuit, one for each bit we need to store.
