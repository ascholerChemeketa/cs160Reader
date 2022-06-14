.. qnum::
   :prefix: 25-2-
   :start: 1

Set #2
-------------------------------------

The following questions make up Set #2 of the Untimed Practice Exam Questions. The questions resemble, both in format and substance, what you might see on the AP CS Principles exam. You should finish these questions within 17 minutes to satisfy the time constraints of the AP exam. You may refer to the AP CS Reference Sheet, which can be found here_.

.. _here: raw:: html <a href="https://secure-media.collegeboard.org/digitalServices/pdf/ap/ap-computer-science-principles-course-and-exam-description.pdf#page=121" target="_blank">here</a>



You will not be able to change your answers after you hit the "Finish Exam" button.


.. mchoice:: e25_2_1
   :answer_a: 10
   :answer_b: [1,2,3,4]
   :answer_c: 4
   :answer_d: None
   :correct: a
   :feedback_a: Correct. PROCEDURE counter(lst) is called on new_list and adds together its values.
   :feedback_b: Incorrect. This is what is assigned to the variable new_list.
   :feedback_c: Incorrect. This is the final value in new_list.
   :feedback_d: Incorrect. The value of run_counter is what is returned from count(new_list).

   What will the following code print?



   PROCEDURE counter(lst):

    count ← 0

    FOR EACH item IN lst:

     {
     count ← count + item
     }

    RETURN (count)

   new_list ← [1,2,3,4]

   run_counter ← counter(new_list)

   DISPLAY (run_counter)

.. mchoice:: e25_2_2
   :answer_a: Because we started at 0.
   :answer_b: Because the range only extends to 101.
   :answer_c: Because the computer only understands 1s and 0s.
   :answer_d: Because we are using a step of 2.
   :correct: c
   :feedback_a: Incorrect. Since we start at 0, we are counting by even numbers with a step of 2.
   :feedback_b: Incorrect. Since the range extends to 101, the last number we use is 100.
   :feedback_c: Correct. Binary code is not relevant to why this code stops at 100.
   :feedback_d: Incorrect. Since we start at 0 and use a step of 2, we are counting by even numbers up to 101.

   Which of the following is NOT why we stop at 100 in the following code?

   sum ← 0

   numbers ← RANGE(0,101,2)

   FOR EACH number IN numbers:

    {
    sum ← sum + number
    }

   DISPLAY(sum)


.. mchoice:: e25_2_3
   :answer_a:
   :answer_b:
   :answer_c:
   :answer_d:
   :correct: c
   :feedback_a: Incorrect. After the .split() function, the while loop will break.
   :feedback_b: Incorrect. The remainder of 6 divided by 2 is equal to 0 and the loop will break.
   :feedback_c: Correct. The variable counter begins at a value greater than 0 and continues to increase which leads to an infinite loop.
   :feedback_d: Incorrect. The program will eventually end since x is subtracted by 1 each time through the loop.

   Which of the following will result in an infinite loop?

   (A)
   :::

   x ← “heLLo”

   while x[2] == ’L’:

    DISPLAY(x)

    x ← x.split(‘h’)

   (B)
   ::

   my_num ← 6

   while my_num ≠ 0:

    DISPLAY(“Hello World”)

    my_num ← my_num % 2

   (C)
   ::

   counter ← 10

   while counter > 0:

    DISPLAY(counter)

    counter ← counter + 1


   (D)
   ::

   x ← 5

   while x > 0:

    DISPLAY(x)

    x ← x - 1

   DISPLAY(“x is now” + x)

.. mchoice:: e25_2_4
   :answer_a: 4
   :answer_b: 2
   :answer_c: i
   :answer_d: 3
   :correct: d
   :feedback_a: Incorrect. Variable x will never equal 6 if 4 is added in the blank.
   :feedback_b: Incorrect. Variable x will never equal 6 if 2 is added in the blank.
   :feedback_c: Incorrect. Variable x will never equal 6 if i is added in the blank.
   :feedback_d: Correct. After two times through the loop, variable i will equal 2 and it will be multiplied by 3 which equals 6.

   What number should be added in the blank to make the following function print the number 6?

   x ← 3

   i ← 0

   while i < 3:

    x ← i*___

    i ← i + 1

   DISPLAY(x)

