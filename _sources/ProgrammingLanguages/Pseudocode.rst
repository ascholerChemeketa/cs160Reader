.. include:: ../global.rst


.. index:: pseudocode

Pseudocode
=================================

P\ **seudocode** is essentially generic code. When we want to specify a particular algorithm to humans, but don't want to get bogged down in the details of a particular programming language, we write pseudocode. Pseudocode is made up and often slightly different from person to person - there is no "official" pseudocode - but the idea is always the same: express the program with commands that could easily be turned into working code in any appropriate language via simple translation. As much as possible, each line of pseudocode should correspond to on line of what would exist in real code.

Thus, something like::

    Get the users test and work grades. Tell the user they passed if their overall average is 60% or above.

Would be bad pseudocode - it does not clearly explain what it means to get the average. Turning that into working code would require some problem solving, not just translation. ven the parts that do seem clear are not broken up into the kinds of statements a program uses.

The example shown below would be much more appropriate. The first tab shows pseudocode, the other two show that code translated into real programming languages. Don't worry too much about the details of the C++ or Python code, just how they closely correspond to pseudocode. There are difference between each language and pseudocode, but they are relatively minor (at least if you know the languages involved).

..

.. tabbed:: pseudoEx

    .. tab:: Pseudocode
    
        ::
        
            1   print "Enter test average:"
            2   testGrade = getInputFromUser()
            3   print "Enter work average:"
            4   workGrade = getInputFromUser()
            5   overallGrade = (testGrade + workGrade) / 2
            6   if (overallGrade >= 60)
            7       print "You passed"

    .. tab:: Python
        
        ::  
        
            1   print "Enter test average:"
            2   testGrade = int(input("Enter test average:"))
            3   print "Enter work average:"
            4   workGrade = int(input("Enter work average:"))
            5   overallGrade = (testGrade + workGrade) / 2.0
            6   if overallGrade >= 60:
            7       print "You passed"

    .. tab:: C Plus Plus
        
        ::  
        
            1   cout << "Enter test average:" << endl;
            2   int testGrade;
                cin >> testGrade;
            3   cout >> "Enter work average:" << endl;
            4   int workGrade;
                cin >> workGrade;
            5   double overallGrade = (testGrade + workGrade) / 2.0;
            6   if (overallGrade >= 60) {
            7       cout << "You passed" << endl;
                }

.. pseudo_h3:: Pseudocode Vocabulary         
       
So what are you allowed to say in pseudocode? Anything that can be simply translated into a language your reader would be familiar with. In general, here is a menu of legal pseudocode statements:

* Declare a variable (storage location)
    * Often this is done by assigning a variable its first value ``age = 10``
    * You may want to specify what type of information it is (Integer, Real, String, Array…) and give it a name : ``Integer x``, ``Real money``
    
* Assign a value to a variable: 
    * Left side should just have the name of the variable that is being set, right side the value: ``age = 10`` NOT ``10 = age``
    * You can do a calculation on the right hand side of the assignment: ``x = 10 / 2``. Just make sure any variable that you use on the right hand side already has a value. ``area = height * width`` only makes sense if ``height`` and ``width`` already have been assigned values.

* Print output
    * Can print text be putting " " around it: ``print "Hello there"``
    * Can print values of variable by keeping them outside of " ". This would print the value stored in the variable age ``print age``. Once again, this only makes sense if you have assigned age a value!
    
* Get input from the user
    * Ever language includes includes some subprocedure for getting user input - assume it is called ``GetInput``
    * You need to store the input into a variable with an assignment: ``Hours = GetInput``
    * You can include a prompt as a parameter to the subprocedure: ``Hours = GetInput("Enter your hours")``
    

* If(TEST)…Else…
    * TEST must be something that can only be true or false (not a number)
    * Steps for If and Else parts should be indented
    * The Else is optional
    
* Loop : While / Repeat / For
    * Must say how many times or specify when to stop:
        ``Repeat 10 times``
        
        ``While total < 1000``
        
        ``For MonthNumber 1 to 12``
        
    * Indent to show what will be repeated
    
* Call a subprocedure
    * Must provide instructions for that subprocedure!

* End Program
    * Assumed your program ends after the last step - but sometimes it makse sense to end early.


