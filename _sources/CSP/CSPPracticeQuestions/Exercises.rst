.. qnum::
   :prefix: 24-1-
   :start: 1

Set #1
-------------------------------------

The following questions make up Set #1 of the Practice Exam Questions. These questions are designed to be similar to those on the AP CSP exam. You should finish these questions within 17 minutes to stay on track with the timing of the actual exam. During the actual exam, you will be provided with the AP CS Reference Sheet, which can be found |link|.

.. |link| raw:: html

   <a href="https://secure-media.collegeboard.org/digitalServices/pdf/ap/ap-computer-science-principles-course-and-exam-description.pdf#page=121" target="_blank">here</a>

Click the "Start" button when you are ready to begin the exam.  Click the "Pause" button to pause the exam (you will not be able to see the questions when the exam is paused).  It will show how much time you have used, but you have unlimited time.  Click on the "Finish Exam" button at the end when you are done.  The number correct, number wrong, and number skipped will be displayed at the bottom of the page.  Feedback for each answer will also be shown as well as your answer.

You will not be able to change your answers after you hit the "Finish Exam" button.

.. timed:: ch24t1

   .. mchoice:: e24_1_1
      :answer_a: I. and III. only
      :answer_b: I. and II. only
      :answer_c: II. and III. only
      :answer_d: I., II. and III.
      :correct: a
      :feedback_a: Correct. Statement I is true since it correctly identifies a property of lossless compression. Statement III is true becasue it correctly identifies the trade-offs involved in compression techniques.
      :feedback_b: Incorrect. Statement II is false since lossless compression can be applied to restore a file to its original state.
      :feedback_c: Incorrect. Statement II is false since lossless compression can be applied to restore a file to its original state.
      :feedback_d: Incorrect. Statement II is false since lossless compression can be applied to restore a file to its original state.

      Which of the following statements are true regarding compressing files?

      I. If lossless compression is applied, every single bit of data that was originally in the file remains after the file is uncompressed.

      II. No matter what compression technique is used, once a data file is compressed, it cannot be restored to its original state.

      III. The amount of data reduction possible using lossy compression is often much higher than through lossless techniques.

   .. mchoice:: e24_1_2
      :answer_a: Abstraction requires users to understand the low-level details of a system.
      :answer_b: Abstraction reduces information and detail to facilitate focus on relevant concepts.
      :answer_c: Abstraction increases the run-time complexity of a program.
      :answer_d: Abstraction compresses a program file to reduce file size.
      :correct: b
      :feedback_a: Incorrect. Abstraction is used to hide the low-level details from the user, therefore this statement is false.
      :feedback_b: Correct. This follows from the definition of abstraction.
      :feedback_c: Incorrect. Abstraction is not related to run-time complexity.
      :feedback_d: Incorrect. Abstraction is not related to compression.

      Which of the following statements about abstraction is true?

   .. mchoice:: e24_1_3
      :answer_a: Yes, the code correctly switches the values of 'a' and 'b'.
      :answer_b: No, but it will work correctly if statements 1. and 3. are switched.
      :answer_c: No, but it will work correctly if statements 2. and 3. are switched.
      :answer_d: No, but it will work correctly if statements 1. and 2. are switched.
      :correct: c
      :feedback_a: Incorrect. In this case, the value of 'a' will remain unchanged although 'b' will correctly store the value of 'a'.
      :feedback_b: Incorrect. In this case, the code will not compile as we are trying to assign the value of 'temp' to 'b' before giving a value to 'temp'.
      :feedback_c: Correct. Plug any values in 'a' and 'b' and trace the code! You will find that it works.
      :feedback_d: Incorrect. In this case, the code will not compile as we are trying to assign the value of 'temp' to 'b' before giving a value to 'temp'.

      A programmer is writing code to switch the values of two integer variables, namely ``a`` and ``b``, using a temporary integer variable, ``temp``. This is the pseudo-code that the programmer has come up with:
      ::

        temp ← a  # statement 1.
        b ← temp  # statement 2.
        a ← b     # statement 3.

      Will the pseudo-code correctly perform the required task (assume that ``a`` and ``b`` are never numerically equal)?

   .. mchoice:: e24_1_4
      :answer_a: X = 155, Y = 1555
      :answer_b: X = 20, Y = 20
      :answer_c: X = 15, Y = 5
      :answer_d: X = 20, Y = 25
      :correct: d
      :feedback_a: Incorrect. Since 'X' and 'Y' are not strings, we cannot simply concatenate their characters.
      :feedback_b: Incorrect. While the value of 'X' is correct in this answer choice, the final value of 'Y' is not.
      :feedback_c: Incorrect. The values of both 'X' and 'Y' are incorrect in this answer choice.
      :feedback_d: Correct. Trace the code! Don't forget to use the updated value of 'X' while finding the value of 'Y' in the last statement.

      What is the final value of the integers ``X`` and ``Y`` after the following statements are executed?
      ::

        X ← 15
        Y ← 5
        X ← X + Y
        Y ← X + Y

   .. mchoice:: e24_1_5
      .. mchoice:: e24_1_5
      :answer_a: The baby duck picture appears as intended.
      :answer_b: The baby duck picture appears as 4 out of order images.
      :answer_c: The baby duck picture is distorted.
      :answer_d: The baby duck picture won’t load on the user’s smartphone.
      :correct: a
      :feedback_a: Correct. One of the specific design goals of TCP/IP network protocols is to allow packets to arrive out of order and then be reassembled correctly, therefore the picture appears as intended.
      :feedback_b: Incorrect. The packets are always reassembled in the correct order, so the original picture will appear as inteded.
      :feedback_c: Incorrect. The packets are always reassembled in the correct order, so the original picture will appear as inteded.
      :feedback_d: Incorrect. The picture will load since all the packets successfully arrive on the user's smart phone.

      A user’s smartphone makes a request to a server for 4 packets that represent the image of a baby duck. The server sends the 4 packets but they arrive at the user’s smartphone out of order. How does the smartphone interpret the packets that form the image?

      .. figure:: Figures/duckpacket.jpg


   .. mchoice:: e24_1_6
      :answer_a: Cloud Computing
      :answer_b: Global Positioning System
      :answer_c: Short Message Service
      :answer_d: Data Mining
      :correct: a
      :feedback_a: Correct. Storage solutions made possible by Cloud Computing allow users to store, manage and access files remotely over the Internet.
      :feedback_b: Incorrect. GPS allows navigation and location services to function, but it is not related to managing files remotely. Also note that GPS is not an Internet-dependent technology.
      :feedback_c: Incorrect. SMS allows users to send text messages to one another using standardized communication protocols, but it's not related to managing files remotely. Also note that SMS is not an Internet-dependent technology.
      :feedback_d: Incorrect. Data Mining involves extracting and finding patterns in large data sets, but it's not related to managing files remotely. Also note that Data Mining can be done without the use of Internet.

      Which of the following technologies allows its users to store, manage and access files remotely over the Internet?

   .. mchoice:: e24_1_7
      :answer_a: a ≥ c and c ≥ b
      :answer_b: a ≥ c and b ≥ c
      :answer_c: c ≥ a and c ≥ b
      :answer_d: c ≥ b and c ≥ a
      :correct: a
      :feedback_a: Correct. Plug-in values for 'a', 'b' and 'c', then trace the code!
      :feedback_b: Incorrect. The second part of this answer choice is incorrect since we display 'c' even though 'b ≥ c'.
      :feedback_c: Incorrect. The first part of this answer choice is incorrect since we display 'a' even though 'c ≥ a'.
      :feedback_d: Incorrect. Both parts of this answer choice are incorrect, plug-in values for 'a', 'b' and 'c' to see for yourself.

      Consider the following incomplete pseudo-code to print the largest of three integer variables, namely ``a``, ``b`` and ``c``:
      ::

        IF (a ≥ b)
        {
           IF (<MISSING CODE 1>)
           {
              DISPLAY(a)
           }
           ELSE
           {
              DISPLAY(c)
           }
        }
        ELSE
        {
           IF (<MISSING CODE 2>)
           {
              DISPLAY(c)
           }
           ELSE
           {
              DISPLAY(b)
           }
        }

      Which of the following options can be substituted for <MISSING CODE 1> and <MISSING CODE 2>, respectively, for the code to work as intended?

   .. mchoice:: e24_1_8
      :answer_a: 4
      :answer_b: 8
      :answer_c: 16
      :answer_d: 32
      :correct: c
      :feedback_a: Incorrect. This would be true if the loop terminated at i = 2
      :feedback_b: Incorrect. This would be true if the loop terminated at i = 3
      :feedback_c: Correct. This is true since the loop runs 3 times and we are multiplying 'n' with 2 in each iteration.
      :feedback_d: Incorrect. This would be true if the loop terminated at i = 5

      Trace the value of an integer variable ``n`` in the following code.
      ::

         i ← 1
         n ← 2
         REPEAT until i = 4
         {
            n ← n * 2
            i ← i + 1
         }

      What is the value of ``n`` after the above code executes?

   .. mchoice:: e24_1_9
      :answer_a: Sorting students by grade
      :answer_b: Deleting a student’s record
      :answer_c: Searching for a student’s name
      :answer_d: Adding bonus points to grades of all students
      :correct: d
      :feedback_a: Incorrect. Since the run-time quadruples whenever the number of students in class double, the run-time for a class of 400 students would be 2560 seconds.
      :feedback_b: Incorrect. Since the run-time doubles whenever the number of students in class double, the run-time for a class of 400 students would be 32 seconds.
      :feedback_c: Incorrect. Since the run-time doubles whenever the number of students in class double, the run-time for a class of 400 students would be 16 seconds.
      :feedback_d: Correct. Since the run-time increments by 3 seconds whenever the number of students in class double, the run-time for a class of 400 students would be 15 seconds, which is the least out of all the four options.

      A professor uses an automated computer system to manage the student records of his classes. The time the system takes to perform various tasks for different class sizes is shown in the table below:

      +---------------------+---------------------------+----------------------------+----------------------------+
      | Task ↓       Size → | Small class (25 students) | Medium class (50 students) | Large class (100 students) |
      +=====================+===========================+============================+============================+
      | Sorting students by | 10 seconds                | 40 seconds                 | 160 seconds                |
      | grade               |                           |                            |                            |
      +---------------------+---------------------------+----------------------------+----------------------------+
      | Deleting a student’s| 2 seconds                 | 4 seconds                  | 8 seconds                  |
      | record              |                           |                            |                            |
      +---------------------+---------------------------+----------------------------+----------------------------+
      | Searching for a     | 1 second                  | 2 seconds                  | 4 seconds                  |
      | student’s name      |                           |                            |                            |
      +---------------------+---------------------------+----------------------------+----------------------------+
      | Adding bonus points | 3 seconds                 | 6 seconds                  | 9 seconds                  |
      | to grades of all    |                           |                            |                            |
      | students            |                           |                            |                            |
      +---------------------+---------------------------+----------------------------+----------------------------+

      Based on the information in the table, which of the following tasks is likely to take the least amount of time if the computer system is used for a class of 400 students?

   .. mchoice:: e24_1_10
      :answer_a: Because hexadecimal is a lower level of abstraction than binary.
      :answer_b: Because hexadecimal can be represented with fewer total digits than binary.
      :answer_c: Because numbers greater than 1 must be used for certain forms of digital data.
      :answer_d: Because hexadecimal is easier to convert to decimal form.
      :correct: b
      :feedback_a: Incorrect. Hexademical is a higher level of abstraction since more information can be encoded in fewer hexadecimal digits.
      :feedback_b: Correct. Since hexadecimal is base 16 and binary is base 2, we need fewer hexadecimal digits than binary digits to encode the same information.
      :feedback_c: Incorrect. Both binary and hexademical can be used to represent decimals greater than 1.
      :feedback_d: Incorrect. Calculations involved in converting hexadecimal to decimal are more intensive.

      Why is digital data often represented in hexadecimal as opposed to binary?
