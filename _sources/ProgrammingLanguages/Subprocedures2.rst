.. include:: ../global.rst

.. index:: subprocedure

Subprocedures Implemented
=================================

In code, subprocedures are each given a name when they are **defined** (the code is written). The parameters that they take are usually listed in parentheses after the name. The following code says *"There is a new subprocedure called Power that requires two inputs. The first we will call the base and the second the exponent."*::

    define Power(base, exponent):

Later, when someone wants to call that function, they use its name followed by parentheses and then the values for the parameters. To call the ``Power`` subprocedure with base of 8 and power of 6 we might do::

    Power(8, 6)

Inside the function - the body - are the commands that need to be executed. They can use the parameters just like variables to figure out what the current inputs are. When the subprocedure is done, it needs to **return** execution back to the place where it was called by saying "return". If there is an answer to give back, we say something like "return answer"::

    1   def Power(base, exponent):
    2       value = 1
    3       step = 0
    4       while (step < exponent):
    5           value = value * base
    6           step = step + 1
    7
    8       return value


Once execution hits the "return" command, the processor jumps back to the place it came from. The subprocedure call takes on the value that was returned. If we want to do something with that value, we need to store it by assigning it into a variable. This line of code says *"Go do the Power function with inputs of 8 and 6. Whatever answer comes back, store into theValue"*::

    theValue = Power(8, 6)

To put everything together, here is an example you can try running:

.. codelens:: Subprocedure2

    #----------Subprocedure---------
    def Power(base, exponent):
        value = 1
        step = 0
        while (step < exponent):
            value = value * base
            step = step + 1

        return value

    #------Main part of program------
    print("Calculating 5 to the 3rd power...")
    answer1 = Power(5, 3)
    print(answer1)

    print("Calculating 8 to the 2nd power...")
    answer2 = Power(8, 2)
    print(answer2)

Note that when the computer hits "def Power" it just remembers that this function exists... it does not run it right away. The first real line of code to be executed is line 12. On line 13 ``Power`` is called and the program jumps up to run it. Once the power is calculated, execution picks up again at line 13. Once we reach line 17, the code calls ``Power`` again with different inputs.

.. important:: In addition to abstraction, functions are a powerful way to reuse pieces of code without having to copy and paste entire algorithms around in your code. We can reuse the algorithm in the Power subprocedure by calling it instead of duplicating all of the instructions.
