.. qnum::
   :prefix: 25-3-
   :start: 1

Set #3
-------------------------------------

The following questions make up Set #3 of the Untimed Practice Exam Questions. The questions resemble, both in format and substance, what you might see on the AP CS Principles exam. You should finish these questions within 17 minutes to satisfy the time constraints of the AP exam. You may refer to the AP CS Reference Sheet, which can be found here_.

.. _here: raw:: html <a href="https://secure-media.collegeboard.org/digitalServices/pdf/ap/ap-computer-science-principles-course-and-exam-description.pdf#page=121" target="_blank">here</a>


You will not be able to change your answers after you hit the "Finish Exam" button.


   .. mchoice:: e25_3_1
      :answer_a:
      :answer_b:
      :answer_c:
      :answer_d:
      :correct: b
      :feedback_a: Incorrect. This does not compare two prices -- the variable 'max' is not a price, it is the index of the current max value.
      :feedback_b: Correct. This updates the value of max with 'i' if it is greater than the previous maximum price.
      :feedback_c: Incorrect. This will not update the value of max with the highest price value.
      :feedback_d: Incorrect. This assigns the price value to the variable max rather than the index value of the list itemList.

      A grocery store uses a database to store important statistics. The prices of all items are stored in a list called itemList, which is indexed from 1 to x. The company uses the following program to assign the index of the item in the store that has the highest price to the variable max.

      ::

        i ← 0
        max ← i + 1
        x ← LENGTH(itemList)
        REPEAT x times
        {
        	i ← i + 1
        	<MISSING CODE>
        }

      Which of the following code segments can replace <MISSING CODE> so that the program works as intended?


      (A)
      ::

        IF(itemList[i] > max)

        {
             max ← itemList[i]
        }


      (B)
      ::

        IF(itemList[i] > itemList[max])

        {
            max ← i
        }


      (C)
      ::

        IF(itemList[i] < itemList[max])

        {
            max ← i
        }

      (D)
      ::

        IF(itemList[i] > itemList[max])

        {
            max ← itemList[i]
        }


   .. mchoice:: e25_3_2
      :answer_a: Executing code once
      :answer_b: Repeating a block of code until a condition is met
      :answer_c: Duplicating a section of code multiple times in a program
      :answer_d: Debugging code multiple times until it passes testing
      :correct: b
      :feedback_a: Incorrect. Iteration with a loop involves repetition, so executing code once is not iteration.
      :feedback_b: Correct. Iteration repeats one or more statements until a condition is met.
      :feedback_c: Incorrect. Iterating with loops is a way of preventing you from having to duplicate a section of code multiple times.
      :feedback_d: Incorrect. Debugging involves a person finding errors or "bugs" in their code. Iteration with loops runs a set of code until a condition is met.

      What does iteration with computer science loops mean?


   .. mchoice:: e25_3_3
      :answer_a: 0.5 1.45
      :answer_b: 0.5 0.75
      :answer_c: 0
      :answer_d: 1.45
      :correct: a
      :feedback_a: Correct. Since 'weight' < 1 is True, 'price' equals 1.45. Both 'weight' and 'price' are being displayed.
      :feedback_b: Incorrect. Although 0.75 is the value of 'total,' it is never displayed.
      :feedback_c: Incorrect. Neither the value of weight nor price -- the two variables being displayed -- are equal to 0.
      :feedback_d: Incorrect. Although price is equal to 1.45, the value of weight is also being displayed by this code.

      Refer to the following code:

      ::

        weight ← 0.5
        IF weight < 1
         { price ← 1.45 }
        IF weight >= 1
         { price ← 1.15 }
        total ← weight * price
        DISPLAY(weight)
        DISPLAY(price)

      What will be printed?


   .. mchoice:: e25_3_4
      :answer_a: “You ordered -2 items”
      :answer_b: “You ordered 1 item”
      :answer_c: Nothing will be printed.
      :answer_d: You will get an error message.
      :correct: d
      :feedback_a: Incorrect. There is no code to make "You ordered -2 items" the value of 'message.'
      :feedback_b: Incorrect. This would be the value of 'message' if numItems equaled 1.
      :feedback_c: Incorrect. Variable 'message' was never assigned a value, so this would result in an error and the code would not run completely.
      :feedback_d: Correct. Variable 'message' was never assigned a value, so this would result in an error.

      Refer to the following code:

      ::

        numItems ← 1
        IF numItems ← 1
        { message ← "You ordered 1 item” }
        IF numItems > 1
        { message ← "You ordered " + numItems + " items" }
        DISPLAY(message)


      What will print if numItems ← -2?

   .. mchoice:: e25_3_5
      :answer_a: negative neither positive
      :answer_b: positive
      :answer_c: negative positive
      :answer_d: Nothing will print
      :correct: a
      :feedback_a: Correct. The loop iterates through the three integers in 'numbers' and displays the proper strings when the IF statements are true.
      :feedback_b: Incorrect. 'Positive' is displayed for the final item in the list, but there are two other items in the list.
      :feedback_c: Incorrect. This does not account for the 0 in the list.
      :feedback_d: Incorrect. The if and else clauses are satisfied in this code, so there would be an output.

      Refer to the following code:

      ::

        numbers ← [-1,0,1]
        FOR EACH item IN numbers:
        IF item > 0:
          DISPLAY("positive")
        ELIF item < 0:
          DISPLAY(“negative”)
        ELSE:
          DISPLAY(“neither”)

      What will print when this code is run?


   .. mchoice:: e25_3_6
      :answer_a: North
      :answer_b: South
      :answer_c: East
      :answer_d: West
      :correct: c
      :feedback_a: Incorrect. Though it may seem like a turtle should start by facing north, it starts facing a different direction.
      :feedback_b: Incorrect. The default direction of a turtle is facing east.
      :feedback_c: Correct. The default direction of a turtle is facing east.
      :feedback_d: Incorrect. Think about in which direction you read and write.

      What is the default direction a turtle object is facing?

   .. mchoice:: e25_3_7
      :answer_a: [0, 5, 10, 20, 25, 0, 10, 20, 30]
      :answer_b: [20, 25, 0, 10, 20]
      :answer_c: [25, 0, 10, 20]
      :answer_d: [0, 5, 10, 15]
      :correct: b
      :feedback_a: Incorrect. Look again at which elements are modified in the FOR loop and which items in myLst are displayed in the last line of code.
      :feedback_b: Correct. The first three items in 'myLst' iterate through the loop, are multiplied by 2 and appended to the back of 'myLst.' Then the list is displayed from the fifth item until the end of the list.
      :feedback_c: Incorrect. This would be correct if myLst[5:] were displayed.
      :feedback_d: Incorrect. This would be correct if you wanted to display myLst[:4] instead of myLst[4:].

      What will print when the following code is run?

      ::


        myLst ← [0,5,10,15,20,25]
        FOR EACH item IN myLst[:3] :
          {	  y ← x*2
          myLst.APPEND(y)   }
        DISPLAY(myLst[4:])




   .. mchoice:: e25_3_8
      :answer_a: The redundancy of the Internet increasing costs
      :answer_b: The cost the ISP will charge to access the cloud
      :answer_c: The security of the data being transmitted back and forth
      :answer_d: Determining who has access to the data.
      :correct: c
      :feedback_a: Incorrect. This is not a concern when moving data to the cloud.
      :feedback_b: Incorrect. An internet service provider will not charge more to access a data cloud.
      :feedback_c: Correct. One of the main concerns with implementing new data systems for large companies is security.
      :feedback_d: Incorrect. This is not a main concern and would be up to the discretion of the IT director.

      New data is available to add to a company’s existing data. The IT director wants to store the new data on the cloud. What is a concern that needs to be addressed before implementing the plan?



   .. mchoice:: e25_3_9
      :answer_a: I
      :answer_b: II
      :answer_c: I and II
      :answer_d: II and III
      :correct: b
      :feedback_a: Incorrect. This evaluates to False - a statement cannot be True AND False.
      :feedback_b: Correct. The statement can be either True or False which evaluates to True.
      :feedback_c: Incorrect. I evaluates to False.
      :feedback_d: Incorrect. III evaluates to False because a statement cannot be False AND True.

      Which of the following will evaluate to true?

         | I. True AND False
         | II. False or True
         | III. False AND (True or False)


   .. mchoice:: e25_3_10
      :answer_a: If the student shares only three chapters of the textbook with their classmates.
      :answer_b: If the student gets permission from textbook’s editor
      :answer_c: If the student gets permission from the textbook’s copyright owner
      :answer_d: If the textbook is only shared with one other classmate
      :correct: c
      :feedback_a: Incorrect. A single-user license does not allow you to distribute the text, regardless of how many chapters you share.
      :feedback_b: Incorrect. The editor does not own the rights to the text.
      :feedback_c: Correct. The copyright owner owns the rights to the text.
      :feedback_d: Incorrect. Single-user license implies that the text cannot be shared.

      A student purchases a single-user license of an online textbook and wants to share the textbook with their classmates. Under what conditions is it acceptable for the student to share this textbook?


   .. mchoice:: e25_3_11
      :answer_a: umich.edu/help
      :answer_b: umich.edu.subdomain
      :answer_c: students.umich.edu
      :answer_d: umich.edu
      :correct: c
      :feedback_a: Incorrect. This links to a different url in the same web address; it is not a subdomain of umich.edu.
      :feedback_b: Incorrect. A subdomain does not come after umich.edu in the web address.
      :feedback_c: Correct. A subdomain modifies a domain and comes before the domain in the web address.
      :feedback_d: Incorrect. Nothing is modifying the domain umich.edu.

      Which of the following would be considered a subdomain of umich.edu according to the guidelines of the Domain Name System (DNS)?


   .. mchoice:: e25_3_12
      :answer_a: How does temperature fluctuate in Detroit from day to night?
      :answer_b: What is the average annual precipitation?
      :answer_c: Is there a correlation between air temperature and precipitation?
      :answer_d: What is the average daily temperature?
      :correct: b
      :feedback_a: Incorrect. This data could be recorded since air temperature and time are both measured.
      :feedback_b: Correct. Data for only one year is recorded, so there is no way to measure average annual precipitation.
      :feedback_c: Incorrect. Since both air temperature and precipitation are recorded, this can be measured.
      :feedback_d: Incorrect. This can be recorded since the temperature is recorded every day for 12 months.

      A weatherman record atmospheric data to predict future weather conditions. Suppose that his lab in Detroit takes hourly measurements of air temperature and precipitation in the city for a total period of 12 months. The lab also records the exact time and date for each measurement.

      Which of the following questions about the Detroit’s weather could NOT be accurately answered using only the data collected by the lab?


   .. mchoice:: e25_3_13
      :answer_a: What is the average time the sun is out each day?
      :answer_b: Is there a correlation between precipitation in Detroit and Kalamazoo?
      :answer_c: Is there a correlation between daily air temperature and sunrise time?
      :answer_d: During which hour of the day does it rain most on average?
      :correct: d
      :feedback_a: Incorrect. Sunrise and sunset times are not recorded.
      :feedback_b: Incorrect. Only data from Detroit is recorded.
      :feedback_c: Incorrect. Time of sunrise is not measured by the data.
      :feedback_d: Correct. Precipitation and time are recorded, so this could be measured.

      A weatherman record atmospheric data to predict future weather conditions. Suppose that his lab in Detroit takes hourly measurements of air temperature and precipitation in the city for a total period of 12 months. The lab also records the exact time and date for each measurement.

      Which of the following questions about the Detroit’s weather could be accurately answered using only the data collected by the lab?



   .. mchoice:: e25_3_14
      :answer_a:
      :answer_b:
      :answer_c:
      :answer_d:
      :correct: c
      :feedback_a: Incorrect. This will result in value1 and value2 being the same.
      :feedback_b: Incorrect. Close! You DO need a temporary variable, but value1 and value2 will still be the same in this case.
      :feedback_c: Correct. By using the variable "temp" you can swap the values of value1 and value2 by storing the original value of value1 in temp.
      :feedback_d: Incorrect. The values are only being assigned here, not being swapped.


      A programmer is writing code to swap two user-input values. The program will ask the user for two inputs and stores them in value1 and value2, then switch the two values. Which of the following correctly does this?



      (A)
      ::

        value1 ← INPUT()

        value2 ← INPUT()

        value2 ← value1

        value1 ← value2


      (B)
      ::

        value1 ← INPUT()

        value2 ← INPUT()

        temp ← value1

        value2 ← temp

        value1 ← temp


      (C)
      ::

        value1 ← INPUT()

        value2 ← INPUT()

        temp ← value1

        value1 ← value2

        value 2 ← temp


      (D)
      ::

        value1 ← INPUT()

        value2 ← INPUT()


   .. mchoice:: e25_3_15
      :answer_a: An algorithm that returns the number of elements that are positive.
      :answer_b: An algorithm that returns true if the first element equals the last.
      :answer_c: An algorithm that calculates the average of the elements in the list.
      :answer_d: An algorithm that swaps the first and second elements in the list.
      :correct: a
      :feedback_a: Correct. The algorithm will have to iterate through the list and select the positive integers.
      :feedback_b: Incorrect. The algorithm will only need to select the first and last integers and compare the values.
      :feedback_c: Incorrect. This only requires iteration since no individual values are selected.
      :feedback_d: Incorrect. This does not require iteration.

      Which of the following algorithms, given a list of integers, require both selection and iteration?
