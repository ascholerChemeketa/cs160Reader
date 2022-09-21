..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".


.. include:: ../CSP/csp_global.rst

Making a MadLib story
===================================

You might have done MadLib stories when you were a kid.  You provide some pieces of information,
like a name of a friend, a verb, and a favorite game (for example), and those pieces of
information get plugged into a story.  Since you don't know the story beforehand, you're
surprised at what happens to your friend in the story.

.. activecode:: cspnamestrings_madlib1
      
    firstName = "Pat"
    lastName = "Smith"
    gender = "girl"
    address = "65 Elm Street"
    verb = "eat"
    start = "Once there was a " + gender + " named " + firstName + "."
    next1 = "A good " + gender + " living at " + address + "."
    next2 = "One day, a wicked witch came to the " + lastName + " house."
    next3 = "The wicked witch was planning to " + verb + " " + firstName + "!"
    ending = "But " + firstName + " was smart and avoided the wicked witch."
    print(start)
    print(next1)
    print(next2)
    print (next3)
    print(ending)


.. mchoice:: cspnamestrings_madlib2
    :answer_a: realEnding = firstName + " called the police who took the witch away."
    :answer_b: print(firstName + " called the police who took the witch away.")
    :answer_c: print("Pat called the police who took the witch away.")
    :correct: b
    :feedback_a: This would only work if you also put <code>print(realEnding)</code> after this line.
    :feedback_b: This is a good way to do this since the line that is printed will have the correct
        first name.  You could also make a string named <code>realEnding</code> first, and then print it.
    :feedback_c: This <i>would</i> work.  But if you changed the <code>firstName</code> variable,
        this line would not change.  A different answer is better.

    Now you want to add more to the story. You want it to say: "Pat called the police who took the
    witch away."  Adding which of these lines to the end of the program will make that happen?
    (Hint: It is okay to *try* each one!)


**You should really do this:** Run this program to see what gets generated, then change some of the variables to make different stories.  Try different names, different verbs.  


.. activecode:: cspnamestrings_madlib3
   
   firstName = "Sofia"
   lastName = "Diaz"
   gender = "girl"
   address = "1600 Pennsylvania Avenue"
   verb = "burp at"
   start = "Once there was a " + gender + " named " + firstName + "."
   next1 = "A good " + gender + " living at " + address + "."
   next2 = "One day, a wicked witch came to the " + lastName + " house."
   next3 = "The wicked witch was planning to " + verb + " " + firstName + "!"
   ending = "But " + firstName + " was smart and avoided the wicked witch."
   print(start)
   print(next1)
   print(next2)
   print(next3)
   print(ending)
   
.. mchoice:: cspnamestrings_madlib4
   :answer_a: Yes
   :answer_b: No
   :correct: a
   :feedback_a: The only thing that is different is when the lines are printed, but the lines are the same.
   :feedback_b: Did you try it?  Copy the code into the program area above and run it.
 
   Would the following code print the same story as shown above? 
   
   :: 

     firstName = "Sofia"
     lastName = "Diaz"
     gender = "girl"
     address = "1600 Pennsylvania Avenue"
     verb = "burp at"
     start = "Once there was a " + gender + " named " + firstName + "."
     print(start)
     next1 = "A good " + gender + " living at " + address + "."
     print(next1)
     next2 = "One day, a wicked witch came to the " + lastName + " house."
     print(next2)
     next3 = "The wicked witch was planning to " + verb + " " + firstName + "!"
     print(next3)
     ending = "But " + firstName + " was smart and avoided the wicked witch."
     print(ending)
     
.. mchoice:: cspnamestrings_madlib5
   :practice: T
   :answer_a: Mali is Mali
   :answer_b: Mali is 5
   :answer_c: 5 is Mali
   :answer_d: 5 is 5
   :correct: b
   :feedback_a: There are no double quotes around the last Mali so it will use the value of the variable Mali.
   :feedback_b: The first Mali is in double quotes so it will print the string Mali and the second Mali is not in double quotes so it will print the value of the variable Mali.
   :feedback_c: The first Mali is in double quotes and the second is not.
   :feedback_d: The first Mali is in double quotes so it is a string and the characters in the string will be printed.
 
   What would the following code print?
   
   :: 

     Mali = 5
     print("Mali" + " is " + str(Mali))
     
.. Note::
   When you print a string (a sequence of characters in a pair of single, double, or triple quotes) in Python it will print the exact characters in the string.  When you print a variable it will print the value of that variable.
     
.. parsonsprob:: cspnamestrings_madlib6
   :numbered: left
   :adaptive:

   Put the blocks below into the correct order to print a twist on a famous poem.   
   -----
   print("Roses are red.")  	
   ===== 
   print("Violets are blue.)
   =====                
   print("Sugar is sweet.")
   =====
   print("And so is Sue.")
     
.. parsonsprob:: cspnamestrings_madlib7
   :numbered: left
   :adaptive:

   Put the blocks below into the correct order to declare the variables and then print the following story. One day Jay went shopping.  He wanted to buy shoes.  But, he didn't like any.  So, Jay went home. 
   -----
   name = "Jay"
   item = "shoes"
   =====
   print("One day " + name + " went shopping.")  	
   ===== 
   print("He wanted to buy " + item + ".")
   =====                
   print("But, he didn't like any.")
   =====
   print("So, " + name + " went home.")

.. tabbed:: cspnamestrings_madlib_tab0

        .. tab:: Question

           Write a Madlib that uses the variables below in a 1-2 sentence story. Make sure the
           story still works if you change the values of the variables!
           
           .. activecode:: cspnamestrings_madlib8

                name = "Jesse"
                month = "October"
                place = "Portland"
                activity = "sailing"

        .. tab:: Answer
        
            There are many possible stories, here is one:
            
            .. activecode:: cspnamestrings_madlib9

                name = "Maria"
                month = "October"
                place = "Portland"
                activity = "sailing"
                start = month + " is " + name + "'s favorite month for " + activity + "."
                print(start)
                end = "This year " + name + " decided that she would go " + activity + " in " + place + "."
                print(end)

