.. include:: ../global.rst


Other Gates
============================

We can combine two inputs to produce an output using many rules other than **AND** or **OR**. We won't worry about what the switches would look like for the other rules we will learn about... we would have to make our simplified model of an electric circuit more complex to see how they work. Instead, we will do what computer scientists normally do - abstract away from the actual electronics and focus on the logical rules they describe.

.. index::
    pair: Logic Gate; XOR
    
.. pseudo_h3:: XOR Gates
    :class: underlined

The exclusive or gate, known as **XOR** (or sometimes **EOR**) describes a gate that only outputs a 1 only if one input is on and the other off. It is the rule we can use to determine if the result of a multiplication is positive or negative. If we think of the inputs as "is the first number negative?" and "is the second number negative?" and the output as "the result is negative", we can see that the truth table below gives us the correct answer for each of the four possible situations. The only way to get a negative product is to have exactly one negative input (01 or 10), if both inputs are negative (11), the result is positive:

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
    
Watch out for **XOR** and **OR** - in English we often use the word "or" to mean both things. "Entrées come with fries or a salad" probably means you can get one or the other, but not both. On the other hand if a rule stated: "If you turn in copied work, or the wrong assignment, you will get a 0", a plagiarized copy of the wrong assignment (both parts true) would still mean you get a 0. 

.. index::
    pair: Logic Gate; NOT
    
.. pseudo_h3:: NOT Gates
    :class: underlined

The **NOT** gate is special in that it only has one input. The output is always the opposite of the input. It is the kind of logic we need to map the input "is a number positive" to the output "is the product of the number and -1 positive". If the number we start with is negative (0), the answer is positive (1). If the number we start with is positive (1), then the answer is negative (0).    
   

.. rst-class:: truth-table

    .. table:: Truth table for NOT

        =============   =============     
        Input 1         Output      
        =============   =============  
        0               1
        1               0
        =============   ============= 
    