.. mchoice:: e25_2_5
   :answer_a: "Where are you going with that?"
   :answer_b: Nothing
   :answer_c: "?"
   :answer_d: "?Where are you going with that?"
   :correct: d
   :feedback_a: Incorrect. We are adding onto the existing value of newS which is "?", so newS will begin with a "?".
   :feedback_b: Incorrect. newS has a value, therefore something will display.
   :feedback_c: Incorrect. "? is the initial value of the variable newS".
   :feedback_d: Correct. The code iterates through the string phrase and adds each character in the string to the variable newS which is initially "?".

   What will the following code print?

   newS ← “?”

   phrase ← ”Where are you going with that?”

   for EACH item in phrase:

    { newS ← newS + item }

   DISPLAY(newS)

.. mchoice:: e25_2_6
   :answer_a: The following output occurs: 1x
   :answer_b: An error occurs. A person could use the INPUT() function like this, but nothing is entered into the INPUT() function, so nothing would print out.
   :answer_c: The following output occurs: 1 5
   :answer_d: An error occurs. You cannot display the value of variables in programming.
   :correct: c
   :feedback_a: Incorrect. Assigning a value of 1 to variable x does not change its value to 1x.
   :feedback_b: Incorrect. This is not true. "5" is entered into the INPUT() function .
   :feedback_c: Correct. When x is displayed in line 2, its value is 1. When x is displayed in line 4, its value is 5.
   :feedback_d: Incorrect. This is false. You can displayed the value of variables in programming.

   Refer to the code below. Suppose someone wants to test this. When they reach line 3, they enter “5.” What will happen?

   Line 1: x ← 1

   Line 2: DISPLAY(x)

   Line 3: x ← INPUT()

   Line 4: DISPLAY(x)


.. mchoice:: e25_2_7
  :answer_a:
  :answer_b:
  :answer_c:
  :answer_d:
  :correct: b
  :feedback_a: Incorrect. This code will display "Tucker Hey Please enter your name".
  :feedback_b: Correct. This code will ask to enter your name and store it in variable x. Then, will display Hey Tucker.
  :feedback_c: Incorrect. This code will display "Hey Please enter your name Tucker".
  :feedback_d: Incorrect. This code will display "Tucker Tucker".

  Tucker is writing his first program. He wants the program to say “hey” to him. Below is an overview of what he hopes the program will do:

  1. Display “Please enter your name.”

  2. The user enters in their name: TUCKER

  3. The computer displays: “Hey TUCKER”.

  Which of the following programs will do what Tucker wants?

  (A)
  ::

  x ←  INPUT()

  DISPLAY(x)

  DISPLAY("Hey")

  DISPLAY("Please enter your name.")

  (B)
  ::

  DISPLAY("Please enter your name.")

  x ← INPUT()

  DISPLAY("Hey")

  DISPLAY(x)

  (C)
  ::

  DISPLAY("Hey")

  x ← INPUT()

  DISPLAY("Please enter your name.")

  DISPLAY(x)

  (D)
  ::

  DISPLAY("Please enter your name.")

  x ← INPUT()

  DISPLAY(x)

  DISPLAY("Tucker")


.. mchoice:: e25_2_8
  :answer_a: (num1 = num2)
  :answer_b: (num1 = num2) OR (num1 ≠ num2)
  :answer_c: (num1 = num2) AND (num1<0)
  :answer_d: (num1 = num2) AND (num2>0)
  :correct: d
  :feedback_a: Incorrect. The two variables can be equal to each other and still be negative integers.
  :feedback_b: Incorrect. Regardless of whether the two variables are equal or not equal to one another, they can still be negative.
  :feedback_c: Incorrect. The two variables would both be negative in this case.
  :feedback_d: Correct. If num1 is equal to num2 and num2 is greater than 0, then both values must be positive.

  Given two variables, num1 and num2, which of the following would mean that both num1 and num2 are positive integers?

.. mchoice:: e25_2_9
  :answer_a: DISPLAY(“I am a freshman.”)
  :answer_b: “I am a freshman.”
  :answer_c: DISPLAY(freshman)
  :answer_d: Nothing will print out.
  :correct: b
  :feedback_a: Incorrect. Only what is inside the quotations in the DISPLAY function gets displayed.
  :feedback_b: Correct. The text in quotations inside the DISPLAY function gets displayed when called on.
  :feedback_c: Incorrect. The variable freshman is never called on in the DISPLAY function in this code.
  :feedback_d: Incorrect. Nothing would print if freshman were not True.

  Consider the code below.

  IF(freshman)

   { DISPLAY(“I am a freshman.”) }

  If freshman is True, what is displayed?

