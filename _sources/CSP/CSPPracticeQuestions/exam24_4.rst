

Set #4
-------------------------------------

The following questions make up Set #4 of the Practice Exam Questions. These questions are designed to be similar to those on the AP CSP exam. You should finish these questions within 17 minutes to stay on track with the timing of the actual exam. During the actual exam, you will be provided with the AP CS Reference Sheet, which can be found |link|.

.. |link| raw:: html

   <a href="https://secure-media.collegeboard.org/digitalServices/pdf/ap/ap-computer-science-principles-course-and-exam-description.pdf#page=121" target="_blank">here</a>

Click the "Start" button when you are ready to begin the exam.  Click the "Pause" button to pause the exam (you will not be able to see the questions when the exam is paused).  It will show how much time you have used, but you have unlimited time.  Click on the "Finish Exam" button at the end when you are done.  The number correct, number wrong, and number skipped will be displayed at the bottom of the page.  Feedback for each answer will also be shown as well as your answer.

You will not be able to change your answers after you hit the "Finish Exam" button.

.. timed:: ch24t4

    .. mchoice:: e24_4_1
       :answer_a: Calling Domino’s Pizza to talk to an employee to place an order
       :answer_b: Downloading your AP scores from the College Board website
       :answer_c: Searching through a phone book to find the phone number belonging to a certain name
       :answer_d: Adding a subdomain to your website for your blog posts
       :correct: c
       :feedback_a: Incorrect. This is analogous to giving a request to a server but not analogous to DNS.
       :feedback_b: Incorrect. This is analogous to receiving data from a server but not analogous to DNS.
       :feedback_c: Correct. The DNS is the Internet's equivalent of a phone book. It maintains a directory of domain names and translate them to Internet Protocol (IP) addresses.
       :feedback_d: Incorrect. The rules laid out by the DNS allow us to create subdomains, but this is not analogous to the purpose DNS serves.

       The Domain Name System (DNS) is analogous to:

    .. mchoice:: e24_4_2
       :answer_a: Your friend’s program will give equally or more precise answers for any arbitrary input.
       :answer_b: Your program will give equally or more precise answers for any arbitrary input.
       :answer_c: The two programs will give equally precise answers for any arbitrary input.
       :answer_d: Your program is more likely than your friend’s to give answers with round off errors.
       :correct: b
       :feedback_a: Incorrect. Refer to feedback for answer choice (B).
       :feedback_b: Correct. Since the variable used in your program occupies more memory/has greater number of bits, it will have greater precision and range than the variable used in your friend's program. Thus a more accurate answer is received in your program when numbers are divided.
       :feedback_c: Incorrect. There will be cases in which precision will differ since the two variables have different memory size, and therefore different range.
       :feedback_d: Incorrect. Round off errors are observed more when variables with lesser memory size are used.

       Suppose you are writing a program to accept two integers as input, divide them and return the answer. You decide to use a 64-bit floating-point variable in your program to store the calculated answer and your friend decides to use a 32-bit floating-point variable in his program to store the calculated answer. Assume that the two programs are identical in all other aspects and that the user will never attempt to divide by 0. Then, which of the following statements comparing the answers calculated by the two programs is true?

    .. mchoice:: e24_4_3
       :answer_a: BOG
       :answer_b: BON
       :answer_c: CON
       :answer_d: BEG
       :correct: a
       :feedback_a: Correct. We can see that 102 base-8 = 1 * 64 + 0 * 8 + 2 * 1 = 66 base-10 = 'B', similarly 117 base-8 = 'O' and 107 base-8 = 'G'
       :feedback_b: Incorrect. Check your calculations. See feedback for answer choice A to understand how to convert ocal numbers to decimal numbers.
       :feedback_c: Incorrect. Check your calculations. See feedback for answer choice A to understand how to convert ocal numbers to decimal numbers.
       :feedback_d: Incorrect. Check your calculations. See feedback for answer choice A to understand how to convert ocal numbers to decimal numbers.

       ASCII is a character-encoding scheme that uses numeric values to represent alphanumeric and special characters. For example, the uppercase letter ‘A’ is represented by the decimal (base 10) value 65. A partial list of characters and their corresponding ASCII values are shown in the table below.

       .. figure:: Figures/ascii.png
          :scale: 75 %
          :align: center

       ASCII characters can also be represented by octal numbers (base 8). To represent an entire word using octal numbers, we can find the octal value for each letter in the word and then concatenate the values. According to the information provided above, which English word do the following octal numbers represent:

       *102 117 107*

    .. mchoice:: e24_4_4
       :answer_a: Importing the data into a format that the computer can process
       :answer_b: Testing hypotheses and looking for patterns in the processed data to gain insight and knowledge
       :answer_c: Visualizing or reporting the results in a meaningful way to the end user
       :answer_d: All of the above
       :correct: d
       :feedback_a: Incorrect. This statement is true since we cannot perform meaninful analysis on our data if  our computer can't understand it. However, the other answer choices are also correct!
       :feedback_b: Incorrect. Before we can arrive at results, we need to hypothesize - make predictions about what our results may be and test them out. Looking for patterns in the data can help us gain intuition into how we should proceed proving or disproving our hypothesis. This statement is true; however, the other answer choices are also correct!
       :feedback_c: Incorrect. The end user is not concerned with our raw data, or with all our lengthy calculations; we should use abstraction and present only the necessary data and results to the end user. This statement is true; however, the other answer choices are also correct!
       :feedback_d: Correct. Since all answer choices are correct.

       Which of the following is an important part of data analysis?

    .. mchoice:: e24_4_5
       :answer_a: To determine the users who send pictures most frequently
       :answer_b: To determine the time of day that the application is most active
       :answer_c: To determine the objects that many users are are taking pictures of
       :answer_d: To determine which pictures from a particular user have been downloaded the most
       :correct: c
       :feedback_a: Incorrect. We need to use metadata for this, particularly the names of users who send pictures.
       :feedback_b: Incorrect. We need to use metadata for this, particularly the times at which pictures were taken and received as a message.
       :feedback_c: Correct. This answer choice is correct since we need to look at the actual picture, that is, the data in this case.
       :feedback_d: Incorrect. We need to use metadata for this, particularly the number of users who downloaded the pictures.

       A certain mobile application allows its users to take pictures and send them to whoever they wish to on their contact list as an online message. If a user receives a picture, he may download the picture to save it or let the application automatically delete it within 24 hours of receiving the message. A picture itself is considered to be data. In addition to the data, the application stores the following metadata for all pictures:
        - The time the picture was taken, and the time the picture was received as a message
        - The name of the user who sent the picture and the names of users who received the picture
        - The number of users who downloaded the picture

        For which of the following goals would it be more useful to analyze the data instead of the metadata?

    .. mchoice:: e24_4_6
       :answer_a:
       :answer_b:
       :answer_c:
       :answer_d:
       :correct: c
       :feedback_a: Incorrect. The first step in this answer choice is correct. However, after the second step gets executed, the triangle faces a black sqaure, that is a dead end, and cannot move forward unless it turns first!
       :feedback_b: Incorrect. We will get an error in the very first step since our triangle cannot move forward 4 times!
       :feedback_c: Correct. Trace the movement of the red triangle in the grid for this answer choice. You will find that we successfully reach the gray sqaure.
       :feedback_d: Incorrect. Look at the third step - we incorrectly turn the triangle three times and it now faces a black sqaure. Therefore, we can't move forward now!

       A red triangle is pictured below in a grid of squares. It is currently facing upward, and can only move using the MoveTriangle procedure, shown below. The triangle can move onto white and gray squares, but not onto the black squares.

       .. figure:: Figures/triangle2.png
          :scale: 45 %
          :align: center

       ::

         PROCEDURE MoveTriangle (numMoves, numTurns)
         {
            REPEAT numMoves TIMES
            {
                MOVE_FORWARD()
            }
            REPEAT numTurns TIMES
            {
                TURN_RIGHT()
            }
          }

       Which of the following instructions will get the red triangle to the gray square?

       (A)
       ::

        MoveTriangle (1, 1)
        MoveTriangle (1, 1)
        MoveTriangle (3, 1)
        MoveTriangle (3, 0)

       (B)
       ::

        MoveTriangle (4, 1)
        MoveTriangle (4, 0)

       (C)
       ::

        MoveTriangle (1, 1)
        MoveTriangle (1, 3)
        MoveTriangle (3, 1)
        MoveTriangle (3, 0)

       (D)
       ::

        MoveTriangle (1, 1)
        MoveTriangle (1, 3)
        MoveTriangle (3, 3)
        MoveTriangle (3, 0)

    .. mchoice:: e24_4_7
       :answer_a:
       :answer_b:
       :answer_c:
       :answer_d:
       :correct: a
       :feedback_a: Correct. In our loop, 'student' is already present in 'extraProjectStudents' therefore we only need to check if 'student' is also present in 'volunteerServiceStudents' and add 'student' to 'extraCreditStudents' if this condition is satisfied. This is exactly what this answer choice does.
       :feedback_b: Incorrect. Checking if 'student' is in 'extraCreditStudents' and then adding 'student' to 'volunteerServiceStudents' is incorrect; we need to check if 'student' is in 'volunteerSeriveStudents' and then add 'student' to 'extraCreditStudents'
       :feedback_c: Incorrect. This option will incorrectly add all students in 'extraProjectStudents' to 'extraCreditStudents' even if a 'student' is not present in 'volunteerServiceStudents'.
       :feedback_d: Incorrect. We need to add students to 'extraCreditStudents' not to 'extraProjectStudents'.

       A teacher wants to give extra credit to those students in her class who did an extra project and volunteered for community service.

       She creates a list ``extraProjectStudents``, which contains names of all the students who did the extra project, and another list ``volunteerServiceStudents``, which contains names of all the students who volunteered for community service. The teacher wants to create another list, ``extraCreditStudents``, which contains names of all the students who are eligible to receive extra credit.

       Look at the incomplete code for the procedure ``createExtraCreditList()`` given below.
       ::

        PROCEDURE createExtraCreditList(extraProjectStudents, volunteerServiceStudents)
        {
            extraCreditStudents ← [ ]
            FOR EACH student IN extraProjectStudents
            {
                <MISSING CODE>
            }
            RETURN extraCreditStudents
        }

       Which of the answer choices should replace ``<MISSING CODE>`` so that ``extraCreditStudents`` gets filled as intended?

       You may use a procedure ``contains(list, name)`` in your answer which returns ``true`` if the ``name`` is found in the ``list`` and ``false`` otherwise.

       (A)
       ::

        IF (contains (volunteerServiceStudents, student))
        {
            APPEND (extraCreditStudents, student)
        }

       (B)
       ::

        IF (contains (extraCreditStudents, student))
        {
            APPEND (volunteerServiceStudents, student)
        }

       (C)
       ::

        IF (contains (extraProjectStudents, student))
        {
            APPEND (extraCreditStudents, student)
        }

       (D)
       ::

        IF (contains (volunteerServiceStudents, student))
        {
            APPEND (extraProjectStudents, student)
        }

    .. mchoice:: e24_4_8
       :answer_a: The number of lines of computer code needed to implement the algorithm.
       :answer_b: The time and memory space necessary to run the algorithm.
       :answer_c: How easy or difficult the algorithm is to understand.
       :answer_d: The size of the output obtained after running the algorithm.
       :correct: b
       :feedback_a: Incorrect. Efficiencies of algorithms are not related to number of lines of codes. In fact, a program with fewer lines of code may very well be more inefficient than a program with more lines of code.
       :feedback_b: Correct. This is correct since efficiency of algorithms in measured in terms of run-time and space complexity.
       :feedback_c: Inorrect. How "complex" an algorithm is to understand has nothing to do with its run-time or space complexity. In fact, an algorithm which is easy to understand may very well be more inefficient than an algorithm which isn't.
       :feedback_d: Incorrect. Output size doest not determine the efficiency of an algorithm.

       Efficiency of algorithms is most often analyzed based on which of the following characteristics?

    .. mchoice:: e24_4_9
       :answer_a: If the student shares only three chapters of the textbook with their classmates
       :answer_b: If the student gets permission from the textbook’s copyright owner
       :answer_c: If the textbook is only shared with people in the student’s class
       :answer_d: If the textbook is only shared with one other classmate
       :correct: b
       :feedback_a: Incorrect. Reproducing even a part of copyrighted, single-user content constitutes plagiarism.
       :feedback_b: Correct. Permission from appropriate sources needs to be obtained before single-user content can be shared.
       :feedback_c: Incorrect. Sharing single-user material with anyone constitutes plagiarism.
       :feedback_d: Incorrect. Sharing single-user material with even one other person constitutes plagiarism.

       A student purchases a single-user license of an online textbook and wants to share the textbook with their classmates. Under what conditions is it acceptable for the student to share this textbook?

    .. mchoice:: e24_4_10
       :answer_a:
       :answer_b:
       :answer_c:
       :answer_d:
       :correct: b
       :feedback_a: Incorrect. The robot has a direct path from origin to destination. Therefore it will reach the gray square in this case.
       :feedback_b: Correct. Let's look at what happens when the robot reaches the sqaure (4, 2), that is, 4th row from top and the 2nd column from left. The robot is facing right and has just moved forward from square (4, 1). Next we check if the robot can move left, since it can the robot turns left and faces the top. Then we check if the robot can move right, since it can, the robot turns right and faces the right side again. Then, 'goalReached()' evaluates to false, the next iteration beigns and the robot moves forward onto square (4, 3). At this point, we can conclude that the robot will never reach the gray sqaure since it has gone off-track, in fact, the robot will continue to move until it gets stuck at sqaure (3, 4).
       :feedback_c: Incorrect. Let's look at what happens when the robot reaches the sqaure (2, 2), that is, 2nd row from top and the 2nd column from left. The robot is facing the top and has just moved forward from square (3, 2). Next we check if the robot can move left, since it cannot the robot's direction remains unchanged. Then we check if the robot can move right, since it can, the robot turns right and faces the right side. Then, 'goalReached()' evaluates to false, the next iteration beigns and the robot moves forward onto square (2, 3). At this point, we can conclude that the robot will reach the gray sqaure since a direct path lies ahead.
       :feedback_d: Incorrect. The robot has a direct path from origin to destination. Therefore it will reach the gray square in this case.

       The code segment below moves a robot through a maze, with the objective of reaching the gray square. The robot in each grid is represented as a red triangle and is initially facing upwards. The robot can move onto white and gray squares, but not onto the black squares. The procedure ``goalReached()`` used in the code segment below evaluates to ``true`` if the robot is on the gray square and evaluates to ``false`` in all other cases.
       ::

        REPEAT UNTIL (goalReached ())
        {
            IF (CAN_MOVE (forward))
            {
                MOVE_FORWARD ()
            }
            IF (CAN_MOVE (left))
            {
                ROTATE_LEFT ()
            }
            IF (CAN_MOVE (right))
            {
                ROTATE_RIGHT ()
            }
        }

       For which of the following grids does the program NOT correctly move the triangle to the gray square?

       .. figure:: Figures/triangleoptions.png
          :align: center
