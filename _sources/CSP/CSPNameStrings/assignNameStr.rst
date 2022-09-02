..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. include:: ../csp_global.rst

Assign a Name to a String
===========================

.. index::
    single: assignment
    single: string
    pair: string; assignment
    single: function
    single: concatenate
    single: append

Concatenating (Appending) Strings
-----------------------------------

Computers can use names to represent *anything*.  In the last chapter we saw that we can name
numbers (declare a variable and set its value to a number) and then do calculations using the
names for the numbers.  We can also name **strings** and do calculations with their names, too.
A **string** is a sequence of characters enclosed in a pair of single, double, or triple quotes
like ``'Hi'``, ``"How are you?"``, or ``'''Why can't you do that?'''``.  What does it mean to
do a calculation on a string?  Well, Python uses the ``+`` symbol to **concatenate** strings
as shown below.  **Concatenate** means to create a new string with all the characters in the
first string followed by all of the characters in the second string.  This is also called
**appending** strings together.  

.. activecode:: String_Assign
    
    first = "Jorge"
    last = "Garcia"
    fullName = first + " " + last
    print(fullName)
   
Now try running this slightly different example. 
   
.. activecode:: String_Assign2

    first = 'Jorge'
    last = "Garcia"
    fullName = first + last
    print(fullName)
   
.. note::

    Blank spaces are not automatically added when you append two strings.  If you want a blank
    space in between two strings then put it there explicitly using a string with just a space
    in it ``" "`` as shown in ActiveCode1.
   
Try to run the example below.  It should give you errors.  Can you fix the errors?  

.. activecode:: String_Assign3

    first = 'Jorge"
    last = 'Garcia"
    fullName = first " " last
    print(fullName)
   
.. note::

    A string is a sequence of characters enclosed in a pair of single, double, or triple quotes.
    If you start a string with a single quote you must end it with a single quote.  If you start a
    string with a double quote you must end it with a double quote.  You must use the ``+``
    operator to append strings together.

    
Inputting Strings
-----------------------------------

We can use the ``input`` **function** in Python to get your first and last name and then print
your full name.  The **input** function is used like this:

``input("What is your first name?")``

.. index::
    single: parameter
    single: return

The string inside of the paranteheses (*"What is your first name?"*) is called a **paramter**.
It tells the function how to do its job. In this case, it tells ``input`` what to print in
order to prompt the user of the program to type something.

When the function is done getting the input from the user, it **returns** the string
containing whatever the user types. When the function **returns** a value, the function is
essentially is replaced by that value. The code ``input("What is your first name?")`` in the
sample below will be replaced by whatever the user types - something like *"Anne"*.

.. activecode:: String_Input

    first = input("What is your first name?")
    last = input("What is your last name?")
    fullName = first + " " + last
    print("Your full name is " + fullName)

Concatenating Strings and Numbers
-----------------------------------

You can print both strings and numbers, and you can concatenate strings using ``+``, but if you
try to concatenate a string and a number you will get an error. The string ``"5"`` is stored very
differently than the number ``5`` in computer memory, so to concatenate the number ``5`` and a
string we need to convert the number into a string first.  The ``str(num)`` function will convert
a number into a string.  

.. activecode:: String_Convert

    Fred = 5
    print("Fred")
    print(Fred)
    print("Fred" + " is " + str(Fred))
   
.. note::

   Notice how printing the string ``"Fred"`` prints something different than printing the value
   of the variable ``Fred``. Printing the string ``"Fred"`` prints the exact characters in that
   string. Remember that strings are enclosed in pairs of double or single quotes and when they
   are printed it will print the exact characters in the string. When you print a variable it
   will print the *value* of that variable.  
   
We can update our driving example to print out the cost of the trip with just one ``print``
statement.

.. activecode:: Trip_Calculator2

    distance = 924.7
    mpg = 35.5
    gallons = distance / mpg
    costPerGallon = 3.65
    costTrip = gallons * costPerGallon
    print("Cost to get from Chicago to Dallas: $" + str(costTrip))


There is another way we can use the ``print`` function. Instead of giving it one string that
we form with concatenation, we can give it a list of values separated by commas. Using this version
of print, we don't have to convert ``costTrip`` to a string because it is not being concatenated
with the string "Cost to get from Chicago to Dallas", they are just being printed one after another.
Also notice that this version of print automatically adds a space between items that are printed.
Here that causes a problem as it means there will be a space between the $ and the cost.

.. activecode:: Trip_Calculator3

    distance = 924.7
    mpg = 35.5
    gallons = distance / mpg
    costPerGallon = 3.65
    costTrip = gallons * costPerGallon
    print("Cost to get from Chicago to Dallas: $", costTrip)

**Check your understanding**

.. mchoice:: 3_1_3_4_stringVsValue
    :practice: T
    :answer_a: The address is street
    :answer_b: The address is 125 Main Street
    :answer_c: It won't execute
    :correct: a
    :feedback_a: Since street is in double quotes it will print the string street rather than the value of the variable street.
    :feedback_b: This would be true if it was print("The address is " + street)
    :feedback_c: While this isn't printing what we probably want it to, it will print something.


    Given the following code segment, what will be printed?

    ::

     street = "125 Main Street"
     print("The address is " + "street")

.. mchoice:: 3_1_3_5_noSpace
    :practice: T
    :answer_a: 125 Main Street, Atlanta, GA
    :answer_b: 125 Main Street,Atlanta, GA
    :answer_c: 125 Main Street Atlanta, GA
    :correct: b
    :feedback_a: This would be true if it was street + ", ".
    :feedback_b: There isn't a space after the comma and one isn't added automatically.
    :feedback_c: What about the comma?

    What will be printed when the following executes?

    :: 

        street = "125 Main Street"
        cityState = "Atlanta, GA"
        print(street + "," + cityState)



