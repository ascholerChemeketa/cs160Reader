

Mixed Up Code Practice
------------------------------

Try to solve each of the following. Click the *Check Me* button to check each solution.  You will be told if your solution is too short, has a block in the wrong order, or you are using the wrong block.  Some of the problems have one or more extra blocks that aren't needed in the correct solution.

.. parsonsprob:: ch16ex1muc
   :numbered: left
   :practice: T
   :adaptive:
   :noindent:

   The following program segment should swap the first and last values of the list "numbers" using indexing. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   numbers = [3, 2, 1, 4]
   =====
   first = numbers[0]
   last = numbers[3]
   =====
   numbers[0] = last
   numbers[-1] = first
   =====
   first = numbers[1]
   last = numbers[4] #distractor

.. parsonsprob:: ch16ex2muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should iterate through the list of prices and discount them by 50%. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   price_lst = [21.99, 25.99, 19.99, 10.99, 15.99]
   discounts = []
   =====
   for price in price_lst:
   =====
       new_price = price * .50
   =====
       discounts.append(new_price)
   =====
   for price in discounts: #distractor
   =====
       price.append(price_lst) #distractor

.. parsonsprob:: ch16ex3muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should iterate through the strings in <i>list</i> and append them to <i>long_list</i> if the length is greater than 4. But, the blocks have been mixed up and include an extra block that isn't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>

   -----
   list = ["four", "Michigan", "yellow", "at", "blue"]
   long_list = []
   =====
   for each item in list:
   =====
       if len(item) > 4:
   =====
           long_list.append(item)
   =====
           item.append(long_list) #distractor

.. parsonsprob:: ch16ex4muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should first replace the last item of the list <i>months</i> with "November" then append "December" to the end of the list. But, the blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   months = ["January", "March", "June", "August", "October"]
   new_month = "November"
   =====
   months[4] = new_month
   =====
   months.append("December")
   =====
   months[5] = new_month #distractor
   =====
   months[-1] = "December" #distractor

.. parsonsprob:: ch16ex5muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should iterate through the list <i>terms</i> and then add each item to the list <i>vocab</i> if it is not already in the list. If the word is already in <i>vocab</i>, then the program should add 1 to the variable "counter". But the blocks have been mixed up and include extra blocks that aren't needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right. Click the <i>Check Me</i> button to check your solution.</p>
   -----
   terms = ["accent", "vertigo", "libra", "illusion"]
   vocab = ["hereditary", "illusion", "vertigo", "velocity", "fallacy"]
   counter = 0
   =====
   for word in terms:
   =====
       if word NOT in vocab:
   =====
           vocab.append(word)
   =====
           word.append(vocab) #distractor
   =====
       elif word in vocab:
   =====
           counter += 1
   =====
           counter + 1 #distractor

.. parsonsprob:: ch16ex6muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should reverse the order of the list <i>oldList</i>, by storing it in the list <i>soFar</i>. Print the result at the end. The blocks have been mixed up and include extra blocks that aren't needed in the solution. Drag the needed blocks from the left and put them in the correct order on the right. Click the <i/>Check Me</i> button to check your solution.</p>
   -----
   oldList= [“this”, “is”, “a”, “list”]
   newList=[]
   =====
   for x in range(0, len(oldList)):
   =====
   for x in range(0, list(oldList)): #distractor
   =====
       newList = oldList[x] + newList
   =====
       newList = x[oldList] + newList #distractor
   =====
   print(newList)

.. parsonsprob:: ch16ex7muc
   :numbered: left
   :practice: T
   :adaptive:

   The following program segment should first print out the program's instructions. Next it should continuously ask the user if it wants to add a word to a list <i>vocabulary</i> and then append it to the end the list IF the word is not already in the list. The blocks have been mixed up and include extra blocks that aren't needed in the solution.  Drag the needed blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   print("Enter a word to add it to the vocabulary list or type in 'quit' to end the program.")
   response = 0
   vocabulary = []
   =====
   while response != "quit":
   =====
   while response == "quit": #distractor
   =====
       response = input("Enter a vocabulary word:")
   =====
       if response not in vocabulary:
   =====
           vocabulary.append(response)