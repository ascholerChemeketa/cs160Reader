.. include:: ../global.rst


.. index:: algorithm

Algorithms Introduction
=================================

Simply put, an algorithm is simply a set of step by step instructions for accomplishing some task. If you have every followed a recipe like the one below, you have followed an algorithm.

.. faux_code::

    **Chocolate Cream Pie**
    1. Heat milk, marshmallows and chocolate in 3-quart saucepan over low heat,
    \    stirring constantly, until chocolate and marshmallows are melted 
    \    and blended. 
    2. Refrigerate about 20 minutes, stirring occasionally until mixture mounds 
    \     slightly when dropped from a spoon.
    3. Beat whipping cream in chilled small bowl with electric mixer on high 
    \     speed until soft peaks form. 
    4. Fold chocolate mixture into whipped cream. 
    5. Pour into pie shell. 
    6. Refrigerate uncovered about 8 hours or until set. 

As long as you understand the directions, you do not need to know much about cooking to follow the recipe - this is the power of algorithms. Once we have created an algorithm, we no longer need to think about the principles on which the algorithm is based. All you have to do is follow the directions. This means that algorithms are a way of capturing intelligence and sharing it with others. Once you have encoded the necessary intelligence to solve a problem in an algorithm, many people can use your algorithm without needing to become experts in a particular field.

Algorithms are especially important to computers because computers are really general purpose machines for solving problems. But in order for a computer to be useful, we must give it a problem to solve and a technique for solving the problem. Through the use of algorithms, we can make computers "intelligent" by programming them with various algorithms to solve problems. Because of their speed and accuracy, computers are well-suited for solving tedious problems such as searching for a name in a large telephone directory or adding a long column of numbers.


.. pseudo_h3:: Algorithm Requirements
    :class: underlined

To be useful, an algorithm must meet certain requirements:

* Algorithms have computable operations
    Each step in an algorithm must be something that is possible to do. For computers, many mathematical operations such as division by zero or finding the square root of a negative number are also impossible. These operations are not computable so they cannot be used in writing algorithms.
    
* Algorithms have unambiguous operations
    Each operation in an algorithm must be sufficiently clear so that it does not need to be simplified. The meaning of "sufficiently clear" depends on who or what the algorithm is written for. The instruction ``average the two numbers`` would be perfectly clear to most humans. But the same instruction is ambiguous to a computer because the computer has no basic operations for averaging. For a computer, the algorithm would have to be expressed in terms of operations that can be carried out by programming language statements - adding the two numbers and dividing the sum by two.

* Algorithms are well-ordered
    Since an algorithm is a collection of operations or instructions, we must know the correct order in which to execute the instructions. If the order is unclear, we may perform the wrong instruction or we may be uncertain which instruction should be performed next. This characteristic is especially important for computers. A computer can only execute an algorithm if it knows the exact order of steps to perform.

* Algorithms halt in a finite amount of time
    Algorithms should be composed of a finite number of operations. If an algorithm was of infinite length, it would be impossible to write down or store in a computer.


.. quick_attribution:: VT