.. mchoice:: e25_2_10
  :answer_a: “I am a freshman.”
  :answer_b: Nothing is displayed.
  :answer_c: "I am not a freshman"
  :answer_d: DISPLAY("I am not a freshman")
  :correct: c
  :feedback_a: Incorrect. This would print if freshman were True.
  :feedback_b: Incorrect. Nothing would display if there were no ELSE clause.
  :feedback_c: Correct. Since freshman is False and there is an ELSE clause, the block after the ELSE is run.
  :feedback_d: Incorrect. Only the text inside the quotations in the DISPLAY function is displayed.

  Consider the code below.

  IF(freshman)

   { DISPLAY(“I am a freshman.”) }

  ELSE

   { DISPLAY(“I am not a freshman.”)}

  If the variable freshman is false, what is displayed?

.. mchoice:: e25_2_11
  :answer_a: “I am a sophomore.”
  :answer_b: "I am not a freshman"
  :answer_c: "Who knows what I am?"
  :answer_d: It is impossible to tell with the given information.
  :correct: d
  :feedback_a: Incorrect. Sophomore is False, so this would not be displayed.
  :feedback_b: Incorrect. We do not know if freshman is True, so we cannot say whether this would be displayed.
  :feedback_c: Incorrect. We do not know if freshman is True, so we cannot say whether this would be displayed.
  :feedback_d: Correct. Since we do not know whether freshman is True, we cannot say whether the code block under freshman is run or if the ELSE statement after sophomore will be executed.

  Consider the code below.

  IF(freshman)

   { DISPLAY(“I am a freshman.”) }

  ELSE

   IF(sophomore)

    { DISPLAY(“I am a sophomore”) }

   ELSE

    { DISPLAY(“Who knows what I am?”) }

  If the variable sophomore is false, what is displayed?

.. mchoice:: e25_2_12
  :answer_a: “I am a sophomore.”
  :answer_b: "I am not a freshman"
  :answer_c: "Who knows what I am?"
  :answer_d: It is impossible to tell with the given information.
  :correct: c
  :feedback_a: Incorrect.  Sophomore is False, so this would not be displayed.
  :feedback_b: Incorrect.  Freshman is False, so this would not be displayed.
  :feedback_c: Correct. Since we know that freshman is and sophomore are False, the ELSE block after sophomore is executed.
  :feedback_d: Incorrect. Since we know that freshman is and sophomore are False, the ELSE block after sophomore is executed.

  Consider the code below.

  IF(freshman)

   { DISPLAY(“I am a freshman.”) }

  ELSE

   IF(sophomore)

    { DISPLAY(“I am a sophomore”) }

   ELSE

    { DISPLAY(“Who knows what I am?”) }

  If variables freshman and sophomore are false, what is displayed?

.. mchoice:: e25_2_13
  :answer_a: “I am a sophomore.”
  :answer_b: "I am not a freshman"
  :answer_c: "Who knows what I am?"
  :answer_d: It is impossible to tell with the given information.
  :correct: a
  :feedback_a: Correct. Sophomore is True, so the code block after is executed.
  :feedback_b: Incorrect. Freshman is False, so this would not be displayed.
  :feedback_c: Incorrect. Since we know that freshman is False and sophomore are True, the ELSE block after sophomore is not executed.
  :feedback_d: Incorrect. Sophomore is True, so the code block after is executed.

  Consider the code below.

  IF(freshman)

   { DISPLAY(“I am a freshman.”) }

  ELSE

   IF(sophomore)

    { DISPLAY(“I am a sophomore”) }

   ELSE

    { DISPLAY(“Who knows what I am?”) }

  If freshman is False and sophomore is True, what is displayed?

