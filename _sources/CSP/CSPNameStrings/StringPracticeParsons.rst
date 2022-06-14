.. qnum::
   :prefix: 4-7-
   :start: 1

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have an extra block that isn't needed in the correct solution.  Try to solve these on your phone or other mobile device!

.. parsonsprob:: ch4ex1muc
   :adaptive:
   :noindent:

   The following code should print Maria's first name on one line and her last name on the next line.  But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   firstName = "Maria"
   lastName = "Hernandez"
   =====
   print(firstName)
   =====
   print(lastName)
   =====
   print(Maria) #distractor


.. parsonsprob:: ch4ex2muc
   :adaptive:
   :noindent:

   The following code should print the words to a famous poem. But the blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   print("Roses are red")
   =====
   print("Violets are blue")
   =====
   print("Sugar is sweet")
   =====
   print("And so are you")


.. parsonsprob:: ch4ex3muc
   :adaptive:
   :noindent:

   The following code should print a sentence about Marcus' favorite color on one line. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   name = "Marcus"
   color = "Blue"
   =====
   sentence = name + " likes " + color + "."
   =====
   print(sentence)
   =====
   print(name, color) #distractor


.. parsonsprob:: ch4ex4muc
   :adaptive:
   :noindent:

   The following code should print the first 2 characters of the message followed by the last 2 characters of the message. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   message = "I hope this works"
   length = len(message)
   =====
   part1 = message[0:2]
   part2 = message[length - 2: length]
   =====
   print(part1 + part2)
   =====
   print(part1 * part2) #distractor


.. parsonsprob:: ch4ex5muc
   :adaptive:
   :noindent:

   The following code should print the name in upper case letters on one line followed by the age on the next line. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   name = "Layla"
   age = "16"
   =====
   nameUp = name.upper()
   =====
   print("Your name is " + nameUp)
   =====
   print("Your age is " + age)
   =====
   print("Your name is " name) #distractor


.. parsonsprob:: ch4ex6muc
   :adaptive:
   :noindent:

   The following code should print out the index of the name Tom in a sentence. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   sentence = "Karl gave Tom the new bike lock this morning"
   =====
   place = sentence.find("Tom")
   =====
   print(place)
   =====
   place = sentence.slice("Tom") #distractor

.. parsonsprob:: ch4ex7muc
   :adaptive:
   :noindent:

   The following code should print the initials in lowercase letters. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   first = "Gerald"
   middle = "Foster"
   last= "Jones"
   =====
   initials = first[0:1] + middle[0:1] + last[0:1]
   =====
   lowerInitials = initials.lower()
   =====
   print(lowerInitials)
   =====
   print(initials) #distractor

.. parsonsprob:: ch4ex8muc
   :adaptive:
   :noindent:

   The following code should print the message in all uppercase letters. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   message = "Don't Pokemon and drive!"
   =====
   upperMessage = message.upper()
   =====
   print(upperMessage)
   =====
   print(Message) #distractor

.. parsonsprob:: ch4ex9muc
   :adaptive:
   :noindent:

   The following code should print the first 3 letters of message in uppercase letters. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   message = "Have a nice day!"
   =====
   part = message[0:3]
   =====
   upper = part.upper()
   =====
   print(upper)
   =====
   part = message[0:4] #distractor

.. parsonsprob:: ch4ex10muc
   :adaptive:
   :noindent:

   The following code should print the part of the message starting with the word "nice".  But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the *Check Me* button to check your solution.
   -----
   message = "Have a nice day!"
   =====
   pos = message.find("nice")
   end = len(message)
   =====
   print(message[pos:end])
   =====
   pos = message.find("Nice")
   end = len(message) #distractor
