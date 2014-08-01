.. include:: ../global.rst

.. index::
    pair: Logic Gate; NAND
    pair: Logic Gate; NOR
    pair: Logic Gate; XNOR
    
Negated Gates
============================

Finally, it is useful sometimes to think about the opposites of the three basic logical rules (AND, OR and XOR). These opposite, or "Not" rules, do the exact opposite of the regular versions. For instance, AND gives an output of 1 only if both inputs are 1. NAND (Not AND) gives an output of 0 only if both inputs are 1.

Below are the truth tables for the negated gates shown next to the gate they negate.

.. pseudo_h3:: OR vs NOR Gates
    :class: underlined

.. container:: inlinegroup

    .. rst-class:: truth-table

        .. table:: Truth table for OR
        
            =============   =============   =============     
            Input 1         Input 2         Output 
            =============   =============   =============  
            0               0               0
            0               1               1
            1               0               1
            1               1               1
            =============   =============   ============= 
            
    .. rst-class:: truth-table

        .. table:: Truth table for NOR
        
            =============   =============   =============     
            Input 1         Input 2         Output 
            =============   =============   =============  
            0               0               1
            0               1               0
            1               0               0
            1               1               0
            =============   =============   ============= 


.. pseudo_h3:: AND vs NAND Gates
    :class: underlined

.. container:: inlinegroup

    .. rst-class:: truth-table

        .. table:: Truth table for AND
        
            =============   =============   =============     
            Input 1         Input 2         Output 
            =============   =============   =============  
            0               0               0
            0               1               0
            1               0               0
            1               1               1
            =============   =============   ============= 
            
    .. rst-class:: truth-table

        .. table:: Truth table for NAND
        
            =============   =============   =============     
            Input 1         Input 2         Output 
            =============   =============   =============  
            0               0               1
            0               1               1
            1               0               1
            1               1               0
            =============   =============   =============             


            
.. pseudo_h3:: XOR vs XNOR Gates (Also known as ENOR)
    :class: underlined

.. container:: inlinegroup

    .. rst-class:: truth-table

        .. table:: Truth table for XOR
        
            =============   =============   =============     
            Input 1         Input 2         Output 
            =============   =============   =============  
            0               0               0
            0               1               1
            1               0               1
            1               1               0
            =============   =============   ============= 
            
    .. rst-class:: truth-table

        .. table:: Truth table for XNOR
        
            =============   =============   =============     
            Input 1         Input 2         Output 
            =============   =============   =============  
            0               0               1
            0               1               0
            1               0               0
            1               1               1
            =============   =============   =============     
            
|