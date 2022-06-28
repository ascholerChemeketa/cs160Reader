.. qnum::
	 :prefix: 17-10-
   :start: 1

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block that isn't needed in the correct solution.

.. parsonsprob:: ch17ex1muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should split the string "phrase" by each word and assign the result to variable "x". Then insert the word "Jordan" into the string <i>final</i> and print the result.  But, the blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   phrase = "Who did Jordan play against?"
   =====
   x = phrase.split(" ")
   =====
   x = split(phrase) #distractor
   =====
   name = x[2]
   =====
   name = x[3] #distractor
   =====
   final = name + "is his name."
   =====
   print(final)

.. parsonsprob:: ch17ex2muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should print the integers <i>4, 9, 12</i> in order using the find method on <i>str</i>. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   str = "The girl was going home."
   =====
   num = str.find("girl")
   print(num)
   =====
   num = str.find("going")
   print(num) #paired
   =====
   x = str.find("was")
   print(x)
   =====
   x = str.find("as")
   print(x) #paired
   =====
   y = str.find(" going")
   print(y) 
   =====
   y = str.find("home")
   print(y) #paired

.. parsonsprob:: ch17ex3muc
  :numbered: left
  :practice: T
  :adaptive:
  :noindent:

  The following program segment should take the name from <i>sent_1</i> and assign it to the variable <i>first_name</i> using indexing. Then add the string to the variable <i>last_name</i> to create the variable <i>full_name</i>. Finally, add <i>full_name</i> to the <i>favorite</i> and print the result. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
  -----
  sent_1 = "When Jimi got here, there was a commotion."
  last_name = " Hendrixx"
  =====
  first_name = sent_1[5:9]
  =====
  first_name = sent_1[5:8] #distractor
  =====
  full_name = first_name + last_name
  =====
  favorite = full_name + " is my favorite artist!"
  =====
  favorite = full_name + is my favorite artist! #distractor
  =====
  print(favorite)

.. parsonsprob:: ch17ex4muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should print the integer <i>7</i> using the .find() procedure. But, the blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   str = "Roads? Where we're going we don't need roads."
   =====
   pos = str.find("where") #distractor
   =====
   pos = str.find("Where")
   =====
   pos = str.find("need") #distractor
   =====
   print(pos)

.. parsonsprob:: ch17ex5muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   A restaurant needs to print out the correct total for customer #1, but all they have is a string of totals. The correct total for customer #1 is 70. The string <i>totals</i> includes the totals of the last 5 customers, separated by parentheses. Use the split and index methods to print out the proper total for customer #1. The blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   totals = "31)70)43)35)80)"
   =====
   new = totals.split(")")
   =====
   new = new.split(totals) #distractor
   =====
   new = totals.split("70") #distractor
   =====
   print("Your total is: $" + new[1])
   =====
   print("Your total is: $" + new[2]) #distractor

.. parsonsprob:: ch17ex6muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should define and then call the function <i>storyTime</i> which uses variables to piece together a story. The blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   def storyTime(name, place, treasure):
   =====
       intro = "There once was an explorer named " + name
   =====
       middle = name + " was on a voyage to " + place
   =====
       end = name + " was traveling all this way in hopes of finding " + treasure
   =====
       print(intro)
   =====
       print(middle)
   =====
       print(end)
   =====
   storyTime("Indiana Jones", "Venice", "the Holy Grail")
   =====
   def storyTime(intro, middle, end): #distractor

.. parsonsprob:: ch17ex7muc
   :numbered: left
   :practice: T
   :adaptive:

   The following function should take in two strings as arguments, then print and return the position of the first parameter in the second string. The blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   def stringPos(phrase, sentence):
   =====
       pos = sentence.find(phrase)
   =====
       pos = phrase.find("sentence") #distractor
   =====
       print(pos)
   =====
       return pos