.. mchoice:: e25_2_14
  :answer_a: figure = 15, x = 6
  :answer_b: figure = 18, x = 3
  :answer_c: figure = 15, x = 7
  :answer_d: figure = 18, x = 7
  :correct: d
  :feedback_a: Incorrect. The code runs for 5 periods total. We start in period 0 with fig = 0 and x = 2. The value for x increases by 1 after each period. So, the values for figure are as follows for every period: After period 2, figure = 3 * 3 = 9 and x = 4; after period 3, figure = 3 * 4 = 12 and x = 5; after period 4, figure = 3 * 5 = 15 and x = 6; after period 5, figure = 3 * 6 = 18 and x = 7. The program will stop after period 5 since figure exceeds 15.
  :feedback_b: Incorrect. The code runs for 5 periods total. We start in period 0 with fig = 0 and x = 2. The value for x increases by 1 after each period. So, the values for figure are as follows for every period: After period 2, figure = 3 * 3 = 9 and x = 4; after period 3, figure = 3 * 4 = 12 and x = 5; after period 4, figure = 3 * 5 = 15 and x = 6; after period 5, figure = 3 * 6 = 18 and x = 7. The program will stop after period 5 since figure exceeds 15.
  :feedback_c: Incorrect. The code runs for 5 periods total. We start in period 0 with fig = 0 and x = 2. The value for x increases by 1 after each period. So, the values for figure are as follows for every period: After period 2, figure = 3 * 3 = 9 and x = 4; after period 3, figure = 3 * 4 = 12 and x = 5; after period 4, figure = 3 * 5 = 15 and x = 6; after period 5, figure = 3 * 6 = 18 and x = 7. The program will stop after period 5 since figure exceeds 15.
  :feedback_d: Correct. The code runs for 5 periods total. We start in period 0 with fig = 0 and x = 2. The value for x increases by 1 after each period. So, the values for figure are as follows for every period: After period 2, figure = 3 * 3 = 9 and x = 4; after period 3, figure = 3 * 4 = 12 and x = 5; after period 4, figure = 3 * 5 = 15 and x = 6; after period 5, figure = 3 * 6 = 18 and x = 7. The program will stop after period 5 since figure exceeds 15.

  Consider the following code:

  x ← 2

  figure ← 0

  REPEAT UNTIL figure > 15

  {

   figure ← 3 * x

   x  ← x + 1

  }


  DISPLAY(“figure =”)

  DISPLAY(figure)

  DISPLAY(“, x =”)

  DISPLAY(x)

  What is displayed as a result of running the code above?

.. mchoice:: e25_2_15
  :answer_a: figure = 30, x = 6
  :answer_b: figure = 20, x = 5
  :answer_c: figure = 25, x = 6
  :answer_d: figure = 25, x = 5
  :correct: c
  :feedback_a: Incorrect. The code runs for 5 periods total. We start in period 0 with fig = 0 and x = 1. The value for x increases by 1 after each period. So, the values for figure are as follows for every period: After period 2, figure = 5 * 2 = 10 and x = 3; after period 3, figure = 5 * 3 = 15 and x = 4; after period 4, figure = 5 * 4 = 20 and x = 5; after period 5, figure = 5 * 5 = 25 and x = 6. The program will stop after period 5 since figure exceeds 20.
  :feedback_b: Incorrect. The code runs for 5 periods total. We start in period 0 with fig = 0 and x = 1. The value for x increases by 1 after each period. So, the values for figure are as follows for every period: After period 2, figure = 5 * 2 = 10 and x = 3; after period 3, figure = 5 * 3 = 15 and x = 4; after period 4, figure = 5 * 4 = 20 and x = 5; after period 5, figure = 5 * 5 = 25 and x = 6. The program will stop after period 5 since figure exceeds 20.
  :feedback_c: Correct. The code runs for 5 periods total. We start in period 0 with fig = 0 and x = 1. The value for x increases by 1 after each period. So, the values for figure are as follows for every period: After period 2, figure = 5 * 2 = 10 and x = 3; after period 3, figure = 5 * 3 = 15 and x = 4; after period 4, figure = 5 * 4 = 20 and x = 5; after period 5, figure = 5 * 5 = 25 and x = 6. The program will stop after period 5 since figure exceeds 20.
  :feedback_d: Incorrect. The code runs for 5 periods total. We start in period 0 with fig = 0 and x = 1. The value for x increases by 1 after each period. So, the values for figure are as follows for every period: After period 2, figure = 5 * 2 = 10 and x = 3; after period 3, figure = 5 * 3 = 15 and x = 4; after period 4, figure = 5 * 4 = 20 and x = 5; after period 5, figure = 5 * 5 = 25 and x = 6. The program will stop after period 5 since figure exceeds 20.

  Consider the following code:

  x ← 1

  figure ← 0

  REPEAT UNTIL figure > 20

  {

   figure ← 5 * x

   x  ← x + 1

  }

  DISPLAY(“figure =”)

  DISPLAY(figure)

  DISPLAY(“, x =”)

  DISPLAY(x)

  What is displayed as a result of running the code above?
